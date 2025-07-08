
import type { ArriendoActivo } from "../types/arriendo";

type ArriendoActivoFilaProps = {
    arriendo: ArriendoActivo
}

export default function ResumenArriendoActivoFila({ arriendo}: ArriendoActivoFilaProps){

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
        </tr>
    )
}