import { Form, redirect, useActionData, type ActionFunctionArgs } from "react-router-dom";
import { UsuarioCrear } from "../services/UsuariosService";

export async function action({request}:ActionFunctionArgs){
    const formData = Object.fromEntries(await request.formData())
    const resultado = await UsuarioCrear(formData)
    if (!resultado?.success){
        return resultado
    }
    window.confirm("Usuario añadido correctamente")
    return redirect('/login')
    
}
export default function CrearUsuario(){

    const actionData = useActionData() as {
        success?: boolean,
        error?:string,
        detalleErrores?:{[key:string]:string[]}
    }
    return (

        <>
            <main className="form-signin w-100 m-auto" style={{ maxWidth: '330px', padding: '15px' }}>
                <Form method="POST">
                    {/*Error*/}
                    {actionData?.error && <div className="alert alert-danger">{actionData.error}</div>}
                    <h1 className="h3 mb-3 fw-normal"> Ingrese la contraseña </h1>
                    {/*Resto form*/}
                    <div className="form-floating mb-3">
                        <input type="email" className= {`form-control`} id="email" name = "email"/>
                            <div className="invalid-feedback"></div>
                        <label htmlFor="floatingInput">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                         <input type="password"  className= {`form-control `} id="password" name = "password"/>
                         <div className="invalid-feedback"></div>
                        <label htmlFor="floatingInput">contraseña</label>
                    </div>
                    <div className="form-floating mb-3">
                    </div>
                    <button className="mt-2 btn btn-primary w-100 py-2" >Confirmar Usuario</button>
                    <button className="mt-2 btn btn-primary w-100 py-2" type="button" >Volver</button>
                    <p className="mt-5 mb-3 text-body-secondary text-center"> 10 de julio 2025</p>
                </Form>

            </main>

        </>
    )

}