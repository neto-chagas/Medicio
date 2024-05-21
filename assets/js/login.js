function ValidateForm(id, onSubmit) {
  const form = $(`#${id}`);

  validateForm(form, {
    rules: {
      "confirmar-senha": {
        equalTo: "#senha"
      }
    }
  });

  form.submit((event) => {
    event.preventDefault();

    // if (!form.valid()) return;

    if (typeof onSubmit === 'function') onSubmit(form);
  });
}

$(() => {
  // Máscara para o campo de Celular
  $("#Celular").inputmask("(+99) 99999-9999", {
    showMaskOnHover: false,
    jitMasking: true,
  });

  // Máscara para o campo de CPF
  $("#cpf").inputmask("999.999.999-99", {
    showMaskOnHover: false,
    numericInput: true,
    jitMasking: true,
  });
});
