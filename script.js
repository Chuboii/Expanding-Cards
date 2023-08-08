let images = ["fb10.jpg","fb4.jpg","fb5.webp", "fb7.jpg", "fb8.jpg", "fb10.jpg"]


let imgs = document.querySelectorAll(".image")
let span = document.querySelectorAll("span")
let body = document.querySelector("body")



function expandCards() {

    imgs.forEach((img, i) => {
 

        img.addEventListener("click", () => {
           removeClasslist()
                img.classList.add("active")
            
                // setTimeout(() => {
                //     for (let ind of span) {
                //         ind[i].style.display = "block"
                //     }
                // }, 1100);
                if (img.classList.contains("active")) {
                    body.style.backgroundImage = `url(${images[i]})`
                    body.classList.add("active")
                    console.log('contains');
                } else {
                    console.log('ooops');
                }
        
                
        })


    })
  
}

function removeClasslist() {
    imgs.forEach((img, i) => {
                
            img.classList.remove("active")



    })   
}



window.addEventListener("load", expandCards)