import { getWeathers } from './index'

jest.mock('../apis', () => ({
  getWeathers: jest.fn(),
  getTrips: jest.fn()
}))

const fakeDispatch = jest.fn()

describe('getWeathers', () => {
  describe('successful api call', () => {
    const fakeWeather = { weather: 'fake weather' }
    beforeAll(() => {
      jest.clearAllMocks()
      postTodo.mockImplementation(() => Promise.resolve())
      setWeathers('new weather')(fakeDispatch)
    })
    test('call the getWeathers api method', () => {
      expect(getWeathers).toHaveBeenCalled()
    })
  })
})
