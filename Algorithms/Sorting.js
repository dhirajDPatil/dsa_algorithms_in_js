// Different sorting methods of array
let a = [3, 1, 7, 2, 0, 9, 5];

// quick sort
// merge sort

// bubble sort
for(let i=0; i<a.length-1; i++) {
    for(let j=0; j< a.length-i-1; j++) {
        if(a[j]>a[j+1]){
            // swap elements
            let temp = a[j];
            a[j] = a[j+1];
            a[j+1] = temp;
        }
    }
}

console.log('bubble sorted array ', a);
