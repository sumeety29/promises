var promise = require('bluebird')

function mathsCal(inputParam1, inputParam2){

    return new promise(function(resolve, reject){
            
        var result = inputParam1 + inputParam2;

        if(result !== '' && !isNaN(result)){
            resolve(result)    
        }
        else{
            reject('something went wrong')
        }
        
    }).then(function(result){
        console.log('Result ',result)
    })
    
}

mathsCal()

