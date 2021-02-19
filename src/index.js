module.exports = function toReadable (number) {

    let num = String(number);  
    let arrNumber = { 0:'zero', 1:'one', 10:'ten',100:'hundred', 11:'eleven', 2:'two', 12:'twelve', 20:'twenty', 3:'three', 13:'thirteen', 30:'thirty', 4:'four', 14:'fourteen', 40:'forty', 5:'five', 15:'fifteen', 50:'fifty', 6:'six', 16:'sixteen', 60:'sixty', 7:'seven', 17:'seventeen', 70:'seventy', 8:'eight', 18:'eighteen', 80:'eighty', 9:'nine', 19:'nineteen', 90:'ninety'};  
    
    if (num < 20) {
        return arrNumber[num];
    } else if (num.length == 2) {
        if (num[1] == 0) {
            return arrNumber[num[0]*10];
        }
        return arrNumber[num[0]*10] + ' ' + arrNumber[num[1]];
    } else if (num.length == 3) {
        if (num[1] == 0 && num[2] == 0) {
            return arrNumber[num[0]] + ' hundred';
        }
        if (num[2] == 0) {
            return arrNumber[num[0]] + ' hundred ' + arrNumber[num[1]*10];
        }
        if (num[1] == 0) {
            return arrNumber[num[0]] + ' hundred ' + arrNumber[num[2]];
        }
        if (num[1] + num[2] < 20) {
            return arrNumber[num[0]] + ' hundred ' + arrNumber[num[1] + num[2]];
        }
        return arrNumber[num[0]] + ' hundred ' + arrNumber[num[1]*10] + ' ' + arrNumber[num[2]];
    }
};