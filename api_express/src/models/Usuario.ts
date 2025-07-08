import { BeforeCreate, BeforeUpdate, Column, DataType,Model,Table } from "sequelize-typescript"
import bcrypt from 'bcrypt';

// el proposito de este es crear una columna en una tabla.
// sequelize modifica segun el tipo de base de datos que se crea.
// puede ser en algunos casos que se tradusca de otra manera como ejemplo a un varchar 
@Table({tableName:'usuarios'})
class Usuario extends Model{
// procurar usar con el metodo de isEmail:true 
// para casos de creacion de emails

    @Column({type:DataType.STRING(50), primaryKey: true , allowNull: false , validate : { isEmail:true }})
    declare email: string

    @Column ({type:DataType.STRING(100),allowNull: false })
    declare password: string

    @BeforeCreate
        static async hashPassword(usuario : Usuario){
            usuario.password = await bcrypt.hash(usuario.password , 10)
        }


    @BeforeUpdate
    static async hashPasswordUpadatw(usuario: Usuario) {
        // Solo hashear si la contraseña fue modificada
        if (usuario.changed('password')) {
            usuario.password = await bcrypt.hash(usuario.password, 10)
        }
    }

        
}

export default Usuario


// al no tener una clave primaria este se crea de manera automatica 
// como id con un valor de incremento.