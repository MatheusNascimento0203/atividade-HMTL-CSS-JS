let tarefas = [];

let btnAbrir = document.querySelector("#btn-abrirModal");

btnAbrir.addEventListener("click", (ev) => {
  ev.preventDefault();
  abrirModalCriarTarefa();
});

function abrirModalCriarTarefa() {
  let modal = document.getElementById("Abrirmodal-criar-tarefa");
  modal.style.display = `flex`;
}

let btnFechar = document.querySelector("#btn-fecharModal");

btnFechar.addEventListener("click", (ev) => {
  ev.preventDefault();
  fecharModalCriarConta();
});

function fecharModalCriarConta() {
  let modal = document.getElementById("Abrirmodal-criar-tarefa");
  modal.style.display = `none`;
}

let cancelarEventoForm = document.querySelector("#eventform");

cancelarEventoForm.addEventListener("submit", (ev) => {
  console.log("dasdas");
  ev.preventDefault();
});

let salvarTarefa = document.getElementById(".value");

let btnAdicionarTarefa = document.querySelector("#adicionarTarefa");

btnAdicionarTarefa.addEventListener("click", (ev) => {
  adicionarTarefa(ev);
});

function adicionarTarefa(ev) {
  ev.preventDefault();

  let tarefa = document.getElementById("tarefa");
  let descricao = document.getElementById("descricao");
  let tipoTarefa = document.getElementById("tipoTarefa");
  let prioridade = document.getElementById("prioridade");
  let destino = document.getElementById("destino");

  if (
    !tarefa.value.trim() ||
    !descricao.value.trim() ||
    !tipoTarefa.value.trim() ||
    !prioridade.value.trim() ||
    !destino.value.trim()
  ) {
    alert("Todos os campos precisam estar preenchidos");
  } else {
    tarefas.push({
      id: tarefas.length + 1,
      tarefa: tarefa.value,
      descricao: descricao.value,
      tipoTarefa: tipoTarefa.value,
      prioridade: prioridade.value,
      destino: destino.value,
    });

    (tarefa.value = ""),
      (descricao.value = ""),
      (tipoTarefa.value = ""),
      (prioridade.value = ""),
      (destino.value = "");

    renderizarTabela();
  }
}

function renderizarTabela() {
  const tbody = document.getElementById("renderTable");

  tbody.innerHTML = "";

  tarefas.forEach((element) => {
    let novaLinha = document.createElement("tr");

    let addTarefa = document.createElement("td");
    addTarefa.innerHTML = ` 
    <div>
        <p class="tarefa-padrao">${element.tarefa}</p>
        <p class="descricao-tarefa">${element.descricao}</p>
      </div> `;
    novaLinha.appendChild(addTarefa);

    let addTipoTarefa = document.createElement("td");
    addTipoTarefa.innerHTML = `${element.tipoTarefa}`;
    addTipoTarefa.classList.add("tarefa-padrao");
    novaLinha.appendChild(addTipoTarefa);

    let addPrioridade = document.createElement("td");
    addPrioridade.innerHTML = `${element.prioridade}`;
    addPrioridade.classList.add("tarefa-padrao", "padrao-th");
    novaLinha.appendChild(addPrioridade);

    if (element.prioridade.toLowerCase() === "alta") {
      addPrioridade.style.color = "red";
    } else if (element.prioridade.toLowerCase() === "média") {
      addPrioridade.style.color = "#CF7C00";
    } else if (element.prioridade.toLowerCase() === "baixa") {
      addPrioridade.style.color = "#1B6301";
    }

    let addDestino = document.createElement("td");
    addDestino.innerHTML = `${element.destino}`;
    addDestino.classList.add("tarefa-padrao", "padrao-th");
    novaLinha.appendChild(addDestino);

    let addBtn = document.createElement("td");
    addBtn.innerHTML = `
     <div class="btn-acoes">
        <img class="edit" id="${
          "edit-" + element.id
        }" src="/projeto-juan/imgs/Editar.svg" alt=""/>
        <img class="delete" id="${
          "delete-" + element.id
        }" src="/projeto-juan/imgs/Lixeira.svg" alt="" />
      </div>`;
    novaLinha.appendChild(addBtn);

    tbody.appendChild(novaLinha);
    removeTarefas(element);
    editarTarefa(element);
  });
}

function removeTarefas(element) {
  const btnAbrirModal = document.getElementById("delete-" + element.id);
  btnAbrirModal.addEventListener("click", (ev) => {
    let modal = document.getElementById("abrirModalConfirmarExclusao");
    modal.style.display = "flex";
  });

  const fecharModalExclusao = document.getElementById("fecharModalExclusao");
  fecharModalExclusao.addEventListener("click", (ev) => {
    let FecharModal = document.getElementById("abrirModalConfirmarExclusao");
    FecharModal.style.display = "none";
  });

  const btnDelete = document.getElementById("confirmarExclusao");
  btnDelete.addEventListener("click", (ev) => {
    ev.preventDefault();
    const indexElement = tarefas.findIndex((tarefa) => {
      return tarefa.id === element.id;
    });
    tarefas.splice(indexElement, 1);
    let FecharModal = document.getElementById("abrirModalConfirmarExclusao");
    FecharModal.style.display = "none";
    renderizarTabela();
  });
}

let userSelected = null;

function editarTarefa(element) {
  const btnEdit = document.getElementById("edit-" + element.id);

  btnEdit.addEventListener("click", (ev) => {
    ev.preventDefault();
    userSelected = element;
    let modal = document.getElementById("Abrirmodal-editar-tarefa");
    modal.style.display = "flex";

    let tarefa = document.getElementById("tarefaEditar");
    let descricao = document.getElementById("descricaoEditar");
    let tipoTarefa = document.getElementById("tipoTarefaEditar");
    let prioridade = document.getElementById("prioridadeEditar");
    let destino = document.getElementById("destinoEditar");

    tarefa.value = element.tarefa;
    descricao.value = element.descricao;
    tipoTarefa.value = element.tipoTarefa;
    prioridade.value = element.prioridade;
    destino.value = element.destino;

    let btnFechar = document.querySelector("#btn-fecharModalEditar");
    btnFechar.addEventListener("click", (ev) => {
      let modal = document.getElementById("Abrirmodal-editar-tarefa");
      modal.style.display = "none";
    });

    const formSalvarEdit = document.querySelector("#salvarEdit");
    formSalvarEdit.addEventListener("submit", (ev) => {
      const indexElement = tarefas.findIndex((tarefa) => {
        return tarefa.id === userSelected.id;
      });

      ev.preventDefault();
      tarefas[indexElement] = {
        id: element.id,
        tarefa: tarefa.value,
        descricao: descricao.value,
        tipoTarefa: tipoTarefa.value,
        prioridade: prioridade.value,
        destino: destino.value,
      };
      renderizarTabela();
    });
  });
}
