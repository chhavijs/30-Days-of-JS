// Feature Request

//1

let age = 21;
console.log(`Value: ${age}, Type: ${typeof age}`); 

let dance = "kathak";
console.log(`Value: ${dance}, Type: ${typeof dance}`); 

let isStudent = true;
console.log(`Value: ${isStudent}, Type: ${typeof isStudent}`); 


let person = { firstName: "Chhavi", lastName: "Singh" };
console.log(`Value: ${JSON.stringify(person)}, Type: ${typeof person}`); 

let hobbies = ["reading", "gaming", "hiking"];
console.log(`Value: ${hobbies}, Type: ${typeof hobbies}`); 

let emptyValue = null;
console.log(`Value: ${emptyValue}, Type: ${typeof emptyValue}`); 

let notDefined;
console.log(`Value: ${notDefined}, Type: ${typeof notDefined}`); 

let greet = function() {
  return "yo";
};
console.log(`Value: ${greet()}, Type: ${typeof greet}`); 

//2
// Reassignment Demo

// Using let
let message = "Initial message";
console.log(`Original value: ${message}`); 

message = "Updated message";
console.log(`Reassigned value: ${message}`); 

// Using const
const constantMessage = "Constant message";
console.log(`Original value: ${constantMessage}`); 

try {
  constantMessage = "New constant message";
} catch (error) {
  console.error(`Error: ${error.message}`); 
}
