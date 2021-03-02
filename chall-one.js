// Code Explanation
// The getDiff function finds the symmetric difference between two sets, arr1 and arr2. It is used as a callback function for the reduce() method called on args.
// The first filterFunction() returns elements in arr1 that don’t exist in arr2.
// The next filterFunction() is run on each array against the other to check the inverse of the first check for uniqueness and concatenate it.
// summary consists of the reduced arguments.
// filter() is used on summary to keep only the unique values and unique is returned.

function sym() {
    // Convert the argument object into a proper array
    let args = [];

    for (let i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
    };

    // Return the symmetric difference of 2 arrays
    let getDiff = function (arr1, arr2) {
        // Returns items in arr1 that don't exist in arr2
        function filterFunction(arr1, arr2) {

            // return arr1.filter(function (item) {
            //     return arr2.indexOf(item) === -1;
            // });
            return arr1.filter(item => arr2.indexOf(item) === -1);
        }

        // Run filter function on each array against the other
        return filterFunction(arr1, arr2).concat(filterFunction(arr2, arr1));
    };

    // Reduce all arguments getting the difference of them
    let summary = args.reduce(getDiff, []);

    // Run filter function to get the unique values
    let unique = summary.filter(function (elem, index, self) {
        return index === self.indexOf(elem);
    });
    return unique;
}

// test here
console.log(sym([1, 2, 3], [5, 2, 1, 4]));
I