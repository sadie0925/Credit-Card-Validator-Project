function  LuhnAlgorithm ( unsigned cardNumber );
function main ();

function LuhnAlgorithm ( unsigned cardNumber ) {
    var unsigned oddsum;
    var unsigned evensum;
    var unsigned finalSum;
    var unsgined countDigit;
    countDigit=floor(log10(cardNum)+1);
    while(countDigit<15||countDigit>19||countDigit==17){
        console.log ("This is not valid credit card number. Please enter your Valid credit card number: ");
        cin >> cardNum;
        countDigit=floor(log10(cardNum)+1);
    }
    unsigned long long int storeNum = cardNum;
    while (cardNum > 0) {
        int oddNum = cardNum % 10;
        oddsum += oddNum;
        cardNum /= 100;
    }

    storeNum /= 10;
    while (storeNum > 0) {
        int evenNum = storeNum % 10;
        int digit = evenNum * 2;
        if (digit >= 10) {
            int firstD = digit / 10;
            int secondD = digit % 10;
            digit = firstD + secondD;
        }
        evensum += digit;
        storeNum /= 100;
    }
    finalSum = oddsum + evensum;
    return finalSum;
}
