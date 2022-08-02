function next(total) {
    
    //make "left" button clickable
    let button = document.getElementById('left');
    if (button.classList.contains("unclick")) {
        button.classList.remove("unclick");
    }
    let carousel = document.querySelectorAll(".caraDesign");
    let after = parseInt(carousel[1].getAttribute("data-active")) + 1;

    if (after <= total) {
        //hiding current first division
        carousel[0].classList.replace("caraDesign", "hide");

        //displying next division
        let elDisplay = document.querySelectorAll(`.hide[data-active='${after}']`);
        elDisplay[0].classList.replace("hide", "caraDesign");
        elDisplay[0].setAttribute("data-active", after);
        if (after === total) {
            // console.log("Reached the end!");
            let buttton2 = document.getElementById('right');
            buttton2.classList.add("unclick");
        }
}
}

function next2(total){
    //make "left" button clickable
    let button = document.getElementById('left2');
    if (button.classList.contains("unclick")) {
        button.classList.remove("unclick");
    }
    let carousel = document.querySelectorAll(".caraDesign-2");
    let after = parseInt(carousel[1].getAttribute("data-active-2")) + 1;

    if (after <= total) {
        //hiding current first division
        carousel[0].classList.replace("caraDesign-2", "hide");
        //displying next division
        let elDisplay = document.querySelectorAll(`.hide[data-active-2='${after}']`);
        elDisplay[0].classList.replace("hide","caraDesign-2");
        elDisplay[0].setAttribute("data-active-2", after);
        if (after === total) {
            // console.log("Reached the end!");
            let buttton2 = document.getElementById('right2');
            buttton2.classList.add("unclick");
        }
    }    

}
function next3(){
    //make "left" button clickable
    let button = document.getElementById('left3');
    if (button.classList.contains("unclick")) {
        button.classList.remove("unclick");
    }
    let carousel = document.querySelectorAll(".caraDesign-3");
    let after = parseInt(carousel[1].getAttribute("data-active-3")) + 1;
    // console.log(after);
    if (after <= 6) {
        //hiding current first division
        carousel[0].classList.replace("caraDesign-3", "hide");
        //displying next division
        let elDisplay = document.querySelectorAll(`.hide[data-active-3='${after}']`);
        elDisplay[0].classList.replace("hide","caraDesign-3");
        elDisplay[0].setAttribute("data-active-3", after);
        if (after === 6) {
            // console.log("Reached the end!");
            let buttton2 = document.getElementById('right3');
            buttton2.classList.add("unclick");
        }
    } 
}

function previous() {
        //make "right" button clickable
        let button = document.getElementById('right');
        if (button.classList.contains("unclick")) {
            button.classList.remove("unclick");
        }
        let carousel = document.querySelectorAll(".caraDesign");
        let before = parseInt(carousel[0].getAttribute("data-active")) - 1;
        
        if (before >= 1) {
            //hiding current second division
            carousel[1].classList.replace("caraDesign", "hide");

            //displying previous division
            let elDisplay = document.querySelectorAll(`.hide[data-active='${before}']`);
            elDisplay[0].classList.replace("hide", "caraDesign");
            elDisplay[0].setAttribute("data-active", before);
            if (before === 1) {
                // console.log("Reached the beginning!");
                let buttton2 = document.getElementById('left');
                buttton2.classList.add("unclick");
            }
        } 
}

function previous2(){   
        //make "right" button clickable
        let button = document.getElementById('right2');
        if (button.classList.contains("unclick")) {
            button.classList.remove("unclick");
        }
        let carousel = document.querySelectorAll(".caraDesign-2");
        let before = parseInt(carousel[0].getAttribute("data-active-2")) - 1;
        
        if (before >= 1) {
            //hiding current second division
            carousel[1].classList.replace("caraDesign-2", "hide");

            //displying previous division
            let elDisplay = document.querySelectorAll(`.hide[data-active-2='${before}']`);
            elDisplay[0].classList.replace("hide", "caraDesign-2");
            elDisplay[0].setAttribute("data-active-2", before);
            if (before === 1) {
                // console.log("Reached the beginning!");
                let buttton2 = document.getElementById('left2');
                buttton2.classList.add("unclick");
            }
        }          
}

function previous3(){   
    //make "right" button clickable
    let button = document.getElementById('right3');
    if (button.classList.contains("unclick")) {
        button.classList.remove("unclick");
    }
    let carousel = document.querySelectorAll(".caraDesign-3");
    let before = parseInt(carousel[0].getAttribute("data-active-3")) - 1;
    
    if (before >= 1) {
        //hiding current second division
        carousel[1].classList.replace("caraDesign-3", "hide");

        //displying previous division
        let elDisplay = document.querySelectorAll(`.hide[data-active-3='${before}']`);
        elDisplay[0].classList.replace("hide", "caraDesign-3");
        elDisplay[0].setAttribute("data-active-3", before);
        if (before === 1) {
            // console.log("Reached the beginning!");
            let buttton2 = document.getElementById('left3');
            buttton2.classList.add("unclick");
        }
    }          
}
