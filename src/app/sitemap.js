export default function sitemap() {
  const baseUrl = "https://www.sssdentaliver.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
