import type { ArriendoTerminado } from "../types/arriendo";

type ArriendoTerminadoFilaProps = {
    arriendo: ArriendoTerminado
}

export default function ArriendoTerminadoFila({ arriendo }: ArriendoTerminadoFilaProps) {

    return (
        <tr>
            <td>{arriendo.id}</td>
            <td>{arriendo.nombreCliente}</td>
            <td>{arriendo.rutCliente}</td>
            <td>{arriendo.tipoVehiculo}</td>
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