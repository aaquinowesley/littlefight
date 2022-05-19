let textoesquerdo = document.getElementById('#left-span');
let textodireito = document.getElementById('right-span');
let listaimg = document.querySelector('.lista-de-personagens')
// mouseover
console.log(listaimg);
listaimg.addEventListener('mouseover', () => {
    console.log('coe');
    listaimg.forEach( a => {
        textodireito.innerText = 'Wesleyps';
    });
})