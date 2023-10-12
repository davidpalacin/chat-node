import express from "express";
import { configDotenv } from "dotenv";
import { Socket } from "socket.io";
import path from "path";
import cors from 'cors'

configDotenv()

const app = express()

app.disable("powered-by")

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  const file = new URL('../client/index', import.meta.url)
  console.log(file)
  res.sendFile(file.pathname.split('/C:')[1])
})

app.listen(8000, () => {
  console.log(`Server listening: http://localhost:8000`)
})