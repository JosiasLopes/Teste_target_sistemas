var dias = [
	{
		"dia": 1,
		"valor": 22174.1664
	},
	{
		"dia": 2,
		"valor": 24537.6698
	},
	{
		"dia": 3,
		"valor": 26139.6134
	},
	{
		"dia": 4,
		"valor": 0.0
	},
	{
		"dia": 5,
		"valor": 0.0
	},
	{
		"dia": 6,
		"valor": 26742.6612
	},
	{
		"dia": 7,
		"valor": 0.0
	},
	{
		"dia": 8,
		"valor": 42889.2258
	},
	{
		"dia": 9,
		"valor": 46251.174
	},
	{
		"dia": 10,
		"valor": 11191.4722
	},
	{
		"dia": 11,
		"valor": 0.0
	},
	{
		"dia": 12,
		"valor": 0.0
	},
	{
		"dia": 13,
		"valor": 3847.4823
	},
	{
		"dia": 14,
		"valor": 373.7838
	},
	{
		"dia": 15,
		"valor": 2659.7563
	},
	{
		"dia": 16,
		"valor": 48924.2448
	},
	{
		"dia": 17,
		"valor": 18419.2614
	},
	{
		"dia": 18,
		"valor": 0.0
	},
	{
		"dia": 19,
		"valor": 0.0
	},
	{
		"dia": 20,
		"valor": 35240.1826
	},
	{
		"dia": 21,
		"valor": 43829.1667
	},
	{
		"dia": 22,
		"valor": 18235.6852
	},
	{
		"dia": 23,
		"valor": 4355.0662
	},
	{
		"dia": 24,
		"valor": 13327.1025
	},
	{
		"dia": 25,
		"valor": 0.0
	},
	{
		"dia": 26,
		"valor": 0.0
	},
	{
		"dia": 27,
		"valor": 25681.8318
	},
	{
		"dia": 28,
		"valor": 1718.1221
	},
	{
		"dia": 29,
		"valor": 13220.495
	},
	{
		"dia": 30,
		"valor": 8414.61
	}
];

questão 1:soma = 91
questão 2:
//javascript
function Fibonaci(tamanho){
  var fib = new Array();
  fib[0] = 0;
  fib[1] = 1;

  for(var i=2;i<tamanho;i++){
      fib[i] = fib[i-1]+fib[i-2];
      console.log(fib[i]);
  }
}
Fibonaci(10);


Array.max = function(array) {
    return Math.max.apply(Math, array);
};

Array.min = function(array) {
			var filtered = array.filter(function(val){ return val>0 });
     
    return Math.min.apply(Math, filtered);
};



//var raizes = dias.map((dia,indice) => Array.min(dia.valor));
var maior_no_mes = Array.max(dias.map((dia,indice) => dia.valor));
var menor_no_mes = Array.min(dias.map((dia,indice) => dia.valor));

console.log("Maior faturamento em 1 dia: "+maior_no_mes);
console.log("Menor faturamento em 1 dia: "+menor_no_mes);
//console.log((dias.reduce(reducer)));



//calcula a media excluindo os dias que não houveram faturamento
function calculaMedia(){
var ct = 0;
var diasMedia = 0;
for(var item in dias){
if(dias[item].valor<=0) ct++;
}
diasMedia = dias.length-ct;
var soma = 0;
var total = 0;
for(var item in dias){
soma = soma+dias[item].valor;
}
total = soma/diasMedia;
return total;
}
console.log("Media: "+calculaMedia());

function maiorQueMedia(){
var cont=0;
for(var item in dias){
if(dias[item].valor>calculaMedia())cont++;
}
return cont;
}
//retorna a quantidade de dias maiores que a media
console.log("maiores que a media: "+maiorQueMedia());

//retorna o faturamento por estado
function percentualFaturamento(){
var sp = 67.83643;
var rj = 36.67866;
var mg = 29.22988;
var es = 27.16548;
var out = 19.84953;
var total = sp + rj + mg + es + out;
var psp =0; var prj =0; var pmg = 0; var pes =0; var pout = 0;

psp = ((sp/total)*100);
prj = ((rj/total)*100);
pmg = ((mg/total)*100);
pes = ((es/total)*100);
pout = ((out/total)*100);

return "Porcentagem São Paulo: "+psp.toFixed(1)+"%"+"\n"+
" Porcentagem Rio de Janeiro: "+prj.toFixed(1)+"%"+"\n"+
" Porcentagem Minas Gerais: "+pmg.toFixed(1)+"%"+"\n"+
" Porcentagem Espirito Santo: "+pes.toFixed(1)+"%"+"\n"+
" Porcentagem Outros: "+pout.toFixed(1)+"%";

}

console.log(percentualFaturamento());

//função inverter string
function invert(x){
var vetor = x.split("");

var str = "";
for(var i=vetor.length-1;i>=0;i--){

 str += vetor[i];
}
//vetor_inverso.pop(vetor_inverso.length);
//str =vetor_inverso.toString();

return str;
}
console.log(invert("carambola"));




