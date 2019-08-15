

var arr = []

function incrementer(nums) {
    for (var i = 0; i < nums.length; i++) {
        nums += arr[0]++;
    }
}
console.log(incrementer([2, 3, 5, 6]));