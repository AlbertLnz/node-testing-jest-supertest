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

  describe('Given a title and a description', () => {

    // TDD (Test Driven Development)
    const newTask = {
      title: 'Title task',
      description: 'Description task'
    }

    // 1. Should respond with a 200 status code
    test('Should respond with a 200 status code', async () => {
      const response = await request(app).post('/tasks').send(newTask)
      expect(response.status).toBe(200)
    })

    // 2. Should respond with a content-type of application/json
    test('Should respond with a content-type of application/json', async () => {
      const response = await request(app).post('/tasks').send(newTask)
      expect(response.headers['content-type']).toBe('application/json; charset=utf-8');
      expect(response.headers['content-type']).toMatch('application/json');
      expect(response.headers['content-type']).toEqual(
        expect.stringContaining('json')
      )
    })

    // 3. Should respond with a json object containing the new task with an id
    test('Should respond with a json object containing the new task with an id', async () => {
      const response = await request(app).post('/tasks').send(newTask)
      expect(response.body.id).toBeDefined()
    })

  })

  describe('Not given a title and a description', () => {

    test('Should respond with a 400 status code', async () => {
      const response = await request(app).post('/tasks').send({})
      expect(response.statusCode).toBe(400)
    })

    test('Should respond with a 400 status code - Various options', async () => {
      const possibilities = [
        {}, // title & description are missing
        { title: 'Title task'}, // description is missing
        { description: 'Description task' } // title is missing
      ]

      for (const option of possibilities) {
        const response = await request(app).post('/tasks').send(option)
        expect(response.statusCode).toBe(400)
      }
    })

  })

})
