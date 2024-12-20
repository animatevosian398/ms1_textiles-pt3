// /*
//  * Note that this function uses *synchronous* JavaScript
//  * There is a 2-second (2000 milliseconds) timer after which the JSON will be downloaded
//  * so if the API calls are not finished by then, the JSON will only have the ones that did finish.
//  * You can increase the timer if you need to.
//  */

// // if you are running this locally, you will need to npm install request and dotenv
// // load a default library that lets us read/write to the file system
// const fs = require("fs");
// // load a default library that lets us make HTTP requests (like calls to an API)
// const request = require("request");
// // load dotenv for the purpose of storing our api key
// // create a .env file
// // store your api key (ex. API_KEY="abcdefghijk")
// // make sure to put your .env file in your .gitignore
// const dotenv = require("dotenv");

// // getting our api key from .env
// dotenv.config();
// const API_KEY = process.env.API_KEY;

// // endpoint URL
// const searchBaseURL = "https://api.si.edu/openaccess/api/v1.0/search";
// // our search term
// const search = `textile AND (unit_code:"CHNDM" OR unit_code:"FSG") AND online_media_type:"Images"`;

// // url we'll use to make our call
// const url = `${searchBaseURL}?api_key=${API_KEY}&q=${search}`;

// // get objects by search term
// function fetchSearchData(url) {
//   request(url, function (error, response, body) {
//     console.error("error:", error); // print the error if one occurred
//     console.log("statusCode:", response && response.statusCode); // print the response status code if a response was received
//     let obj = JSON.parse(body);
//     console.log(obj);

//     // if there are more than 1000 objects, paginate
//     // you can change the pageSize
//     let pageSize = 1000;
//     let numberOfQueries = Math.ceil(obj.response.rowCount / pageSize);
//     console.log(numberOfQueries);
//     for (let i = 0; i < numberOfQueries; i++) {
//       // making sure that our last query calls for the exact number of rows
//       if (i == numberOfQueries - 1) {
//         searchAllURL =
//           url +
//           `&start=${i * pageSize}&rows=${obj.response.rowCount - i * pageSize}`;
//       } else {
//         searchAllURL = url + `&start=${i * pageSize}&rows=${pageSize}`;
//       }

//       fetchUrl(searchAllURL);
//     }
//   });
// }

// // set up empty Array for us to save results to
// var myArray = [];

// function fetchUrl(searchAllURL) {
//   request(searchAllURL, function (error, response, body) {
//     console.error("error:", error); // print the error if one occurred
//     console.log("statusCode:", response && response.statusCode); // print the response status code if a response was received

//     let obj = JSON.parse(body);

//     // here we are constructing our own object with just the information we need
//     // first we filter out the objects that do not have the information we need (change accordingly)
//     // after the objects are filtered, we map our objects and construct a new object

//     let objects = obj.response.rows
//       .filter((data) => {
//         // by default we assume we have complete data
//         dataComplete = true;

//         // Test if images exist
//         if (
//           data.content.descriptiveNonRepeating.online_media == undefined ||
//           data.content.descriptiveNonRepeating.online_media.media ==
//             undefined ||
//           data.content.descriptiveNonRepeating.online_media.media[0] ==
//             undefined ||
//           data.content.descriptiveNonRepeating.online_media.media[0].content ==
//             undefined
//           // || data.content.descriptiveNonRepeating.online_media.media[0].resources[1] ==undefined
//         )
//           dataComplete = false;

//         // Test if we have a date value
//         if (data.content.indexedStructured.date == undefined)
//           dataComplete = false;

//         return dataComplete;
//       })
//       .map((data) => {
//         let filename =
//           data.content.descriptiveNonRepeating.online_media.media[0].content
//             .split("=")
//             .pop();

//         // change the size of the images you are downloading
//         // imgSizeParam can be max or max_w to force width or max_h to force height
//         // primary image url should be the image delivery service url ex) https://ids.si.edu/ids/deliveryService?id=FS-5461_07
//         let imgSizeParam = "max";
//         let imgSizeValue = 300;

//         return {
//           objectID: data.id,
//           title: data.title,
//           // date: data.content.indexedStructured.date[0],
//           primaryImage:
//             data.content.descriptiveNonRepeating.online_media.media[0].content +
//             `&${imgSizeParam}=${imgSizeValue}`,
//           filename: filename.includes(".jpg") ? filename : filename + ".jpg", // if the filename we defined above doesn't include .jpg add it at the end
//         };
//       });

//     myArray.push(objects);
//     // if there are more objects than the pageSize myArray will look like this: [[...objects], [...objects]]
//     // we use [].concat to flatten out myArray to be a one-dimensional array
//     myArray = [].concat(...myArray);
//   });
// }

// // calling our function
// fetchSearchData(url);

// // // the function inside the setTimeout saves myResults to a JSON
// // // it will automatically run after 5000 ms
// setTimeout(() => {
//   fs.writeFileSync("./data.json", JSON.stringify(myArray), "utf8");
// }, 5000);
// if you are running this locally, you will need to npm install request and dotenv
// load a default library that lets us read/write to the file system
// const fs = require("fs");
// // load a default library that lets us make HTTP requests (like calls to an API)
// const request = require("request");
// // load dotenv for the purpose of storing our api key
// // create a .env file
// // store your api key (ex. API_KEY="abcdefghijk")
// // make sure to put your .env file in your .gitignore
// const dotenv = require("dotenv");

