import { getWeathers } from '../apis/weathers'

describe('getWeathers makes a successful api call', () => {
  test('call the getWeathers api method', () => {
    const testWeather = {
      weather: 'lc'
    }

    // const mockGeolocation = {
    //   getCurrentPosition: jest.fn(),
    //   watchPosition: jest.fn()
    // };

    // global.navigator.geolocation = mockGeolocation;

    const testAction = getWeathers(testWeather)

    expect(testAction).toHaveBeenCalled()
    expect(testAction).toHaveBeenCalledWith('testWeather')
    expect(testAction).toHaveBeenCalledTimes(1)
  })
})
