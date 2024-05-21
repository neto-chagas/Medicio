jQuery(() => {
    jQuery.extend(jQuery.validator.messages, {
        required: "Este campo é obrigatório.",
        email: "Insira um E-mail válido.",
        date: "Insira uma data válida.",
        number: "Insira um número.",
        digits: "Insira um número inteiro.",
        equalTo: "Os valores devem ser iguais.",
        accept: "Selecione um arquivo entre as extensões permitidas.",
        maxlength: jQuery.validator.format("Deve ter no máximo {0} caractéres."),
        minlength: jQuery.validator.format("Deve ter pelo menos {0} caractéres."),
        range: jQuery.validator.format("Insira um valor entre {0} e {1}."),
        max: jQuery.validator.format("O valor deve ser menor ou igual a {0}."),
        min: jQuery.validator.format("O valor deve ser maior ou igual a {0}.")
    });

    jQuery.validator.addMethod('match', (...args) => { console.log(args); return false; }, 'jawbdhsbahdba')
});

function validateForm(selector, options = {}) {
    const form = $(selector);

    const v = form.validate({
        errorElement: 'span',
        invalidHandler: function (event, validator) {
            console.log(event, validator, v, v === validator);
            const invalidInputs = form.find(".control .error");
            invalidInputs.addClass("control-error");
        },
        ...options
    })
}