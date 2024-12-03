const listaOspiti = [
    'Gianni',
    'Pedro',
    'Fedez',
    'Agnese',
    'Renzo',
    'Lucia'
]

const nameControl = prompt("Inserisci il nome dell'invitato")

// const control = listaOspiti.indexOf(nameControl)

// console.log(control)

// if (control >= 0 ){
//     alert("Entra pure")
// } else {
//     alert("tornatene a casa")
// }


let checking = false;
for( let i = 0 ; i < listaOspiti.length ; i++){

    if(listaOspiti[i] == nameControl ) {

        checking = true
       

    }   
}

if (checking == true){
    alert(" entra pure ")
} else {
    alert("tornatene a casa")
}