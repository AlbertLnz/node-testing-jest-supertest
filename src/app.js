import express from 'express'

const app = express()

app.get('/ping', (_req, res) => {
  res.send('pong')
})

app.get('/tasks', (_req, res) => {
  res.json([])
})

app.post('/tasks', (_req, res) => {
  res.set('Content-Type', 'application/json');
  res.json({})
})

export default app
