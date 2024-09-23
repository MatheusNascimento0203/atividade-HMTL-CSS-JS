let form1 = document.getElementById("form1");

const modal = document.querySelector(".modal");

const openModalBtn = document.querySelector(".open");

const closeModalBtn = document.querySelector(".close");

openModalBtn.addEventListener("click", () => modal.showModal());

closeModalBtn.addEventListener("click", () => modal.close());

const cadastrar = document.getElementById("cadastrar-modal1");

let tbody = document.querySelector("tbody");

let inputs = [];

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

  inputs.push({
    id: inputs.length + 1,
    nomeCompleto,
    email,
    plano,
    vencimento,
    status: status === `true` ? "Ativo" : "Bloqueado",
    telefone,
    discord,
    skype,
    dataCadastro,
  });

  tbody.innerHTML = "";

  inputs.forEach((element) => {
    renderList(element);
  });
});

function renderList(element) {
  let linha = document.createElement("tr");
  const ddd = element.telefone.slice(0, 2);
  const fiveFirst = element.telefone.slice(2, 7);
  const fourLast = element.telefone.slice(7, 11);

  const cod = ``;

  const formartedNumber = `(${ddd}) ${fiveFirst}-${fourLast}`;

  linha.innerHTML = `
                <td>
                <div class="nome-completo">
                  <div class="circulo-border"></div>
                  <div class="nome-email">
                    <p class="texto-bold">${element.nomeCompleto}</p>
                    <p>${element.email}</p>
                  </div>
                </div>
              </td>
              <td class="tam-texto-bold texto-bold">${formartedNumber}</td>
              <td class="tam-texto-bold texto-bold">${element.plano}</td>
              <td
                class="padrao-th-td status-centralizar tam-texto-bold texto-bold"
              >
                <p class="${
                  element.status === "Ativo" ? "status" : "bloqueado"
                }">${element.status}</p>
              </td>
              <td class="padrao-th-td tam-texto-bold texto-bold">${
                element.vencimento
              }</td>
              <td><div class="espaco-btns">
                    <img src="img/Group 37168-visualizar.png" alt="Visualizar" class="cursor-btns" >
                    <img src="img/Vector-editar.png" alt="Editar" class="cursor-btns open2" id=${
                      "edit-" + element.id
                    }>
                    <img src="img/Vector-apagar.png" alt="Apagar" class="cursor-btns" id=${
                      "remove-" + element.id
                    }>
              </div></td>
  `;

  tbody.appendChild(linha);

  removerTd(element, linha);
}

function removerTd(element, linha) {
  let remover = document.getElementById("remove-" + element.id);

  remover.addEventListener("click", function (event) {
    event.preventDefault();

    const numero = this.id.split("-");
    const parts = numero[1];

    const removerIndex = inputs.findIndex((e) => {
      return e.id === Number(parts);
    });

    if (removerIndex !== -1) {
      inputs.splice(removerIndex, 1);
      linha.remove();
    }
  });
}

const modal2 = document.querySelector(".modal-2");

const openModalBtn2 = document.querySelector(".open2");

const closeModalBtn2 = document.querySelector(".close2");

openModalBtn2.addEventListener("click", () => modal2.showModal());

closeModalBtn2.addEventListener("click", () => modal2.close());

function editarTd(element) {
  let editar = document.getElementById;
}
