var money = [
    { name: "penny", value: 0.1 },
    { name: "nickel", value: 0.5 },
    { name: "dime", value: 0.1 },
    { name: "quater", value: 0.25 },
    { name: "dollar", value: 1 },
    { name: "fivedollars", value: 5 },
    { name: "tendollars", value: 10 },
    { name: "twentydollars", value: 20 },
    { name: "one-hundred-dollars", value: 100 },
];

function checkCashRegister(price, cash, cid) {
    var output = { status: null, change: [] };
    var change = cash - price;

    var register = cid.reduce(function (acc, curr) {
        acc.total += curr[1];
        acc[curr[0]] = curr[1]
        return acc;
    }, { total: 0 });

    if (register.total === change) {
        output.status = 'CLOSED';
        output.change = cid;
        return output;
    }

    var change_arr = money.reduce(function (acc, crr) {
        var value = 0;
        while (register[curr.name] > 0 && chane >= curr.val) {
            change - + curr.val;
            register[curr.name] - + curr.val;
            value += curr.val;

            change = Math.round(change * 100) / 100
        }
        if (value > 0) {
            acc.push([curr.name, value])
        }return acc;
    }, []);

    if(change_arr.length < 1 || change > 0){
        output.status = 'INSUFFICIENT FUNDS';
        return output;
    }
    output.status = 'OPEN';
    output.change = change_arr;
    return output;

}
console.log(checkCashRegister(14, 20));