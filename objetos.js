const datos = {//esta linea crea una variable objeto que contiene las siguientes propiedades:
    nom: "Carlos",//llave nom contiene su propiedad o valor Carlos de tipo string
    ape: "Contreras",//llave ape contiene su valor Contreras de tipo string
    dir: "Calle 1 N.34",//llave dir contiene su valor Calle 1 N.34 de tipo string
    pas: ["jugar", 'bailar','ejercicio'], //llave pas contiene su valor que es un arreglo de 3 elementos
    con: {//llave con tiene su valor como otro objeto
        email: "carlosc@misitio.com",//llave email contiene su valor email de tipo string
        tel: "2461233211",//llave tel contiene su valor 2461233211 de tipo string

    },
    saludo:function(){ //esta es una funcion anonima
    console.log (`Hola mi nomnbre es ${this.nom} ${this.ape} y vivo en ${this.dir} `)
    },
    misDatos:function(){
    console.log(`Puedes ponerte en contacto conmigo al telefono ${this.con.tel} o al email ${this.con.email}`)
    },
    misPas:function(){
        console.log(`En mis ratos libres me gusta ${this.pas[0]}, ${this.pas[1]} y sobre todo hacer ${this.pas[2]}`)
    }

    
    
}
datos.saludo();
datos.misDatos();
datos.misPas();
