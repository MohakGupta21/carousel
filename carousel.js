
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
