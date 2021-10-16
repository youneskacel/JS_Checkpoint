/* const isSameNum = (a,b) => {
   if (a===b) {
       return true
   }else{
       return false
   }
}

console.log(isSameNum(5,"5"))

const minMax = (liste) => {
    var min
    var max 
    min = liste[0]
    max = liste[0]
    
    for (let index = 0; index < liste.length; index++) {
        if (liste[index] > max) {
            max = liste[index]
        }
         if (liste[index] < min) {
            min = liste[index]
        }
    }

   
    return [min,max]
}


console.log(minMax([2,6,4,7,12,35,8,1]))


const filterArray = (liste) => {
    var filtered = liste.filter(e => typeof(e) !== 'string')

    return filtered
}


console.log(filterArray([1,"a",3,"3",8,9]))


const getAbsSum = (list) => {
    var abssum = 0
    for (let index = 0; index < list.length; index++) {
       
            abssum += Math.abs(list[index])
        
        
    }
    return abssum
}


console.log(getAbsSum([1,5,-9,8,0,2,-4]))

const countTrue = (list) => {
    var truecount = 0
    for (let index = 0; index < list.length; index++) {
        if( list[index] == true){
            truecount += 1
        }
        
    }
    return truecount
}

console.log(countTrue([true,false,false,true,true]))

const inkLevels = (obj) => {
    var colornb = []
    colornb = Object.values(obj)

    var mininklvl = minMax(colornb)[0]
    return mininklvl
}

console.log(inkLevels({
    "cyan": 23,
    "magenta": 30,
    "yellow": 10
  }))


const objectToArray = (obj) => {
    var keyvalarr = Object.entries(obj)

    return keyvalarr
}

console.log(objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10
}))



const getBudgets = (list) => {
    var budgetsum =0
    for (let index = 0; index < list.length; index++) {
        budgetsum += list[index].budget
        
    }
    return budgetsum
}

console.log(getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
]))


const afterNYears = (obj , years) => {
    
     for (const key in obj) {
         obj[key] += years
     }
     return obj
}

console.log(afterNYears({
    "Joel" : 32,
    "Fred" : 44,
    "Reginald" : 65,
    "Susan" : 33,
    "Julian" : 13
}, 3))



const GUEST_LIST = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina"
}

const greeting = (name) => {
    if (GUEST_LIST.hasOwnProperty(name)){
        console.log("Hi ,I'm "+name+", and I'm from " + GUEST_LIST[name])
    }else{
        console.log("Hi! I'm a guest.")
    }
}

 */

