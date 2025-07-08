import { Form, redirect, useLoaderData, type LoaderFunctionArgs } from "react-router-dom";
import { finalizarArriendo, getArriendosById } from "../services/ArriendoActivoService";
import type { ArriendoTerminado } from "../types/arriendo";

export async function loader({ params }: LoaderFunctionArgs) {
    const id = params.id
    if (!id) throw new Response("No se ha proporcionado un ID de arriendo", { status: 400 })
    const arriendo = await getArriendosById(Number(id))
    if (!arriendo) throw new Response("Arriendo no encontrado", { status: 404 })
    return arriendo
}

export async function action({ params }: LoaderFunctionArgs) {
    const { id } = params
    const resultado = await finalizarArriendo(Number(id))
    if (!resultado?.success) {
        return resultado
    }
    window.confirm("Arriendo finalizado con éxito")
    return redirect('/arriendos/activos')
}

export default function RegistrarDevolucion() {
    const arriendo = useLoaderData() as ArriendoTerminado
    return (
        <>
            <h2>Registrar Devolucion</h2>
            <div className="card mt-3" style={{ width: '40rem' }}>
                <div className="card-body">
                    <h3 className="card-title">Datos del Arriendo</h3>
                    <Form method="PATCH">
                        <p className="fw-bold mb-2">Id: {arriendo.id}</p>
                        <p className="fw-bold mb-2">Nombre Cliente: <span className="fw-normal">{arriendo.nombreCliente}</span></p>
                        <p className="fw-bold mb-2">RUT Cliente: <span className="fw-normal">{arriendo.rutCliente}</span></p>
                        <p className="fw-bold mb-2">Tipo Vehiculo: <span className="fw-normal">{arriendo.tipoVehiculo}</span></p>
                        <p className="fw-bold mb-2">Patente Vehiculo: <span className="fw-normal">{arriendo.patenteVehiculo}</span></p>
                        <p className="fw-bold mb-3">Fecha Inicio: <span className="fw-normal">{new Date(arriendo.fechaInicio).toLocaleDateString("es-CL", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                        })}</span></p>
                        <div className="text-end">
                            <button type="submit" className="btn btn-primary text-end" onClick={() => finalizarArriendo(arriendo.id)}>Arriendo Finalizado</button>
                        </div>
                    </Form>

                </div>
            </div>
        </>
    )
}