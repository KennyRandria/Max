function getMax(t){
    let max;
    for(let index = 0; index< t.length; index++){
        if(t[index]<max && index == 0){
            max=t[index];
        }
        if(t[index]>max)
        max=t[index];
    }
    return max;
}
function getSecondMax(t,max){
    let SecondMax;
    for(let index = 0; index< t.length; index++){
        if(index == 0 && t[index]<max){
            SecondMax=t[index];
        }
        if(t[index]>SecondMax&&t[index] <max){
        SecondMax=t[index];
        }
    }
    return SecondMax;
}
function showresult(t){
    return getMax(t)+""+getSecondMax(t,getMax(t));
}
