import vsceItemProperty from '../src'

test('main', () => {
  expect(typeof vsceItemProperty).toBe('function')
})

test('ok', async () => {
  const itemName = 'vscodevim.vim'
  const res = await vsceItemProperty(itemName)
  expect(res.displayName).toBe('Vim')
})

test('wrong itemName', async () => {
  let itemName = 'test'

  try {
    await vsceItemProperty(itemName)
  } catch (e) {
    expect(e).toEqual('Bad Request')
  }

  itemName = 'vscodevim.vim23'

  try {
    await vsceItemProperty(itemName)
  } catch (e) {
    expect(e.message).toEqual('Not Found')
  }
})

test('empty itemName', async () => {
  const itemName = undefined
  try {
    await vsceItemProperty(itemName)
  } catch (e) {
    expect(e.message).toEqual('Expected itemName to be string')
  }
})
