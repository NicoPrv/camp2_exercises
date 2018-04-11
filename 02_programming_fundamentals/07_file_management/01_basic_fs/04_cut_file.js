// Cmd-X/Cmd-V as a function
//
// Implement the function cutPaste(sourceFilename, targetFilename)



const path = require("path");
const fs = require("fs");
const { COPYFILE_EXCL } = fs.constants;

function cutPaste(sourceFilename, targetFilename){

  fs.stat(sourceFilename, (err,stats)=>{
    if(err){
      console.log("error");
    }else{
      console.log(stats.isDirectory(sourceFilename));
      if(stats.isDirectory(sourceFilename)){
        console.log("We don't want to cut a repertory");
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
      //console.log(`${sourceFilename} was copied to ${targetFilename}`);

      fs.unlink("./"+sourceFilename, (err) => {
        if (err) throw err;
        console.log(`${sourceFilename} was cut to ${targetFilename}`);
      });

      return;
    }
  });

} // END OF copyPaste function

cutPaste ("testText2.txt", "testText6.txt");

module.exports = cutPaste;
