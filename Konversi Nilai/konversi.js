function konversi(){
	var nilai = document.getElementById("nilai");
	var predikat = document.getElementById("predikat");
	if(nilai.value <= 40)
		predikat.value = "E"
	else if(nilai.value <= 55)
		predikat.value = "D"
	else if(nilai.value <= 60)
		predikat.value = "C"
	else if(nilai.value <= 65)
		predikat.value = "BC"
	else if(nilai.value <= 70)
		predikat.value = "B"
	else if(nilai.value <= 80)
		predikat.value = "AB"
	else if(nilai.value <= 100)
		predikat.value = "A"
	else
		alert("Nilai yang dimasukkan melampaui range")
	var output = nilai.value;
	predikat.value = output();
}
