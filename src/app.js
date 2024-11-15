import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv'

import authRoutes from './routes/auth.routes.js'
import taskRoutes from './routes/task.routes.js'

const app = express();

dotenv.config()
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())

// Sirve los archivos estáticos del frontend
app.use(express.static(path.join(__dirname, '../client/build')));

// Ruta para manejar las demás solicitudes y enviar el frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});


app.use("/api", authRoutes)
app.use("/api", taskRoutes)

export default app;