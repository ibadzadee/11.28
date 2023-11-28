const numbers = [1, 2, 3, 4, 5, 6, 7, , 8, 9, 10]
const words = ['apple', 'banana', 'orange' , 'grape' , 'kiwi']
const mixed = [1, 'apple', 3, 'banana', 5, 'orange']
const people = [
    {name: 'Alice' , age:25},
    {name:'Bob' , age:30} , 
    {name :'Charlie' , age:22} , 
    {name :'David' , age:27} 
]


// // 2
// let myFilter = words.filter((item) => { return item.includes("a") })
// console.log(myFilter)

// // 3
// const newArr = numbers.filter(item => item % 2 == 0).map(s => s ** 2)
// console.log(newArr);

// // 4
// let mixedFilter = words.filter((item) => { 
//     return typeof item == 'string'
// }
// ).map((item) => item.toLocaleUpperCase)
// console.log(mixedFilter)

// // 5
// const peopleFilter = people.filter(item =>{
//     if(item.age >25 && item.age <30){
//         return item
//     }
// })
// console.log(peopleFilter);

// // 6
// const first = people.filter(item =>{
//     if(item.name.length >5){
//         return item
//     }
// })
// console.log(first)

// // 7
// const fisrt = mixed.map(item =>{
//     return "type of" + "" +item
// })
// console.log(fisrt)

// // 8
// const peopleMap = people.map(item =>{
//     return item.name + " " + item.age
// })
// console.log(peopleMap)

// 9
// const mixedap = mixed.map(item =>{

//     // let obj = {};
//     // obj.value = item,
//     // obj.type = typeof item
//     // return obj

//     return {
//         "value:" : item ,
//         "type:" : typeof item
//     }
// })
// console.log(mixedap)

// 10
// const peopleMap = people.map(item =>{
//     return {
//     name: item.name.toUpperCase(),
//     age :item.age + 20
// }
// })
// console.log(peopleMap)



// 11
// const peopleFilterMap = people.filter(item=>{
//     return item.age <30
// }).map(item =>{
//     return{
//         [item.name] : item.name,
//         [item.age]  : item.age
//     }
// })
// console.log(peopleFilterMap)

// 12
// const numberCut = numbers.filter(item =>{
//     return item % 2 == 0
// })
// console.log(numberCut);


// 13
const wordsMap = words.map(item =>{
    return typeof item
})
console.log(wordsMap);