// Write your code in this file!

function scuberGreetingForFeet(someValue) {
  if (someValue <= 400) {
  return "This one is on me!";
}
  if (someValue > 2500) {
   return "No can do.";
  }
  if (someValue > 2000) {
   return "I will gladly take your thirty bucks.";
 }
 
}

let destinationCity = "Pittsburgh";

function ternaryCheckCity(destinationCity) {
  if (destinationCity = "NYC") {
    return "Ok, sounds good.";
  }
  else {
    return "No go.";
  }
}

let tip = "generous"

function switchOnCharmFromTip() {

switch (tip) {
    case "generous":
        response = "Thank you so much.";
        break;
    case "not as generous":
        response = "You're awesome; keep your head up!";
        break;
    }
}