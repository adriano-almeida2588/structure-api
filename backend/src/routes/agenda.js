import AgendaController from "../controllers/agenda_controller";
const agendaController = new AgendaController()

exports.agenda = [
    {
        path: '/api/agenda',
        method: 'GET',
        handler: agendaController.index
    }
]