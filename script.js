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

    const modal = document.getElementById('garcom-id');
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