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