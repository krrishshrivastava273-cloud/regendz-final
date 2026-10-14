export default function sitemap() {
  return [
    {
      url: "https://regendzit.com",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
  ];
}
