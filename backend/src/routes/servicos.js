import ServicoController from '../controllers/servicos_controller'
const servicoController = new ServicoController()

exports.servicos = [
  {
    path: '/api/servicos',
    method: 'GET',
    handler: servicoController.index
  },
  {
    path: '/api/servicos/create',
    method: 'POST',
    handler: servicoController.create
  }
]
