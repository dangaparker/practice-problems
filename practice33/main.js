function invert_negatives(aNumber){
    if(aNumber<=0){
        return aNumber;
    }
    else if(aNumber>0){
        var newNum = aNumber * -1;
        return newNum;
    }
    else{return false;
    }
}
console.log(invert_negatives('puppies'));