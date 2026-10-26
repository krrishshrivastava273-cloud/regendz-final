/*
 * Regendz IT contact-form webhook.
 *
 * Store CONTACT_WEBHOOK_SECRET and SPREADSHEET_ID in this Apps Script
 * project's Script Properties before deploying. Do not place either value in
 * this file.
 *
 * This source intentionally uses ES5 syntax so it parses in both the legacy
 * Apps Script runtime and the V8 runtime.
 */
var CONTACT_SHEET_NAME = 'Sheet1';
var CONTACT_HEADERS = [
  'sr no.',
  'Name',
  'Email',
  'Contact No.',
  'Service type',
  'Message',
  'Status'
];

function doPost(event) {
  var lock = null;

  try {
    var input = parseJsonBody_(event);
    var properties = PropertiesService.getScriptProperties();
    var webhookSecret = properties.getProperty('CONTACT_WEBHOOK_SECRET');
    var spreadsheetId = properties.getProperty('SPREADSHEET_ID');

    if (!webhookSecret || !spreadsheetId) {
      return json_({ ok: false, error: 'CONFIGURATION_MISSING', stage: 'configuration' });
    }

    if (input.secret !== webhookSecret) {
      return json_({ ok: false, error: 'UNAUTHORIZED', stage: 'authorization' });
    }

    // The server sends this value for diagnostics. Script Properties keep the
    // destination fixed, so callers cannot redirect submissions elsewhere.
    if (input.spreadsheetId !== spreadsheetId) {
      return json_({ ok: false, error: 'SPREADSHEET_MISMATCH', stage: 'configuration' });
    }

    var enquiry = validateEnquiry_(input);
    lock = LockService.getScriptLock();
    lock.waitLock(10000);

    var spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    var sheet = getOrCreateSheet_(spreadsheet);
    var lastRow = sheet.getLastRow();
    var rowNumber = lastRow + 1;
    var srNo = getNextSrNo_(sheet, lastRow);
    var status = 'New';

    var row = [
      srNo,
      enquiry.name,
      enquiry.email,
      enquiry.contactNo,
      enquiry.serviceType,
      enquiry.message,
      status
    ];

    sheet.getRange(rowNumber, 1, 1, CONTACT_HEADERS.length).setValues([row]);
    SpreadsheetApp.flush();

    if (!rowWasSaved_(sheet, rowNumber, srNo, enquiry, status)) {
      throw new Error('Saved row verification failed');
    }

    return json_({ ok: true, row: rowNumber, srNo: srNo });
  } catch (error) {
    Logger.log('[contact] ' + error);
    return json_({ ok: false, error: 'SAVE_FAILED', stage: 'save' });
  } finally {
    if (lock && lock.hasLock()) {
      lock.releaseLock();
    }
  }
}

function parseJsonBody_(event) {
  if (!event || !event.postData || typeof event.postData.contents !== 'string') {
    throw new Error('Missing JSON request body');
  }

  var input = JSON.parse(event.postData.contents);
  if (!input || typeof input !== 'object' || isArray_(input)) {
    throw new Error('Invalid JSON request body');
  }

  return input;
}

function validateEnquiry_(input) {
  var fields = ['name', 'email', 'contactNo', 'serviceType', 'message', 'secret', 'spreadsheetId'];
  var index;

  for (index = 0; index < fields.length; index += 1) {
    if (typeof input[fields[index]] !== 'string') {
      throw new Error('Invalid ' + fields[index]);
    }
  }

  var enquiry = {
    name: trim_(input.name),
    email: trim_(input.email),
    contactNo: trim_(input.contactNo),
    serviceType: trim_(input.serviceType),
    message: trim_(input.message)
  };

  if (!enquiry.name || !enquiry.email || !enquiry.serviceType || !enquiry.message) {
    throw new Error('Missing required enquiry field');
  }
  if (!/^\S+@\S+\.\S+$/.test(enquiry.email)) {
    throw new Error('Invalid email');
  }

  return enquiry;
}

function getOrCreateSheet_(spreadsheet) {
  var sheet = spreadsheet.getSheetByName(CONTACT_SHEET_NAME);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(CONTACT_SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(CONTACT_HEADERS);
    sheet.setFrozenRows(1);
  } else if (!headersMatch_(sheet.getRange(1, 1, 1, CONTACT_HEADERS.length).getDisplayValues()[0])) {
    throw new Error('The Sheet1 headers do not match the contact-form schema');
  }

  return sheet;
}

function headersMatch_(actualHeaders) {
  var index;

  for (index = 0; index < CONTACT_HEADERS.length; index += 1) {
    var actual = actualHeaders[index] ? trim_(String(actualHeaders[index])) : '';
    var expected = CONTACT_HEADERS[index];
    if (actual.toLowerCase() !== expected.toLowerCase()) {
      return false;
    }
  }

  return true;
}

function getNextSrNo_(sheet, lastRow) {
  if (lastRow <= 1) {
    return 1;
  }

  var lastSrNoVal = sheet.getRange(lastRow, 1, 1, 1).getDisplayValues()[0][0];
  var parsed = parseInt(trim_(String(lastSrNoVal)), 10);
  if (!isNaN(parsed) && parsed > 0) {
    return parsed + 1;
  }

  return lastRow;
}

function rowWasSaved_(sheet, rowNumber, expectedSrNo, enquiry, expectedStatus) {
  var savedRow = sheet.getRange(rowNumber, 1, 1, CONTACT_HEADERS.length).getDisplayValues()[0];

  return String(savedRow[0]).trim() === String(expectedSrNo) &&
    String(savedRow[1]).trim() === enquiry.name &&
    String(savedRow[2]).trim() === enquiry.email &&
    String(savedRow[3]).trim() === enquiry.contactNo &&
    String(savedRow[4]).trim() === enquiry.serviceType &&
    String(savedRow[5]).trim() === enquiry.message &&
    String(savedRow[6]).trim().toLowerCase() === String(expectedStatus).toLowerCase();
}

function isArray_(value) {
  return Object.prototype.toString.call(value) === '[object Array]';
}

function trim_(value) {
  return value.replace(/^\s+|\s+$/g, '');
}

function json_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
