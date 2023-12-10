// //callback
// let calc = (n1,n2)=>{
//     let result = n1() + n2()
//     document.write(result)
// }
// let returnNum = ()=>{
// return 1
// } 
// let run = ()=>{
// return 1
// }
// calc(returnNum,run)


// Callback with Parameters:
// let calc = (num1,num2,operation)=>{
//     let result = operation(num1,num2)
//     return result
// }
// let add = (a,b) => a+b
// let subtract = (a,b) => a-b
// console.log(calc(2,2,add))
// console.log(calc(2,2,subtract))


//Callback with Asynchronous Operation:
// let fetchData = (callback) => {
//     setTimeout(() => {
//         let data = 'Async data';
//         callback(data);
//     }, 1000);
// }

// fetchData((result) => {
//     console.log(result);  // Output: Async data (after 1 second)
// });


// // Callback with Asynchronous Operation: without anonymous func 
// let fetchData = (callback) => {
//     setTimeout(() => {
//         let data = 'Async data';
//         callback(data);
//     }, 1000);
// }

// function handleData(result) {
//     console.log(result);  // Output: Async data (after 1 second)
// }

// fetchData(handleData)


// Callback as Event Handler:
// var btn = document.getElementById("btn")
// btn.addEventListener('click', () => { //call back func 
//     console.log('Document clicked!');
// });

// Callback as Event Handler: without anonymous function
// var btn = document.getElementById("btn")
// function func(){
//     console.log('Document clicked!');
// }
// btn.addEventListener('click', func);


//Callback for Array Manipulation:
// let numbers = [1, 2, 3, 4, 5];
// let square = (num) => num * num;
// let doubled = (num) => num * 2;
// let squaredNumbers = numbers.map(square);
// let doubledNumbers = numbers.map(doubled);
// console.log(squaredNumbers);  // Output: [1, 4, 9, 16, 25]
// console.log(doubledNumbers);  // Output: [2, 4, 6, 8, 10]


//Callback for Filtering:
// let num = [1,2,3,4,5,6,7,,8,9,10]
// function even (numbers){
//     var result =numbers % 2 === 0 
//     return result}
// let filter = num.filter(even)
// console.log(filter)

//Callback for Filtering: anonymous func
// let num = [1,2,3,4,5,6,7,,8,9,10]
// let filter = num.filter((numbers)=>{
//     var result =numbers % 2 === 0 
//     return result
// })
// console.log(filter)



//callback hell








