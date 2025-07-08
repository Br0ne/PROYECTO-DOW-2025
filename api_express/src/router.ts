
// siendo este la funcion que se encuentra en Categorias.ts

import {Router} from 'express'
import { CrearUsuario, EditarUsuario, login} from './handlers/usuarios'
import { verificarToken } from './middleware/verificarTokens'
import { deleteArriendo, getArriendo, getArriendos, getArriendosActivos, getArriendosTerminados, getCantidadArriendos, patchArriendo, postArriendo } from './handlers/arriendos'

const router = Router()

// usuarios
router.post('/login/crearUsuario',CrearUsuario)
router.post('/login',login)


// middleware
// despues de la linea de codigo se tendra que verificar los tokens del usuario

router.use(verificarToken)

// para todas las otras rutas se tendran que escribir despues de esta linea

// Listar Arriendos
router.get('/arriendos', getArriendos)
// Cantidad de Arriendos por tipo de Vehículo
router.get('/arriendos/cantidad-por-tipo', getCantidadArriendos)
// Listar Arriendos Activos
router.get('/arriendos/activos', getArriendosActivos) 
// Listar Arriendos Terminados
router.get('/arriendos/terminados', getArriendosTerminados) 
// Obtener un Arriendo por ID
router.get('/arriendos/:id', getArriendo)
// Agregar Arriendo
router.post('/arriendos', postArriendo)
// Actualizar Arriendo
router.patch('/arriendos/:id', patchArriendo)
// Eliminar Arriendo
router.delete('/arriendos/:id', deleteArriendo) 

// crear usuario
// Cambiar constrasena
router.put('/login/:email',EditarUsuario)

export default router