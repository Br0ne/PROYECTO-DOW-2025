import { useLoaderData } from "react-router-dom"
import type { ArriendoTerminado } from "../types/arriendo"
import { getArriendosTerminados } from "../services/ArriendoTerminadoService"
import ArriendoTerminadoFila from "../components/ArriendoTerminadoFila"

export async function loader() {
    const arriendos = await getArriendosTerminados()
    console.log(arriendos)
    return arriendos
}

export default function ArriendosTerminados() {
    const arriendos = useLoaderData() as ArriendoTerminado[]
    console.log(arriendos)
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
                        </tr>
                    </thead>
                    <tbody>
                        {arriendos.map((arriendo)=>(
                            <ArriendoTerminadoFila key={arriendo.id} arriendo={arriendo}/>
                        ))}       
                    </tbody>
                </table>
            </div>
        </>
    )
}