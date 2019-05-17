function changeArrayToString(array){
    var toStr = "";

    for(i = 0; i < array.length; i++){
        toStr = toStr + array[i] + " "
    }
    return "newStr: " + toStr;

}
console.log(changeArrayToString(["Maggie","was","born","somewhere","between","free-state","and","mpumalanga"]));