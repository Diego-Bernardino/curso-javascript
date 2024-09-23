// Recursividade
function fatorial(x) {
    if (x == 1) {
        return 1;
    } else {
        return x * fatorial(x-1);
    }
}

console.log(fatorial(5))
/*

5! = 5 X 4 X 3 X 2 X 1
5! = 5 X 4!

n! = n X (n -1)!
1! = 1

*/
