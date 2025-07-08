import { Sequelize } from "sequelize-typescript";
import dotenv from 'dotenv'
// motor de db que manejara
import {Dialect} from 'sequelize'
dotenv.config()

// estatus
const db = new Sequelize({
    dialect: process.env.DB_DIALECT as Dialect,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT!),
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    // fecha y hora en que se utiliza  define 
    models: [__dirname + '/../models/**/*.ts'],
    define: {timestamps: false }
})

export default db