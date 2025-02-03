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

