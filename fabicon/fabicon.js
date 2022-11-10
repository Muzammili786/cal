var fibonacci_series = function (n){
    if (n===1){
        return [0, 1];
    }
    else{
        var s = fibonacci_series(n -1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        document.getElementById("fabo").innerHTML=s;
        return s;
    }
};

fibonacci_series = fibonacci_series(prompt("ENter a number: "));