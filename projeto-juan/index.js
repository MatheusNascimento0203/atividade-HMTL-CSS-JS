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
  }
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
}

function renderizarTabela() {}
