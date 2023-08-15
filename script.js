for (let num = 1; num <= 20; num +=2){
    console.log(num);
}

console.log();
console.log();

for (let num = 100; num >=0; num--){
    if (num % 3 === 0) {
        console.log(num);
    }
}

console.log();
console.log();

const array = [4, 2.05, 1, -0.5, -2, -3.5]

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

console.log();
console.log();

let sum =0;
for (let i=1; i <= 100; i++){
    sum+= i;
}

console.log("Result:", sum)

console.log();
console.log();

let product = 1;
for (let i=1; i <= 12; i++){
    product *= i;
}

console.log("Result:", product)