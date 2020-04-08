const { Model } = require('objection');
const bcrypt = require('bcrypt-nodejs');

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['email', 'name', 'password'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 300 },
        email: { type: 'string', minLength: 1, maxLength: 300 },
        password: { type: 'string', minLength: 1, maxLength: 300 },
      }
    };
  }

  async $beforeInsert(queryContext) {
    const user = this;
    bcrypt.genSalt(10, (err, salt) => {
      if (err) { return next(err); }
      bcrypt.hash(user.password, salt, null, (err, hash) => {
        if (err) { return next(err); }
        user.password = hash;
      });
    });
  }

  async comparePassword (candidatePassword) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if (err) { reject(err); }
        resolve(isMatch);
      });
    });
  };

  static get relationMappings() {
    const Event = require('./Event');

    return {
    };
  }
}

module.exports = User;


