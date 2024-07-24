const path = require('path');

const pathA = path.dirname('c:/folderA/folderB/fileA.html')
console.log(pathA);


const pathB = path.extname('c:/folderA/folderB/fileA.html')
console.log(pathB);

const pathC= path.parse('c:/folderA/folderB/fileA.html')
console.log(pathC);

const pathD= path.basename('c:/folderA/folderB/fileA.html')
console.log(pathD);

const changeformat = {

}
 const pathT =path.join(pathA,pathB);
 console.log(pathT);
 const pathI =path.format(changeformat);
 console.log(pathI);
 const pathR =path.resolve(pathA);
 console.log(pathR);
 const pathO = path.normalize(pathA);
 console.log(pathO);
 const pathH =path.relative(pathA,pathB);
 console.log(pathH);

 const fs = require(fs);

 fs.writefilesync('my filea.txt','this is the file data');
 const readdata = fs.readfilesync('my filea.txt','utf-8')
 console.log(readdata);

 fs.renamesync('my filea.txt','new filea.txt');
 fs.unlinkfilesync('my filea.txt','this is the file data')








