// Add your functions here

function map(sourceArray, myFunc) {
    let resultArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        resultArray.push(myFunc(sourceArray[i]))
    }
    return resultArray
}


function reduce(arr, fn, start) {
    if (start) {
       arr.forEach(element => {
            start = fn(element, start)
        })
    } else {
        start = arr[0]
        for (let i = 1; i < arr.length; i++) {
            start = fn(arr[i], start)
        }
    }
    return start
}