const $form = document.querySelector('#carta-a-santa')
const ciudad = $form.ciudad.value                                       //document.querySelector('[name=ciudad]').value
const nombre = $form.nombre.value
const comportamiento = $form.comportamiento.value
const descripcionRegalo = $form['descripcion-regalo'].value             //$form.descripcion-regalo.value===syntax error
const $exito = document.querySelector('#exito')
const $errores = document.querySelector('#errores')
const $enviarCarta = document.querySelector('#enviar-carta')

//console.log(nombre + ciudad + comportamiento + descripcionRegalo)
//console.log(document.querySelector('[name=nombre]').value)
//console.log(validarNombre(""))


function validarNombre(nombre) {
    if (nombre.length === 0) {
        return 'Este campo debe tener al menos 1 caracter'
    }

    if (nombre.length >= 10) {
        return 'Este campo no puede tener mas de 10 caracteres'  
    }

    if (!/^[A-z]+[A-z]+[^_]$/.test(`${nombre}`)) {   //este if estaba pensado para mostrar este error Y los otros si los hubiera, pero return termina la funcion, probablemente necesite una funcion aparte. Plus el REGex podria mirarse un poco mas.
        return 'Este campo solo puede tener letras'
    }
    return ''
}


function validarCiudad(ciudad) {
    if (ciudad.length === 0) {
        return 'El campo ciudad no puede estar vacio'
    }
    return ''
}


function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length === 0) {
        return 'La descripcion del regalo no puede quedar vacia'
    }
    if (descripcionRegalo.length >= 100) {
        return 'La descripcion del regalo no puede superar los 100 caracteres'
    }
    return ''
}




$enviarCarta.onclick = function (event) {
    
    
    validarForm( )
    event.preventDefault()
}



function validarForm() {
    let signalGreenFlag = 0

    if (validarNombre(nombre) !== '') {
        manejarErrores(validarNombre(nombre))
    }
    else (signalGreenFlag++)


    if (validarCiudad(ciudad) !== '') {
        manejarErrores(validarCiudad(ciudad))
    }
    else (signalGreenFlag++)


    if (validarDescripcionRegalo(descripcionRegalo) !== '') {
        manejarErrores(validarDescripcionRegalo(descripcionRegalo))
    }
    else (signalGreenFlag++)

    if (signalGreenFlag === 3) {
        $exito.className = ''
    }
    
}


function manejarErrores(errores) {
    let arrayErrores = []
    arrayErrores.push(errores)

    for (let i = 0; i < arrayErrores.length; i++) {
        $errores.appendChild(
            document.createTextNode(arrayErrores[i])
        )
        $errores.appendChild(
            document.createElement('br')
        )

    }
}




//  /define RegEX/
//  .test(' aca inserta contra que se prueba la RegEX') 
//
//
// [] === argumento referido a secuencias [a-z] [0-9] etc [lunes domingo] not!xD y acepta parametros aislados ej [a-z_]
// $ === termina con  
// ^ === empieza con
// + === contiene aunque sea un
// {2,3} === modifica el argumento previo pidiendo tantos elementos como el rango definido
// /i === TODO lo anterior NO ES case sensitive
// [A-z] === La secuencia no es case sensitive.
// . === Cualquier Caracter
// \ === deshace el status de modificador del siguiente caracter para poder usarlo como argumento. \\ se desmodifica a si mismo?