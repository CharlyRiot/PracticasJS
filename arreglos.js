// var listaDeCompras = [];
// listaDeCompras.splice(0,0,'Carne', undefined, 'Carne');
// listaDeCompras.splice(3,0, 'Uvas');
// console.log(listaDeCompras);

// Lenght
// var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'];
// console.log(nombres);
// console.log(nombres.length + ' elementos en el arreglo');
//[ 'Matias', 'Maria', 'Diego', 'Rosa' ]
//4 elementos en el arreglo

// //******//metodos split y join(ejemplo enriquecido por mi)
// var nom = 'CarloS';
// nom = nom.split(''); //split(''); con comillas sin espacio separa a CarloS en todas sus letras o sea 6 letras o 6 elementos
// console.log('Antiguo arreglo: ' + nom); //imprime el resultado que es un nuevo arreglo con las letras como elementos [ 'C', 'a', 'r', 'l', 'o', 'S' ]
// nuevoNom = nom.pop(); //quita el ultimo elemento del arreglo nuevo que se creo con .split(''); o sea la "s" y lo guarda en nuevoNom
// //console.log(nuevoNom); "s"
// nom.push('s'); //nom ya es un arreglo sin la ultima "s" ahora con push se agrega la "S" y se guarda en la misma variable de arreglo
// console.log('El arreglo corregido es: ' + nom);
// nom = nom.join('');
// console.log('El arreglo nuevo y unido es: ' + nom);

// //METODO forEach()//
// var marks = ['Vocho', 'renult', 'Nissan'];
// marks.forEach(function(elementoCoche){
//     console.log('EL ELEMENTO ' + elementoCoche + ' ES EL VALOR ACTUAL DE LA ITERACION' );
// });
// return console.log('['+marks+']' + ' ES TODO EL ARREGLO');

//METODO forEach() PARA MATEMATICA DE NUMEROS//
// var numeros = [1, 5, 5];
// numeros.forEach(function(oper){
//     oper += oper;
//     console.log(oper);
// });

// //METODO FIND
// let palabras=['pato', 'carro', 'nombres', 'medicamentos'];
// let encoPala = palabras.find((word)=> word === 'carlos');// siempre retornara false porque 'carlos' no esta en el arreglo
// if (encoPala === 'carro'){
// return console.log(encoPala === 'carro'); //se busca que sea exactamente la cadena 'carro'
// } 
// return console.log (false);

// let numeros = [2,4,6,8,10];
// let numEnc = numeros.find((num)=>num === 8) //se busca que sea exactamente el numero 8
// if (numEnc == 8){
//     return true;
// }
// return false;

// function arrayContiene(array, elemento1) {
//     // Verifica SI EL ELEMENTO EXISTE dentro del arreglo recibido.
//     // Retornar True si está, o False si no está.
//     // Tu código:
//     let encontrados = array.find((e) => e == elemento1); //se busca que elemento1 exista sin importar el tipo de dato, 
//     //de ahí qie no se ponga '===' sino '==';
//     if (encontrados) return true;
//     else return false;
    
//  }
 
function agregarNumeros(arrayOfNums) {
    // El parámetro "arrayOfNums" debe ser un arreglo de números.
    // Suma todos los elementos y retorna el resultado.
    // Tu código:
    arrayOfNums.map((num)=> num + num){        
        return arrayOfNums;
    }
  
 }



