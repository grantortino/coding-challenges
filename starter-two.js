// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

// function chunkArrayInGroups(arr, size) {
//     let sortedArr = [];
//     for (let i = 0; i < arr.length; i += size) {
//         let pairedArr = arr.slice(i, i + size);
//         sortedArr.push(pairedArr);
//     }
//     return sortedArr;
// }

// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));

// chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].

// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].

// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].

// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].

// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].

// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].

// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].

// function reverseString(str) {
//     let newString = "";
//     // loop in cui i parte dalla fine della stringa, il loop gira finchè i è maggiore o uguale a zero, i decresce
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString += str[i]
//     }
//     return newString;
// }

// console.log(reverseString("Ai Lati D'Italia"));

function factorialize(num) {
    if (num < 0) {
        return 1;
    }
    return num * factorialize(num -1)
}

console.log(factorialize(5));