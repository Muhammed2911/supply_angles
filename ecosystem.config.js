module.exports = {
  apps: [
    {
      name: 'Supply',
      exec_mode: 'cluster',
      instances: '1',
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      watch: true,
      env: {
        HOST: '0.0.0.0',
        PORT: 49007,
        NODE_ENV: 'production',
      },
    },
  ],
}
