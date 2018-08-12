module.exports = function (kibana) {
  return new kibana.Plugin({
    name: 'kable-average',
    require: ['kable'],
    init: function (server) {
      server.plugins.kable.addFunction(require('./functions/average'));
    }
  });
};
