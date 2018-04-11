// Using the file creation commands, create a touch function that mimics the behavior of the Unix command.
const path = require("path");
const fs = require("fs");
const { COPYFILE_EXCL } = fs.constants;


function touch(fileName){
  //check there is not already a file with this name


  
  fs.open(fileName, 'wx', (err, file) => {
    if (err) {
      if (err.code === 'EEXIST') {
        console.error(`file ${fileName} already exists!`);
        return;
      }

      throw err;
    }else{


      writeMyData(file);
    }
  });


} // END OF copyPaste function

touch ("testPouet.txt");






module.exports = touch;
