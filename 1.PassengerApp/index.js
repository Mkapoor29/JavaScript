let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
console.log(countEl);

let count = 0;
let totalEl = 0;
function incrementCount()
{
    count++;
    countEl.innerHTML = count;
}


// 1. create a function save(), which logs out the count when it's called.
function save()
{
    totalEl += count;
    saveEl.textContent +=  count + " - ";
    console.log(totalEl);
    countEl.textContent + 0;
    count = 0;
}





