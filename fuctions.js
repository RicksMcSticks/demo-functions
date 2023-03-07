

let obiwanHealth = 100

// let obiString = string(obiwanHealth)

// console.log (obiString)
// console.log(obiString)

let theWinner = `Anakin won the fight!`

let theRealWinner = theWinner.replace(`Anakin`, `Obi-wan`)
// let theRealWinner = theWinner.replaceAll(`n`, `Obi-wan`)

if(theRealWinner.includes(`Obi-wan`)){
// console.log(`Winner replaced successfullly!`)
}

// console.log(theRealWinner)

const winnerArray = theRealWinner.split(" ")

// console.log(winnerArray)

let winnerString = winnerArray.join(" ")

// console.log(winnerString)

// function nameOfFunction(param1, param2){
//     code to run goes her
// }


function isAlive(){
    if(obiwanHealth > 0){
        console.log(`The saga continues`)
    }else {
        console.log("RIP OBI BOI")
    }
}


isAlive()

function sneakAttack(attackValue){
    obiwanHealth -= attackValue

    console.log(`Obi's health is now ${obiwanHealth}`)

    isAlive()
}

// sneakAttack(12)
// sneakAttack(25)
// sneakAttack(2)

const greeting = (person1, person2) => {
    return `${person1} says hello to ${person2}`
}

console.log(greeting (`Obi-wan`, "Uncle Owen"))