// find sum from 1 to a number
function sum(n) {
    // let ans = 0;
    // // for(let i=1; i<= n; i++) {
    // //     ans = ans + i;
    // // }

    // return ans;
    return n * (n+1);
}
const ans = sum(33)
// sum will be 1 + ......33
console.log(ans);
const ans2 = sum(43)
console.log(ans2);
// synchronous codes run in line by line format 