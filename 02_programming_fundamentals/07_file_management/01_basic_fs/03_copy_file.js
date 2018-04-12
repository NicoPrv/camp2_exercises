// Add a function `copyPaste` which takes a `path` as input and remove the file
// if it's a file (do not remove a folder). We don't want to override a file if
// it already exists.
//
// The function returns a boolean indicating if it successfully removed the file.

const path = require("path");
const fs = require("fs");

function copyPaste(sourceFilename, targetFilename){

  if(!fs.existsSync(sourceFilename)) {
    console.warn("File does not exist");
    return;
  } else if (fs.existsSync(targetFilename)) {
    console.warn (`File ${targetFilename} already exists. We don't want to override it`);
    return targetFilename;
  }
  console.log("ça passe");
  fs.stat(sourceFilename, (err,stats)=>{
    if(err){
      console.warn(err);
      return err;
    } else if (stats.isDirectory(sourceFilename)){
      console.warn("We don't want to copy a folder");
      return;
    }

    fs.copyFile(sourceFilename, targetFilename,(err) => {
      if(err){
        console.warn(err);
        return;
      }
      console.log(`${sourceFilename} was copied to ${targetFilename}`);
      return;
    });
  });

}


copyPaste ("youpi23.txt", "test2.txt");
module.exports = copyPaste;
