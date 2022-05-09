function getMax(t){
    let max;
    for(let index = 0; index< t.length; index++){
        if(t[index]<max){
            max=t[index];
        }
        if(t[index]>max)
        max=t[index];
    }
    return max;
}
