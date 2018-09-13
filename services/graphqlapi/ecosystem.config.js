module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    {
      name: 'GraphQL',
      script: 'main.js',
      watch: true,
      env: {
        NODE_ENV: 'development'
      }
    }
  ]
};
