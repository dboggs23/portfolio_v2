export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61eec8f84d8bb2276beecbd6",
                  title: "Sanity Studio",
                  name: "portfolio-v-2-studio-kd19js4q",
                  apiId: "2b8645f5-82e8-4131-9063-28184b6a092b",
                },
                {
                  buildHookId: "61eec8f8c13bed2257e2913d",
                  title: "Blog Website",
                  name: "portfolio-v-2-web-tc9j5wcs",
                  apiId: "3f710deb-a2f7-419a-a054-4fc9e3c9d8ae",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/dboggs23/portfolio_v2",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://portfolio-v-2-web-tc9j5wcs.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
