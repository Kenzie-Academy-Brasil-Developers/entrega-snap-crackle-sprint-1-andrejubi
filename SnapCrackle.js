console.log("teste")
alert("Teste")

function snapCrackle(z){
    let x = ""

    for (let y = 1; y <= z; y++){
        
        if (y%5==0 && y%2 !== 0){
            x += 'snapCrackle'    
        }
        
        else if (y%5==0){
            x += "crackle"
        }
        
        else if (y%2!==0){
            x += 'snap'
        }
        else if (y%2==0){
            x += y
        }

        if (y !== z){
            x+= ", "
        }
        
        
    }
    
    return x
}

console.log(snapCrackle(12))