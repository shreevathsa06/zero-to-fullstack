// what might happen when we run this code

console.log("Start");

setTimeout(function cb() {
    console.log("Callback"); // should be printed after 5 seconds
}, 5000);

console.log("End");

/*  firtst start will be printed in the console, then a call back function will be registered in   the callstack queue to run after 5 seconds (because of setTimeout)
 then control will move on and prints end 
 after 5 seconds callback will be printed
 output will look like this: 
 Start
 End
 Callback */

/*  but What if we had some millions of lines of code below here
the js engine might take some few seconds to execute all this
lets consider it takes 10 seconds to execute all the million lines of code which are below that setTimeout function
 meanwhile out registered call back function should have executed after 5 seconds but that will not happen because we know that js waits for none
 by the time js executes all those million lines it will be 10 seconds and the "callback" is printed after 10 seconds instead of 5 */

 // lets try to simulate that million line of code anaology here


 let startDate = new Date().getTime();
 let endDate = startDate();
 while(endDate < startDate + 10000) {
    endDate = new Date().getTime();
 }

 console.log("While expires");

