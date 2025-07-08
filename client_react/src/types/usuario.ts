import { email, minLength, nonEmpty,object, pipe, string } from 'valibot';

export const LoginFormSchema = object({
        email: pipe(string(), nonEmpty('Indique su email'),email('Correo no valido')),
        password: pipe(string(),nonEmpty('Indique su password'),minLength(6,'La contraseña debe tener al menos 6 caracteres'))
})

export const CambiarPasswordFormSchema = object({
        password: pipe(string(),nonEmpty('Indique su password'),minLength(6,'La contraseña debe tener al menos 6 caracteres'))
})