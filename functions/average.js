var _ = require('lodash');
var Strand = require('../../kable/server/lib/strand');
var columnMath = require('../../kable/server/lib/column_math');
var dataTableDef = require('../../kable/server/types/data_table');

module.exports = new Strand('average', {
  args: [
    {
      name: '_input_',
      types: ['dataTable']
    },
    {
      name: 'col1',
      types: ['number', 'string']
    },
    {
      name: 'col2',
      types: ['number', 'string']
    },
    {
      name: 'dest',
      types: ['string'],
      help: 'The destination field. If not specified the destination will be the second field'
    }
  ],
  default_types: ['string', 'number'],
  help: 'Average one column, or number, by another',
  fn: function average(args, kblConfig) {
    return columnMath(
      args._input_,
      [args.col1, args.col2],
      function (col1, col2) {
        return (col1 + col2 / 2)
      },
      args.dest
    );
  }
});
