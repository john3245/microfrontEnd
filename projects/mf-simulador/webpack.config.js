const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({


  name:'mf-simulador',
  filename:'remoteEntry.js',
  exposes:{'./SimuladorModule':'./projects/mf-simulador/src/app/simulador/simulador.module.ts'},
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
