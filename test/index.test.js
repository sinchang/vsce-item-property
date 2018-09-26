import vsceItemProperty from '../src'

test('main', () => {
  expect(typeof vsceItemProperty).toBe('function')
})

test('ok', async () => {
  const itemName = 'vscodevim.vim'
  const res = await vsceItemProperty(itemName)
  expect(res.name).toBe('Vim')
})

test('wrong itemName', async () => {
  const itemName = 'test'
  const res = await vsceItemProperty(itemName)
  expect(res).toBe('Bad Request')
})

test('empty itemName', async () => {
  const itemName = undefined
  try {
    await vsceItemProperty(itemName)
  } catch (e) {
    expect(e.message).toEqual('Expected itemName to be string')
  }
})
