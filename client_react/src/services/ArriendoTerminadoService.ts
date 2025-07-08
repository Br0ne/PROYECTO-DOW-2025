import axios from "../services/axiosInstance"
import { safeParse } from "valibot"
import { ArriendosTerminadosSchema } from "../types/arriendo"

export async function getArriendosTerminados(){
    try {
        const url = `${import.meta.env.VITE_API_URL }/arriendos/terminados`
        const {data: arriendos} = await axios.get(url)
        const resultado = safeParse(ArriendosTerminadosSchema, arriendos.data)
        if(resultado.success){
            return resultado.output
        } else {
            throw new Error("Error de validación en los arriendos activos")
        }
    } catch (error) {
        console.error("Error al obtener los arriendos activos:", error)
        throw error
    }
}