// Chiedere all'utente di inserire il numero di celle di cui sarà composto il campo da gioco.
let numero = parseInt(prompt("inserisci un numero multiplo di 10 ")) ;
while( ((numero % 10)!=0) ){
        numero =  parseInt(prompt(" ATTENZIONE inserisci un numero multiplo di 10 "));
}

console.log(numero);
// Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga.
for ( let i= 1; i <= numero; i++){
    document.getElementById("campo").innerHTML+=`<div class="quadrato">${i}</div>`;
}
document.addEventListener("click",
function(event){
    return event.target.classList.toggle("color");
}
)


// Al click su una cella dovrà essere mostrato con un alert il numero della cella e il suo background diventerà rosso.