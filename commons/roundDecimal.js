

const roundDecimal = (number, amountOfDecimals) => {
    try {
        if (number && number > 0 ) {
            const constant = Math.pow(10, amountOfDecimals);
            return Math.round(number * constant) / constant;
        } else {
            return 0;
        }
    } catch (err) {
        console.error('Something went wrong in roundDecimals.', err);
    }
}


module.exports = roundDecimal;