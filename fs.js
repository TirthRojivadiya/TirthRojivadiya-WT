const fs = require('fs');

fs.writefile('filea.txt','this ia file a',(e)=>{
if(e){
    console.log('error');
}
else{
    console.log('no error');
}
})
fs.unlinkfile('filea.txt',(e)=>{
    if(e){
        console.log('error');
    }
    else{
        console.log('no error');
    }
})
fs.appendfile('filea.txt','new data',(e)=>{
    if(e){
        console.log('error');
    }
    else{
        console.log('no error');
    }
})
fs.readfile('filea.txt','this is my file',(e,data)=>{
    if(e){
        console.log('error');
    }
    else{
        console.log('data');
    }
})
fs.renamefile('filea.txt','newfile.txt',(e)=>{
    if(e){
        console.log('error');
    }
    else{
        console.log('no error');
    }
})