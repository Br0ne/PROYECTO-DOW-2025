import type { CantidadPorTipo } from "../types/arriendo"

type CantidadPorTipoProps = {
    cantidadPorTipo: CantidadPorTipo
}

export default function ContadorPorTipo({cantidadPorTipo}: CantidadPorTipoProps) {
    const icon = `/src/assets/icons/${cantidadPorTipo.tipoVehiculo.toLowerCase()}.png`
    return (
        <div className="col-4">
            <div className="card h-100">
                <div className="card-body mx-2">
                    <img src={icon} alt="SUV" width={48} height={48} className="mb-2 d-block mx-auto" />
                    <h5 className="card-title text-center">{cantidadPorTipo.tipoVehiculo}</h5>
                    <h5 className="card-title text-center">{cantidadPorTipo.cantidad}</h5>
                </div>
            </div>
        </div>
    )
}