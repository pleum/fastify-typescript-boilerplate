import fastify, { FastifyInstance } from 'fastify';

const server: FastifyInstance = fastify();

server.get('/', function(request, reply) {
  reply.send({ hello: 'world' });
});

server.listen(4000, '0.0.0.0', function(err) {
  if (err) {
    process.exit(1);
  }
});
