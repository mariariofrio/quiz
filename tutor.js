console.log("node is running")
for(let i = 0; i<15; i++){
    console.log(i)
}
let array= [1,2,3]

array.forEach(function log(element, index){
    console.log(element)
})

for(let powersOf2=1; powersOf2<1000000; powersOf2=powersOf2*2)console.log(powersOf2)

let myObject= {
    "key": "value",
    "multi word key": "other value",
    60: "this is sixty"
}
console.log(myObject.key)
console.log(myObject["multi word key"])
console.log(myObject[6*10])
console.log(Object.keys(myObject))
console.log(Object.values(myObject))