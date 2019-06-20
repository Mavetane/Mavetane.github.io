function convertToRoman(num) {

    var romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I",];
    var englishNumerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    var romanized = "";
    for (var i = 0; i < englishNumerals.length; i++) {
        while (englishNumerals[i] <= num) {

            romanized += romanNumerals[i]
            num -= englishNumerals[i]
        }
    }
    return romanized;
}
console.log(convertToRoman(9));