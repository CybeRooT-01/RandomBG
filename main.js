const btn = document.querySelector("button");
btn.addEventListener("click", ()=>{
    let symbol = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color = color + symbol[Math.floor(Math.random() * 16)]
    }
    document.body.style.backgroundColor = color;
})