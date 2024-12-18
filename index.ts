import 'dotenv/config'
import http from 'http'
import express from 'express'
import {pgClient} from './database/client'


const port = process.env.SERVER_PORT
const app = express()

app.use(express.static('./public'))

const server = http.createServer(app)

server.listen(port, async () => {
  await pgClient.connect()

  console.log('Node.js server is running.')
  console.log(`Open the app on: http://localhost:${port}`)
})