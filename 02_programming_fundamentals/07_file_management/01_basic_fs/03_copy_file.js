// Add a function `copyPaste` which takes a `path` as input and remove the file
// if it's a file (do not remove a folder). We don't want to override a file if
// it already exists.
//
// The function returns a boolean indicating if it successfully removed the file.

const path = require("path");
const fs = require("fs");
const { COPYFILE_EXCL } = fs.constants;

function copyPaste(sourceFilename, targetFilename){

  fs.stat(sourceFilename, (err,stats)=>{
    if(err){
      console.log("error");
    }else{
      console.log(stats.isDirectory(sourceFilename));
      if(stats.isDirectory(sourceFilename)){
        console.log("We don't want to copy a repertory");
        return;
      }
    }
  });


  fs.copyFile(sourceFilename, targetFilename, COPYFILE_EXCL,(err) => {
    if (err){
      if(err.code==="EEXIST"){
        console.log (`File ${targetFilename} already exists. We don't want to override it`);
        return;
      }else{
        console.log (err);
        return;
      }
    }

    else{
      console.log(`${sourceFilename} was copied to ${targetFilename}`);
      return;
    }
  });

} // END OF copyPaste function

copyPaste ("testRepertory", "testText2.txt");
module.exports = copyPaste;
