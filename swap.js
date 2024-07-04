let data_a = "This is value of A";
let data_b = "This is value of B";

// using destructure
[data_a,data_b] = [data_b,data_a];

console.log(`A = "${data_a}" and B = ${data_b}`)