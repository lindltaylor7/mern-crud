import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import authRoutes from './routes/auth.routes.js'
import taskRoutes from './routes/task.routes.js'

const app = express();

dotenv.config()
app.use(cors({
    origin: 'https://mern-crud-olcs.onrender.com',
    credentials: true
}))
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())

// Sirve los archivos estáticos del frontend
app.use(express.static(path.join(__dirname, '../client/dist')));

// Ruta para manejar las demás solicitudes y enviar el frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});


app.use("/api", authRoutes)
app.use("/api", taskRoutes)

export default app;