// // getting our api key from .env
// dotenv.config();
// const API_KEY = process.env.API_KEY;

// // endpoint URL
// const searchBaseURL = "https://api.si.edu/openaccess/api/v1.0/search";
// // our search term
// const search = `textile AND unit_code:"CHNDM" AND online_media_type:"Images"`;

// // url we'll use to make our call
// const url = `${searchBaseURL}?api_key=${API_KEY}&q=${search}`;

// // Helper function to get the description from the notes array
// function getDescriptionFromNotes(notes) {
//   if (notes && Array.isArray(notes)) {
//     for (let note of notes) {
//       if (note.label === "Description") {
//         return note.content; // Return the content of the "Description" note
//       }
//     }
//   }
//   return "Description not available"; // Return a default if "Description" is not found
// }

// // get objects by search term
// function fetchUrl(searchAllURL) {
//   request(searchAllURL, function (error, response, body) {
//     // 1. Log if there was an error or log the status code
//     // console.error("error:", error);
//     // console.log("statusCode:", response && response.statusCode);

//     let obj = JSON.parse(body);

//     let objects = obj.response.rows
//       .filter((data) => {
//         let dataComplete = true;

//         // 2. Ensure the data has necessary media and date values
//         if (
//           data.content.descriptiveNonRepeating.online_media == undefined ||
//           data.content.descriptiveNonRepeating.online_media.media ==
//             undefined ||
//           data.content.descriptiveNonRepeating.online_media.media[0] ==
//             undefined ||
//           data.content.descriptiveNonRepeating.online_media.media[0].content ==
//             undefined
//         ) {
//           dataComplete = false;
//         }

//         if (data.content.indexedStructured.date == undefined) {
//           dataComplete = false;
//         }

//         return dataComplete;
//       })
//       .map((data) => {
//         let filename =
//           data.content.descriptiveNonRepeating.online_media.media[0].content
//             .split("=")
//             .pop();

//         let currentPlace = data.content.indexedStructured.place
//           ? data.content.indexedStructured.place[0]
//           : "Place not available";

//         let physicalDescription =
//           data.content.freetext.physicalDescription &&
//           data.content.freetext.physicalDescription[0]
//             ? data.content.freetext.physicalDescription[0].content
//             : "Description not available";

//         let period =
//           data.content.freetext.date && data.content.freetext.date[0]
//             ? data.content.freetext.date[0].content
//             : "Period not available";

//         let description = getDescriptionFromNotes(data.content.freetext.notes);

//         let thumbnail =
//           data.content.descriptiveNonRepeating.online_media &&
//           data.content.descriptiveNonRepeating.online_media.media[0]
//             ? data.content.descriptiveNonRepeating.online_media.media[0]
//                 .thumbnail
//             : "Thumbnail not available";

//         let fullImage =
//           data.content.descriptiveNonRepeating.online_media &&
//           data.content.descriptiveNonRepeating.online_media.media[0]
//             ? data.content.descriptiveNonRepeating.online_media.media[0].content
//             : "Image not available";

//         let imgSizeParam = "max";
//         let imgSizeValue = 300;

//         let unitCode = data.unitCode
//           ? data.unitCode
//           : "Unit code not available";

//         // 3. Log each object being processed
//         // console.log({
//         //   objectID: data.id,
//         //   title: data.title,
//         //   primaryImage:
//         //     data.content.descriptiveNonRepeating.online_media.media[0].content +
//         //     `&${imgSizeParam}=${imgSizeValue}`,
//         //   filename: filename.includes(".jpg") ? filename : filename + ".jpg",
//         //   link: data.content.descriptiveNonRepeating.record_link,
//         //   place: currentPlace,
//         //   period: period,
//         //   image: {
//         //     thumbnail: thumbnail,
//         //     content: fullImage,
//         //   },
//         //   unitCode: unitCode,
//         //   description: description,
//         //   medium: physicalDescription,
//         // });

//         return {
//           objectID: data.id,
//           title: data.title,
//           primaryImage:
//             data.content.descriptiveNonRepeating.online_media.media[0].content +
//             `&${imgSizeParam}=${imgSizeValue}`,
//           filename: filename.includes(".jpg") ? filename : filename + ".jpg",
//           link: data.content.descriptiveNonRepeating.record_link,
//           place: currentPlace,
//           period: period,
//           image: {
//             thumbnail: thumbnail,
//             content: fullImage,
//           },
//           unitCode: unitCode,
//           description: description,
//           medium: physicalDescription,
//         };
//       });

//     // 4. Log the final set of objects for this request
//     // console.log("Filtered and Mapped Objects:", objects);
//     console.log(objects.length);

//     // Store the objects in myArray
//     myArray.push(objects);
//     myArray = [].concat(...myArray);
//     // console.log(objects);

//     // Write a small subset of the data to a temporary file for inspection
//     fs.writeFileSync(
//       "./temp_data.json",
//       JSON.stringify(objects.slice(0, 15)),
//       "utf8"
//     );
//   });
// }

// // Initialize an empty array to store results
// let myArray = [];

// // Fetch data from the API
// fetchUrl(url);

// // Set a timeout to write the final results to data.json after 5 seconds
// setTimeout(() => {
//   fs.writeFileSync("./data.json", JSON.stringify(myArray), "utf8");
// }, 5000);
