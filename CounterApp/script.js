let c = 0, ci =0, cd = 0, re = 0;
const count = document.getElementById("count")
const incCounts = document.getElementById("incCounts")
const decCounts = document.getElementById("decCounts")

function inc() {
    c++;
    ci = (ci >= 50)? ci: c +1;
    update();
    
}
function dec() {
    c--;
    cd = (cd >= 50) ? cd: c +1;
    update();
}
function res() {
     c = 0;
     re = (re >= 50) ? re: re +1;
    update();
}

function update() {
    count.textContent = c;
    incCounts.textContent = ci;
    decCounts.textContent = cd;
    resCounts.textContent = re;
}