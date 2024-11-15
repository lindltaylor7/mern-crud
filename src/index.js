import app from "./app.js"
import { connectDB } from "./db.js"

connectDB()

// Sirve los archivos estáticos del frontend
app.use(express.static(path.join(__dirname, '../client/build')));

// Ruta para manejar las demás solicitudes y enviar el frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});


app.listen(3000)
console.log('Server on port', 3000)