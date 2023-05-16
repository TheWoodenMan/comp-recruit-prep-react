import express, { Application, Request, Response } from 'express'

const app: Application = express()

const port: number = 9000

app.get('/owo', (req: Request, res: Response) => {
  res.send("OwO What's This???")
})

app.listen(port, function () {
  console.log(`App is listening on port ${port} !`)
})
