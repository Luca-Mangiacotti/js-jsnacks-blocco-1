const listaOspiti = [
    'Gianni',
    'Pedro',
    'Fedez',
    'Agnese',
    'Renzo',
    'Lucia'
]

const nameControl = prompt("Inserisci il nome dell'invitato")

const control = listaOspiti.indexOf(nameControl)

console.log(control)

if (control >= 0 ){
    alert("Entra pure")
} else {
    alert("tornatene a casa")
}