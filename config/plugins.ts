export default () => ({
  "vercel-deploy" : {
    enabled : true,
    config: {
      deployHook: process.env.VERCEL_PLUGIN_HOOK,
      apiToken: process.env.VERCEL_TOKEN,
      appFilter: process.env.VERCEL_APP_FILTER,
      teamFilter: process.env.VERCEL_TEAM_FILTER,
      roles: ["strapi-super-admin"],
    },
  }
});
