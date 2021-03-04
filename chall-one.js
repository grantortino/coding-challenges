// Code Explanation
// The getDiff function finds the symmetric difference between two sets, arr1 and arr2. It is used as a callback function for the reduce() method called on args.
// The first filterFunction() returns elements in arr1 that don’t exist in arr2.
// The next filterFunction() is run on each array against the other to check the inverse of the first check for uniqueness and concatenate it.
// summary consists of the reduced arguments.
// filter() is used on summary to keep only the unique values and unique is returned.

// function sym() {
//     // Convert the argument object into a proper array
//     let args = [];

//     for (let i = 0; i < arguments.length; i++) {
//         args.push(arguments[i]);
//     };

//     // Return the symmetric difference of 2 arrays
//     let getDiff = function (arr1, arr2) {
//         // Returns items in arr1 that don't exist in arr2
//         function filterFunction(arr1, arr2) {

//             // return arr1.filter(function (item) {
//             //     return arr2.indexOf(item) === -1;
//             // });
//             return arr1.filter(item => arr2.indexOf(item) === -1);
//         }

//         // Run filter function on each array against the other
//         return filterFunction(arr1, arr2).concat(filterFunction(arr2, arr1));
//     };

//     // Reduce all arguments getting the difference of them
//     let summary = args.reduce(getDiff, []);

//     // Run filter function to get the unique values
//     let unique = summary.filter(function (elem, index, self) {
//         return index === self.indexOf(elem);
//     });
//     return unique;
// }

// // test here
// console.log(sym([1, 2, 3], [5, 2, 1, 4]));

// Explanation https://www.youtube.com/watch?v=XG3O5xJgMA0&t=172s
// Minute: 7:00

// create a function to find the symmetric difference between two arrays

const symOfTwo = (arr1, arr2) => {
    // start creating the empty output
    const output = [];
    // // loop through first array
    // for (const el of arr1) {
    //     // check for duplicates
    //     if (!output.includes(el) && (!arr2.includes(el))) {
    //         output.push(el);
    //     }
    // }
    // // loop through second array
    // for (const el of arr2) {
    //     // check for duplicates
    //     if (!output.includes(el) && (!arr1.includes(el))) {
    //         output.push(el);
    //     }
    // }

    
    // OPTIMIZATION

    // first go into each of the arrays and eliminate the duplicates withing themselves. i.e. if the first array has [1, 2, 3, 3], I make it to have [1, 2, 3]
    // after I did this I am going to combine the two arrays into one array and then count each element, how many times each element occurs and avoid a loop withing a loop situation.
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    console.log('set1', set1, 'and set2', set2); // these are objects and we want an array
    // i am going to combine the two arrays into one array. I am going to spread the values of both arrays into one array
    const combinedArray = [...set1, ...set2];
    console.log('my combined array', combinedArray);
    // i am going to make an object that keeps count of how many times each element appears in this combined array
    const elObj = {};

    for (const el of combinedArray) {
        if (el in elObj) {
            elObj[el]++;
        } else {
            elObj[el] = 1;
        }
    };

    console.log('count of how many times a value appears in the combined array', elObj);

    // the elements we are interested in are the ones in which the key appears only once, so we look through our keys in elObj

    for (const el in elObj) {
        if (elObj[el] === 1) {
            output.push(el);
        }
    }
    return output;
    };

    // symOfTwo([1, 2, 3, 3], [5, 2, 1, 4]);

    // this will give us the symmetric difference of any number of arrays
function sym() {
    // transform arguments into an array
    const arrOfArgs = [...arguments];
    // extract the elements in the array
    let output = arrOfArgs[0];
    // with a for loop, I set i = 1 because we already took care of the first array
    for (let i = 1; i < arrOfArgs.length; i++) {
        // start fom the first index of arrOfArgs and then update output variable with calling the symOfTwo function
        output = symOfTwo(output, arrOfArgs[i]); // this will constantly update our output with the updated symmetric difference
    }
    return output;
};

// console.log(symOfTwo([1, 2, 3], [5, 2, 1, 4])); 

console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]));


