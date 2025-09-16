// // console.log('Welcome to september')

// // alert('Hi Nifemi')
// // prompt('What is your name?')
// // confirm('Are you a gay')

// //console.log('My name is basil')

// /*console.log('My name is basil')
// console.log('My name is basil')
// console.log('My name is basil')
// console.log('My name is basil')
// console.log('My name is basil')
// */


// // let names = 'sinaayo'
// // const pi =  3.164
// // pi = 1.24
// // names = 'timi'

// // console.log(names)
// // console.log(pi)


// // let x = 29
// // let y = 16
// // let b = 50

// // let z = x + y - b

// // console.log(z)

// // const pi = 3.18
// // const circle = "3.18"

// // //  == vs ===

// // if (true == "true" ) {
// //     console.log('pi is equals to 3.16')
// // }else{
// //     console.log('pi is not equals to 3.16')
// // }


// // const username = document.getElementById('name')
// // const btn = document.getElementById('btn')

// // btn.addEventListener('click', function(){
// //     if(username.value !== ""){
// //         console.log(username.value)
       
         
// //     }else{
// //          console.log('input your name')
// //     }

// // })

// //switch
// let day = "Monday";

// switch (day) {
//   case "Monday":
//     console.log("Start of the work week!");
//     break;
//   case "Wednesday":
//     console.log("Midweek day.");
//     break;
//   case "Friday":
//     console.log("Almost weekend!");
//     break;
//   case "Saturday":
//       console.log("it is saturday!");
//     break;
//   case "Sunday":
//     console.log("It's the weekend!");
//     break;
//   default:
//     console.log("Not a valid day.");
// }


// // let number = 75

// // if (number > 90) {
// //     console.log('number is greater than 90')
// // }else if(number < 90 ){
// //     console.log('number is lesser than 90')
// // }else{
// //     console.log('75 is not a number')
// // }


// const car = ['toyota', 'tesla', 'honda', 'benz', 'bmw']
// car.push('jeep')

// console.log(car)

// car.pop()
// console.log(car)

// function greet(name){
//   const fruit = []
//   fruit.push (name)
//   console.log (fruit)
// }
// greet("banana")

function greet(name, car, house, age, married, pet, school, height, parent){
  const person1 = {
    names: name,
    cars: car,
    houses: house,
    ages : age,
    marry: married
  }
   const person2 = {
    pets: pet,
    schools: school,
    height: height,
    parents : parent
  }
  // console.log(person1)
const human = [person1, person2]
console.log(human)
console.log(person1)
console.log(person2)
}
greet("basil", "benz", "mansion", 22, false, "dog", "babcock", "short", true)
