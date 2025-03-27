function adicionarTarefa() {
    const inputTarefa = document.getElementById("inputTarefa");
    const inputData = document.getElementById("inputData");
    
    let tarefa = inputTarefa.value;
    let data = inputData.value;

    const mensagem = document.getElementById("mensagem");

    if (tarefa.trim() === "") {
        alert ("Insira uma tarefa")
        return;
    }

    if (!data) {
        alert ("Insira uma data")
        return;
    }

    const dataFormatada = formatarData(data);

    const listTarefa = document.getElementById("listTarefa");
    let novaTarefa = document.createElement("li");

    let tarefaContainer = document.createElement("TfCon");
    tarefaContainer.style.display = "flex";
    tarefaContainer.style.alignItems = "center";
    
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.onchange = function() {
        if (this.checked) {
            tarefaTexto.classList.add("tarefa-concluida");
        } else {
            tarefaTexto.classList.remove("tarefa-concluida");
        }
    };
    
    let tarefaTexto = document.createElement("span");
    tarefaTexto.textContent = `${tarefa} Data de conclusão: ${dataFormatada}`;
    
    let botoesContainer = document.createElement("div");
    
    let botaoConcluir = document.createElement("none");
   
    let botaoExcluir = document.createElement("button");
    botaoExcluir.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
    </svg>`;
    botaoExcluir.className = "excluir";
    botaoExcluir.onclick = function() {
        listTarefa.removeChild(novaTarefa);
    };
    
    tarefaContainer.appendChild(checkbox);
    tarefaContainer.appendChild(tarefaTexto);
    
    botoesContainer.appendChild(botaoConcluir);
    botoesContainer.appendChild(botaoExcluir);
    
    novaTarefa.appendChild(tarefaContainer);
    novaTarefa.appendChild(botoesContainer);
    
    listTarefa.appendChild(novaTarefa);

    inputTarefa.value = "";
    inputData.value = "";
}

function formatarData(dataISO) {
    const data = new Date(dataISO);
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
}

function filtrarTarefas() {
    const termo = document.getElementById("barraPesquisa").value.toLowerCase();
    const lista = document.getElementById("listTarefa");
    const itens = lista.getElementsByTagName("li");

    for (let i = 0; i < itens.length; i++) {
        const texto = itens[i].textContent || itens[i].innerText;
        if (texto.toLowerCase().indexOf(termo) > -1) {
            itens[i].style.display = "";
        } else {
            itens[i].style.display = "none";
        }
    }
}