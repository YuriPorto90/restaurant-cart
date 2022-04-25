const modal = document.getElementById('garcom-id');
const conteiner = document.querySelector('main');

window.onload = function(){
    $.getJSON('dados/Itens.json', function(itens){
        const conteiner = document.querySelector('main');
        itens.map((item)=>{
            conteiner.innerHTML+=`
            <div class="card">
            <div class="card-img"></div>
            <div class="card-info">
              <p class="text-title"> `+item.nome+` </p>
            </div>
            <div class="card-footer">
            <span class="text-title"> R$`+item.valor+` </span>
            <button class="card-button" onclick="buy(`+item.id+`, mesa, 1)">+</button>

            <button class="card-button" onclick="buy(`+item.id+`, mesa, -1)">-</button>
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
})
function getGarcomId(){
    let mesas = document.getElementById('numero-mesas').value;
    console.log(mesas);
    if(mesas>0){
        let garcomAtual = selector.options[selector.selectedIndex].value;
        modal.style.display = 'none';
        console.log(garcomAtual);
    } else{
        alert('O mínimo de mesas é 1!');
    }
}

function cart(){
    
}

function buy(produto, mesa, modificador){
    quantidade[produto][mesa] += modificador;
    console.log(quantidade[produto]);
}