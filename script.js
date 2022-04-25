const modal = document.getElementById('garcom-id');

window.onload = function(){
    $.getJSON('dados/Itens.json', function(array){
        const conteiner = document.getElementById('body');
        array.map((each)=>{
            conteiner.innerHTML+=`
            <div class = "product-display">
                <span> `+each.descricao+` </span>
                <span> `+each.valor+` </span>
            </div>
        `;
        })
    });

    modal.style.display = 'flex';
    
    $.getJSON('dados/Garcons.json', function(garcons){
        const garconSelect = document.getElementById('garcom-list');
        garcons.map((each)=>{
            garconSelect.innerHTML+=`
                <option value=`+each.id+`> `+each.nome+` </option>
        `;
        })
    });
}

const selector = document.getElementById('garcom-list');
selector.addEventListener('change', ()=>{
    const loginButton = document.getElementById('login');
    loginButton.disabled = false; 
}) //ativa o botão ao selecionar alguém no modal de login
function getGarcomId(){
    let garcomAtual = selector.options[selector.selectedIndex].value;
    modal.style.display = 'none';
    console.log(garcomAtual)
} //armazena o id do garçom selecionado ao logar

