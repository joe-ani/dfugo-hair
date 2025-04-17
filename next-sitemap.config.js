/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://dfugohair.com.ng",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: ["https://dfugohair.com.ng/server-sitemap.xml"],
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin"],
      },
    ],
  },
  exclude: ["/admin", "/api/*", "/server-sitemap.xml"],
  generateIndexSitemap: false,
  changefreq: "daily",
  priority: 0.7,
};
