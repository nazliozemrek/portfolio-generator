const profileDataArgs = process.argv.slice(2,process.argv.length);

const [name1,github] = profileDataArgs;

const fs= require('fs');
const generatePage = require('./src/page-template.js')



fs.writeFile('index.html',generatePage(name1,github),err => {
    if(err) throw new err;
    console.log('Portfolio Completed! Checkout index.html to see output!') 
});