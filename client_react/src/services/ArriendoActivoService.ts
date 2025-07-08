import axios from "axios"
import { safeParse } from "valibot"
import { ArriendoFormSchema, ArriendosActivosSchema, ArriendoTerminadoSchema } from "../types/arriendo"

export async function getArriendosActivos(){
    try {
        const url = `${import.meta.env.VITE_API_URL }/arriendos/activos`
        const {data: arriendos} = await axios.get(url)
        const resultado = safeParse(ArriendosActivosSchema, arriendos.data)
        if(resultado.success){
            return resultado.output
        } else {
            console.error("Error de validación:", resultado.issues)
            throw new Error("Error de validación en los arriendos activos")
        }
    } catch (error) {
        console.error("Error al obtener los arriendos activos:", error)
        throw error
    }
}


type ArriendoFormData = {
    [k:string]: FormDataEntryValue
}

export async function agregarArriendo(formData: ArriendoFormData){
    try {
        const resultado = safeParse(ArriendoFormSchema, formData)
        if(resultado.success){
            const url = `${import.meta.env.VITE_API_URL}/arriendos`
            await axios.post(url, resultado.output)
            return { success: true}
        } else {
            const detalleErrores: Record<string, string[]> = {}
            for(const issue of resultado.issues){
                const campo = issue.path![0].key as string
                if(!detalleErrores[campo]){
                    detalleErrores[campo] = []
                }
                detalleErrores[campo].push(issue.message) 
            }
            return { success: false, error: "Error, alguno de los datos no ha sido ingresado correctamente.", detalleErrores: detalleErrores }
            
        }
    } catch (error) {
        return { success: false, error: "Error al agregar el arriendo" }
    }
    
}

export async function getArriendosById(id: number){
    try {
        const url = `${import.meta.env.VITE_API_URL}/arriendos/${id}`
        const {data: arriendo} = await axios.get(url)
        const resultado = safeParse(ArriendoTerminadoSchema, arriendo.data)
        if(resultado.success){
            return resultado.output
        } else {
            throw new Error("Error de validación en el arriendo")
        }
    } catch (error) {
        console.log(error)
    }
}

export async function finalizarArriendo(id: number){
    try {
        const url = `${import.meta.env.VITE_API_URL}/arriendos/${id}`
        await axios.patch(url)
        return { success: true}
    } catch (error) {
        console.error("Error al finalizar arriendo:", error)
        alert("Hubo un problema al finalizar el arriendo.") 
        return {success: false}   
    }

}