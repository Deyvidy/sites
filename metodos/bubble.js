async function bubbelSort(vetor){
    for (var i = len-1; i>=0; i--){
        for(var j = 1; j<=i; j++){
            if(vetor[j-1]>vetor[j]){
                var teste = swapIndex(vetor,j,j-1);
                await draw(vetor, teste.aux);	
                await sleep(time);
            }
        }
    }
}