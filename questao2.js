
//Reposta da segunda questão
//sequencia Fibonaci 
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