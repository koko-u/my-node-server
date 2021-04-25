import express from 'express'
import { DB_URI } from './config/dev'
import { setupDb } from './db'

setupDb(DB_URI).catch(e => {})

const app: express.Express = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT ?? 3001

app.listen(port, () => {
  console.log(`Start on port ${port}...`)
})

app.get('/products', (req: express.Request, res: express.Response) => {
  res.json({
    'success': true
  })
})
