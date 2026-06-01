const input = document.getElementById("tarefaInput")
const btn = document.getElementById("btnAdicionar")
const lista = document.getElementById("listaTarefas")
const contador = document.getElementById("contador")

let tarefas = []

function atualizarContador() {
  contador.textContent = `Tarefas: ${tarefas.length}`
}

btn.addEventListener("click", () => {
    const texto = input.value.trim()

  if (!texto) {
    return
  }

  const tarefa = {
    descricao: texto,
    concluida: false
  }

  tarefas.push(tarefa)

  const li = document.createElement("li")

  const span = document.createElement("span")
  span.textContent = texto

  const btnConcluir = document.createElement("button")
  btnConcluir.textContent = "Concluir"

  btnConcluir.addEventListener("click", () => {
    span.classList.add("concluida")
  })

  li.appendChild(span)
  li.appendChild(btnConcluir)

  lista.appendChild(li)

  input.value = ""

  atualizarContador()
})

atualizarContador()