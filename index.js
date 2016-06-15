var promise = require('bluebird')

function mathsCal(inputParam1, inputParam2){

    new promise(function(resolve, reject){
            
        var addResult = inputParam1 + inputParam2;

        if(addResult !== '' && !isNaN(addResult)){
            resolve(addResult)    
        }
        else{
            reject('something went wrong')  
        }
        
    }).then(function(addResult){
        
        console.log('Add result ',addResult)
        
        var subResult = inputParam1 - inputParam2;

        if(subResult !== '' && !isNaN(subResult)){
             return subResult
        }
        else{
            return 'something went wrong'
        }
        
    }).then(function(subResult){
        console.log('Sub result ',subResult)
    })
    
}

mathsCal(10, 50)
