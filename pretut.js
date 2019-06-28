var shelljs = require("shelljs");
const shellExec = require('shelljs-exec-proxy');
const chalk = require('chalk');


// const npmEnvScriptPrefix = 'npm_package_scripts_';
// const getFileNameWithoutExtension = (fileName) => fileName.substr(0, fileName.lastIndexOf("."));

// console.log(Object.keys(process.env).filter((key) => key.match(npmEnvScriptPrefix)))

// const npmEnvScriptsNames = Object.keys(process.env).filter((key) => key.match(npmEnvScriptPrefix));

// const filePath = process.argv[1];

// const pathParts = filePath.split('/')
// const fileName = filePath.substr(filePath.lastIndexOf('/') + 1, filePath.length).replace('pre', '');

// const scriptName = npmEnvScriptsNames.find((scriptName) => {
//   return scriptName.endsWith(getFileNameWithoutExtension(fileName))
// });

const filePath = process.argv[2];


// if (process.env[scriptName].endsWith('sh')) {

const colorRizeMessage = (string, color) => {
  return chalk[color](string);
};

const getErrorMessage = () => colorRizeMessage(`${chalk.red.bold('Error')}: The file was not converted to DOS format`, 'red');
const getSuccessMessage = () => colorRizeMessage(`${chalk.green.bold('Done')}: The file was successfully converted to DOS format`, 'green');

const conversionResultObject = shellExec.dos2unix(process.argv[2]);
const conversionUserMessage = conversionResultObject.code ? getErrorMessage() : getSuccessMessage();
console.log(conversionUserMessage);

// if (shelljs.exec(`dos2unix ${process.argv[2]}`).code !== 0) {
//   console.log('Failed');
// } else {
//   console.log('Success');
// }
// }
// pathParts[pathParts.length - 1] = fileName;
// const newFilesPath = pathParts.join('/')
// console.log(newFilesPath);
// console.log(fileName);



// sj.exec(`dos2unix ${newFilesPath}`)

// d2u.process([fileName]);


// console.log('The args', )
