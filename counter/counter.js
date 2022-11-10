window.counter = function(operator = "plus") {
    var currentCount = document.getElementById('counter-container').textContent
    currentCount = parseInt(currentCount.replace(/,/gi, ""));
    if (operator == "plus") {
        currentCount += 1;
    } else if (operator == 'minus') {
        currentCount = 0;
    } else  {
        alert("undfined opereater.")
        return false;
    }
    document.getElementById('counter-container').textContent = parseInt(currentCount).toLocaleString('en-US')
 
}
 
window.onload = function() {
 
    // Add ("+") button eventListener
    document.getElementById('right-button').addEventListener('click', function() {
        counter();
    })
 
    // Minus ("-") button eventListener
    document.getElementById('left-button').addEventListener('click', function() {
        counter("minus");
    })
}