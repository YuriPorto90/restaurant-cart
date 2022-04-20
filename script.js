function test(){
    $.getJSON('itens.json', function(array){
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
}
