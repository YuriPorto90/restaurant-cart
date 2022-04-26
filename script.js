const modal = document.getElementById('garcom-id');
const conteiner = document.querySelector('main');
let pedidos = []; let i;

window.onload = function(){
    $.getJSON('dados/Itens.json', function(itens){
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
                    <input id=`+"produto"+item.id+` class="quantity" disabled placeholder='0'>
                    <button class="card-button" onclick="buy(`+item.id+`, 1)">+</button>
                </div>
            </div>
            `;
        });

        quantidade = [];
        for (i = 0; i <itens.length; i++) {
            quantidade.push(0)
        }
    });

    modal.style.display = 'flex'; 
    
    $.getJSON('dados/Garcons.json', function(garcons){
        const garconSelect = document.getElementById('garcom-list');
        garcons.map((garcom)=>{
            garconSelect.innerHTML+=`
                <option value=`+garcom.id+`> `+garcom.nome+` </option>
            `;
        })
    });
}


const selector = document.getElementById('garcom-list');
selector.addEventListener('change', ()=>{
    const loginButton = document.getElementById('login');
    loginButton.disabled = false; 
})
function getGarcomId(){
    let mesas = document.getElementById('numero-mesas').value;
    if(mesas>0){
        let garcomAtual = selector.options[selector.selectedIndex].value;
        modal.style.display = 'none';
    } else{
        alert('O mínimo de mesas é 1!');
    }
}


function buy(produto, modificador){
    if(quantidade[produto]==0 && modificador==-1){
    } else{
        quantidade[produto] += modificador;
        document.getElementsByClassName('quantity')[produto].value = quantidade[produto];
    }
}

/*
function sendToCart(){
    for (i=0; i<10; i++){
        let mesa = document.getElementById('produto'+i);
        
        if(quantidade[i]>0){
            pedidos[i]=({mesa: mesa.value, quantidade: quantidade[i], pedido: i});
        }
        console.log("pedidos:");
        console.log(pedidos);
    }
} */

function cartModal(){
    $.getJSON('dados/Pedidos.json', function(pedidos){
        const cartModal = document.getElementById('cart-modal');
        pedidos.map((pedido)=>{
            cartModal.innerHTML+=`
                PRODUTOS AQUI
            `;
        })
    });
}