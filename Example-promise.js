function addPromise(a,b){
    return new Promise(function(resolve,reject) {
        if(typeof a === 'number' && typeof b === 'number'){
            resolve(a+b);
        }else{
            reject('please Provide valid numbers');
        }


    }

    );

    
}

addPromise(4,10).then( function(temp){
    console.log('promise Success', temp)
}, function(err){
    console.log('promise Error', err);
}


)