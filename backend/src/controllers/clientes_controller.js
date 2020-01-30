import Cliente from "../models/cliente"

class ClientesController {
    async index(request, h){
        try {
            const clientes = await Cliente.where({}).fetchAll({})
            return h.response({"clientes": clientes})
        } catch (error) {
            console.error(error.message);
        }
    }
    async create(request, h){
        try {
            const cliente = new Cliente(request.payload)
            const novoCliente = await cliente.save(null, { method: 'insert' })
            return h.response({"cliente": novoCliente})
        } catch (error) {
            console.error(error.message);
        }
    }
}

export default ClientesController