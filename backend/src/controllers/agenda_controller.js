import Agenda from "../models/agenda"
let agenda

class AgendaController {
    constructor(){
        agenda = new Agenda()
    }
    async index(request, h){
        try {
            const agendas = await agenda.where({}).fetch({withRelated: ['clientes', 'profissionais']})            
            return h.response({"agendas": agendas})
        } catch (error) {
            console.error(error.message);
        }
    }
}
export default AgendaController