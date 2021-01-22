// https://github.com/Mojmul-Haque/assignment3

//start kilometerToMeterjs
function kilometerToMeter(km) {
    var meter = 1000;
    var result = km * meter;
    // condition start  to check input type  
    if (km !== Number(km) || km < 0) {
        return 'invalid value, please input a valid number'
    }
    return result;
}

var outputKm = kilometerToMeter();

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
    } else if (ghori, phone, laptop < 0) {
        return 'invalid value, please input valid number'
    }
    //
    return totalPrice;
}

var outputBudget = budgetCalculator();

//end bagetCalculator js


function hotelCost(day) {
    var payment = 0;
    if (day < 0) {
        return 'enter a valid value'
    } //break negative value
    else if (day <= 1 && day && day !== String(day)) {
        payment = 100;
    } // under 1 days payment
    else if (day <= 10 && day !== String(day)) {
        payment = day * 100;

    } // end 10 days payment calculation
    else if (day > 10 && day <= 20 && day !== String(day)) {
        var countDay = day - 10;
        payment = (10 * 100) + (countDay * 80);
    } // end 20 days payment calculation
    else if (day > 20 && day !== String(day)) {
        var countDay = day - 20;
        payment = (10 * 100) + (10 * 80) + (countDay * 50);
    } // end  unlimited days payment calculation
    else if (day !== Number(day)) {

        return 'Invalid value. Please, input a number'
    }
    return payment;
}

var outputCost = hotelCost();

//end hoteCost js

var names = ['Mojmul', 'Alamin', 'Sultan', 'Rakibul', 'Zahirul', 'Shahariar Najim Nur']

function megaFriend(name) {
    var bigName = name[0];
    for (var i = 0; i < name.length; i++) {
        var newName = name[i];
        if (newName.length > bigName.length) {
            bigName = newName;
        }
    }
    if (name == '' || name == ' ' || name == Number(name)) {
        return 'Enter your Friend Name'
    }
    return bigName;
}

var outputFriend = megaFriend();

//end megaFrien js;