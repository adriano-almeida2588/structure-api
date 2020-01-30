const knex = require("knex")({
    client:'postgresql',
    connection: {
        host:'db',
        user:'postgres',
        // port:'5432',
        password:'postgres',
        database:'db_api_agendamento_servicos',
        charset:'utf8'
    }
})

export const Bookshelf = require('bookshelf')(knex)
Bookshelf.plugin('registry')
Bookshelf.plugin('visibility')