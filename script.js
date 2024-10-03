//declaração de variável

let texto = window.prompt("digite your nome")


document.getElementById("titulo").innerHTML= ("Meu nome é " + texto)

const btnSoma = document.getElementById("somar");
btnSoma.addEventListener("click", ()=> {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let soma = parseInt(num1) + parseInt(num2);
    console.log(soma);
})
const btnTrocaCor = document.getElementById("trocaCor")
let caixaTexto = document.getElementById('caixa')
btnTrocaCor.addEventListener("click", () =>{
    let caixaTexto = document.getElementById('caixa');

    if( caixaTexto.className === "verde"){
        caixaTexto.classList.add('amarelo');
        caixaTexto.classList.remove('verde');
    }else{
        caixaTexto.classList.add ("verde");
        caixaTexto.classList.remove('amarelo');
    }
    console.log(caixaTexto.className)
})
const btnTrocaTexto = document.getElementById("trocaTexto")
btnTrocaTexto.addEventListener("click", () => {
    if( caixaTexto.innerText === "Banana"){
        document.getElementById("caixa").innerHTML = "limão";
    }else{
        document.getElementById("caixa").innerHTML = "Banana";
    }
})
const btnBolinhas = document.getElementById("addBolinhas")
let total = 0;
let bolinhas = "";
let bola = '<div class="bolinha"></div>';

btnBolinhas.addEventListener("click", () => {
    total = total +1
    bolinhas = "";
    for (let index = 0; index < total ; index++){
        bolinhas = bolinhas+bola;
    }
    document.getElementById("agrupaBolinhas").innerHTML = bolinhas; 
})



const btnLocalizar = document.getElementById("localiza");
btnLocalizar.addEventListener("click", () => {
    function showPosition(position) {
        let latitude = positiion.coords.latidude;
        let longitude = position.coords.longitude;
        console.log("Latitude:" + latitude + "longitude:" + longitude);

    }
    let  coordenadas = navigator.geolocation.getCurrentPosition(showPosition)
})

