function lastmod(){
	document.getElementById("pesan").innerHTML = "last modified at " + document.lastModified;
}
function plus(){
	val1 = eval(form.val1.value)
	val2 = eval(form.val2.value)
	eq = val1+val2
	form.sum.value = eq
	lastmod();
}
function minus(){
	val1 = eval(form.val1.value)
	val2 = eval(form.val2.value)
	eq = val1-val2
	form.sum.value = eq
	lastmod();
}
function times(){
	val1 = eval(form.val1.value)
	val2 = eval(form.val2.value)
	eq = val1*val2
	form.sum.value = eq
	lastmod();
}
function devide(){
	val1=eval(form.val1.value)
	val2=eval(form.val2.value)
	eq = val1/val2
	form.sum.value = eq
	lastmod();
}