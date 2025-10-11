let arr = [0, 0, 1, 1, 2, 3, 4, 4];

function sortArr(arr) {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) {
            map[arr[i]] = arr[i];
        }
    }

    // console.log(Object.keys(map).join(""))
    // 01234
    let res = Object.keys(map);
    // [ '0', '1', '2', '3', '4' ]
    return res.map(Number); //[ 0, 1, 2, 3, 4 ]
}


let s = "hello";
console.log(s.split(""));

// [ 'h', 'e', 'l', 'l', 'o' ]

console.log(sortArr(arr));