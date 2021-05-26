const showMore = document.querySelectorAll(".pakkeInfo__ShowMore");
const packageInfo = document.querySelectorAll(".pakkeInfo__more");

for(let i=0; i<showMore.length; i++){
    showMore[i].addEventListener("click", function(e){
        e.preventDefault();
        packageInfo[i].classList.toggle("pakkeInfo--show");
        
        if(packageInfo[i].classList.contains("pakkeInfo--show")){
            showMore[i].innerText = "Luk detaljer";
        }else{
            showMore[i].innerText = "detaljer";
        }
    })
}
