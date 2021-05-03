const fs = require("fs");
const axios = require("axios");
const path = require("path");

const resultDir = "./results";

const file = `./result/post.txt`;
const efile = `./result/error.txt`;

axios
  .get("http://jsonplaceholder.typicode.com/posts")
  .then(function (res) {
    const { data } = res;
    fs.writeFile(
      path.join(__dirname, "result", "post.txt"),
      data,
      function (err) {
        if (err) {
          console.log(err);
        }
      }
    );
    console.log("File Created");
  })
  .catch(function (err) {
    fs.writeFile(path.join(__dirname, "result", "error.txt"), err, err => {
      if (err) console.log(err);
    });
  });
