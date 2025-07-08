import express from 'express'
import router from './router'
import db from './config/database'
import cors from 'cors'

const server = express()
server.use(cors({
  origin: 'http://localhost:5173',
  credentials: true // si usas cookies o autenticación
}));

// conexion a la base de datos
async function conectarBD() {
    try{
        // para autenticar los datos de .env
        await db.authenticate()
        // crear la base de datos
        db.sync()
        console.log('conexion exitosa')
    }catch(error){
        // error en la conexion
        console.log('no se pudo conectar a la BD')
        console.log(error)
    }
    
}
conectarBD()
// habilita para la lectura de json enviado desde el cliente
server.use(express.json());

server.use('/api',router)

export default server