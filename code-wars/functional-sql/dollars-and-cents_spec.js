require('../support');
var E = require('./dollars-and-cents');
var assert = require("chai").assert;

describe("Dollas and sense", function(){

  it('Currency formatting', function(){
    assert.deepEqual(formatMoney(39.99), '$39.99');
  });

});