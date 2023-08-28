// function names(name,age) {
//     if(age >= 18) {
//         console.log("Damm "+ name + " you are an adult");
    
//     }else {
//         console.log("Sorry "+ name +" you are not an adult");
//     }
// }

// names("salman",18);
// names("hana",13);
// names("zayan",5);
// names("nada",12);

//=================================================

// function whatShallWear(temp) {
//     if (temp < 60) {
//         console.log("Wear a jacket");
//     }
//     else if (temp < 70){
//         console.log("Wear a sweater");
//     }
//     else {
//         console.log("Wear T-shirt");
//     }
// }

// whatShallWear(60);
// whatShallWear(70);
// whatShallWear(40);

//-------------------------------------------

// function doIt(param) {
//     param = 2;
// }

// var test = 1;
// doIt(test);
// console.log(test);

// ----------------------------------------------

// function jiayan(eating, weight) {
//     if(eating > 3 && eating < 6) {
//         weight += 1; 
//     }
//     else if (eating < 3) {
//         weight -= 1;
//     }
//     else{
//         weight += 5;
//     }
//     return weight
// }

// console.log(jiayan(9,0));
// ---------------------------------------------

// var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69,
//               34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
//               46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];

// var output;

// var i = 0;

// while(i < scores.length) {
//     output = `Bobble solution #${i} socres: ${scores[i]}`;
//     console.log(output);
//     i += 1;
// }
// ----------------------------------------------

// var i = 0;

// var hasBubbleGum = [false, false, false, true];

// var products = ["Choo Choo Chocolate","Icy Mint", "Cake Batter","Bubblegum"];

// while (i < hasBubbleGum.length) {
//    if (hasBubbleGum[i]) {
//     console.log(products[i] + " contains bubble gum");
//     i = i + 1;
//    }

// }
// ---------------------------------------------------

var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
var hasBubbleGum = [false, false, false, true];

for (let i = 0; i < hasBubbleGum.length; i++) {
    if (hasBubbleGum[i]) {
        console.log(products[i] + " contains bubble gum");
    }
    
}
