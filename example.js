const vsceItemProperty = require('./src/index.js')

vsceItemProperty('vscodevim.vim')
  .then(res => console.log(res))
  .catch(err => console.log(err))
