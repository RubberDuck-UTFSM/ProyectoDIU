const nconf = require('nconf');
const { postLogin, postSignup } = require('../controllers/AuthController');

const userPasswordRegex = nconf.get('userPasswordRegex');

const validatePostLogin = {
  schema: {
    body: {
      type: 'object',
      properties: {
        email: { type: 'string', format: 'email' },
        password: { type: 'string', format: 'regex', pattern: userPasswordRegex },
      },
      required: ['email', 'password'],
    },
  },
};

const validatePostSignup = {
  schema: {
    body: {
      type: 'object',
      properties: {
        email: { type: 'string', format: 'email' },
        password: {
          type: 'string', format: 'regex', pattern: userPasswordRegex, minLength: 6, maxLength: 20,
        },
        name: {type: 'string'},
      },
      required: ['email', 'password', 'name'],
    },
  },
};

module.exports = {
  validatePostLogin,
  validatePostSignup,
};

module.exports = async (fastify) => {
  fastify.post('/auth/login', validatePostLogin, postLogin);
  fastify.post('/auth/signup', validatePostSignup, postSignup);

  fastify.get("/panel/login", async function(request, reply) {
    reply.sendFile("panel.html");
    return reply;
  });
};