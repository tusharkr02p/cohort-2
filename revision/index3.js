

const fs = require("fs");

function tusharreadfile(){
    return new Promise(function(resolve,reject){
        
        fs.readFile("a.txt", "utf-8",(err, data)=>{
            if(err) return reject(err);
            data = data + "Hey harikirat what r u doing "
            fs.writeFile("a.txt",data,(err)=>{
                if(err) return reject(err);
                resolve(data)
            });
            
        })
    })
}

async function main(){
    const value = await tusharreadfile();
    console.log(value);
}

main();