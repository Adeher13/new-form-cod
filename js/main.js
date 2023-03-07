const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const estadoInput = document.querySelector("#estado")
const cidadeInput = document.querySelector("#cidade")
const senhaInput = document.querySelector("#senha")


form.addEventListener("submit",(event) => {

    event.preventDefault();

    // Verifica se o nome está vazio
    if(nameInput.value === ""){
    alert("Por favor, preencha o seu nome");
    return;
}

    // Verificar se a está preechida
    if(!validatePassword(senhaInput.value, 8)){

        alert("A senha precisa ter no mínimo 8 dígitos");
    return;
    }

   // Verifica se o campo estado está vazio
   if(estadoInput.value === ""){
    alert("Por favor, preencha o Estado");
    return;
   }


    // Verifica se o campo cidade está vazio
   if(cidadeInput.value === ""){
    alert("Por favor, preencha a Cidade");
    return;
   }


    // Verifica se o email está preenchido e se é válido

    if(emailInput.value === "" || !isEmailValid(emailInput.value)){
        alert("Por favor, preencha o seu email");
    return;
    }

    // Se todos os campos estiverem corretamente preenchidos, enviar o form
    form.submit();
});

 // Função que valida o e-mail
 function isEmailValid(email){
    // criar uma regex para validar email

    const emailRegex = new RegExp(
        // usuario12@host.com
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)){
        return true;
    }

    return false;
 }

 // Função que valida a senha
 function validatePassword(password,minDigits){
    if(password.length >= minDigits){
        //senha válida
        return true
    }
        //senha inválida
        return false
 }



   