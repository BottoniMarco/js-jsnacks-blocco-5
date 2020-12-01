//Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri






function filter(num1 , num2 , array2) {
  var array2 = []

  var j = 0;

  while (j <= num2) {
    if (j>=num1) {
      array2.push(array[j])
    }
    j++;
  }

  return array2;
}

var a = 2;

var b = 5;

var array = ["a","b","c","d","e","f","g"];



var result = filter(a , b , array);

console.log("risultato ", result);
