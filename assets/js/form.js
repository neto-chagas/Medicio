function validateForm(selector, options = {}) {
    const form = $(selector);

    form.validate({
        errorElement: 'span',
        invalidHandler: function (event, validator) {
            // const controlledInputs = form.find(".control");
            // console.log(controlledInputs);
            // controlledInputs.addClass("control-error");
        },
        ...options
    })
}