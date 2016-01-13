

module.exports = [

      {
        method: 'GET',
        path: '/',
        handler: (request, reply) => {
          return reply.file('index.html');
        }
      },

      {
        method: 'GET',
        path: '/{car}',
        handler: (request, reply) => {
          return reply();
        } 
      }

  ];