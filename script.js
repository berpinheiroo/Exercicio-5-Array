/* Crie um algoritmo onde você deve criar um array que receba 5 números positivos
ou negativos, depois de popular esse array você deve substituir os valores
POSITIVOS por “true” e os NEGATIVOS por “false”.
Ex.: array[-3,5,-6,-8,2] -> array[false,true,false,false,true]] */

var arrayA = []

for(var index = 0; index < 5; index++){
   arrayA[index] = prompt("Insira um numero, seja ele positivo ou negativo")
}
console.log(arrayA)

for(var index = 0; index < 5; index++){
   if(arrayA[index] < 0){
      arrayA[index] = false
   } else {
      arrayA[index] = true
   }
}
console.log(arrayA)