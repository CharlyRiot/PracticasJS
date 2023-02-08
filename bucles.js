//***CICLO O BUCLE FOR***//
//EJEMPLO 1
// var suma = 0; //Iniciamos viariable suma en 0
// for (var i=0; i<5; i++){ //bucle dice: i iniciara en 0 y se sumara 1 hasta que llegue a 5
// 	suma += 1; //suma por su parte aprovechando que esta en un ciclo, en cada vuelta se sumara a si misma 1
//  console.log(suma);//entonces console.log imprimira en pantalla el resultado de suma
// }

//EJEMPLO 2
//var suma = 0;
//for (let i = 0; i < 5; i++) {//bucle dice: i iniciara en 0 y se sumara 1 hasta que llegue a 5//
//  suma = suma + i;//suma por su parte se sumara a su valor el valor de i en cada vuelta
//  console.log('Variable de iteración: ', i);//imprime el numero de repeticiones de i
// }
// console.log('Variable suma: ', suma);//imprime la suma de suma + i


/*IMPRIMIR LAS ITERACIONES
UNA VARIABLE SE REPETIRA TANTAS VECES COMO EL WHILE INDIQUE E IMPRIMIRÁ LA ITERACION EN LA QUE VAYA MÁS UNO*/
// var iteraciones =0;
// while (iteraciones < 3){ //en esta linea el numero 3, son el numero de veces que se repita el bucle
//     iteraciones += 1;//esta linea es importante para no crear un bucle infinito. Suma vale cero luego 1, luego 2...
//     //Al momento la variable suma vale 3 entonces ¿3 es menor que 3? no, es igual y se comple el while donde mientras suma 
//     //sea menor que tres deberá repetirse.
//     console.log(iteraciones);
// }

/*CONDICIONAL IF */
// let edad = 60;
// if(edad > 17 && edad < 60){
//     console.log('Eres mayor de edad');
// } else if (edad >= 60){
//     console.log('Eres mayor de edad y persona de la 3ra edad');
// }else {
//     console.log('Eres menor de edad');
// }
// let grado = 4

/* CASO SWITCH*/
// switch (grado) {
//     case 1:
//         console.log('Estas es 1° de Secundaria');
//         break;
//     case 2:
//         console.log('Estas es 2° de Secundaria');
//         break;
//     case 3:
//         console.log('Estas es 3° de Secundaria');
//         break;

//     default:
//         console.log('grado no valido');
//         break;
// }

/*BUCLE WHILE*/
// let contador = 0;
// // while (contador < 10) {
// //     console.log('While '+contador);
// //     contador++;
// // }

/*BUCLE DO WHILE*/
// do {
//     console.log('do while '+contador);
//     contador++;
// } while (contador <10);


/*BUCLE FOR*/
// let ite = 0
// for (let i = 0; ite < 5; i++) {
//     ite += 2;
//     console.log(ite);   
// }

// /*BUCLE FOR IN*/
/*EL BUCLE FOR IN RECORRE LAS PROPIEDADES Y SUS VALORES DE UN OBJETO */
// const carr = {
//     marca:'vocho',
//     llantas: 'Firestone',
//     motor: 'v2'
// }
// for (const propAut in carr) { //podemos leerlo como: "Crea la constante propAut que guarde las propiedades EN(in) el objeto carr"
//     console.log(`${propAut}, ${carr[propAut]}`);//así podemos imprimir las propiedades del objeto carr
// }

// const datosPer ={
//     nombre:'Carlos',
//     apellPat:'Contreras',
//     apellMat:'Herrera'
// }
// for (const dato in datosPer) {
//     console.log(`${dato}, ${datosPer[dato]}`);
 
//     }

/*EL BUCLE FOR OF RECORRE LOS ELEMENTOS DE CUALQUIER OBJETO ITERABLE*/
// let frase =['Hola Mundo'];
// for (const caracter of frase) {
//     console.log(caracter);
// }

// let palabras ='Hola Mundo';
// for (const palabra of palabras) {
//     console.log(palabra);
// }

