// Add a function `deleteFile` which takes a `path` as input and remove the file
// if it's a file (do not remove a folder).
//
// The function returns a boolean indicating if it successfully removed the file.
const path = require("path");
const fs = require("fs");





function deleteFile(filePath){
  let isFileRemoved;


  try {
    fs.unlinkSync(filePath);
    return true;
  } catch (err) {
    // handle the error
    return false;
  }


}


deleteFile("testToDelete.txt");






module.exports = deleteFile;
