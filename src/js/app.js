const showMore = document.querySelectorAll(".pakkeInfo__ShowMore");
const packageInfo = document.querySelectorAll(".pakkeInfo__more");
const package = document.querySelectorAll(".pakkeInfo");
const navigation = document.querySelectorAll(".--navigation");
const loadingScreen = document.querySelector(".loadingScreen");
const loginScreens = document.querySelectorAll(".loginScreen");
const loginScreen = document.querySelector(".login");
const btn = document.querySelectorAll(".--login");
const confirmBtn = document.querySelector(".--confirm");
const menuBtn = document.querySelector(".header__menu");
const nav = document.querySelector(".header__navigation");


menuBtn.addEventListener("click", function(){
    this.classList.toggle("header__menu--open");
    nav.classList.toggle("header__navigation--open");
});

for(let i=0; i<showMore.length; i++){
    showMore[i].addEventListener("click", function(e){
        e.preventDefault();
        package[i].classList.toggle("pakkeInfo--show");
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
        let navLink = "";
        if(navi.getAttribute("data-address")){
            const add = navi.getAttribute("data-address");
            navLink = `https://www.google.com/maps/dir/?api=1&origin=Current Location&destination=${add}`;
            window.open(navLink, '_blank');
        }else{
            navLink = navi.getAttribute("data-nextScreen");
            window.location.href = navLink;
        }
    });
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

/* transform: translateX(-100%); */
