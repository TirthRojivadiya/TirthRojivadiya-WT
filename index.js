// const path = require('path');

// const pathA = path.dirname('c:/folderA/folderB/fileA.html')
// console.log(pathA);


// const pathB = path.extname('c:/folderA/folderB/fileA.html')
// console.log(pathb);

// const pathC= path.parse('c:/folderA/folderB/fileA.html')
// console.log(pathC);

// const pathD= path.basename('c:/folderA/folderB/fileA.html')
// console.log(pathD);

// const changeformat = {

// }
// path.join(pathA,pathB);
// path.format(changeformat);
// path.resolve(pathA);
// path.normalize(pathA);
// path.relative(pathA,pathB);



// const http = require('http')

// const server = http.createServer((req, res) => {
//     res.end('hellow world for my first web server')
// })
// server.listen(3000, () => {
//     console.log("server started at 3000");

// })

const http = require('http')
const server = http.createServer((req, res) => {
    const url = req.url;
    if (url == '/home'){
        res.write('home page');
    console.log('inside home page');
    res.end();
}
else if (url == '/about') {
    res.write('about page');
    console.log('inside about page');
    res.end();
}
else if (url == '/contact') {
    res.write('contact page');
    console.log('inside contact page');
    res.end();
}
else if(url == '/registration'){
    res.write('registration page');
    console.log('inside registration page');
    res.end();
}
else if(url == '/feedback'){
    res.write('feedback page');
    console.log('inside feedback page');
    res.end();
}})
server.listen(5000, () => {
    console.log("server started at 8000");

})





