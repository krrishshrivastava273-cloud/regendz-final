# Google Apps Script deployment

The contact endpoint sends every validated enquiry to a Google Apps Script web app. Its destination spreadsheet is intentionally configured in the script, not trusted from the browser.

## Required Script Properties

In the Apps Script project, add these Script Properties:

- `CONTACT_WEBHOOK_SECRET`: the same secret already configured as `CONTACT_WEBHOOK_SECRET` in the Next.js deployment.
- `SPREADSHEET_ID`: `1QNym-3pHkHtPbWZ1cRl3B_1BfgT80boktdH-9T32nOo`

## Deploy

1. Open the new spreadsheet, choose **Extensions → Apps Script**, and replace the default file contents with [`Code.gs`](./Code.gs). Save the project.
2. In **Project Settings → Script Properties**, add `CONTACT_WEBHOOK_SECRET` (the existing Next.js secret) and `SPREADSHEET_ID` (`1QNym-3pHkHtPbWZ1cRl3B_1BfgT80boktdH-9T32nOo`). Do not add these values to the script source.
3. Choose **Deploy → New deployment → Web app**. Set **Execute as** to the account that owns or can edit this spreadsheet, and **Who has access** to **Anyone** (not “Anyone with a Google account”). Complete the requested Google authorization, then deploy.
4. Copy the deployment’s `/exec` URL to `GOOGLE_APPS_SCRIPT_URL` in the Next.js deployment. Keep `CONTACT_WEBHOOK_SECRET` unchanged, add `GOOGLE_SHEETS_SPREADSHEET_ID=1QNym-3pHkHtPbWZ1cRl3B_1BfgT80boktdH-9T32nOo`, and redeploy the Next.js app.

The script uses the `Sheet1` tab and ensures its headers match on submission.
