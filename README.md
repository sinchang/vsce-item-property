
# vsce-item-property

[![NPM version](https://img.shields.io/npm/v/vsce-item-property.svg?style=flat)](https://npmjs.com/package/vsce-item-property) [![NPM downloads](https://img.shields.io/npm/dm/vsce-item-property.svg?style=flat)](https://npmjs.com/package/vsce-item-property)  [![codecov](https://codecov.io/gh/sinchang/vsce-item-property/branch/master/graph/badge.svg)](https://codecov.io/gh/sinchang/vsce-item-property) [![Build Status](https://travis-ci.com/sinchang/vsce-item-property.svg?branch=master)](https://travis-ci.com/sinchang/vsce-item-property)

## Install

```bash
npm i vsce-item-property
```

## Usage

```js
const vsceItemProperty = require('vsce-item-property')

vsceItemProperty('vscodevim.vim')
  .then(res => console.log(res))
  .catch(err => console.log(err))

// => 
{ publisherName: 'vscodevim',
  name: 'Vim',
  lastUpdated: '2018-09-21T07:23:39.407Z',
  releaseDate: '2015-11-29T10:38:55.38Z',
  publishedDate: '2015-11-29T10:38:55.38Z',
  shortDescription: 'Vim emulation for Visual Studio Code',
  version: '0.16.5',
  ratingValue: 4.284768104553223,
  ratingCount: 151,
  downloadCount: 4011981 
}
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**vsce-item-property** © [sinchang](https://github.com/sinchang), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by sinchang with help from contributors ([list](https://github.com/sinchang/vsce-item-property/contributors)).

> [sinchang.me](https://sinchang.me) · GitHub [@sinchang](https://github.com/sinchang) · Twitter [@sinchangwen](https://twitter.com/sinchangwen)
