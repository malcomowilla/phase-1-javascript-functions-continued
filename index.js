// // code your solution here

// function saturdayFun (){

// }

// function saturdayFun(activity = "roller-skate"){
//     return `This Saturday, I want to ${activity}!`
// }
// saturdayFun(activity = "bathe my dog");


// function mondayWork (){

// }

// function mondayWork (){
//     return (mondayWork);


// }
// mondayWork('go to the office');



// function mondayWork (activity = "go to the office"){
//     return `This Monday, I will ${activity}.`
// }

// functionwrapAdjective (wrap="+") {
//     return function(adjective="special") {
//         return `You are ${wrap}${adjective}${wrap}!`
//     }
// }


// razzle()
// function razzle() {
//     console.log('youve been razzled!')
// }

// // function () {
// //     console.log("Yet more razzling")
// // }

// (function () {
//     console.log("Yet more razzling")
// })

// // console.log((function () {
// //     console.log("Yet more razzling")
// // }))


// // console.log(function () {
// //     console.log("Yet more razzling")
// // })



// // const fn = function () {
// //     console.log('Yet more razzling')
// // }

// // console.log(fn)

// // fn()



// // function saturdayFun(activity = 'roller-skate!') {
// //     return `This Saturday, I want to ${activity}`
// // }
// // saturdayFun('go to work.')



// // function mondayWork(activity= 'go to the office.') {
// //     return `This Monday, I will ${activity}`
// // }
// // mondayWork()


// console.log((function (baseNumber) {
//     return baseNumber + 3
// }) (2))


// function outer(greeting, msg ="It's a fine day to learn" ) {
//     const innerFunction = function(name, lang="Python"){
//         return `${greeting}, ${name}! ${msg} ${lang}`
//     }
//     return innerFunction;
// }

// outer("Hello")("student", "JavaScript")



// const storedFunction = outer("Hello")
// console.log(storedFunction("student", "JavaScript"))


// function outer(greeting, msg ="It's a fine day to learn" ) {
//     return function (name, lang ="Python" ) {
//         return `${greeting}, ${name}! ${msg} ${lang}`
//     }
    
// }

// console.log(outer("Hello")("student", "JavaScript"));

// // console.log(outer("Hello")("student", "JavaScript"))




// function firstGreeting(greeting) {
//     const secondGreeting = function (message, name) {
//         return `${greeting},${message},${name} `
//     }
//     return secondGreeting('my name is', 'malcom')
// }


// console.log(firstGreeting('hello'))



// const array = function (baseNumber) {
//     // const base = 3;
//     return [
//         function () {
             
//             return baseNumber + 3
//         },

//        function () {
//         return baseNumber
//        }
//     ]
// } (2)
// console.log(array[0]())
// console.log(array[1]())
// // const firstFunc = array[0]
// // const secondFunc = array[1]

// // console.log(firstFunc())
// // console.log(secondFunc())
// // console.log(myArray)
// // const result1 = myArray[0]
// // console.log(result1)



// // console.log(mine[0])


// function demoChain(name) {
//     const part1 = 'hi';
//     return function () {
//         const part2 = 'there'
    
//     return function () {
//         console.log(`${part1.toUpperCase()} ${part2} ${name}`)
//     }

//     }
// }



// demoChain("Dr. Stephen Strange")()()





function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`

}

let mondayWork = function (activity='go to the office') {
  return  `This Monday, I will ${activity}.`
}

// function saturdayFun(task = "roller-skate") {
//   return "This Saturday, I want to" + ` ${task}!`;
// }


function wrapAdjective( name="*") {
    return function (praise="special") {
       return `You are ${name}${praise}${name}!`
    }
}




























































