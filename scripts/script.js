let buttons = document.querySelectorAll(".options");
let seq = [];

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        bgred(btn);
        if (btn.id ==="option9") {
            reset();
        }
    });
});

function bgred(btn) {
    btn.classList.add("bg-red");
    seq.push(btn);
}

function reset() {
    seq.forEach((btn, index) => {
        setTimeout(() => {
            btn.classList.remove("bg-red");
        }, 250 * (index + 1));
    });
    seq = [];
}

function openHamburger(){
    let existingStyle = document.getElementById("hamburger-style");
    const parent = document.head;
    if (existingStyle) {
        parent.removeChild(existingStyle);
    } else {
    
        const style = document.createElement("style");
        style.id = "hamburger-style";

        style.innerHTML = `@media (max-width:430px) {
        .nav-bar a{
            display: block;
        }
            .nav-bar-right{
        height: 15vh;
        margin: 10px;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;

    }
    .nav-bar{
        height: 18vh;
        position: absolute;
    }
    .nav-bar a{
        position: relative;
        right: 30%;
    }
    .line-container{
        position: relative;
        left: 35%;
    }
    
        }`;

        parent.appendChild(style);    
        console.log('cliccked')
    }   

}
const hamburger = document.querySelector(".line-container");
hamburger.addEventListener('click', openHamburger);