let galeria = document.getElementById('galeria')

function criargaleria() {
for(let i = 0; i < dados.length; i++){
console.log('oi')

        galeria.innerHTML += `
    <div class="col-lg-3 col-md-4 col-6 mb-3">
    <div class="card bg-dark">
        <img src="${dados[i].url}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${dados[i].descricao.toUpperCase('')}</h5>
            <p class="card-text">${dados[i].descricao.substring(0,100)}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>   
</div>
    `
    }
    // console.log(dados)
}

criargaleria()