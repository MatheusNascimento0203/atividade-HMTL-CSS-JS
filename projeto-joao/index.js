let form1 = document.getElementById("form1");

const modal = document.querySelector(".modal");

const openModalBtn = document.querySelector(".open");

const closeModalBtn = document.querySelector(".close");

openModalBtn.addEventListener("click", () => modal.showModal());

closeModalBtn.addEventListener("click", () => modal.close());

const cadastrar = document.getElementById("cadastrar-modal1");

let tbody = document.querySelector("tbody");

let inputs = [];

function renderDatalist() {
  const datalist = document.getElementById("browsers");

  // datalist.innerHTML = "";

  inputs.forEach((element) => {
    const option = document.createElement("option");
    option.value = element.nomeCompleto;
    option.innerText = element.nomeCompleto;
    datalist.append(option);
  });
}

const imgPesquisar = document.getElementById("pesquisarParecidos");

imgPesquisar.addEventListener("click", () => {
  const pessoa = document.getElementById("pessoa");

  tbody.innerHTML = "";

  if (pessoa.value) {
    const inputsFiltered = inputs.filter((element) =>
      element.nomeCompleto.includes(pessoa.value)
    );

    inputsFiltered.forEach((element) => {
      renderList(element);
    });
  } else {
    inputs.forEach((element) => {
      renderList(element);
    });
  }
});

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
  modal.close();
  renderDatalist();
  Toastify({
    text: "CRIADO!!!",
    gravity: "bottom", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "green",
    },
  }).showToast();
});

//funcao para renderizar a lista
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
                    <img src="img/Vector-apagar.png" alt="Apagar" class="cursor-btns abrir" id=${
                      "remove-" + element.id
                    }>
              </div></td>
  `;

  tbody.appendChild(linha);

  removerTd(element, linha);
  editarTd(element);
}

// função remover

function removerTd(element, linha) {
  let remover = document.getElementById("remove-" + element.id);
  const modal3 = document.querySelector(".modal-3");

  remover.addEventListener("click", function (event) {
    event.preventDefault();
    modal3.showModal();

    let apagar = document.querySelector(".apagar");

    apagar.addEventListener("click", function (event) {
      event.preventDefault();

      const numero = element.id;
      console.log(numero);

      const removerIndex = inputs.findIndex((e) => {
        return e.id === Number(numero);
      });

      console.log(removerIndex);

      if (removerIndex !== -1 || removerIndex !== 0) {
        inputs.splice(removerIndex, 1);
        linha.remove();
      }

      modal3.close();
    });
    const closeModalBtn3 = document.querySelector(".fechar");
    closeModalBtn3.addEventListener("click", () => modal3.close());
  });
}

// função editar
let userSelected = null;

function editarTd(element) {
  let editar = document.getElementById("edit-" + element.id);
  const modal2 = document.querySelector(".modal-2");

  editar.addEventListener("click", function (event) {
    event.preventDefault();
    modal2.showModal();

    let nomeCompleto = document.getElementById("nomeCompleto-2");
    let email = document.getElementById("email-2");
    let plano = document.getElementById("plano-2");
    let vencimento = document.getElementById("vencimento-2");
    let status = document.getElementById("status-2");
    let telefone = document.getElementById("telefone-2");
    let discord = document.getElementById("discord-2");
    let skype = document.getElementById("skype-2");
    let dataCadastro = document.getElementById("dataCadastro-2");

    userSelected = element;
    nomeCompleto.value = element.nomeCompleto;
    email.value = element.email;
    plano.value = element.plano;
    vencimento.value = element.vencimento;
    status.value = element.status;
    telefone.value = element.telefone;
    discord.value = element.discord;
    skype.value = element.skype;
    dataCadastro.value = element.dataCadastro;

    let form2 = document.getElementById("form2");

    form2.addEventListener("submit", function (event) {
      event.preventDefault();

      let tbody = document.querySelector("tbody");

      const edita = inputs.findIndex((e) => {
        return e.id === Number(userSelected.id);
      });

      let nomeCompleto2 = document.getElementById("nomeCompleto-2").value;
      let email2 = document.getElementById("email-2").value;
      let plano2 = document.getElementById("plano-2").value;
      let vencimento2 = document.getElementById("vencimento-2").value;
      let status2 = document.getElementById("status-2").value;
      let telefone2 = document.getElementById("telefone-2").value;
      let discord2 = document.getElementById("discord-2").value;
      let skype2 = document.getElementById("skype-2").value;
      let dataCadastro2 = document.getElementById("dataCadastro-2").value;

      inputs[edita] = {
        id: userSelected.id,
        nomeCompleto: nomeCompleto2,
        email: email2, // Corrigido de 'emial' para 'email'
        plano: plano2,
        vencimento: vencimento2,
        status: status2 === "true" ? "Ativo" : "Bloqueado", // Comparação direta de strings
        telefone: telefone2,
        discord: discord2,
        skype: skype2,
        dataCadastro: dataCadastro2,
      };

      console.log(inputs);

      tbody.innerHTML = "";

      inputs.forEach((element) => {
        renderList(element);
      });
      modal2.close();
    });
  });
  const closeModalBtn2 = document.querySelector(".close2");
  closeModalBtn2.addEventListener("click", () => modal2.close());
}

// funcao para pesquisar

function pesquisarLinha(element) {}
