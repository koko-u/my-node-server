import express from "express"

const app: express.Express = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(3001, () => {
  console.log('Start on port 3001...')
})

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello World')
})
