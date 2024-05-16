const fp = require( 'fastify-plugin');
const { PrismaClient } = require ('@prisma/client');

async function prismaPlugin(fastify, options) {
    const db = new PrismaClient();

    // Adiciona o objeto Prisma Client ao fastify, para que 
    // possa ser acessado em rotas e outros plugins
    fastify.decorate('db', db);

    // Se você quiser pode adicionar um hook para ter 
    // acesso ao db dentro do objeto de request.
    fastify.addHook('onRequest', (req, reply, done) => {
        req.db = db
        done();
    });

    // Fecha a conexão do Prisma Client quando o aplicativo 
    // Fastify é fechado
    fastify.addHook('onClose', async  (fastifyInstance) => {
        fastifyInstance.db.$disconnect();
    });
}

module.exports= fp(prismaPlugin);
