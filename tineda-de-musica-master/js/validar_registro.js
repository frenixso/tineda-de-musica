$(document).ready(function() {

    $('#formulario-registro').validate(
        {
            rules: {
                rut: {
                    required: true,
                },
                correo: {
                    required: true,
                    email: true,
                },
                password: {
                    required: true,
                    minlength: 5,
                },
                password2: {
                    required: true,
                    minlength: 5,
                    equalTo: '#password'
                },
            },
            messages: {
                rut: {
                    required: 'El rut es un campo obligatorio',
                },
                correo: {
                    required: 'El correo es un campo obligatorio',
                    email: 'El formato del correo es incorrecto',
                },
                password: {
                    required: 'La password es un campo obligatorio',
                    minlength: 'La password debe tener al menos 5 caracteres',
                },
                password2: {
                    required: 'La password es un campo obligatorio',
                    minlength: 'La password debe tener al menos 5 caracteres',
                    equalTo: 'las dos passwords deben ser iguales'
                },
            }
        }
    );

});