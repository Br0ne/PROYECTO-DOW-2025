import { Form, useActionData, useNavigate, type ActionFunctionArgs } from "react-router-dom";
import { cambiarPassword } from "../services/UsuariosService";


export async function action({request}:ActionFunctionArgs){
    const formData = Object.fromEntries(await request.formData())
    const resultado = await cambiarPassword(formData)
    if (!resultado?.success){
        return resultado
    }
    window.confirm("Contraseña modificada correctamente")
    
}


export default function CambiarPassword() {

    const actionData = useActionData() as {
        success?: boolean,
        error?:string,
        detalleErrores?:{[key:string]:string[]}
    }
    const navigate = useNavigate()
    const handleCambiar = () => {
        navigate('/')
    }
    return (
        <main className="form-signin w-100 m-auto" style={{ maxWidth: '330px', padding: '15px' }}>
            <Form method="POST">

                <h1 className="h3 mb-3 fw-normal"> Cambiar Contraseña</h1>
                {/*Mensaje de error*/}

                {actionData?.error && <div className="alert alert-danger">{actionData.error}</div>}

                {/*Resto form*/}
                
                <div className="form-floating mb-3">
                    <input type="password" className={`form-control ${actionData?.detalleErrores?.password ? 'is-invalid' : ''}`} id="password" name="password" />
                    {'password' in (actionData?.detalleErrores || {}) && (
                        <div className="invalid-feedback">{actionData.detalleErrores?.password[0]}</div>
                    )}
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <button className="mt-2 btn btn-primary w-100 py-2" type="button" onClick={handleCambiar}> Cambiar Contraseña </button>
                <p className="mt-5 mb-3 text-body-secondary text-center"> 10 de julio 2025</p>
            </Form>
        </main>
    )
}