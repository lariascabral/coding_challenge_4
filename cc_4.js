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
} while (responses < 3);                        // Statement will end when is equal to three


// Task 5 - Employee Information

let employee = { name: "Alice", 
            position: "Manager", 
            salary: 75000 } ;                   // Creation of the employee profile

for (const property in employee) {
    console.log(`${property}: ${employee[property]}`)       // Each property will be logged in the console individually.
 ;}                                             // Output:name: Alice   position: Manager   salary: 75000



// Task 6 - Product Listings

let products = [ "pencil", "paper", "pen"] ;    // Creationg of product array
for (const product of products) {               // For each product, log them in the console individually
    console.log(`Poduct: ${product}`)           // Output: Poduct: pencil   Poduct: paper   Poduct: pen
 } ;


 // Task 7 - Order Processing

 let orders = [1001, 1002, 1003, 1004] ;            // Creation of array of order IDs
 orders.forEach(orderID => {                    // Per Order ID, a console entry will be done
    console.log(`Order ID: ${orderID}`)         // Output: Order ID: 1001   Order ID: 1002  Order ID: 1003  Order ID: 1004
 });


 // Task 8 - Tax Calculation

function calculateTax(amount, taxRate) {
    return amount * (taxRate / 100) ;           // Function creation for tax rate
} ;
       // Example case
       let amount = 300 ; 
       let taxRate = 18 ;                       // 18% tax rate

console.log(`The calculated tax for $${amount} at a ${taxRate} tax rate is $${calculateTax(amount, taxRate)}`)
                                                // The calculated tax for $300 at a 18 tax rate is $54


// Task 9 - Discount Application

const applyDiscount = function(price, discountPercentage) {
    return price - (price * (discountPercentage / 100)) ;       // Function for discounts
} ;
       // Example case
       let purchasePrice = 450 ; 
       let discount = 12 ;                        // 12% discount

console.log(`The discounted price is $${applyDiscount(purchasePrice, discount)}`, "for this purchase") ;
