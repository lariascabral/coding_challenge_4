// Task 1 - Customer Discounts

let purchaseAmount = 200 ;                      // Total amount of purchase
if (purchaseAmount > 100) {
    let discount = 0.10 ;                       // Discount percentage / 10% 
    let finalAmount = purchaseAmount - (purchaseAmount * discount) ;
    
    console.log(`Your purchase qualifies for discount! your new total after discount is: $${finalAmount}`) ; 
    } ;                                         // If condition statement for discount eligibility
                                                // Oputput: Your purchase qualifies for discount! your new total after discount is: $180


// Task 2 - Sales Report

let sales = [100, 98, 500, 354, 200, 91] ;      // Creation of the sales array
let totalSales = 0 ;                            // Creation of the empty account of Total Sales for the loop
for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i];   
}                                               // For loop calculation for total sales

console.log(`Total Sales: $${totalSales}`) ;    // Output: Total Sales: $1343


// Task 3 - Inventory Depletion

let stock = 10                                  // Creation of stock account starting at 10
while (stock >= 0) {
    console.log (`Inventory stock is: ${stock}`) ; stock--      // While stock is greater than zero, decrease it until it reaches zero
}                                               // Output: Inventory stock is: 10, Inventory stock is: 9, ...


// Task 4 - Customer Survey

var responses = 0                               // Creation of variable responses
 do {
    responses++ ;                               // Creates responses inputs until while condition is met
    console.log(`Response count is ${responses}`)       // Output: 
} while (responses < 3);                         // Statement will end when is equal to three


// Task 5 - Employee Information

let employee = { name: "Alice", 
            position: "Manager", 
            salary: 75000 } ;                   // Creation of the employee profile

for (const property in employee) {
    console.log(`${property}: ${employee[property]}`)       // Each property will be logged in the console individually.
 ;}                                             // Output:name: Alice   position: Manager   salary: 75000


 