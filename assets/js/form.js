function validateForm(selector, options = {}) {
    const form = $(selector);
    form.validate({
        errorElement: 'span',
        ...options
    })
}