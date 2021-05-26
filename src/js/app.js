const showMore = document.querySelectorAll(".pakkeInfo__ShowMore");
const packageInfo = document.querySelectorAll(".pakkeInfo__more");
const navigation = document.querySelectorAll(".--navigation");

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

navigation.forEach((navi) => {
    navi.addEventListener("click", (e)=>{
        e.preventDefault();
        const add = navi.getAttribute("data-address");
        const navLink = `https://www.google.com/maps/dir/?api=1&origin=Current Location&destination=${add}`;

        window.open(navLink, '_blank');
    })
})
