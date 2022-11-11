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
            dotsFirst.style.backgroundColor = "red"
            },4000)
      
        
    }    
    banner()
//end banner
//start address
window.addEventListener("load",function(){
    const slider = document.querySelector(".address__image");
    const sliderList = document.querySelector(".address__list");
    const sliderItem = document.querySelectorAll(".address__item");
    const next = document.querySelector(".address__next");
    const prev = document.querySelector(".address__prev");
    const itemLength = sliderItem.length
    const imageWidth = sliderItem[0].clientWidth + 15;
    let positionX = 0;
    let index = 0;
    next.addEventListener("click",function(){
        change(1)
    })
    prev.addEventListener("click",function(){
        change(-1)

    })
    function change(direction){
        if (direction === 1){
            index++;
            if (index > itemLength -5 ){
                index = itemLength - 5;
                return
            } 
            if(index == itemLength - 5){
                next.style = `color:#cccccc`
            }else {
                next.style = `color:#111111 `
                prev.style = `color:#1111111 `

            }
            positionX = positionX - imageWidth;
            sliderList.style = `transform: translateX(${positionX}px)`

        } else if (direction === -1){
            index--;
            if (index < 0 ){
                index = 0;
                return
            }
            if (index == 0){
                prev.style = `color:#cccccc `

            }
             else {
                next.style = `color:#111111 `
                prev.style = `color:#1111111 `

            }
            
            console.log(index);
            positionX = positionX + imageWidth;
            console.log(positionX);
            sliderList.style = `transform: translateX(${positionX}px)`
            console.log('prev');
        }
    }
})
//end address
//start suggestion
window.addEventListener("load",function() {
    const suggestionItem = document.querySelectorAll(".suggestion__item");
    const suggestionList = document.querySelector(".suggestion__list");
    const suggestionPrev = document.querySelector(".suggestion__prev");
    const suggestionNext = document.querySelector(".suggestion__next");
    const imageItem = suggestionItem[0].clientWidth + 15;
    console.log(suggestionList);
    var transformX = 0;
    let index = 0;
    suggestionList.addEventListener("mousedown",function(){
        changeWidth(1)
    })
    suggestionList.addEventListener("mousedown",function(){
        changeWidth(-1)
    })
    function changeWidth(direction){
        if (direction === 1){
            index++;
            if ( index > suggestionItem.length - 4){
                index = suggestionItem.length -4;
                return
            };
            transformX = transformX - imageItem ;
            suggestionList.style = `transform: translateX(${transformX}px)`;
        } else if ( direction === -1){
            index--;
            if ( index < 0){
                index = 0;
                transformX = 0;
                return
            }
            transformX = transformX + imageItem ;
            suggestionList.style = `transform: translateX(${transformX}px)`;
            console.log(transformX);
        }
    }
})
//end suggestion