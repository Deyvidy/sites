async function selectionSort(vetor){
    var minIdx;
    for(var i = 0; i < len; i++){
        minIdx = i;
        for(var  j = i+1; j < len; j++){
            if(vetor[j] < vetor[minIdx]){
                minIdx = j;
            }
        }
        var teste = await swapIndex(vetor,i,minIdx);
        await draw(vetor, teste.temp);
        await sleep(time)
    }
    return vetor;
}