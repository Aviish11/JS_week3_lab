let number = 4;

if (number > 0){
   console.log("4 is greater than 0")
}
else if (number < 0){
    console.log("this number is not positive");
    
}
else {
   console.log("it's 0");
   
}


//_________________________________________________________________//

var day = 0;

switch (day) {
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log('Tuesday');
        break;
        case 4:
            console.log('Wednesday');
            break;
    case 5:
        console.log('Thursday');
        break;
    case 6:
        console.log('Friday');
        break;
    case 7:
        console.log('Saturday');
        break;
    default:
        console.log("We only have 7 days in a week!");
        
}


//_______________________________________________________________________________________//

for (let i = 1; i <= 5; i++) {
   console.log(i);
}


let i = 1;
 
while (i <= 5) { 
console.log(i) , i++;

}


let j = 1; 
 
do {
 console.log(j); j++;
 
} while (j <= 5);


//__________________________________________________________________________________________________//

for (let i = 1; i <= 5; i++) {
    if (i===3) {
        break;
    }
console.log(i);
}


for (let i = 1; i <= 5; i++) {
if (i === 2) {
    continue;
}
console.log(i);
}


//_________________________________________________________________________________________________________//


let globalVar = "I'm global!";
 
function scopeExample() {
    let localVar = "I'm local!";
    console.log(localVar);
    
}
console.log(globalVar);
console.log(localVar); // not accessible within the global scope, only exists within the function

