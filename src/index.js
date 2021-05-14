// // task6
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// let totalPrice = (pricePerDroid * orderedQuantity) + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log('message' , message);
// task7
// function sayHi(){
//   console.log("Hello, this is my first function!");
// }
// sayHi();
//  task8
// function add(a,b,c) {
//   console.log(`Addition result equals ${a+b+c}`);
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);
// task9
// function add(a, b, c) {
// return a + b + c; 
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));
// task10
// function makeMessage (name, price) {
//    const message = `You picked ${name}, price per item is ${price} credits`;
//   return message;
// };
// task11
// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   const totalPrice = orderedQuantity * pricePerItem;
//   return totalPrice;
// };
// task12
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
// let totalPrice = (pricePerDroid * orderedQuantity) + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
//   return message;
// }
// task13
// function isAdult(age) {
//   const passed = ( age >= 18);
//   return passed;
// }
// task14
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   const isMatch = ( password === SAVED_PASSWORD );
//   return isMatch;
// }
// task15
// function checkAge(age) {
//   let message;
//   if (age >= 18 ) { // Change this line
//     message = 'You are an adult';
//   } else {
//       message = 'You are a minor';
//   }
//   return message;
// }
// task16
// function checkStorage(available, ordered) {
//   let message;
//   if (available < ordered ) { 
//     message = 'Not enough goods in stock!';
//   } else {
//       message = 'Order is processed, our manager will contact you.';
//   }
//   return message;
// }
//task17
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;
// a += 2;
// b -= 4;
// c *=  3;
// d /=  10;
// task18
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   let totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = 'Insufficient funds!';
//   }
//   else {(customerCredits > totalPrice)
//     let creditsLeft = (customerCredits - totalPrice);
//    message = `You ordered ${orderedQuantity} droids, you have ${creditsLeft} credits left`; 
//   }
//   return message;
// }
// task19
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   if (password === null) { // Change this line
//     message =  'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) { // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }
//   return message;
// }
// task20
// function checkStorage(available, ordered) {
//   let message;
// if(ordered === 0){
//   message = 'There are no products in the order!';
// }
//   else if (ordered > available){
//     message = 'Your order is too large, there are not enough items in stock!';
//   }
//   else{
//     message = 'The order is accepted, our manager will contact you';
//   }
//   return message;
// }
// task21
// function isNumberInRange(start, end, number) {
//   const isInRange =(number > start && number <= end) ; // Change this line
//   return isInRange;
// }
// task22
// function checkIfCanAccessContent(subType) {
//   const canAccessContent =subType === 'pro' || subType === 'vip'; // Change this line
//   return canAccessContent;
// }
// task23
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line
//   return isNotInRange;
// }
// task24
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
// if (totalSpent >= 50000) {
//   discount = GOLD_DISCOUNT;
// }
//   else if(totalSpent >= 20000 && totalSpent < 50000){
//     discount = SILVER_DISCOUNT;
//   }
//   else if (totalSpent >= 5000 && totalSpent <= 20000 ){
//   discount = BRONZE_DISCOUNT;
//   }
//   else {
//     discount = BASE_DISCOUNT;
//   }
//   return discount;
// }
// task25
// function checkStorage(available, ordered) {
//   let message;
//  message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";

//   return message;
// }
// task26
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
// message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
//   return message;
// }
// task27
// function getSubscriptionPrice(type) {
//   let price;
//  switch (type) { 
//     case "starter"
//       price = 0 ; 
//       break;

//     case "professional" 
//       price = 20; 
//       break;
//     case "organization"   
//       price = 50; 
//       break;
//   }
//   return price;
// }
// tak28
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   switch(password){
//     case null:
//   message = "Canceled by user!";
//   break;
//     case ADMIN_PASSWORD :
//    message = "Welcome!";
//       break;
//     default: 
//      message = "Access denied, wrong password!";
// }
//   return message;
// }
// task29
// function getShippingCost(country) {
//   let message;
//  switch (country) { 
//    case "China":
//       price = 100 ;
//      message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//    case "Chile": 
//      price = 250; 
//      message = `Shipping to ${country} will cost ${price} credits`;
//      break;
     
//    case "Australia":   
//       price = 170; 
//      message = `Shipping to ${country} will cost ${price} credits`;
//       break;
     
//    case "Jamaica":  
//       price = 120; 
//      message = `Shipping to ${country} will cost ${price} credits`;
//       break;
     
//      default :
//      message = "Sorry, there is no delivery to your country";
//   }
//   return message;
// }
// task30
// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; 
//   return message;
// }
// task31
// const courseTopic = "JavaScript essentials";
// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];
// task32
// function getSubstring(string, length) {
//   const substring = string.slice (0, length)  ; 
//   return substring;
// }
// task33
// function formatMessage(message, maxLength) {
//   let result;
//   result =
//     message.length > maxLength ? message.slice(0, maxLength) + "..." : message;
//   return result;
// }
// task34
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); 
//   return normalizedInput;
// }
// task35
// function checkForName(fullName, name) {
//  const result = fullName.includes(name) ;
//   return result;
// }
// task36
// function checkForSpam(message) {
//   let result;
//   result = message.includes("spam") || message.includes("sale");
//   return result;
// }