let count = document.getElementById("count");
let countNum = count.innerHTML;
function updateCount(newCount) {
    count.innerHTML = newCount;
}
function reset() {
    countNum = 0;
    updateCount(countNum);
}
function increase() {
    countNum++;
    updateCount(countNum);
}
function decrease() {
    if (countNum > 0) {
        countNum --;
        updateCount(countNum);
    }
}