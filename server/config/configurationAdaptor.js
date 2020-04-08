const nconf = require('nconf');
const _ = require('lodash');

const loadSettings = ({ appSettingsPath }) => new Promise((resolve, reject) => {
  try {
    if (_.isEmpty(appSettingsPath)) {
      throw new Error('Directorio de Configuración del Servidor no Encontrado.');
    }
    nconf.file({
      file: appSettingsPath,
      logicalSeparator: '.',
    });
    resolve();
  } catch (err) {
    reject(err);
  }
});

module.exports.loadSettings = loadSettings;