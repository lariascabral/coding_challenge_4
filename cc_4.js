// Task 1 - Customer Discounts

let purchaseAmount = 200 ;
if (purchaseAmount > 100) {
    let discount = 0.10 ;
    let finalAmount = purchaseAmount - (purchaseAmount * discount) ;
    
    console.log(`Your purchase qualifies for discount! your new total after discount is: $${finalAmount}`) ;
    } else {
    console.log(`Your total without any discount is: $${finalAmount}`) ;    
    } ;
