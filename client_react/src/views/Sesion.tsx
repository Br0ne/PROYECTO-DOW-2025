import { Form, redirect, useActionData, useNavigate, type ActionFunctionArgs } from "react-router-dom";
import { login } from '../services/UsuariosService'


export async function action({ request }: ActionFunctionArgs) {
    const formData = Object.fromEntries(await request.formData())
    const resultado = await login(formData)
    if (!resultado.success) {
        return resultado
    }
    return redirect('/')
}



export default function Sesion() {
    const actionData = useActionData() as {
        success?: boolean,
        error?: string,
        detalleErrores?: { [key: string]: string[] }
    }
    const navigate = useNavigate()
    const handleCrear = () => {
        navigate('CrearUsuario')

    }

    return (
        <>
            <main className="form-signin w-100 m-auto" style={{ maxWidth: '330px', padding: '15px' }}>
                <Form method="POST">

                    <h1 className="h3 mb-3 fw-normal"> Iniciar Sesion </h1>
                    {/*Mensaje de error*/}

                    {actionData?.error && <div className="alert alert-danger">{actionData.error}</div>}

                    {/*Resto form*/}
                    <div className="form-floating mb-3">
                        <input type="email" className={`form-control ${actionData?.detalleErrores?.email ? 'is-invalid' : ''}`} id="email" name="email" />
                        {'email' in (actionData?.detalleErrores || {}) && (
                            <div className="invalid-feedback">{actionData.detalleErrores?.email[0]}</div>
                        )}
                        <label htmlFor="floatingInput">Email address</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="password" className={`form-control ${actionData?.detalleErrores?.password ? 'is-invalid' : ''}`} id="password" name="password" />
                        {'password' in (actionData?.detalleErrores || {}) && (
                            <div className="invalid-feedback">{actionData.detalleErrores?.password[0]}</div>
                        )}
                        <label htmlFor="floatingPassword">Password</label>
                    </div>


                    <button className="btn btn-primary w-100 py-2" type="submit">Iniciar sesion </button>
                    <button className="mt-2 btn btn-primary w-100 py-2" type="button" onClick={handleCrear}> Crear Usuario </button>
                    <p className="mt-5 mb-3 text-body-secondary text-center"> 10 de julio 2025</p>
                </Form>
            </main>
        </>

    )

}