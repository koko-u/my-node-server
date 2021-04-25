import express from 'express'
import { DB_URI } from './config/dev'
import { setupDb } from './db'
import { productRouter } from "./routes/products"

setupDb(DB_URI).catch(e => {})

const app: express.Express = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/products', productRouter)

const port = process.env.PORT ?? 3001

app.listen(port, () => {
  console.log(`Start on port ${port}...`)
})
