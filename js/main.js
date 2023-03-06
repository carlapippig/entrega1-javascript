let mensajeCosto = ''
let continuar = true
const mensajeInicial = 'Ingresá el código de la prenda que te interesa: \n' +
                        'A-Jumper Bombón \n' +
                        'B-Saquito p!nk \n' +
                        'C-Corset Castle \n' +
                        'D-Piyama Bear \n' 

function iniciarConsulta() {
    let seleccion = prompt(mensajeInicial) .toLowerCase() .trim()
    console.log(seleccion)

    if(seleccion !== 'a' && seleccion !== 'b' &&seleccion !== 'c' &&seleccion !== 'd'){
        alert('⛔Por Favor, elegí un código válido!')
        
    } 
    else{
    switch(seleccion){

        case 'a':
            mensajeCosto = 'El Jumper Bombón cuesta $5200'
            break
        case 'b':
            mensajeCosto = 'El Saquito P!nk cuesta $5450'
            break
        case 'c':
            mensajeCosto = 'El Corset Castle cuesta $5200'
            break
        case 'd':
            mensajeCosto = 'El Piyama Bear cuesta $7500'
            break
        default:
            console.error('⛔ Ups! Algo salió mal')

    }
    alert(mensajeCosto)
}
}
function preguntarPrecios(){
    while(continuar){
        iniciarConsulta()
        continuar = confirm('💫¿Querés saber otro precio?')
    }
}
