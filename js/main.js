const $form = document.querySelector('#carta-a-santa')
$form.onsubmit = validarForm;

function validarNombre(nombre) {
    if (nombre.length === 0) {
        return 'El campo nombre debe tener al menos 1 caracter'
    }

    if (nombre.length >= 10) {
        return 'El campo nombre no puede tener mas de 10 caracteres'
    }

    if (!/^[A-z]+$/.test(`${nombre}`)) {
        return 'El campo nombre solo puede tener letras'
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
    if (descripcionRegalo.length > 100) {
        return 'La descripcion del regalo no puede superar los 100 caracteres'
    }
    return ''
}


function validarForm(event) {
    
    const ciudad = $form.ciudad.value
    const nombre = $form.nombre.value
    const descripcionRegalo = $form['descripcion-regalo'].value

    let errorNombre = validarNombre(nombre)
    let errorCiudad = validarCiudad(ciudad)
    let errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo)

    let errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo
    }
    manejarErrores(errores)
    event.preventDefault()
}


function manejarErrores(errores) {

    const $exito = document.querySelector('#exito')
    let keys = Object.keys(errores)
    let cuentaErrores = 0

    keys.forEach(
        function (key) {
            let error = errores[key]

            if (error !== '') {
                $form[key].className = 'error'
                manejarListaError(error, key)
                cuentaErrores++

            } else {
                $form[key].className = ''
                manejarListaError(error, key) 
            }
        }
    )

    if (cuentaErrores === 0) {
        $exito.className = ''
        setTimeout(irA, 5000)
        function irA(){
            window.location.assign('wishlist.html')
        }    
    }
}


function manejarListaError(error, key) {
    
    let $error = document.querySelector(`#error-${key}`) || 'no-existe'
    const $errorLista = document.querySelector('#errores')

    if ($error === 'no-existe' && error !== '') {

        $error = document.createElement('li')
        $error.innerText = error
        $error.id = `error-${key}`
        $errorLista.appendChild($error)
    }
    
    if ($error !== 'no-existe' && error === '') {
        $errorLista.removeChild($error)
    }
}




//==============================================RegEx=============================================
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

