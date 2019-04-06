function heapSort(vetor){
    
    async function max_heapify(a, i, length) {
        while (true) {
            var left = i*2 + 1;
            var right = i*2 + 2;
            var largest = i;

            if (left < length && a[left] > a[largest]) {
                largest = left;
            }

            if (right < length && a[right] > a[largest]) {
                largest = right;
            }

            if (i == largest) {
                break;
            }

            var teste = await swapIndex(a, i, largest);
            await draw(vetor,teste.aux);
            await sleep(time)
            i = largest;
        }
    }

    async function heapify(a, length) {
        for (var i = Math.floor(length/2); i >= 0; i--) {
            await max_heapify(a, i, length);
        }
    }

    async function heapsort(a) {
        await heapify(a, a.length-1);

        for (var i = a.length - 1; i >= 0; i--) {
            var teste = await swapIndex(a, i, 0);
            await draw(vetor, teste.aux);
            await sleep(time)
            await max_heapify(a, 0, i);
        }
    }

    heapsort(Vetor);
}