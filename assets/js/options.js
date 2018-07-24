
 $(document).on("change","#OpMarca",function(){

var MarcaHonda = "<option value='0' selected>Selecciona una opción...</option><option value='1'>Civic</option><option value='2'>Accord</option><option value='2'>Fit</option"
var MarcaHyundai = "<option value='0' selected>Selecciona una opción...</option><option value='3'>Elantra</option><option value='4'>Accend</option>"
var MarcaToyota = "<option value='0' selected>Selecciona una opción...</option><option value='5'>Corolla</option><option value='6'>Hilux</option>"
var MarcaKia = "<option value='0' selected>Selecciona una opción...</option><option value='7'>Forte</option><option value='8'>Rio</option>"
var MarcaFord ="<option value='0'selected>Selecciona una opción...</option><option value='9'>Explorer</option><option value='10>Focus</option"
var MarcaMitsu ="<option value='0 selected>Selecciona una opción...</option><option value='11'>Lancer</option><option value='12'>OutLander</option>"
var idOpMarca = $("#OpMarca option:selected").val();

if(idOpMarca == "honda")
    $("#OpModelo").html(MarcaHonda);
else if(idOpMarca =="toyota")
    $("#OpModelo").html(MarcaToyota);
else if(idOpMarca =="hyundai")
	$("#OpModelo").html(MarcaHyundai);
else if(idOpMarca == "kia")
    $("#OpModelo").html(MarcaKia);
else if(idOpMarca == "ford")
	$("#OpModelo").html(MarcaFord);
else if(idOpMarca == "mitsu")
	$("#OpModelo").html(MarcaMitsu);
});
