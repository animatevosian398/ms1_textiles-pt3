// // load a default library that lets us read/write to the file system
// const fs = require('fs');
// // if you are running this locally, you will need to npm install request
// // load a default library that lets us make HTTP requests (like calls to an API)
// const request = require('request');

// // the folder we will write into, make sure the folder is in your directory
// let folder = "downloads";

// // download the image by url, name the file by filename
// function downloadImage(uri, filename, callback){
//   request.head(uri, function(err, res, body){
//     // console.log('content-type:', res.headers['content-type']);
//     // console.log('content-length:', res.headers['content-length']);
//     request(uri).pipe(fs.createWriteStream(folder + "/" + filename)).on('close', callback);
//   });
// };

// // go through the json we created before
// function downloadData() {
//   fs.readFile("./data.json", "utf8", (err, data) => {
//     if (err) console.log(err);

//     JSON.parse(data).forEach(e => {
//       console.log('Downloading ' + e.filename);
//       downloadImage(e.primaryImage, e.filename, function(){
//         console.log('Finished Downloading ' + e.filename);
//       });
//     });

//   });
// }

// downloadData();

// // Load necessary libraries
// const fs = require("fs");
// const request = require("request");

// // Set folder to save the downloaded images
// let folder = "downloads_sized";

// // Function to download the image by URL and save it to the folder
// function downloadImage(uri, filename, callback) {
//   request.head(uri, function (err, res, body) {
//     if (err) {
//       console.error("Error downloading image:", err);
//       return;
//     }
//      // console.log('content-type:', res.headers['content-type']);
// //     // console.log('content-length:', res.headers['content-length']);
//     // Create a write stream to save the image
//     request(uri)
//       .pipe(fs.createWriteStream(`${folder}/${filename}`))
//       .on("close", callback);
//   });
// }

// // Function to read the JSON file, filter, and download images from CHNDM and FSG
// function downloadData() {
//   fs.readFile("../data/data_NEW.json", "utf8", (err, data) => {
//     if (err) {
//       console.error("Error reading JSON file:", err);
//       return;
//     }

//     const objects = JSON.parse(data);

//     // // Filter objects for CHNDM and FSG units
//     // const filteredObjects = objects.filter(
//     //   (e) => e.unitCode === "CHNDM" || e.unitCode === "FSG"
//     // );

//     // Loop through the filtered JSON and download each image
//     objects.forEach((e) => {
//       const imageUrl = e.image.content; // Use 'content' URL for full image
//       const filename = e.filename || `image_${e.id}.jpg`; // Set a default filename if not provided

//       console.log("Downloading " + filename);
//       downloadImage(imageUrl, filename, function () {
//         console.log("Finished Downloading " + filename);
//       });
//     });
//   });
// }

// // Make sure the download folder exists
// if (!fs.existsSync(folder)) {
//   fs.mkdirSync(folder);
// }

// // Call the function to start downloading
// downloadData();
const fs = require("fs");
const request = require("request");

// Set folder to save the downloaded images
let folder = "downloads_new";

// Function to delay execution
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Function to download the image by URL and save it to the folder
async function downloadImage(uri, filename, callback, retryCount = 0) {
  const maxRetries = 3;
  const retryDelay = 3000; // 3 seconds

  // Match the exact parameters from the reference code
  const imgSizeParam = "max";
  const imgSizeValue = 300;

  // Modify the URL to include size parameters
  const fullResUrl = `${uri}&${imgSizeParam}=${imgSizeValue}`;

  try {
    await new Promise((resolve, reject) => {
      request.head(fullResUrl, async function (err, res, body) {
        if (err) {
          if (retryCount < maxRetries) {
            console.log(`Retry attempt ${retryCount + 1} for ${filename}`);
            await delay(retryDelay);
            downloadImage(uri, filename, callback, retryCount + 1);
            return;
          }
          console.error(
            `Failed to download ${filename} after ${maxRetries} attempts:`,
            err
          );
          resolve(); // Continue with next image even if this one fails
          return;
        }

        console.log("File:", filename);
        console.log("Type:", res.headers["content-type"]);
        console.log(
          "Size:",
          (res.headers["content-length"] / 1048576).toFixed(2) + " MB"
        );
        console.log("-------------------");

        const writeStream = fs.createWriteStream(`${folder}/${filename}`);

        request(fullResUrl)
          .pipe(writeStream)
          .on("close", () => {
            console.log(`✓ Successfully downloaded ${filename}`);
            callback();
            resolve();
          })
          .on("error", async (error) => {
            if (retryCount < maxRetries) {
              console.log(`Retry attempt ${retryCount + 1} for ${filename}`);
              await delay(retryDelay);
              downloadImage(uri, filename, callback, retryCount + 1);
              return;
            }
            console.error(`Failed to save ${filename}:`, error);
            resolve(); // Continue with next image even if this one fails
          });
      });
    });
  } catch (error) {
    console.error(`Unexpected error with ${filename}:`, error);
  }
}

// Function to read the JSON file and download images
async function downloadData() {
  try {
    const data = await fs.promises.readFile("../data/data_NEW.json", "utf8");
    const objects = JSON.parse(data);

    for (let i = 0; i < objects.length; i++) {
      const e = objects[i];
      const imageUrl = e.image.content;
      const filename = e.filename || `image_${e.id}.jpg`;

      console.log(
        `[${i + 1}/${objects.length}] Starting download of ${filename}`
      );

      await new Promise((resolve) => {
        downloadImage(imageUrl, filename, resolve);
      });

      // Wait between downloads
      await delay(2000); // 2 second delay between downloads
    }

    console.log("All downloads completed!");
  } catch (err) {
    console.error("Error reading JSON file:", err);
  }
}

// Make sure the new folder exists
if (!fs.existsSync(folder)) {
  fs.mkdirSync(folder);
  console.log(`Created new folder: ${folder}`);
}

// Call the function to start downloading
downloadData();
