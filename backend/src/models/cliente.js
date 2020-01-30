import { Bookshelf } from "../config/database"
import { Agenda } from "../models/agenda"
import { Servico } from "../models/servicos"

class Cliente extends Bookshelf.Model {
    get tableName(){
        return 'clientes'
    }
    servicos(){
        return this.hasMany('Servico').through('Agenda')
    }
    agendas(){
        return this.hasMany('Agenda', 'cliente_id')
    }
}
module.exports = Bookshelf.model('Cliente', Cliente)