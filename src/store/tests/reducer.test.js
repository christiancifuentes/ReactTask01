import reducer from '../courses/reducer'

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual([])
})