function submitBiodata() {
	var sd = document.getElementById("sd").value;
	var smp = document.getElementById("smp").value;
	var sma = document.getElementById("sma").value;

	var hasil = "SD : " + sd + "<br>" +
				"SMP : " + smp + "<br>" +
				"SMA : " + sma; 

	document.getElementById("hasil").innerHTML = hasil;
}