/* Menu mobile: */ 
const btnOpenMenuResponse = document.querySelector(".btn_response");
const btnCloseMenuResponse = document.querySelector(".btnCloseMenuResponse");
const contentMenu = document.querySelector(".menu_response");

btnOpenMenuResponse.addEventListener("click", () =>{
  alert("clicou");
});

btnCloseMenuResponse.addEventListener("click", () =>{
  contentMenu.style.display == "none";
});

/* Animação de scroll: */ 

/* Validação do formulário de contato: */ 
const inputs = document.querySelectorAll("input");
const mensageErrors = document.querySelectorAll(".mensage_error");
const buttonSubmit = document.querySelector("#buttonSubmit");

buttonSubmit.addEventListener("click", (e) =>{
  e.preventDefault();

  mensageErrors.style.display == "block";

  inputs.forEach(input => {
    if(input.value === ""){
        alert("Preencha todos os campos");
    }
    else{
      alert("Formulário enviado com sucesso");
    }
    });
}); 