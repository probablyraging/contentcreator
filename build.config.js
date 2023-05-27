import pkg from 'fs-extra';
const { copyFileSync } = pkg;

copyFileSync('./CNAME', './dist/CNAME');