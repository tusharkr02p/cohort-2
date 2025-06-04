const fs = require("fs");

// function tusharreadFile(){
//     return new Promise(function (resolve){
//         fs.readFile("a.txt","utf-8",(err, data)=>{
//             resolve(data);
//         })
//     })
//     }

//     function ondone(data){
//         console.log(data);
//     }

//      var a= tusharreadFile();
//      a.then(ondone);


     function kirat(){
        let p = new Promise(function(resolve){
            resolve("hi there")
        });
        return p;
     }

     const value = kirat();
     value.then(function(data){
        console.log(data);
     })