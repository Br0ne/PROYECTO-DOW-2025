import { array, enum_, nonEmpty, null_, number, object, pipe, regex, string, union, type InferOutput} from "valibot";

// Validar los datos de un arriendo


export const ArriendoActivoSchema = object({ // Define el esquema de validación para un solo arriendo
    id: number(), 
    nombreCliente:string(),
    rutCliente:string(),
    tipoVehiculo:string(),
    patenteVehiculo:string(),
    fechaInicio:string()
})

export const tipoVehiculoEnum = {
    Sedan: "Sedán",
    SUV: "SUV",
    Camioneta: "Camioneta"
} as const

export const ArriendoFormSchema = object({ 
    nombreCliente: pipe(
        string(),
        nonEmpty('El nombre del cliente es obligatorio')),
    rutCliente: pipe(
        string(),
        nonEmpty('El RUT del cliente es obligatorio'),
        regex(/^\d{7,8}-[\dkK]$/, 'Formato de RUT inválido')
    ),
    patenteVehiculo: pipe(
        string(),
        nonEmpty('La patente del vehículo es obligatoria'),
        regex(/^[A-Z]{4}\d{2}$/, 'Formato de patente inválido')
    ),
    tipoVehiculo: pipe(
        string(),
        nonEmpty('El tipo de vehículo es obligatorio'),
        enum_(tipoVehiculoEnum, 'El tipo de vehículo es obligatorio')
    )
})

export const ArriendosActivosSchema = array(ArriendoActivoSchema) // Define el esquema de validación para un array de arriendos

//Types
export type ArriendoActivo = InferOutput<typeof ArriendoActivoSchema> // Define el tipo de un arriendo
export type ArriendosActivos = InferOutput<typeof ArriendosActivosSchema> // Define el tipo de un array de arriendos

export const ArriendoTerminadoSchema = object({
    id: number(),
    nombreCliente: string(),
    rutCliente: string(),
    tipoVehiculo: string(),
    patenteVehiculo: string(),
    fechaInicio: string(),
    fechaFin: union([string(), null_()])
})

export const ArriendosTerminadosSchema = array(ArriendoTerminadoSchema)

export type ArriendoTerminado = InferOutput<typeof ArriendoTerminadoSchema>
export type ArriendosTerminados = InferOutput<typeof ArriendosTerminadosSchema> 

