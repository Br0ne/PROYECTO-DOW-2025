import { safeParse } from 'valibot'
import { CambiarPasswordFormSchema, LoginFormSchema } from '../types/usuario'
import axios from '../services/axiosInstance'


type UsuarioFormData = {
    [k: string]: FormDataEntryValue

}

export async function login(formData: UsuarioFormData) {
    try {
        const resultado = safeParse(LoginFormSchema, formData)
        if (resultado.success) {
            const url = `${import.meta.env.VITE_API_URL}/login`
            const { data } = await axios.post(url, resultado.output)
            console.log(data)
            localStorage.setItem('token', data.token)
            localStorage.setItem('email', resultado.output.email)
            return { success: true }
        } else {
            const detalleErrores: Record<string, string[]> = {}

            for (const issue of resultado.issues) {
                const campo = issue.path![0].key as string
                if (!detalleErrores[campo]) {
                    detalleErrores[campo] = []
                }
                detalleErrores[campo].push(issue.message)
            }

            return {
                success: false,
                error: 'Datos de formulario no validos',
                detalleErrores: detalleErrores,
            }
        }
    } catch (error: any) {

        return {
            success: false,
            error: error.response?.data?.error ?? 'Error inesperado',
        }
    }

}

export async function UsuarioCrear(formData: UsuarioFormData) {
    try {
        const resultado = safeParse(LoginFormSchema, formData)
        if (resultado.success) {
            const url = `${import.meta.env.VITE_API_URL}/login/CrearUsuario`
            const { data } = await axios.post(url, resultado.output)
            localStorage.setItem('token', data.token)
            return { success: true }
        } else {
            const detalleErrores: Record<string, string[]> = {}

            for (const issue of resultado.issues) {
                const campo = issue.path![0].key as string
                if (!detalleErrores[campo]) {
                    detalleErrores[campo] = []
                }
                detalleErrores[campo].push(issue.message)
            }

            return {
                success: false,
                error: 'Datos de formulario no validos',
                detalleErrores: detalleErrores,
            }
        }
    } catch (error: any) {

        return {
            success: false,
            error: error.response?.data?.error ?? 'Error inesperado',
        }
    }

}

export async function cambiarPassword(formData: UsuarioFormData) {
    try {
        const resultado = safeParse(CambiarPasswordFormSchema, formData)
        if (resultado.success) {
            const email = localStorage.getItem("email")
            if (!email) throw new Error("No hay email en localStorage")

            const url = `${import.meta.env.VITE_API_URL}/login/${email}`
            const { data } = await axios.put(url, resultado.output)

            if (data.token) {
                localStorage.setItem("token", data.token)
            }

            return { success: true, data }
        } else {
            const detalleErrores: Record<string, string[]> = {}
            for (const issue of resultado.issues) {
                const campo = issue.path![0].key as string
                if (!detalleErrores[campo]) {
                    detalleErrores[campo] = []
                }
                detalleErrores[campo].push(issue.message)
            }

            return {
                success: false,
                error: 'Datos de formulario no válidos',
                detalleErrores,
            }
        }
    } catch (error: any) {
        return {
            success: false,
            error: error.response?.data?.error ?? "Error inesperado",
        }
    }
}

