import { useLoaderData, useNavigate } from "react-router-dom"
import type { ArriendoTerminado, CantidadPorTipo } from "../types/arriendo"
import { getArriendosTerminados } from "../services/ArriendoTerminadoService"
import ResumenArriendoActivoFila from "../components/ResumenArriendoActivo"
import ResumenArriendoTerminadoFila from "../components/ResumenArriendoTerminadoFIla"
import { getCantidadPorTipo } from "../services/CantidadPorTIpo"
import ContadorPorTipo from "../components/ContadorPorTipo"

export async function loader() {
    const [arriendos, cantidadPorTipo] = await Promise.all([
        getArriendosTerminados(),
        getCantidadPorTipo()
    ])
    return { arriendos, cantidadPorTipo }
}


export default function Principal() {
    const { arriendos, cantidadPorTipo } = useLoaderData() as {
        arriendos: ArriendoTerminado[],
        cantidadPorTipo: CantidadPorTipo[]
    }
    const navigate = useNavigate()

    return (
        <>
            <div className="container-fluid">
                <div className="row g-4 mt-2">
                    <h4>Cantidad de Arriendos por Tipo</h4>
                    {cantidadPorTipo.map((cantidad) => (
                        <ContadorPorTipo key={cantidad.tipoVehiculo} cantidadPorTipo={cantidad} />
                    ))}
                </div>
                {/* Tablas*/}
                <div className="row mt-5">
                    <h4>Resumen Arriendos</h4>
                    {/* Arriendos Activos */}
                    <div className="col-md-6">
                        <div className="card h-100" style={{ maxHeight: "60vh" }}>
                            <div className="card-header d-flex justify-content-between aling-item-center">
                                <h5 className="mb-0">Arriendos Activos</h5>
                                <button
                                    className="btn btn-primary"
                                    onClick={()=> navigate('/arriendos/activos')}
                                >
                                    Ver Activos
                                </button>
                            </div>
                            <div className="card-body p-0" style={{ overflowY: "auto", maxHeight: "50vh" }}>
                                <table className="table table-sm table-striped mb-0">
                                    <thead style={{ position: "sticky", top: 0 }}>
                                        <tr>
                                            <th>Cliente</th>
                                            <th>Patente</th>
                                            <th>Fecha Inicio</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {arriendos.map((arriendo) => (
                                            <ResumenArriendoActivoFila key={arriendo.id} arriendo={arriendo} />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* Arriendos Terminados */}
                    <div className="col-md-6">
                        <div className="card h-100" style={{ maxHeight: "60vh" }}>
                            <div className="card-header d-flex justify-content-between aling-item-center">
                                <h5 className="mb-0">Arriendos Terminados</h5>
                                <button
                                    className="btn btn-primary"
                                    onClick={()=> navigate('/arriendos/terminados')}
                                >
                                    Ver Terminados
                                </button>
                            </div>
                            <div className="card-body p-0" style={{ overflowY: "auto", maxHeight: "50vh" }}>
                                <table className="table table-sm table-striped mb-0">
                                    <thead style={{ position: "sticky", top: 0 }}>
                                        <tr>
                                            <th>Cliente</th>
                                            <th>Patente</th>
                                            <th>Fecha Inicio</th>
                                            <th>Fecha Devolución</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {arriendos.map((arriendo) => (
                                            <ResumenArriendoTerminadoFila key={arriendo.id} arriendo={arriendo} />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}