document.addEventListener("DOMContentLoaded", function(event){
    document.querySelector(".plus").addEventListener("click", function(){
        var valeur = document.querySelector(".conteneur-transport-visible");

        if (valeur) {
            document.querySelector(".conteneur-transport").classList.remove("conteneur-transport-visible");
            document.querySelector(".conteneur-transport").classList.add("conteneur-transport-invisible");
        } else {
            document.querySelector(".conteneur-transport").classList.remove("conteneur-transport-invisible");
            document.querySelector(".conteneur-transport").classList.add("conteneur-transport-visible");
        }
    })
})