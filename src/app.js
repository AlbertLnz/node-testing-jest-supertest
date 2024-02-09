import express from 'express'
import { v4 } from 'uuid'

const app = express()

// Middleware
app.use(express.json())

app.get('/ping', (_req, res) => {
  res.send('pong')
})

app.get('/tasks', (_req, res) => {
  res.json([])
})

app.post('/tasks', (req, res) => {
  res.set('Content-Type', 'application/json');

  const { title, description } = req.body

  res.json({
    id: v4(), title, description
  })
})

export default app
