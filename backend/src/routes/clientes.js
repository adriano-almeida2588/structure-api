import ClientesController from "../controllers/clientes_controller"
const clienteController = new ClientesController()

export const clientes = [
    {
        path:'/api/clientes',
        method: 'GET',
        handler: clienteController.index
    },
    {
        path:'/api/clientes',
        method: 'POST',
        handler: clienteController.create
    }
]