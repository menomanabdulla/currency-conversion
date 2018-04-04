let curOptions = document.getElementById('currencyOptions');
let curCollection = {
	dfltValue: 'Its default',
	Usd: 84.09,
	EUR: 103.24,
	SAR: 22.43,
	INR: 1.30,
	IRR: 0.0025,
	ZWD: 0.230496,
	VND: 0.0037,
	finalValue: function(arg1,arg2){
		return arg1*arg2;
	}
};
curOptions.addEventListener('change',function(){
	let currency = this.options[this.selectedIndex].getAttribute('value');
	let ammount = document.getElementById('ammount').value;
	//console.log(curCollection[currency]);
	//console.log(ammount);
	//console.log(typeof(ammount));
	let bdTaka = function(){
		return this.finalValue(curCollection[currency],Number(ammount));
	}.bind(curCollection);
	//let finelResult = bdTaka();
	//finelResult = finelResult.toFixed(3);
	document.getElementById('resultBlock').innerHTML = bdTaka();
});

