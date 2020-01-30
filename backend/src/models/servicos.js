import { Bookshelf } from "../config/database";
import { Agenda } from "../models/agenda"

class Servico extends Bookshelf.Model {
    get tableName(){
        return 'servicos'
    }
    profissional() {
        return this.belongsTo('Agenda')
    }
}

export default Bookshelf.model('Servico', Servico)