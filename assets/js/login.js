function ValidateForm(id) {
  const form = $(`#${id}`);
  const requiredMsg = "Este campo é obrigatório.";

  validateForm(form, {
    rules: {
      nome: 'required',
      email: {
        required: true,
        email: true
      },
      Celular: {
        required: true
      },
      cpf: {
        required: true,
      },
      criarSenha: {
        required: true,
        minlength: 8
      },
      senha: "required",
      "confirmar-senha": {
        required: true
      }
    },
    messages: {
      nome: requiredMsg,
      email: {
        required: requiredMsg,
        email: "Email inválido."
      },
      Celular: {
        required: requiredMsg
      },
      cpf: {
        required: requiredMsg
      },
      senha: requiredMsg,
      criarSenha: {
        required: requiredMsg,
        minlength: "A senha deve conter pelo menos 8 caracteres."
      },
      "confirmar-senha": {
        required: requiredMsg
      }
    }
  });

  form.submit((event) => {
    event.preventDefault();

    const valid = form.valid();

    console.log({ valid });

    const nome = $("#nome").val();
    const email = $("#email").val();
    const Celular = $("#Celular").val();
    const cpf = $("#cpf").val();

    // Validar se os campos estão preenchidos
    if (!nome || !email || !Celular || !cpf) {
      return;
    }

    // Validar formato do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return;
    }

    // Validar se o CPF possui 11 dígitos
    if (cpf.replace(/\D/g, "").length !== 11) {
      return;
    }

    // Outras validações podem ser adicionadas conforme necessário

    // Se todas as validações passarem, o formulário será enviado
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
