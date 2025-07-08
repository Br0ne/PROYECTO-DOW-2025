import { arriendoBorrar, getArriendosActivos } from "../services/ArriendoActivoService"
import { useLoaderData } from "react-router-dom"
import type { ArriendoActivo } from "../types/arriendo"
import ArriendoActivoFila from "../components/ArriendoActivoFila"
import { useState } from "react"

export async function loader() {
    const arriendos = await getArriendosActivos()
    return arriendos
}

export default function ArriendosActivos() {
    const arriendosIniciales = useLoaderData() as ArriendoActivo[]
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
                            <th>Terminado</th>
                            <th>Borrar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arriendos.map((arriendo)=>(
                            <ArriendoActivoFila key={arriendo.id} arriendo={arriendo} onBorrar={handleBorrar}/>
                        ))}       
                    </tbody>
                </table>
            </div>
        </>
    )
}