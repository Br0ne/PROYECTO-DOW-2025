import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({tableName: 'arriendos'})
class Arriendo extends Model{
    static find(arg0: {}) {
        throw new Error('Method not implemented.');
    }
    @Column({type:DataType.STRING(50), field:'nombre_cliente'})
    declare nombreCliente: string

    @Column({type:DataType.STRING(10), field:'rut_cliente'})
    declare rutCliente: string

    @Column({type:DataType.STRING(20), field:'tipo_vehiculo'})
    declare tipoVehiculo: string

    @Column({type:DataType.STRING(6), field:'patente_vehiculo'})
    declare patenteVehiculo: string

    @Column({type:DataType.DATE, field:'fecha_inicio'})
    declare fechaInicio: Date

    @Column({type:DataType.DATE, field:'fecha_fin'})
    declare fechaFin: Date

}

export default Arriendo