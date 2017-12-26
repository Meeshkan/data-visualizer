require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Meeshkan Data Visualizer',
    description: 'The fastest Machine Learning data visualizer on this size of the Mississippi!',
    head: {
      titleTemplate: 'Meeshkan Data Visualizer: %s',
      meta: [
        {name: 'description', content: 'All the modern best practices in one example.'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'Meeshkan Data Visualizer'},
        {property: 'og:image', content: 'https://s3-eu-west-1.amazonaws.com/meeshkan-public-assets/iconMem.png'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'Meeshkan Data Visualizer'},
        {property: 'og:description', content: 'The fastest Machine Learning data visualizer on this size of the Mississippi!'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@meeshkan'},
        {property: 'og:creator', content: '@meeshkan'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ],
      script: [
        {type: 'text/javascript', src: 'https://cdn.plot.ly/plotly-latest.min.js'}
      ]
    }
  },

}, environment);
