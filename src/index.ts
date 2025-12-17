import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 4000
const HOSTNAME = process.env.HOST || 'https://localhost'

const app = express()

app.get('/', (req, res) => {
  res.send('Bem vindo!')  
})

