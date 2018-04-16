// Cmd-X/Cmd-V as a function
//
// Implement the function cutPaste(sourceFilename, targetFilename)



const path = require("path");
const fs = require("fs");
const { COPYFILE_EXCL } = fs.constants;

function cutPaste(sourceFilename, targetFilename){


  if(!fs.existsSync(sourceFilename)){
    console.warn("File does not exist");
    return;
  }

  fs.stat(sourceFilename, (err,stats)=>{
    if(err){
      console.warn("error");
      return;
    }else if(stats.isDirectory(sourceFilename)){
        console.warn("We don't want to cut a repertory");
        return;
      }else{
        fs.copyFile(sourceFilename, targetFilename, COPYFILE_EXCL,(err) => {
          if (err){
            if(err.code==="EEXIST"){
              console.warn (`File ${targetFilename} already exists. We don't want to override it`);
              return;
            }else{
              console.warn (err);
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


      }
    }
  });

  //If it's a file..


} // END OF copyPaste function

//cutPaste ("testText2.txt", "testText6.txt");

module.exports = cutPaste;
