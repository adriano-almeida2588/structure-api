exports.usuarios = [
  {
    path:'/api/usuarios',
    method: 'GET',
    handler: (req, h) => {
      return h.response({"Usuarios":"Lista de Usuários"})
    }
  }
]
