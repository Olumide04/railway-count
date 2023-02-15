let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let restartBtn = document.getElementById("restart-btn")
let count = 0

function increment () {
    // Change this to use the plus equal technique you've learned
    count +=  1
    countEl.textContent = count
}

function save() {
    let countStr = count + "  -  "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    console.log(count)
}
