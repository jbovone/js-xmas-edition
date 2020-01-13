const $form = document.querySelector('#carta-a-santa')
$form.onsubmit = validarForm;

function validarNombre(nombre) {
    if (nombre.length === 0) {
        return 'El campo nombre debe tener al menos 1 caracter'
    }

    if (nombre.length > 10) {
        return 'El campo nombre no puede tener mas de 10 caracteres'
    }

    if (!/^[a-z]+$/i.test(`${nombre}`)) {
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

let cuentaErrores = 0

function manejarErrores(errores) {

    const $exito = document.querySelector('#exito')
    let keys = Object.keys(errores)
    

    keys.forEach(
        function (key) {
            let error = errores[key]
            let $error = document.querySelector(`#error-${key}`)
            const $errorLista = document.querySelector('#errores')
        
            if (!$error && error !== '') {
                $form[key].className = 'error'
                $error = document.createElement('li')
                $error.innerText = error
                $error.id = `error-${key}`
                $errorLista.appendChild($error)
                cuentaErrores++
            }
            
            if ($error && error === '') {
                $errorLista.removeChild($error)
                $form[key].className = ''
                cuentaErrores--
            }
        }
    )
        
    if (cuentaErrores === 0) {
        $exito.className = ''
        setTimeout(irAWishlist, 5000)
       
    }
}

function irAWishlist(){
    window.location.assign('wishlist.html')
}    
