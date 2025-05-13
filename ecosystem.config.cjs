const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  apps: [
    {
      name: isProduction ? 'ProdMugentokiDev' : 'StagingMugentokiDev',
      port: isProduction ? '3010' : '3000',
      exec_mode: 'cluster',
      instances: '1',
      script: './.output/server/index.mjs'
    }
  ]
}