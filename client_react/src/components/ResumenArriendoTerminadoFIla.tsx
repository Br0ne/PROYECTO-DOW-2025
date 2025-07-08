import type { ArriendoTerminado } from "../types/arriendo";

type ArriendoTerminadoFilaProps = {
    arriendo: ArriendoTerminado
}

export default function ResumenArriendoTerminadoFila({ arriendo}: ArriendoTerminadoFilaProps){

    return (
        <tr>
            <td>{arriendo.nombreCliente}</td>
            <td>{arriendo.patenteVehiculo}</td>
            <td>{new Date(arriendo.fechaInicio).toLocaleDateString("es-CL", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
            })} 
            </td>
            <td>
                {arriendo.fechaFin
                    ? new Date(arriendo.fechaFin).toLocaleDateString("es-CL", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                    })
                    : "Sin devolución"}
            </td>
        </tr>
    )
}