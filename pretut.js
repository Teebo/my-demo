var D2UConverter = require('dos2unix').dos2unix;

const d2u = new D2UConverter()
  .on('error', function (err) {
    console.log('Error');
    console.error(err);
  })
  .on('end', function (stats) {
    console.log('stats');
    console.log(stats);
  });

const filePath = process.argv[1];

const pathParts = filePath.split('/')
const newFileName = pathParts[pathParts.length - 1].replace('pre', '');
pathParts[pathParts.length - 1] = newFileName
const newFilePath = pathParts.join('/');

console.log(newFilePath);

d2u.process([`**/*${newFileName}`]);


// console.log('The args', )
