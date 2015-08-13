var raspi = require('raspi');
var I2C = require('raspi-i2c').I2C;
var i2c = new I2C();

// I2C addresses
// use switch S1 on Custard Pi 6 to set the address

exports.add0= 0x20;
exports.add1= 0x21;
exports.add2= 0x22;
exports.add3= 0x23;
exports.add4= 0x24;
exports.add5= 0x25;
exports.add6= 0x26;
exports.add7= 0x27;

//set gpio pin 
var gpio = 0x09;

// set relay ON
exports.ONrelay0= 0x01;
exports.ONrelay1= 0x02;
exports.ONrelay2= 0x04;
exports.ONrelay3= 0x08;
exports.ONrelay4= 0x10;
exports.ONrelay5= 0x20;
exports.ONrelay6= 0x40;
exports.ONrelay7= 0x80;

// set relay OFF
exports.OFFrelay0= 0xFE;
exports.OFFrelay1= 0xFD;
exports.OFFrelay2= 0xFB;
exports.OFFrelay3= 0xF7;
exports.OFFrelay4= 0xEF;
exports.OFFrelay5= 0xDF;
exports.OFFrelay6= 0xBF;
exports.OFFrelay7= 0x7F;


// raspi.init(function() {
// 	// setbit(0x21, 0x09, 0x01);
// 	// setbit(0x21, 0x09, 0x02);
// 	// clrbit(0x21, 0x09, 0xFE);
// });

//setbit(add1, ONrelay0);
// // setbit(0x21, 0x02);
// clrbit(0x21, 0xFE);


function setbit(board, byte) {
	outstatus = i2c.readByteSync(board) | byte;
	console.log(outstatus);
	i2c.writeByteSync(board, gpio, outstatus);
}
function clrbit(board, byte) {
	outstatus = i2c.readByteSync(board) & byte;
	console.log(outstatus);
	i2c.writeByteSync(board, gpio, outstatus);
}

function alloff(board, byte) {
	outstatus = 0x00;
	i2c.writeByteSync(board, gpio, outstatus);
}

exports.setbit = setbit;
exports.clrbit = clrbit;
exports.alloff = alloff;
// exports.ONrelay0 = ONrelay0;