import { Bookshelf } from '../config/database'
import { Agenda } from '../models/agenda'

class Profissional extends Bookshelf.Model {
    get tableName(){
        return 'profissionais'
    }

    agendas(){
        return this.hasMany('Agenda', 'profissional_id')
    }
}

export default Bookshelf.model('Profissional', Profissional)