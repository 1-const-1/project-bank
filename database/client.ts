import 'dotenv/config'
import pg from 'pg'

export const pgClient: pg.Client = new pg.Client({
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  host: process.env.DB_HOST,
  password: process.env.DB_PASS,
  ssl: false,
})