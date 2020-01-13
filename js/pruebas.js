function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'El campo nombre debe tener al menos 1 caracter',
        'Validar nombre no validó que el nombre no sea vacío',
    );

    console.assert(
        validarNombre(
            'ddddddddddddddddddddddddddd') ===
            'El campo nombre no puede tener mas de 10 caracteres',
        'Validar nombre no validó que el nombre no tenga mas de 10 caracteres',
    );

    console.assert(
        validarNombre('5432') === 'El campo nombre solo puede tener letras',
        'validar nombre no comprueba que en el campo solo hay letras'
    )
    console.assert(
        validarNombre('asdfg') === '',
        'validar nombre fallo con un nombre valido'
    )
}
probarValidarNombre();



function probarValidarCiudad() {
    console.assert(
        validarCiudad('Jujuy') === '',
        'validar ciudad dio error con un nombre valido'
    )

    console.assert(
        validarCiudad('') === 'El campo ciudad no puede estar vacio',
        'validarCiudad no valido que el campo ciudad no este vacio'
    )
}
probarValidarCiudad()



function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo('') === 'La descripcion del regalo no puede quedar vacia',
        'validar descripcion regalo no valido que el campo de la descrpcion del regalo no sea vacio'
    )

    console.assert(
        validarDescripcionRegalo('descripciondescripciondescripciondescripciondescripciondescripciondescripciondescripciondescripciondescripciondescripcion'),
        'La descripcion del regalo no puede superar los 100 caracteres'
    )

    console.assert(
        validarDescripcionRegalo('asdfghjk') === '',
        'Validar Descripcion Regalo fallo con un nombre valido'
    )
}
probarValidarDescripcionRegalo()
