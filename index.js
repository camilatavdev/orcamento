let valorTotal = document.getElementById("valor-total");
let quantiaUsuario = document.getElementById("valor-usuario");
const botaoChecarValor = document.getElementById("checar-valor");
const botaoValorTotal = document.getElementById("valor-total-button");
const nomeProduto = document.getElementById("nome-produto");
const mensagemErro = document.getElementById("budget-erro");
const nomeProdutoerro = document.getElementById("nome-produto-erro");
const productCosterro = document.getElementById("product-cost-erro");
const valor = document.getElementById("valor");
const valorDespesa = document.getElementById("valor-despesa");
const valorSaldo = document.getElementById("balance-valor");
const lista = document.getElementById("lista");
let tempAmount = 0;


botaoValorTotal.addEventListener("click", () => {
    tempAmount = valorTotal.value;
    // Bad input
    if (tempAmount === "" || tempAmount < 0) {
        mensagemErro.classList.remove("esconder");
    } else {
        mensagemErro.classList.add("esconder");
        // Set bidget
        valor.innerHTML = tempAmount;
        valorSaldo.innerText = tempAmount - valorDespesa.innerText;
        // Clear input
        valorTotal.value = "";
    }
});


const disableButtons = (bool) => {
    let editButtons = document.getElementsByClassName("edit");
    Array.from(editButtons).forEach((element) => {
        element.disabled = bool;
    });
};


const modifyElement = (element) => {
    let parentDiv = element.parentElement;
    let balancoAtual = valorSaldo.innerText;
    let gastoAtual = valorDespesa.innerText;
    let parentAmount = parentDiv.querySelector(".valor").innerText;

    valorSaldo.innerText = parseInt(balancoAtual) + parseInt(parentAmount);
    valorDespesa.innerText = parseInt(gastoAtual) - parseInt(parentAmount);

    parentDiv.remove();
};


const listCreator = (expenseName, expenseValue) => {
    let sublistaContent = document.createElement("div");
    sublistaContent.classList.add("sublista-content", "flex-space");
    lista.appendChild(sublistaContent);
    sublistaContent.innerHTML = `<p class="product">${expenseName}</p><p class="valor">${expenseValue}</p>`;
    
    let deletarBotao = document.createElement("button");
    deletarBotao.classList.add("fa-solid", "fa-trash-can", "delete");
    deletarBotao.style.fontSize = "1.2em";
    deletarBotao.addEventListener("click", () => {
       modifyElement(deletarBotao);
    });
    
    sublistaContent.appendChild(deletarBotao);
    document.getElementById("lista").appendChild(subListaContent);
 };
 


botaoChecarValor.addEventListener("click", () => {
    // Check empty
    if (!quantiaUsuario.value || !nomeProduto.value) {
        nomeProdutoerro.classList.remove("esconder");
        return false;
    }
    disableButtons(false);
    let despesa = parseInt(quantiaUsuario.value);
    let montante = parseInt(valorDespesa.innerText) + despesa;
    valorDespesa.innerText = montante;
    const totalBalance = tempAmount - montante;
    valorSaldo.innerText = totalBalance;
    listCreator(nomeProduto.value, quantiaUsuario.value);
    nomeProduto.value = "";
    quantiaUsuario.value = "";
});