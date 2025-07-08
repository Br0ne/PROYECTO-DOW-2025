//en este ejemplo al crear el archivo de categorias se crea una funcion que simplemente
// envia un mensaje una vez solicitado por el archivo de router.
import { Request,Response } from "express";
import Usuario from "../models/Usuario";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'; 

export const login  = async(request:Request,response:Response)=>{
    const { email , password } = request.body
    const   SECRET = process.env.SECRET_KEY
    console.log("Login recibido:", { email, password }); // <-- agrega esto
    try{
        // buscar usuario 
        const usuario = await Usuario.findByPk(email)

        if (!usuario || !bcrypt.compareSync(password,usuario.password)){
            response.status(401).json({error: 'Error credencial incorrecta'})    
        }

        const token = jwt.sign({email:usuario.email},SECRET,{expiresIn: '1h'})
        response.json({ token })
    }catch(error){
        console.error("error interno login",error )
        response.status(500).json({error: 'Error interno en el servidor'})
    }
}

export const CrearUsuario  = async(request:Request,response:Response)=>{
   const {email,password} = request.body
   if (!email || !password){
        response.status(400).json({error: 'email y contraseña son obligatorios'})
   }
   try{
        const existente = await Usuario.findByPk(email)
        if(existente){
            response.status(409).json({error: 'Error ya existe el usuario'})
        }

        const nuevoUsuario = await Usuario.create({email,password})
    
        response.status(201).json({Message : 'usuario creado exitosamente'  })
   }catch(error){
         console.log("error registro de sesion",error )
        response.status(500).json({error: 'Error interno en el servidor'})
   }

}




export const EditarUsuario = async(request:Request,response:Response)=>{
    const { email } = request.params 
    try {
       
        const usuario = await Usuario.findByPk(email)
         if (!usuario){
        response.status(400).json({error : 'Usuario no encontrado'});

        }

        await usuario.update(request.body)
        await usuario.save()
        response.status(201).json({Message : 'usuario modificado exitosamente'  })
        response.json({data: usuario})
        
    }catch(error) {
        console.log("error registro de sesion",error )
        response.status(500).json({error: 'Error interno en el servidor'})

    }


}