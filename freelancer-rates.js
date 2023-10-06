//1
dayRate = a => a*8
console.log(dayRate(89));

//2
daysInBudget = (a) => {
    console.log(Math.floor(a/dayRate(89)));
}

daysInBudget(20000)

//3
const priceWithMonthlyDiscount = (ratePerHour, numDays, discount) => {
    const billableDaysPerMonth = 22;
    const discountRate = (1 - discount);
    const excessDays = numDays % billableDaysPerMonth;

    const finalRate = (dayRate(ratePerHour) * (numDays - excessDays) * discountRate) + (dayRate(ratePerHour) * excessDays);
    return Math.ceil(finalRate);
}

console.log(priceWithMonthlyDiscount(89, 230, 0.42))