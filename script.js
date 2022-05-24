const modal = document.getElementById('garcom-id');
const conteiner = document.querySelector('main');
let pedidos = []; let i; let j;

window.onload = function(){
    $.getJSON(api('Itens.json'), function(itens){
        itens.map((item)=>{
            conteiner.innerHTML+=`
            <div class="card">
                <div class="card-img"></div>
                <div class="card-info">
                <p class="text-title"> `+item.nome+` </p>
                </div>
                <div class="card-footer">
                    <span class="text-title"> R$`+item.valor.toFixed(2)+` </span>
                    <button class="card-button" onclick="buy(`+item.id+`, -1)">-</button>
                    <input id=`+"produto"+item.id+` class="quantity" disabled value='0'>
                    <button class="card-button" onclick="buy(`+item.id+`, 1)">+</button>
                </div>
            </div>
            `;
        });

        quantidade = [];
        for (i = 0; i <itens.length; i++) {
            quantidade.push(0)
        }
        totalItens = itens.length;
    });

    modal.style.display = 'flex'; 

    $.getJSON(api('Garcons.json'), function(garcons){
        const garconSelect = document.getElementById('garcom-list');
        garcons.map((garcom)=>{
            garconSelect.innerHTML+=`
                <option value=`+garcom.id+`> `+garcom.nome+` </option>
            `;
        })
    });
}

function api(jsonFile) {
    //Retorna o json através do Github, evitando conflitos com o CORS.
    return 'https://raw.githubusercontent.com/YuriPorto90/restaurant-cart/main/Test-data/' + jsonFile;
}

/*
function apiGitHub(jsonFile){
    //Retorna o json através do Github, evitando conflitos com o CORS.
    return 'https://raw.githubusercontent.com/YuriPorto90/restaurant-cart/main/dados/' + jsonFile;
} //Retorna o json através do Github, evitando conflitos com o CORS.

function apiLocal(rota = null) {
    //Retorna o json através do servidor local que pega os dados do banco Mongo.
    return 'localhost:3000/' + rota;
}
*/

const selector = document.getElementById('garcom-list');
selector.addEventListener('change', ()=>{
    const loginButton = document.getElementById('login');
    loginButton.disabled = false; 
}) //Desbloqueia o botão de login quando algum perfil for escolhido
function login(){
    let mesas = document.getElementById('numero-mesas').value;
    if(mesas>0){
        let garcomAtual = selector.options[selector.selectedIndex].value;
        modal.style.display = 'none';
        mesaAtual = 0;
        createCartString(mesas);
    } else{
        alert('O mínimo de mesas é 1!');
    }
} //Faz a entrada no app

function createCartString(mesas){
    pedidos;
    for(i=0; i<mesas; i++){
        let itens = [];
        for(j=0; j<totalItens; j++){
            itens.push({'item': j,'quantidade': 0})
        }
        pedidos.push(itens)
    }

    const cartConteiner = document.getElementById('cart-content');
    $.getJSON(api('Itens.json'), function(itens){
        for(i= 0; i<itens.length; i++){
            cartConteiner.innerHTML+=`
                <p class="text-title"> `+itens[i].nome+` </p>
                <span class="text-title"> R$`+itens[i].valor.toFixed(2)+` </span>
                <input placeholder=`+pedidos[mesaAtual][i].quantidade+` class="cart-quantity" disabled>
                <button class="COLOCAR CLASSE" onclick="removeFromCart(`+i+`, -1)">-</button>
            `;
        }
    }); //Gera os elementos do carrinho
} //Cria a string do carrinho (provisória)

function buy(produto, modificador){
    if(quantidade[produto]==0 && modificador==-1){
    } else{
        quantidade[produto] += modificador;
        document.getElementsByClassName('quantity')[produto].value = quantidade[produto];
    }
} //Adiciona ou remove a quantidade de produtos

function sendToCart(){
    for (i=0; i<pedidos[0].length; i++){
        let quantidadeItens = document.getElementById('produto'+i);
        
        if(quantidadeItens.value!=0){
            pedidos[mesaAtual][i].quantidade = parseInt(document.getElementsByClassName('quantity')[i].value) + parseInt(pedidos[mesaAtual][i].quantidade);
            document.getElementsByClassName('cart-quantity')[i].value = pedidos[mesaAtual][i].quantidade;
        }
    }

    for(i=0; i<pedidos[0].length; i++){
        quantidade[i] = 0;
        document.getElementsByClassName('quantity')[i].value = 0;
    }

    
} //Envia os pedidos para o carrinho e zera o contador

function removeFromCart(id, value){
    if(document.getElementsByClassName('cart-quantity')[id].value > 0){
        pedidos[mesaAtual][id].quantidade += value;
        document.getElementsByClassName('cart-quantity')[id].value = pedidos[mesaAtual][id].quantidade;
    }
}

function openCartModal(){
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'flex';
} //Gera o modal do carrinho
function closeCartModal(){
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'none';
}