
function calculator(a, b, sign) {
    var result = 0;

    var signs = ["*", "-", "/", "+"];
    var isFound = signs.filter(value => {
        return value === sign
    })

    if(isFound == ""){
        return "unknown value"
    }

    console.log("value " + isFound);

    if (typeof a != "number" || typeof b != "number") {
        return "unknown value"
    }



    switch (sign) {
        case "+":
            result = a + b;
            break;

        case "-":
            result = a - b;
            break;

        case "*":
            result = a * b;
            break;

        case "/":
            result = a / b;
            break;

    }
    return result;
}
console.log(calculator(6, 2, "6"));
