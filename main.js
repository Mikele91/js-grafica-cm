function CreaQuadrato(numero){
    for ( let i= 1; i <= numero; i++){
        document.getElementById("campo").innerHTML+=`<div class="quadrato">${i}</div>`;
    }

}



// Chiedere all'utente di inserire il numero di celle di cui sarà composto il campo da gioco.
let numeroUtente = parseInt(prompt("inserisci un numero multiplo di 10 ")) ;
while( ((numeroUtente % 10)!=0) ){
        numero =  parseInt(prompt(" ATTENZIONE inserisci un numero multiplo di 10 "));
}
CreaQuadrato(numeroUtente);


// Tramite una funzione javascript disegnare in pagina la griglia con massimo 10 celle per riga.

document.getElementById("campo").addEventListener("click",
function(event){
    event.target.classList.toggle("color");
    alert(event.target.innerHTML)
    console.log(event.target);
}
)


// Al click su una cella dovrà essere mostrato con un alert il numero della cella e il suo background diventerà rosso.