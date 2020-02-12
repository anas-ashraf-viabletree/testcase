module.exports = {


  friendlyName: 'Sum',


  description: 'Sum math.',


  inputs: {
    num1:{
      type: 'number',
      required: true
    },
    num2: {
      type: 'number',
      required: true
    }
  },


  exits: {

  },


  fn: async function ({num1, num2}, exits) {
    return exits.success(num1 + num2);
  }


};
