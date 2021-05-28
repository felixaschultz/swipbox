const showMore = document.querySelectorAll(".pakkeInfo__ShowMore");
const packageInfo = document.querySelectorAll(".pakkeInfo__more");
const navigation = document.querySelectorAll(".--navigation");
const loadingScreen = document.querySelector(".loadingScreen");
const loginScreens = document.querySelectorAll(".loginScreen");
const loginScreen = document.querySelector(".login");
const btn = document.querySelectorAll(".--login");
const confirmBtn = document.querySelector(".--confirm");

for(let i=0; i<showMore.length; i++){
    showMore[i].addEventListener("click", function(e){
        e.preventDefault();
        packageInfo[i].classList.toggle("pakkeInfo--show");
        
        if(packageInfo[i].classList.contains("pakkeInfo--show")){
            showMore[i].innerText = "Luk detaljer";
        }else{
            showMore[i].innerText = "Detaljer";
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

setTimeout(function(){
    loadingScreen.style.opacity = "0";
}, 3000);

for(let o=0; o<btn.length; o++){
    btn[o].addEventListener("click", function(){
        loginScreens[o].style.left = "-100%";
        loginScreens[o+1].style.right = "auto";
    })
}

confirmBtn.addEventListener("click", function(){
    loginScreen.style.top = "-100%";
});