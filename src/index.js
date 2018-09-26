'use strict'

const got = require('got')

module.exports = async(itemName) => {
  if (typeof itemName !== 'string') {
    return Promise.reject(new Error('Expected itemName to be string'))
  }

  try {
    // ref: https://github.com/cssho/VSMarketplaceBadge/blob/master/VSMarketplaceBadge/Models/VsMarketplace.cs
    const response = await got.post('https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery', {
      headers: {
        'Accept': 'application/json;api-version=3.0-preview.1',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'filters': [{
          'criteria': [{
            'filterType': 7,
            'value': itemName
          }, {
            'filterType': 12,
            'value': '4096'
          }]
        }],
        'flags': 914
      })
    })

    const itemValue = JSON.parse(response.body).results[0].extensions[0]

    if (!itemValue) {
      return Promise.reject(new Error('Not Found'))
    }

    const obj = {
      publisherName: itemValue.publisher.publisherName,
      name: itemValue.displayName,
      lastUpdated: itemValue.lastUpdated,
      releaseDate: itemValue.releaseDate,
      publishedDate: itemValue.publishedDate,
      shortDescription: itemValue.shortDescription,
      version: itemValue.versions[0].version
    }

    let installCount, updateCount

    if (itemValue.statistics && itemValue.statistics.length > 0) {
      itemValue.statistics.forEach(v => {
        const statisticName = v.statisticName
        const value = v.value

        if (statisticName === 'install') installCount = value
        if (statisticName === 'updateCount') updateCount = value
        if (statisticName === 'averagerating') obj.ratingValue = value
        if (statisticName === 'ratingcount') obj.ratingCount = value
      })

      obj.downloadCount = Number(installCount) + Number(updateCount)
    }
    return Promise.resolve(obj)
  } catch (error) {
    return Promise.reject(error.statusMessage)
  }
}
