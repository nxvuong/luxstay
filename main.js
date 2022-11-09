// header 
// show list lenguage
function lenguage() {
    var isLenguage = document.querySelector(".header__lenguage--icon")
    var isLenguageList = document.querySelector(".header__lenguage--list")
    isLenguageList.getAttribute = "header__lenguage--showList"
    isLenguage.addEventListener("click",show)
    function show(e){
        isLenguageList.classList.toggle("header__lenguage--showList");
    }

}
lenguage()
// end show list lenguae 
// start show menu 
    function showMenu(){
        var isButtonMenu = document.querySelector(".header__menu");
        var isListMenu  = document.querySelector(".header__nav");
        var isClose = document.querySelector(".header__close");
        var isHeaderContent = document.querySelector(".header__content")
        isListMenu.getAttribute = "header__nav--showMenu";

        // show menu
        isButtonMenu.addEventListener("click",showMenu)
        function showMenu(){
            isListMenu.classList.add("header__nav--showMenu");
            isHeaderContent.style.right = "0"

        }
        // hidden menu 
        isClose.addEventListener("click",hideMenu);
        isListMenu.addEventListener("click",hideMenu)
        function hideMenu(){
            isListMenu.classList.remove("header__nav--showMenu");
            isHeaderContent.style.right = "-100%"
        }
       
    }
    showMenu()
// end show menu 
// start banner
    function banner(){
        let isImageLast = document.querySelector(".banner__image--first")
        let isBannerImage = document.querySelector(".header__image");
        let dotsFirst = document.querySelector(".banner__dots--first")
        let dotsLast = document.querySelector(".banner__dots--last")
        setInterval(function(){
            isImageLast.style.display ="none";
            dotsLast.style.backgroundColor = "red"
            if (dotsFirst.matches("banner__dots--first")){
            dotsFirst.style.backgroundColor = "black"

            }
        },2000)
          setInterval(function(){
                isImageLast.style.display = "block";
                console.log("child");
            dotsFirst.style.backgroundColor = "red"
            },4000)
      
        
    }    
    banner()
//end banner