async function insertionSort(arr){
var i, el, j;

    for( i = 1; i < len; i++ ) {
        el = arr[i];
        j = i;

        while( j > 0 && arr[j-1] > el ) {
            arr[j] = arr[j-1];
            await draw( arr, arr[j] );
            await sleep(10);
            j--;
        }
        arr[j] = el;
        await draw( arr, arr[j] );
        await sleep( time );
    }
    return arr;
}