// Using the file creation commands, create a touch function that mimics the behavior of the Unix command.
const path = require("path");
const fs = require("fs");
const { COPYFILE_EXCL } = fs.constants;


function touch(fileName){
  //check there is not already a file with this name



  fs.open(fileName, "wx", (err, file) => {

    if (err) {
      if (err.code === "EEXIST") {
        fs.utimesSync(fileName, new Date(), new Date());
        console.warn(`file ${fileName} already exists!`);
      }
    }

    else{
      console.log(`file ${fileName} has been created!`);
    }
  });


} // END OF touch function

//touch ("test3Pouet.txt");






module.exports = touch;
