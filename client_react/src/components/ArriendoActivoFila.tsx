
import { Link } from "react-router-dom";
import type { ArriendoActivo } from "../types/arriendo";


type ArriendoActivoFilaProps = {
    arriendo: ArriendoActivo,
    onBorrar: (arriendoId:number) => void
}

export default function ArriendoActivoFila({ arriendo, onBorrar}: ArriendoActivoFilaProps){


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
                <Link to={`/arriendos/${arriendo.id}/devolucion`} className="btn btn-primary me-2">
                    <i className="bi bi-check-square-fill"></i>
                </Link>
            </td>
            <td>
                <Link className="btn btn-danger" onClick={() => onBorrar(arriendo.id)} to={""}>
                    <i className="bi bi-trash3-fill"></i>
                </Link>
            </td>
                
            
        </tr>
    )
}