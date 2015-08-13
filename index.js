var custpi6 = require('./test');
custpi6.setbit(custpi6.add1, custpi6.ONrelay0);
setTimeout( function (){
		custpi6.clrbit(custpi6.add1, custpi6.OFFrelay0);
	}, 5000);
console.log('test blah');