import { Request, Response } from 'express'
import Arriendo from '../models/Arriendo'
import { Op, Sequelize } from 'sequelize'

//Mostrar todos los arriendos
export const getArriendos = async (request: Request, response: Response) => {
    // response.json('Listar Arriendos')
    const arriendos = await Arriendo.findAll({
        order: [
            ['fecha_inicio', 'DESC']
        ]
    })
    response.json({ data: arriendos })
}

export const getCantidadArriendos = async (request: Request, response: Response) => {
    const arriendos = await Arriendo.findAll({
        attributes: [
            'tipoVehiculo',
            [Sequelize.fn('COUNT', Sequelize.col('tipo_Vehiculo')), 'cantidad']
        ],
        group: ['tipoVehiculo']
    })
    response.json({ data: arriendos })
}

export const getArriendosActivos = async (request: Request, response: Response) => {
    const arriendos = await Arriendo.findAll({
        attributes: { exclude: ['fechaFin'] },
        where: { fecha_fin: null },

    })
    response.json({ data: arriendos })
}

export const getArriendosTerminados = async (request: Request, response: Response) => {
    const arriendos = await Arriendo.findAll({
        where: { fecha_fin: { [Op.not]: null } }
    })
    response.json({ data: arriendos })
}

export const getArriendo = async (request: Request, response: Response) => {
    const { id } = request.params
    const arriendo = await Arriendo.findByPk(id)
    response.json({ data: arriendo })
}

export const postArriendo = async (request: Request, response: Response) => {
    const { nombreCliente, rutCliente, tipoVehiculo, patenteVehiculo } = request.body

    const nuevoArriendo = await Arriendo.create({
        nombreCliente,
        rutCliente,
        tipoVehiculo,
        patenteVehiculo,
        fechaInicio: new Date(),
        fechaFin: null
    })
    response.json({ data: nuevoArriendo })
}

export const patchArriendo = async (request: Request, response: Response) => {
    const { id } = request.params
    const arriendo = await Arriendo.findByPk(id)
    await arriendo.update({
        ...request.body,
        fechaFin: new Date()
    })
    await arriendo.save()
    response.json({ data: arriendo })
}


export const deleteArriendo = async (request: Request, response: Response) => {
    const { id } = request.params
    const arriendo = await Arriendo.findByPk(id)
    await arriendo.destroy()
    response.json({ data: 'Arriendo cancelado' })
}