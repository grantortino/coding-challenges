// function frankenSplice(arr1, arr2, n) {
//     let arr2Copy = arr2.slice(0);
//     for (let i = 0; i < arr1.length; i++) {
//         arr2Copy.splice(n, 0, arr1[i]);
//         n++;
//     }
//     return arr2Copy;
// }

// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

// function bouncer(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!arr[i] == 'NaN' || !arr[i] === 0 || !arr[i] === undefined || !arr[i] === null || !arr[i] === false) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// console.log(bouncer([7, "ate", "", false, 9]));



// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

// function getIndexToIns(arr, num) {
//     arr.push(num);
//     arr.sort((a, b) => {
//         return a - b
//     });
//     console.log(arr)
//     return arr.indexOf(num);
// }

// console.log(getIndexToIns([10, 20, 30, 40, 50], 35));

// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

// function mutation(arr) {
//     let test = arr[1].toLowerCase();
//     let check = arr[0].toLowerCase();
//     for (let i = 0; i < test.length; i++) {
//         if (check.indexOf(test[i]) < 0) return false;
//         console.log(check.indexOf(test[i]))
//     } return true;
// }

// console.log(mutation(["Alien", "line"]));

// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

// function chunkArrayInGroups(arr, size) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr.slice(i, size));
//     }
//     return newArr;
// }

// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
// // console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
// // console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
// // console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
// // console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));

// Given a string, that consist of only two types of characters: "(" and ")" . Balance the parentheses by inserting either a "(" or a ")" as many times as necessary.

// Determine the minimum number of characters, that must be inserted. Example s = "(()))". To make it valid sequence should be inserted one "(" at the beginning . Now the string is balanced after one insertion. Answer is 1.

// My problem here, in my try is that I make the string valid, but can't determine the minimum number of insertion, that should make the sequence valid.

function checkParanthesis(str) {
    // dichiaro un array vuoto
    let brackets = [];
    let counter = 0;
    console.log('STRING IS:', str)
    // creo un loop che itera in tutta la stringa "str"
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            brackets.push(str[i]);
            counter++;
            console.log('string bracket is "(" -> push "(" to brackets array', brackets, 'iteration', counter);
        } else if (str[i] === ")") {
            if (brackets[brackets.length - 1] === "(") {
                brackets.pop();
                counter++;
                console.log('string bracket is ")" and last element in brackets array  is "(" -> counter pop from brackets array', brackets, 'iteration:', counter);
            } else brackets.push("#");
            counter++;
            console.log('string bracket is ")" and brackets last element is not "(" -> push # to brackets array', brackets, 'iteration', counter);
        }
    }
    console.log('brackets final', brackets)
    return brackets.length;
}

console.log(checkParanthesis('))(())'));