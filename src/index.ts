import express from "express"

const app: express.Express = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT ?? 3001

app.listen(port, () => {
  console.log(`Start on port ${port}...`)
})

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello World')
})
