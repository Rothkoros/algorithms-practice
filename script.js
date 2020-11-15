// function sortArray(array) {
//     var array = []

//     // do a while loop to check if I have done any swaps
//     for (let i = 0, j = 1; j <= array.length;)
//         if (array[i] > array[j]) {
//             //switch positions of element then move up
//             array[i] = array[j]
//             i++;
//             j++;
//         }
//         //if index is less than the next move up without switching
//     if (array[i] < array[j]) {
//         i++;
//         j++;
//     }

//     //if index is equal to next index, move up without switching
//     if (array[i] == array[j]) {
//         i++;
//         j++;

//     }
//     console.log(array);
// }

// function sort(array) {
//     //get math.min of an array then pop it into another arrays end
//     let resultArray = []
//         //hopefully stops the math.min infinite loop
//     if (array == []) {
//         return resultArray;
//     }
//     //could possibly pop then push min. Instead trying this first
//     array.forEach(element => {
//         resultArray.push(Math.min(array[...]));
//     });
//     return (resultArray)
// }

function bubbleSort(items) {
    var length = items.length;
    //Number of passes
    for (var i = 0; i < length; i++) {
        for (var j = 0; j < (length - i - 1); j++) {
            //Compare the adjacent positions
            if (items[j] > items[j + 1]) {
                //Swap the numbers
                var tmp = items[j]; //Temporary variable to hold the current number
                items[j] = items[j + 1]; //Replace current number with adjacent number
                items[j + 1] = tmp; //Replace adjacent number with current number
            }
        }
    }
}