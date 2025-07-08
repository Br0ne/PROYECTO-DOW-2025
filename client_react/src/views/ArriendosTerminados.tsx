import { useLoaderData } from "react-router-dom"
import type { ArriendoTerminado } from "../types/arriendo"
import { getArriendosTerminados } from "../services/ArriendoTerminadoService"
import ArriendoTerminadoFila from "../components/ArriendoTerminadoFila"
import { useState } from "react"
import { arriendoBorrar } from "../services/ArriendoActivoService"

export async function loader() {
    const arriendos = await getArriendosTerminados()
    return arriendos
}

export default function ArriendosTerminados() {
    const arriendosIniciales = useLoaderData() as ArriendoTerminado[]
    const [arriendos, setArriendos] = useState(arriendosIniciales)
    const handleBorrar = async (arriendoId:number) => {
            await arriendoBorrar(arriendoId)
            setArriendos(arriendos.filter(arri => arri.id !== arriendoId))
        }
    return (
        <>
            <h2>Arriendos Activos</h2>
            <div className="table-responsive">
                <table className="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Cliente</th>
                            <th>RUT</th>
                            <th>Tipo de Vehículo</th>
                            <th>Patente</th>
                            <th>Fecha Inicio</th>
                            <th>Fecha Termino</th>
                            <th>Borrar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arriendos.map((arriendo)=>(
                            <ArriendoTerminadoFila key={arriendo.id} arriendo={arriendo} onBorrar={handleBorrar}/>
                        ))}       
                    </tbody>
                </table>
            </div>
        </>
    )
}