let form1 = document.getElementById("form1");

const modal = document.querySelector(".modal");

const openModalBtn = document.querySelector(".open");

const closeModalBtn = document.querySelector(".close");

openModalBtn.addEventListener("click", () => modal.showModal());

closeModalBtn.addEventListener("click", () => modal.close());

const cadastrar = document.getElementById("cadastrar-modal1");

let inputs = {};

// formulario de cadastro
form1.addEventListener("submit", function (event) {
  event.preventDefault();

  let nomeCompleto = document.getElementById("nomeCompleto").value;
  let email = document.getElementById("email").value;
  let plano = document.getElementById("plano").value;
  let vencimento = document.getElementById("vencimento").value;
  let status = document.getElementById("status").value;
  let telefone = document.getElementById("telefone").value;
  let discord = document.getElementById("discord").value;
  let skype = document.getElementById("skype").value;
  let dataCadastro = document.getElementById("dataCadastro").value;
  let dataBloqueio = document.getElementById("dataBloqueio").value;

  if (
    nomeCompleto.trim() === "" ||
    email.trim() === "" ||
    plano.trim() === "" ||
    vencimento.trim() === "" ||
    status.trim() === "" ||
    dataCadastro.trim() === ""
  ) {
    alert("Preencha todos os campos obrigatórios.");
  } else {
    
    inputs.push({
        id: inputs.length + 1,
        nomeCompleto,
        email,
        vencimento,
        status,
        telefone,
        discord,
        skype,
        dataCadastro,
        dataBloqueio,
    }


    );
  }
});
