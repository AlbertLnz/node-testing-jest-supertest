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
  test('Should respond with a content-type of application/json', async () => {
    const response = await request(app).post('/tasks').send()
    expect(response.headers['content-type']).toBe('application/json; charset=utf-8');
    expect(response.headers['content-type']).toMatch('application/json');
    expect(response.headers['content-type']).toEqual(
      expect.stringContaining('json')
    )
  })

  // 3. Should respond with a json object containing the new task with an id
  test('Should respond with a json object containing the new task with an id', async () => {
    const response = await request(app).post('/tasks').send({
      title: 'test task',
      description: 'description'
    })
    expect(response.body.id).toBeDefined()
  })
})
