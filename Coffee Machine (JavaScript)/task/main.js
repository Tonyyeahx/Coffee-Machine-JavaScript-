// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

numCups=input("Write how many cups of coffee you will need:");
water=200*numCups;
milk=50*numCups;
coffeeBeans=15*numCups;

console.log(`For ${numCups} cups of coffee you will need:
${water} ml of water
${milk} ml of milk
${coffeeBeans} g of coffee beans`);