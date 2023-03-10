function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    if (b===0){
        // Can't divide by zero
        throw new Error("cannot divide by zero:")
    }
    return a / b;
}
function increment(n){
    return (n += 1);
}
function decrement(n){
    return (n -= 1);
}
function makeInt(n){
    return parseInt (n,10);
}
function preserveDecimal(string){
    return parseFloat(string)
  }
