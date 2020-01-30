import { Bookshelf } from "../config/database"
import { Servico } from "../models/servicos"
import { Cliente } from "../models/cliente"
import { Profissional } from "../models/profissional"

class Agenda extends Bookshelf.Model {
    get tableName(){
        return 'agenda'
    }
    servico(){
        return this.belongsTo('Servico', 'servico_id')
    }
    clientes(){
        return this.belongsTo('Cliente', 'cliente_id')
    }
    profissionais(){
        return this.belongsTo('Profissional', 'profissional_id')
    }
}
module.exports = Bookshelf.model('Agenda', Agenda)