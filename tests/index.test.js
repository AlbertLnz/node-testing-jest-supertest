import request from 'supertest'
import app from '../src/app.js' // <-- server

describe("Check '/tasks' GET route", () => {

  test('Should respond with a 200 status code', async () => {
    const response = await request(app).get('/tasks').send()
    // console.log(response)

    expect(response.statusCode).toBe(200)
  })

  test('Should respond with an array', async () => {
    const response = await request(app).get('/tasks').send()

    expect(response.body).toBeInstanceOf(Array)
  })

})

describe("Check '/tasks' POST route", () => {

  // TDD (Test Driven Development)

  // 1. Should respond with a 200 status code
  test('Should respond with a 200 status code', async () => {
    const response = await request(app).post('/tasks').send()
    expect(response.status).toBe(200)
  })

  // 2. Should respond with a content-type of application/json

  // 3. Should respond with a json object containing the new task with an id

})
