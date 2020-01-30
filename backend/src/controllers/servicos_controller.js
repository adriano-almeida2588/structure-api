import Servico from "../models/servicos"
let servico

class ServicosController {
  constructor(){
    servico = new Servico()
  }
  async index(req, h){
    try {
      const servicos = await servico.where({}).fetchAll({})    
      return h.response({"servicos": servicos})
    } catch (error) {
      console.error(error.message);
    }
  }
  async create(request, h){
    try {      
      const retornoServico = await new Servico(request.payload).save(null, {method: 'insert'})
      return h.response({"servico": retornoServico})
    } catch (error) {
      console.error(error.message);  
    }
  }
}

export default ServicosController