import request from 'supertest'
import server from '../server'
import { getWeather } from '../../client/apis/weathers'

describe('GET /api/v1/weathers', () => {
  test('calls the api', () => {
    expect.assertions(2)



    return request(server)
      .get('/api/v1/weathers')
      .then((res) => {
        expect(getWeather).toHaveBeenCalled()
        expect(res.status).toBe(200)
        // expect(res.body[0].name).toBe('Dolphin')
        // expect(res.body[0].name).toBe('Tiger')
        return null
      })
  })
})
