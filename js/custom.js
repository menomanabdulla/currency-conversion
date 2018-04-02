let curOptions = document.getElementById('currencyOptions');
let curCollection = {
	default-value: 'Its default',
	Usd: 'Usd',
	EUR: 'EUR',
	SAR: 'SAR',
	IRR: 'IRR',
	ZWD: 'ZWD',
	VND: 'VND',
	value: function(arg1,arg2){
		return arg1*arg2;
	}
};
curOptions.addEventListener('change',function(){
	let currency = this.options[this.selectedIndex].getAttribute('value');
});