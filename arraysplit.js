const numbers=[1, 2, 3, 4, 5, 6, 7];
const part=numbers.slice(2, 5);//want from index 2 till index 5

console.log(part);
console.log(numbers);

const removed=numbers.splice(2,5, 88, 99);//start from where and delete how much index
console.log(removed);// if i want to inject some more into the splice section
console.log(numbers);

//if i want to join
const together=numbers.join(" ");
console.log(together);