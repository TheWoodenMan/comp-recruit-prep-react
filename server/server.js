import express from 'express'
import path from 'path'
import cors from 'cors'

// // this replicates the functionality of __dirname
// import { fileURLToPath } from 'url'
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

// express setup
const app = express()
const port = 9000

// express middleware
app.use(express.static('public'))
app.use(cors())

app.get('/', (req, res) => {
  const request = req
  console.log(request)
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/works', (req, res) => {
  res.send('GET request works')
})

app.listen(port, function () {
  console.log(`App is listening on port ${port} !`)
})
