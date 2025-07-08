import { Form, redirect, useActionData, type ActionFunctionArgs } from "react-router-dom"
import { agregarArriendo } from "../services/ArriendoActivoService"




export async function action({ request }: ActionFunctionArgs) {
    const formData = Object.fromEntries(await request.formData())
    const resultado = await agregarArriendo(formData)
    if (!resultado?.success) {
        return resultado
    }
    return redirect('/arriendos/activos')
}

export default function AgregarArriendo() {
    const actionData = useActionData() as {success: boolean, error?: string, detalleErrores:{[key: string]: string[] }}

    return (
        <>
            <div className="card mt-3" style={{ width: '40rem' }}>
                <div className="card-body">
                    <h2>Agregar Arriendo</h2>
                    {/* Errores */}
                    {actionData?.error && <div className="alert alert-danger">Error, alguno de los datos no ha sido ingresado correctamente.</div>}       

                    {/* Formulario */}
                    <Form method="POST">
                        <div className="mb-3 ">
                            <label htmlFor="nombreCliente" className="form-label" >Nombre y Apellido</label>
                            <input 
                                name="nombreCliente" 
                                type="text" 
                                className={`form-control ${actionData?.detalleErrores?.nombreCliente ? 'is-invalid': ''}`} 
                                style={{ width: '30rem' }} 
                                id="nombreCliente" 
                                placeholder="Ingrese el nombre y apellido del cliente" 
                            />
                            {'nombreCliente' in (actionData?.detalleErrores || {}) && <div className="invalid-feedback">{actionData.detalleErrores?.nombreCliente[0]}</div>}
                            

                        </div>

                        <div className="mb-3 ">
                            <label htmlFor="rutCliente" className="form-label">RUT</label>
                            <input 
                                name="rutCliente" 
                                type="text" 
                                className={`form-control ${actionData?.detalleErrores?.rutCliente ? 'is-invalid': ''}`}
                                style={{ width: '18rem' }} 
                                id="rutCliente" 
                                placeholder="Ingrese el RUT del cliente" 
                            />
                            {'rutCliente' in (actionData?.detalleErrores || {}) && <div className="invalid-feedback">{actionData.detalleErrores?.rutCliente[0]}</div>}
                            <span className="form-text text-muted">Ej. 12345678-9</span>
                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="patenteVehiculo" className="form-label">Patente</label>
                            <input 
                                name="patenteVehiculo" 
                                type="text" 
                                className={`form-control ${actionData?.detalleErrores?.patenteVehiculo ? 'is-invalid': ''}`}
                                style={{ width: '18rem' }} 
                                id="patente" 
                                placeholder="Ingrese la patente del vehiculo" 
                            />
                            {'patenteVehiculo' in (actionData?.detalleErrores || {}) && <div className="invalid-feedback">{actionData.detalleErrores?.patenteVehiculo[0]}</div>}
                            <span className="form-text text-muted">Ej. ABCD12</span>
                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="tipoVehiculo" className="form-label">Tipo de Vehículo</label>
                            <select 
                                name="tipoVehiculo" 
                                className={`form-select ${actionData?.detalleErrores?.tipoVehiculo ? 'is-invalid': ''}`} 
                                defaultValue={""} 
                                style={{ width: '18rem' }} 
                                id="tipoVehiculo" 
                                aria-label="Tipo de Vehículo"
                            >
                                <option value="" disabled>
                                    Selecciona un tipo de vehículo
                                </option>
                                <option value="Sedan">Sedán</option>
                                <option value="SUV">SUV</option>
                                <option value="Camioneta">Camioneta</option>
                            </select>
                            {'tipoVehiculo' in (actionData?.detalleErrores || {}) && <div className="invalid-feedback">{actionData.detalleErrores?.tipoVehiculo[0]}</div>}
                        </div>
                        <button type="submit" className="btn btn-primary">Agregar</button>
                    </Form>
                </div>
            </div>
        </>
    )
}