const fs = require("fs");

// Tache 1
fs.readdir(".", (err, files) => {
  // Tache 2
  if (err) {
    console.log("err: ", err);
    return;
  }
  console.log("files: ", files);

  fs.readFile(files[0], { encoding: "utf-8" }, (err, content) => {
    // Tache 3
    if (err) {
      console.log("err: ", err);
      return;
    }
    console.log("content: ", content);
  });
  console.log("titi");
});
console.log("toto");
