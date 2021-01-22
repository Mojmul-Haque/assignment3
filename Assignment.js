function kilometerToMeter(km) {
    var meter = 1000;
    var result = km * meter;
    // condition start  to check input type  
    if (km !== Number(km)) {
        return 'invalid value, please input a number'
    }
    return result

}

var output = kilometerToMeter(3);
console.log(output)

// end kilometerToMeter js

//start bagetCalculator js
function budgetCalculator(ghori, phone, laptop) {
    // set item price;
    var onePicsGhori = 50;
    var onePicsPhone = 100;
    var onePicsLaptop = 500;
    //calculate item price;
    var getGhoriPrice = onePicsGhori * ghori;
    var getPhonePrice = onePicsPhone * phone;
    var getLaptopPrice = onePicsLaptop * laptop
    var totalPrice = getGhoriPrice + getPhonePrice + getLaptopPrice; //total price
    // condition start  to check input type  
    if (ghori, phone, laptop !== Number(ghori, phone, laptop)) {
        return 'invalid value, please input a number'
    }
    //
    return totalPrice;
}

var output = budgetCalculator(4, 4, 4);
console.log(output)

//end bagetCalculator js

// start hotelCost js

function hotelCost(day) {
    var payment = 0;
    if (day > 0 && day < 1) {
        payment = 100;
    } // under 1 days payment
    else if (day <= 10) {
        payment = day * 100;

    } // end statement here 10 days payment calculation
    else if (day > 10 && day <= 20) {
        var countDay = day - 10;
        payment = (10 * 100) + (countDay * 80);
    } // end statement here 20 days payment calculation
    else if (day > 20) {
        var countDay = day - 20;
        payment = (10 * 100) + (10 * 80) + (countDay * 50);
    } // end statement unlimited days payment calculation
    else {
        day !== Number(day)
        return 'Invalid value. Please, input a number'
    }
    return payment;
}

var output = hotelCost(26);
console.log(output)

// end hotelCost js