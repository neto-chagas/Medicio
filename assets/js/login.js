$(() => {
  // Máscara para o campo de telefone
  $("#telefone").inputmask("(+99) 99999-9999", {
    showMaskOnHover: false,
    jitMasking: true,
  });

  // Máscara para o campo de CPF
  $("#cpf").inputmask("999.999.999-99", {
    showMaskOnHover: false,
    numericInput: true,
    jitMasking: true,
  });

  // Validação do formulário
  $("#registrationForm").submit((event) => {
    event.preventDefault();

    const nome = $("#nome").val();
    const email = $("#email").val();
    const telefone = $("#telefone").val();
    const cpf = $("#cpf").val();

    // Validar se os campos estão preenchidos
    if (!nome || !email || !telefone || !cpf) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Validar formato do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, insira um endereço de e-mail válido.");
      return;
    }

    // Validar se o CPF possui 11 dígitos
    if (cpf.replace(/\D/g, "").length !== 11) {
      alert("Por favor, insira um CPF válido.");
      return;
    }

    // Outras validações podem ser adicionadas conforme necessário

    // Se todas as validações passarem, o formulário será enviado
  });
});
