//Questão 4
//retorna o percentual de faturamento por estado
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
