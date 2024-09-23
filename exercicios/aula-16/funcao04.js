function fatorial(x) {
    let f = 1
    for (let c = x; c > 1; c--) {
        f *= c;
    }
    return f
}

let n = 5
let r = fatorial(n)
console.log(r) 

console.log(fatorial(5))

// 5! = 5 X 4 X 3 X 2 X 1