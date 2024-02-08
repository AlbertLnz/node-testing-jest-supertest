import request from 'supertest'
import app from '../src/app.js' // <-- server

describe("Check if '/tasks' GET route exists", () => {

  test('Should respond with a 200 status code', async () => {
    const response = await request(app).get('/tasks').send()
    // console.log(response)

    expect(response.statusCode).toBe(404)
  })

})