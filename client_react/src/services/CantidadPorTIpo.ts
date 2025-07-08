import { safeParse } from 'valibot'
import axios from '../services/axiosInstance'
import { CantidadesPorTipoSchema } from '../types/arriendo'

export async function getCantidadPorTipo(){
    try {
        const url = `${import.meta.env.VITE_API_URL }/arriendos/cantidad-por-tipo`
        const {data: tipoVehiculo} = await axios.get(url)
        console.log(tipoVehiculo.data)
        const resultado = safeParse(CantidadesPorTipoSchema, tipoVehiculo.data)
        console.log(resultado)
        if(resultado.success){
            return resultado.output
        } else {
            console.error("Error de validación:", resultado.issues)
            throw new Error("Error de validación en los Cantidad por Tipos")
        }
    } catch (error) {
        console.error("Error de validacion de cantidad por tipo de vehiculo")
    }
}