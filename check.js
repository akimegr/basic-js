let n = 1;

function calculateDepth(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) == "object") {
            n++;
            calculateDepth(arr[i])
        }
    }
    return n;
}

calculateDepth([1, [2, [3]]])