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



function ternaryCheckCity(destinationCity) {
  if (destinationCity = "NYC") {
    return "Ok, sounds good.";
  }
  else {
    return "No go.";
  }
}


function switchOnCharmFromTip(tipValue) {


switch (tipValue) {
    case "generous":
        response = "Thank you so much.";
        break;
    case "not as generous":
        response = "You're awesome; keep your head up!";
        break;
    }
}