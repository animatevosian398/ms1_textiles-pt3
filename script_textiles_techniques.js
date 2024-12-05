// // // PLACES FILTER
// // function getUniquePlaces(data) {
// //   const placesSet = new Set(); // Use a Set to ensure uniqueness

// //   data.forEach((item) => {
// //     if (item.place) {
// //       // Check if "place" exists in the item
// //       placesSet.add(item.place);
// //     }
// //   });

// //   return Array.from(placesSet); // Convert the Set back to an array
// // }

// // const placeToContinent = {
// //   // AFRICA
// //   Egypt: "Africa",
// //   Morocco: "Africa",
// //   Sudan: "Africa",
// //   "Democratic Republic of the Congo": "Africa",
// //   Tunisia: "Africa",
// //   "South Africa": "Africa",
// //   Algeria: "Africa",
// //   Azemmour: "Africa",
// //   Kasai: "Africa",

// //   // ASIA
// //   China: "Asia",
// //   India: "Asia",
// //   Iran: "Asia",
// //   Japan: "Asia",
// //   "Near East": "Asia",
// //   Persia: "Asia",
// //   Indonesia: "Asia",
// //   Java: "Asia",
// //   Turkey: "Asia",
// //   Yemen: "Asia",
// //   Afghanistan: "Asia",
// //   Kashan: "Asia",
// //   Kashmir: "Asia",
// //   Korea: "Asia",
// //   Rajasthan: "Asia",
// //   Sumatra: "Asia",
// //   Yogyakarta: "Asia",
// //   Bali: "Asia",
// //   Philippines: "Asia",
// //   Pondicherry: "Asia",
// //   Maharashtra: "Asia",
// //   "Fukuoka prefecture": "Asia",
// //   Tenganan: "Asia",
// //   Gujarat: "Asia",
// //   Palembang: "Asia",
// //   Bukhara: "Asia",
// //   Lampung: "Asia",
// //   Thailand: "Asia",
// //   Azerbaijan: "Asia",
// //   Uzbekistan: "Asia",
// //   Turkmenistan: "Asia",
// //   Bikaner: "Asia",
// //   Yucatan: "Asia",
// //   Istanbul: "Asia",
// //   Tabriz: "Asia",
// //   Rasht: "Asia",
// //   Pekalongan: "Asia",
// //   Aceh: "Asia",
// //   Bengal: "Asia",
// //   Tiahuanaco: "Asia",
// //   Golconda: "Asia",
// //   Honshu: "Asia",
// //   Sumba: "Asia",
// //   "Awaji island": "Asia",
// //   "Coromandel Coast": "Asia",
// //   Naxos: "Asia",
// //   "Coromandel coast": "Asia",
// //   "Coromandel Coast (for Thai market)": "Asia",

// //   // EUROPE
// //   France: "Europe",
// //   Italy: "Europe",
// //   Spain: "Europe",
// //   Germany: "Europe",
// //   Switzerland: "Europe",
// //   Belgium: "Europe",
// //   Russia: "Europe",
// //   Ireland: "Europe",
// //   "United Kingdom": "Europe",
// //   Scotland: "Europe",
// //   Norway: "Europe",
// //   Denmark: "Europe",
// //   Finland: "Europe",
// //   Netherlands: "Europe",
// //   Hungary: "Europe",
// //   Portugal: "Europe",
// //   Poland: "Europe",
// //   Romania: "Europe",
// //   Sweden: "Europe",
// //   Austria: "Europe",
// //   Greece: "Europe",
// //   Slovakia: "Europe",
// //   Albania: "Europe",
// //   Bohemia: "Europe",
// //   Czechoslovakia: "Europe",
// //   Wales: "Europe",
// //   England: "Europe",
// //   Macedonia: "Europe",
// //   Malta: "Europe",
// //   Croatia: "Europe",
// //   Alençon: "Europe",
// //   Balkans: "Europe",
// //   Corsica: "Europe",
// //   Sicily: "Europe",
// //   Appenzell: "Europe",
// //   Abruzzi: "Europe",
// //   Gironde: "Europe",
// //   Normandy: "Europe",
// //   "Northern Italy": "Europe",
// //   Flanders: "Europe",
// //   Düsseldorf: "Europe",
// //   Majorca: "Europe",
// //   Rouen: "Europe",
// //   Mulhouse: "Europe",
// //   Alsace: "Europe",
// //   Lyon: "Europe",
// //   Berlin: "Europe",
// //   Middlesex: "Europe",
// //   Jouy: "Europe",
// //   Nantes: "Europe",
// //   Neuchatel: "Europe",
// //   Lyons: "Europe",
// //   Saxony: "Europe",
// //   "Belgium and France": "Europe",
// //   Rhine: "Europe",
// //   Piedmont: "Europe",
// //   Catalonia: "Europe",
// //   Corsica: "Europe",
// //   Normandy: "Europe",
// //   Marseille: "Europe",
// //   Vienna: "Europe",
// //   Milan: "Europe",
// //   Palma: "Europe",
// //   Byzantium: "Europe",
// //   Dubrovnik: "Europe",
// //   Binche: "Europe",
// //   Brussels: "Europe",
// //   "Sicily ()": "Europe",
// //   "Great Britain": "Europe",
// //   London: "Europe",
// //   Mâcon: "Europe",
// //   Angers: "Europe",
// //   Cyclades: "Europe",
// //   Granada: "Europe",
// //   Olivet: "Europe",
// //   Tønder: "Europe",
// //   Hanover: "Europe",
// //   Leeds: "Europe",
// //   Aix: "Europe",
// //   Huesca: "Europe",
// //   Rhone: "Europe",
// //   Leipzig: "Europe",
// //   "Seine et Marne": "Europe",
// //   Beautiran: "Europe",
// //   Narumi: "Europe",
// //   Abruzzi: "Europe",
// //   Toledo: "Europe",
// //   Saxony: "Europe",
// //   Albania: "Europe",
// //   Nimes: "Europe",
// //   Augsburg: "Europe",
// //   Neuchâtel: "Europe",

// //   // NORTH AMERICA
// //   USA: "North America",
// //   "United States": "North America",
// //   "U.S.A.": "North America",
// //   Canada: "North America",
// //   Mexico: "North America",
// //   "West Virginia": "North America",
// //   "New York": "North America",
// //   Massachusetts: "North America",
// //   "Rhode Island": "North America",
// //   Connecticut: "North America",
// //   Bridgeport: "North America",
// //   "New Jersey": "North America",
// //   Quebec: "North America",
// //   "French Canada": "North America",
// //   "Great Bookham": "North America",
// //   Poplar: "North America",
// //   Wethersfield: "North America",
// //   Norwich: "North America",
// //   Guildford: "North America",
// //   Ipswich: "North America",

// //   // SOUTH AMERICA
// //   Brazil: "South America",
// //   Argentina: "South America",
// //   Peru: "South America",
// //   Colombia: "South America",
// //   Chile: "South America",
// //   Bolivia: "South America",
// //   Paraguay: "South America",
// //   Guyana: "South America",
// //   Uruguay: "South America",
// //   Ecuador: "South America",
// //   Suriname: "South America",
// //   Chancay: "South America",
// //   Celedin: "South America",
// //   Lagartera: "South America",
// //   Tiahuanaco: "South America",

// //   // OCEANIA
// //   Australia: "Oceania",
// //   "New Zealand": "Oceania",
// //   Samoa: "Oceania",
// //   Fiji: "Oceania",
// // };

// // // Define the function to categorize and log by continent
// // function categorizeAndLogByContinent() {
// //   const continents = {
// //     Africa: [],
// //     Asia: [],
// //     Europe: [],
// //     "North America": [],
// //     "South America": [],
// //     Oceania: [],
// //   };

// //   for (const [place, continent] of Object.entries(placeToContinent)) {
// //     if (continents[continent]) {
// //       continents[continent].push(place);
// //     }
// //   }

// //   // Log each continent and its places to the console
// //   for (const [continent, places] of Object.entries(continents)) {
// //     console.log(`${continent}:`);
// //     console.log(places.join(", "));
// //   }
// // }

// // const colorThief = new ColorThief();
// // const sidebar = document.querySelector(".sidebar");
// // const hamburgerMenu = document.querySelector(".hamburger-menu");
// // const imageGrid = document.getElementById("imageGrid");
// // // const colorGradient = document.getElementById("colorGradient");

// // const showAllBtn = document.querySelector(".show-all-btn");
// // const countrySelect = document.querySelector(".country-select");

// // let colorData = [];
// // let continentFilteredData = [];

// // hamburgerMenu.addEventListener("click", () => sidebar.classList.toggle("open"));
// // // hamburgerMenu.addEventListener("click", () => title-container.classList.);

// // const gradientColors = [
// //   { r: 230, g: 57, b: 70 },
// //   { r: 244, g: 162, b: 97 },
// //   { r: 233, g: 196, b: 106 },
// //   { r: 42, g: 157, b: 143 },
// //   { r: 38, g: 70, b: 83 },
// //   { r: 109, g: 104, b: 117 },
// //   { r: 181, g: 131, b: 141 },
// // ];

// // function colorDistance(color1, color2) {
// //   return Math.sqrt(
// //     Math.pow(color1.r - color2.r, 2) +
// //       Math.pow(color1.g - color2.g, 2) +
// //       Math.pow(color1.b - color2.b, 2)
// //   );
// // }

// // function rgbToHsl(r, g, b) {
// //   r /= 255;
// //   g /= 255;
// //   b /= 255;
// //   const max = Math.max(r, g, b);
// //   const min = Math.min(r, g, b);
// //   let h,
// //     s,
// //     l = (max + min) / 2;

// //   if (max === min) {
// //     h = s = 0;
// //   } else {
// //     const d = max - min;
// //     s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
// //     switch (max) {
// //       case r:
// //         h = (g - b) / d + (g < b ? 6 : 0);
// //         break;
// //       case g:
// //         h = (b - r) / d + 2;
// //         break;
// //       case b:
// //         h = (r - g) / d + 4;
// //         break;
// //     }
// //     h /= 6;
// //   }
// //   return [h * 360, s * 100, l * 100];
// // }

// // function getDominantTextileColor(img) {
// //   const colorPalette = colorThief.getPalette(img, 5);
// //   let textileColor = null;

// //   colorPalette.forEach((color) => {
// //     const [hue, saturation, lightness] = rgbToHsl(color[0], color[1], color[2]);

// //     if (saturation > 20) {
// //       textileColor = textileColor || {
// //         r: color[0],
// //         g: color[1],
// //         b: color[2],
// //       };
// //     }
// //   });

// //   return textileColor || { r: 128, g: 128, b: 128 };
// // }

// // function displayRandomImages() {
// //   imageGrid.className = "image-grid random-layout";
// //   imageGrid.innerHTML = "";

// //   displayData = colorData.slice(0, 100);

// //   displayData.forEach((imageData, index) => {
// //     const divContainer = document.createElement("div");
// //     divContainer.className = "image-container";

// //     const img = new Image();
// //     img.crossOrigin = "Anonymous";
// //     img.src = imageData.image.thumbnail + "&max=200";
// //     img.style.opacity = "0";

// //     img.addEventListener("load", () => {
// //       divContainer.appendChild(img);

// //       divContainer.style.left = `${Math.random() * 100}vw`;
// //       divContainer.style.top = `${Math.random() * 100}vh`;

// //       img.style.animation = `fadeIn 3s ease-in forwards`;
// //       img.style.animationDelay = `${index * 0.2}s`;

// //       imageGrid.appendChild(divContainer);
// //     });

// //     img.addEventListener("error", () => {
// //       console.error("Failed to load image:", imageData.image);
// //     });
// //   });
// // }

// // function displayColorGrid(images, isFilteringMaterial = false) {
// //   // isFilteringMaterial) {
// //   imageGrid.className = "image-grid";
// //   imageGrid.innerHTML = "";

// //   const viewportWidth =
// //     window.innerWidth - (sidebar.classList.contains("open") ? 180 : 0);
// //   const viewportHeight = window.innerHeight;
// //   const imageCount = images.length;

// //   const aspectRatio = viewportWidth / viewportHeight;
// //   const cols = Math.ceil(Math.sqrt(imageCount * aspectRatio));
// //   const rows = Math.ceil(imageCount / cols);

// //   const gridStyles = `
// //       .image-grid {
// //         display: grid;
// //         grid-template-columns: repeat(${cols}, 1fr);
// //         grid-template-rows: repeat(${rows}, 1fr);
// //         height: 100vh;
// //         width: 100%;
// //         overflow: hidden;
// //       }

// //       .image-container {
// //         width: 100%;
// //         height: 100%;
// //         overflow: hidden;
// //         cursor: pointer;
// //       }
// //     `;

// //   let styleEl = document.getElementById("dynamic-grid-styles");
// //   if (!styleEl) {
// //     styleEl = document.createElement("style");
// //     styleEl.id = "dynamic-grid-styles";
// //     document.head.appendChild(styleEl);
// //   }
// //   styleEl.textContent = gridStyles;

// //   images.forEach((imageData) => {
// //     console.log(imageData.image);
// //     const divContainer = document.createElement("div");
// //     divContainer.className = "image-container";
// //     divContainer.dataset.id = imageData.id;

// //     const img = new Image();
// //     img.crossOrigin = "Anonymous";
// //     img.src = isFilteringMaterial
// //       ? imageData.image.thumbnail
// //       : // + "&max=200"
// //         imageData.image;
// //     // + "&max=200";
// //     img.style.width = "100%";
// //     img.style.height = "100%";
// //     img.style.objectFit = "cover";
// //     img.style.transform = "scale(1)";

// //     divContainer.appendChild(img);
// //     imageGrid.appendChild(divContainer);
// //     // Reattach the click event for each image container
// //     divContainer.addEventListener("click", () => {
// //       const overlay = document.getElementById("selectedImageOverlay");
// //       const selectedImg = document.getElementById("selectedImage");

// //       // Update image and metadata
// //       selectedImg.src = imageData.fullSizeUrl;
// //       document.getElementById("metadataTitle").textContent =
// //         imageData.metadata.title;
// //       document.getElementById("metadataPlace").textContent =
// //         imageData.metadata.place || "Unknown";
// //       document.getElementById("metadataPeriod").textContent =
// //         imageData.metadata.period || "Unknown";

// //       const description =
// //         imageData.metadata.description &&
// //         imageData.metadata.description !== "Research in Progress"
// //           ? imageData.metadata.description
// //           : "Description not available.";
// //       document.getElementById("metadataDescription").textContent = description;

// //       // Update link
// //       const linkElement = document.getElementById("metadataLink");
// //       if (imageData.metadata.link) {
// //         linkElement.href = imageData.metadata.link;
// //         linkElement.style.display = "inline";
// //       } else {
// //         linkElement.style.display = "none";
// //       }

// //       overlay.classList.add("active");
// //     });
// //   });

// //   // Function to populate continent select
// //   function populateContinentSelect() {
// //     const continents = [...new Set(Object.values(placeToContinent))]; // Extract unique continents

// //     // Sort continents alphabetically
// //     continents.sort();

// //     // Clear existing options except the first one
// //     countrySelect.innerHTML = '<option value="">Select Continent</option>';

// //     continents.forEach((continent) => {
// //       const option = document.createElement("option");
// //       option.value = continent;
// //       option.textContent = continent;
// //       countrySelect.appendChild(option);
// //     });
// //   }
// // }

// // let currentFilteredData = []; // Holds the currently filtered data based on continent, country, etc.

// // countrySelect.addEventListener("change", (e) => {
// //   const selectedContinent = e.target.value;

// //   // Reset currentFilteredData to all images if no continent is selected
// //   if (!selectedContinent) {
// //     currentFilteredData = colorData;
// //     const sortedImages = [...colorData].sort((a, b) => {
// //       const hslA = rgbToHsl(
// //         a.dominantColor.r,
// //         a.dominantColor.g,
// //         a.dominantColor.b
// //       );
// //       const hslB = rgbToHsl(
// //         b.dominantColor.r,
// //         b.dominantColor.g,
// //         b.dominantColor.b
// //       );
// //       return hslA[0] - hslB[0];
// //     });
// //     displayColorGrid(sortedImages);
// //   } else {
// //     // Filter images based on the selected continent
// //     currentFilteredData = colorData.filter((item) => {
// //       const place = item.metadata.place;
// //       return place && placeToContinent[place] === selectedContinent;
// //     });
// //     displayColorGrid(currentFilteredData);
// //   }
// // });

// // // Update the color swatch filter function to use currentFilteredData
// // function applyColorFilter(selectedColor) {
// //   const hueThreshold = 30;
// //   const saturationThreshold = 30;

// //   const matchingTextiles = currentFilteredData.filter((item) => {
// //     const dominantColor = item.dominantColor;
// //     const [hue, saturation] = rgbToHsl(
// //       dominantColor.r,
// //       dominantColor.g,
// //       dominantColor.b
// //     );
// //     // Check for black and white specifically
// //     if (
// //       (selectedColor.r === 0 &&
// //         selectedColor.g === 0 &&
// //         selectedColor.b === 0) || // Black
// //       (selectedColor.r === 255 &&
// //         selectedColor.g === 255 &&
// //         selectedColor.b === 255) // White
// //     ) {
// //       const isGrayscale =
// //         Math.abs(dominantColor.r - dominantColor.g) < 10 &&
// //         Math.abs(dominantColor.r - dominantColor.b) < 10;
// //       if (selectedColor.r === 0) {
// //         return isGrayscale && dominantColor.r < 100; // Dark grayscale for black
// //       } else {
// //         return isGrayscale && dominantColor.r > 150; // Light grayscale for white
// //       }
// //     }
// //     const [selectedHue] = rgbToHsl(
// //       selectedColor.r,
// //       selectedColor.g,
// //       selectedColor.b
// //     );

// //     return (
// //       Math.abs(hue - selectedHue) <= hueThreshold &&
// //       saturation >= saturationThreshold
// //     );
// //   });

// //   displayColorGrid(matchingTextiles);
// // }

// // document.addEventListener("DOMContentLoaded", () => {
// //   const showAllBtn = document.querySelector(".show-all-btn");

// //   if (showAllBtn) {
// //     showAllBtn.addEventListener("click", () => {
// //       // Reset filters
// //       currentFilteredData = colorData;

// //       // Display all images
// //       const sortedImages = [...colorData].sort((a, b) => {
// //         const hslA = rgbToHsl(
// //           a.dominantColor.r,
// //           a.dominantColor.g,
// //           a.dominantColor.b
// //         );
// //         const hslB = rgbToHsl(
// //           b.dominantColor.r,
// //           b.dominantColor.g,
// //           b.dominantColor.b
// //         );
// //         return hslA[0] - hslB[0];
// //       });

// //       displayColorGrid(sortedImages);
// //     });
// //   }
// // });

// // // Initial display to set up currentFilteredData with all items when the page loads
// // fetch("./data/data_NEW.json")
// //   .then((response) => response.json())
// //   .then((jsonData) => {
// //     const imagePaths = jsonData.slice(0, 100).map((item) => ({
// //       // image: `${folderPath}${item.filename || `image_${item.id}.jpg`}`,
// //       image: item.image.thumbnail,
// //       // + "&max=200", //thumbnail URL
// //       id: item.id,
// //       fullSizeUrl: item.image.content,
// //       metadata: {
// //         title: item.title,
// //         place: item.place,
// //         period: item.period,
// //         description: item.description,
// //         link: item.link,
// //       },
// //     }));

// //     return Promise.all(
// //       imagePaths.map((item) => {
// //         return new Promise((resolve) => {
// //           const img = new Image();
// //           img.crossOrigin = "Anonymous";
// //           img.src = item.image;
// //           img.onload = () => {
// //             const dominantColor = getDominantTextileColor(img);
// //             resolve({
// //               ...item,
// //               dominantColor: {
// //                 r: dominantColor.r,
// //                 g: dominantColor.g,
// //                 b: dominantColor.b,
// //               },
// //             });
// //           };
// //           img.onerror = () => resolve(null);
// //         });
// //       })
// //     );
// //   })
// //   .then((processedData) => {
// //     colorData = processedData.filter((item) => item !== null);
// //     currentFilteredData = colorData; // Initially set to all images
// //     populateContinentSelect();
// //     displayRandomImages();
// //   })
// //   .catch((error) => console.error("Error loading images:", error));

// // // Add click handler for close button
// // document.getElementById("closeButton").addEventListener("click", () => {
// //   const overlay = document.getElementById("selectedImageOverlay");
// //   const selectedImg = document.getElementById("selectedImage");

// //   overlay.classList.remove("active");
// //   selectedImg.classList.remove("active");
// //   setTimeout(() => {
// //     selectedImg.src = "";
// //   }, 300);
// // });

// // // Updated overlay click handler
// // document
// //   .getElementById("selectedImageOverlay")
// //   .addEventListener("click", (e) => {
// //     if (e.target === e.currentTarget) {
// //       const overlay = document.getElementById("selectedImageOverlay");
// //       const selectedImg = document.getElementById("selectedImage");

// //       overlay.classList.remove("active");
// //       setTimeout(() => {
// //         selectedImg.src = "";
// //       }, 300); // Clear the source after the fade-out animation
// //     }
// //   });

// // // const folderPath = "./05_node_image_download/downloads_new/";
// // // Assign event listeners to each SVG region
// // const svgPaths = document.querySelectorAll("svg path"); // Select all paths in the SVG

// // svgPaths.forEach((path) => {
// //   path.addEventListener("click", () => {
// //     const continent = path.getAttribute("title"); // Get continent from SVG region
// //     filterByContinent(continent); // Filter textiles based on the continent
// //   });
// // });

// // // Function to filter textiles by continent
// // function filterByContinent(continent) {
// //   // Map places in the dataset to continents
// //   const filteredTextiles = colorData.filter((textile) => {
// //     const place = textile.metadata.place; // Extract the place from textile metadata
// //     return place && placeToContinent[place] === continent; // Match place to continent
// //   });

// //   // Render the filtered textiles in the grid
// //   displayColorGrid(filteredTextiles);

// //   // Highlight the clicked region in the SVG
// //   highlightPaths(continent);
// // }

// // // Function to highlight paths in the SVG
// // function highlightPaths(selectedContinent) {
// //   svgPaths.forEach((path) => {
// //     const continent = path.getAttribute("data-continent");
// //     if (continent === selectedContinent) {
// //       path.style.fill = "purple"; // Highlight matching region
// //     } else {
// //       path.style.fill = "#1da1f2"; // Reset color for non-matching regions
// //     }
// //   });
// // }

// // // Select all paths in the SVG
// // const paths = document.querySelectorAll("path");

// // // Get the element to display the title
// // const hoverTitle = document.getElementById("hover-title");

// // // Add hover event listeners to each path
// // paths.forEach((path) => {
// //   path.addEventListener("mouseover", () => {
// //     const title = path.getAttribute("title");
// //     hoverTitle.textContent = title; // Update the text below the map
// //   });

// //   path.addEventListener("mouseout", () => {
// //     hoverTitle.textContent = ""; // Clear the title when hover ends
// //   });
// // });
// // document.addEventListener("DOMContentLoaded", () => {
// //   const colorSwatchesContainer = document.getElementById("colorSwatches");
// //   const colors = [
// //     { r: 230, g: 57, b: 70 },
// //     { r: 244, g: 162, b: 97 },
// //     { r: 233, g: 196, b: 106 },
// //     { r: 42, g: 157, b: 143 },
// //     { r: 38, g: 70, b: 83 },
// //     { r: 109, g: 104, b: 117 },
// //     { r: 181, g: 131, b: 141 },
// //   ];

// //   colors.forEach((color) => {
// //     const swatch = document.createElement("div");
// //     swatch.className = "color-swatch";
// //     swatch.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;

// //     // Add click event for filtering
// //     swatch.addEventListener("click", () => {
// //       applyColorFilter(color);
// //     });

// //     colorSwatchesContainer.appendChild(swatch);
// //   });
// // });

// // // Function to filter images by color
// // function applyColorFilter(selectedColor) {
// //   const hueThreshold = 30; // Adjust as needed
// //   const saturationThreshold = 20; // Adjust as needed

// //   const filteredImages = currentFilteredData.filter((item) => {
// //     const dominantColor = item.dominantColor;
// //     if (!dominantColor) return false;

// //     const [hue, saturation] = rgbToHsl(
// //       dominantColor.r,
// //       dominantColor.g,
// //       dominantColor.b
// //     );
// //     const [selectedHue] = rgbToHsl(
// //       selectedColor.r,
// //       selectedColor.g,
// //       selectedColor.b
// //     );

// //     return (
// //       Math.abs(hue - selectedHue) <= hueThreshold &&
// //       saturation >= saturationThreshold
// //     );
// //   });

// //   displayColorGrid(filteredImages);
// // }
// // document.addEventListener("DOMContentLoaded", () => {
// //   const continentRectangles = document.querySelectorAll(".continent-rectangle");

// //   continentRectangles.forEach((rectangle) => {
// //     rectangle.addEventListener("click", () => {
// //       const selectedContinent = rectangle.dataset.continent;

// //       // Filter textiles based on the selected continent
// //       const filteredTextiles = colorData.filter((textile) => {
// //         const place = textile.metadata.place;
// //         return place && placeToContinent[place] === selectedContinent;
// //       });

// //       // Display the filtered textiles in the grid
// //       displayColorGrid(filteredTextiles);
// //     });
// //   });
// // });
// // // Add click event listeners to continent paths in the SVG
// // document.addEventListener("DOMContentLoaded", () => {
// //   // Select all continent groups
// //   const continents = document.querySelectorAll(
// //     "#Africa, #Asia, #Europe, #North_America, #South_America, #Oceania"
// //   );

// //   continents.forEach((continent) => {
// //     continent.addEventListener("click", () => {
// //       // Get continent name from the ID
// //       const continentName = continent.id.replace(/_/g, " ");

// //       // Style changes for interactivity
// //       continents.forEach((c) => {
// //         c.style.opacity = "0.5";
// //         c.style.transition = "opacity 0.3s ease";
// //       });
// //       continent.style.opacity = "1";

// //       // Filter textiles based on continent
// //       const filteredTextiles = colorData.filter((textile) => {
// //         const place = textile.metadata.place;
// //         return place && placeToContinent[place] === continentName;
// //       });

// //       // Display filtered results
// //       displayColorGrid(filteredTextiles);

// //       // Update the select dropdown to match
// //       const countrySelect = document.querySelector(".country-select");
// //       if (countrySelect) {
// //         countrySelect.value = continentName;
// //       }
// //     });

// //     // Add hover effects
// //     continent.addEventListener("mouseenter", () => {
// //       continent.style.opacity = "0.8";
// //       continent.style.cursor = "pointer";
// //     });

// //     continent.addEventListener("mouseleave", () => {
// //       continent.style.opacity = "1";
// //     });
// //   });
// // });
// // document.addEventListener("DOMContentLoaded", function () {
// //   const aboutTab = document.querySelector(".about-tab");
// //   const aboutToggle = document.querySelector(".about-tab-toggle");

// //   aboutToggle.addEventListener("click", function () {
// //     aboutTab.classList.toggle("open");
// //   });
// // });
// // document.addEventListener("DOMContentLoaded", function () {
// //   const aboutBtn = document.querySelector(".about-btn");
// //   const aboutModal = document.querySelector(".about-modal");
// //   const closeAbout = document.querySelector(".close-about");

// //   aboutBtn.addEventListener("click", () => {
// //     aboutModal.style.display = "block";
// //   });

// //   closeAbout.addEventListener("click", () => {
// //     aboutModal.style.display = "none";
// //   });

// //   window.addEventListener("click", (e) => {
// //     if (e.target === aboutModal) {
// //       aboutModal.style.display = "none";
// //     }
// //   });
// // });
// // fetch("./data/data_NEW.json")
// //   .then((response) => response.json())
// //   .then((data) => {
// //     const categorizedMaterials = {
// //       naturalMaterials: {
// //         fibers: [
// //           "cotton",
// //           "linen",
// //           "hemp",
// //           "jute",
// //           "ramie",
// //           "agave",
// //           "straw",
// //           "raffia",
// //           "grass",
// //           "mulberry",
// //           "bamboo",
// //         ],
// //         animalDerived: [
// //           "raw silk",
// //           "tussah silk",
// //           "cashmere wool",
// //           "mohair wool",
// //           "yak wool",
// //           "worsted wool",
// //           "horsehair",
// //           "animal bristle",
// //           "ivory",
// //           "bone",
// //           "horn",
// //           "mother of pearl",
// //           "tortoise shell",
// //           "coral",
// //           "leather",
// //           "suede",
// //           "hide",
// //           "fur",
// //           "human hair",
// //           "peacock",
// //           "ostrich",
// //           "marabou",
// //         ],
// //         woodAndPlant: [
// //           "ebony",
// //           "mahogany",
// //           "sandalwood",
// //           "palm",
// //           "walnut",
// //           "oak",
// //         ],
// //         stonesAndMinerals: [
// //           "jade",
// //           "diamond",
// //           "emerald",
// //           "garnet",
// //           "turquoise",
// //           "mica",
// //         ],
// //       },
// //       processedMaterials: {
// //         papers: [
// //           "mulberry paper",
// //           "laid paper",
// //           "wove paper",
// //           "machine made paper",
// //           "handmade paper",
// //           "oiled paper",
// //           "translucent paper",
// //           "tracing paper",
// //           "parchment",
// //           "vellum",
// //           "cardboard",
// //           "buckram",
// //         ],
// //         metalsAndAlloys: [
// //           "gold",
// //           "silver",
// //           "iron",
// //           "copper",
// //           "bronze",
// //           "brass",
// //           "steel",
// //           "shakudo",
// //         ],
// //         ceramicsAndGlass: ["glass", "stoneware", "ceramic", "paste"],
// //       },
// //       syntheticMaterials: [
// //         "viscose",
// //         "acetate",
// //         "mercerized",
// //         "celluloid",
// //         "vulcanized rubber",
// //         "plastic",
// //       ],
// //     };

// //     // fetch("./data/data_NEW.json")
// //     //   .then((response) => response.json())
// //     //   .then((data) => {
// //     //     const materials = [
// //     //       //silk//
// //     //       "raw silk",
// //     //       "tussah silk",
// //     //       "cashmere wool",
// //     //       "mohair wool",
// //     //       "yak wool",
// //     //       "worsted wool",
// //     //       "horsehair",
// //     //       "animal bristle",
// //     //       "ivory",
// //     //       "bone",
// //     //       "horn",
// //     //       "mother of pearl",
// //     //       "tortoise shell",
// //     //       "coral",
// //     //       "leather",
// //     //       "suede",
// //     //       "hide",
// //     //       "fur",
// //     //       "human hair",
// //     //       "peacock",
// //     //       "ostrich",
// //     //       "marabou",
// //     //       "cotton",
// //     //       "linen",
// //     //       "hemp",
// //     //       "jute",
// //     //       "ramie",
// //     //       "agave",
// //     //       "mulberry",
// //     //       "birch",
// //     //       "straw",
// //     //       "raffia",
// //     //       "grass",
// //     //       "bamboo",
// //     //       "ebony",
// //     //       "mahogany",
// //     //       "sandalwood",
// //     //       "palm",
// //     //       "walnut",
// //     //       "oak",
// //     //       "gold",
// //     //       "silver",
// //     //       "iron",
// //     //       "copper",
// //     //       "bronze",
// //     //       "brass",
// //     //       "steel",
// //     //       "satin",
// //     //       "shakudo",
// //     //       "jade",
// //     //       "diamond",
// //     //       "emerald",
// //     //       "garnet",
// //     //       "turquoise",
// //     //       "glass",
// //     //       "mica",
// //     //       "stoneware",
// //     //       "ceramic",
// //     //       "paste",
// //     //       //paper//
// //     //       "mulberry paper",
// //     //       "laid paper",
// //     //       "wove paper",
// //     //       "machine made paper",
// //     //       "handmade paper",
// //     //       "oiled paper",
// //     //       "translucent paper",
// //     //       "tracing paper",
// //     //       "parchment",
// //     //       "vellum",
// //     //       "cardboard",
// //     //       "buckram",
// //     //       "membrane",
// //     //       "viscose",
// //     //       "acetate",
// //     //       "mercerized",
// //     //       "celluloid",
// //     //       "vulcanized rubber",
// //     //       "plastic",
// //     //     ];

// //     const normalizedMaterials = [];
// //     Object.values(categorizedMaterials).forEach((category) => {
// //       if (Array.isArray(category)) {
// //         // For the syntheticMaterials array
// //         normalizedMaterials.push(...category);
// //       } else if (typeof category === "object") {
// //         // For nested objects like naturalMaterials or processedMaterials
// //         Object.values(category).forEach((subCategory) => {
// //           normalizedMaterials.push(...subCategory);
// //         });
// //       }
// //     });

// //     // normalizedMaterials now contains all materials as a flat array
// //     console.log(normalizedMaterials);
// //     // Create a dictionary to categorize items by material
// //     const categorizedByMaterial = {};

// //     // Loop through the data
// //     data.forEach((item) => {
// //       if (item.medium) {
// //         // Ensure medium exists
// //         const medium = item.medium.toLowerCase();

// //         normalizedMaterials.forEach((material) => {
// //           if (medium.includes(material)) {
// //             if (!categorizedByMaterial[material]) {
// //               categorizedByMaterial[material] = [];
// //             }
// //             categorizedByMaterial[material].push(item);
// //           }
// //         });
// //       }
// //     });

// //     // Log the categorized results
// //     console.log(categorizedByMaterial);

// //     // Display materials in the sidebar
// //     const techniqueContentDiv = document.getElementById("techniqueContent");

// //     if (techniqueContentDiv) {
// //       // Create a list of materials
// //       const materialList = document.createElement("ul");
// //       materialList.className = "technique-list";

// //       Object.keys(categorizedByMaterial).forEach((material) => {
// //         const listItem = document.createElement("li");
// //         listItem.className = "technique-item";
// //         listItem.textContent = `${material} (${categorizedByMaterial[material].length})`; // Show material name and count

// //         // Add click event to filter textiles
// //         listItem.addEventListener("click", () => {
// //           const filteredTextiles = categorizedByMaterial[material];
// //           console.log("filtering textiles to ", filteredTextiles);
// //           displayColorGrid(filteredTextiles, true); // Update the grid with filtered textiles
// //           console.log(categorizedByMaterial, colorData, continentFilteredData);
// //         });

// //         materialList.appendChild(listItem);
// //       });

// //       techniqueContentDiv.appendChild(materialList);
// //     }
// //   })
// //   .catch((error) => console.error("Error loading data:", error));
// // document.addEventListener("DOMContentLoaded", function () {
// //   // Select all accordion headers
// //   const accordionHeaders = document.querySelectorAll(".accordion-header");

// //   accordionHeaders.forEach((header) => {
// //     header.addEventListener("click", () => {
// //       const content = header.nextElementSibling;

// //       // Toggle the open class on the content
// //       if (content.classList.contains("open")) {
// //         content.classList.remove("open");
// //       } else {
// //         // Close other sections
// //         document
// //           .querySelectorAll(".accordion-content.open")
// //           .forEach((openContent) => openContent.classList.remove("open"));

// //         // Open the clicked section
// //         content.classList.add("open");
// //       }
// //     });
// //   });
// // });
// // PLACES FILTER
// function getUniquePlaces(data) {
//   const placesSet = new Set(); // Use a Set to ensure uniqueness

//   data.forEach((item) => {
//     if (item.place) {
//       // Check if "place" exists in the item
//       placesSet.add(item.place);
//     }
//   });

//   return Array.from(placesSet); // Convert the Set back to an array
// }

// const placeToContinent = {
//   // AFRICA
//   Egypt: "Africa",
//   Morocco: "Africa",
//   Sudan: "Africa",
//   "Democratic Republic of the Congo": "Africa",
//   Tunisia: "Africa",
//   "South Africa": "Africa",
//   Algeria: "Africa",
//   Azemmour: "Africa",
//   Kasai: "Africa",

//   // ASIA
//   China: "Asia",
//   India: "Asia",
//   Iran: "Asia",
//   Japan: "Asia",
//   "Near East": "Asia",
//   Persia: "Asia",
//   Indonesia: "Asia",
//   Java: "Asia",
//   Turkey: "Asia",
//   Yemen: "Asia",
//   Afghanistan: "Asia",
//   Kashan: "Asia",
//   Kashmir: "Asia",
//   Korea: "Asia",
//   Rajasthan: "Asia",
//   Sumatra: "Asia",
//   Yogyakarta: "Asia",
//   Bali: "Asia",
//   Philippines: "Asia",
//   Pondicherry: "Asia",
//   Maharashtra: "Asia",
//   "Fukuoka prefecture": "Asia",
//   Tenganan: "Asia",
//   Gujarat: "Asia",
//   Palembang: "Asia",
//   Bukhara: "Asia",
//   Lampung: "Asia",
//   Thailand: "Asia",
//   Azerbaijan: "Asia",
//   Uzbekistan: "Asia",
//   Turkmenistan: "Asia",
//   Bikaner: "Asia",
//   Yucatan: "Asia",
//   Istanbul: "Asia",
//   Tabriz: "Asia",
//   Rasht: "Asia",
//   Pekalongan: "Asia",
//   Aceh: "Asia",
//   Bengal: "Asia",
//   Tiahuanaco: "Asia",
//   Golconda: "Asia",
//   Honshu: "Asia",
//   Sumba: "Asia",
//   "Awaji island": "Asia",
//   "Coromandel Coast": "Asia",
//   Naxos: "Asia",
//   "Coromandel coast": "Asia",
//   "Coromandel Coast (for Thai market)": "Asia",

//   // EUROPE
//   France: "Europe",
//   Italy: "Europe",
//   Spain: "Europe",
//   Germany: "Europe",
//   Switzerland: "Europe",
//   Belgium: "Europe",
//   Russia: "Europe",
//   Ireland: "Europe",
//   "United Kingdom": "Europe",
//   Scotland: "Europe",
//   Norway: "Europe",
//   Denmark: "Europe",
//   Finland: "Europe",
//   Netherlands: "Europe",
//   Hungary: "Europe",
//   Portugal: "Europe",
//   Poland: "Europe",
//   Romania: "Europe",
//   Sweden: "Europe",
//   Austria: "Europe",
//   Greece: "Europe",
//   Slovakia: "Europe",
//   Albania: "Europe",
//   Bohemia: "Europe",
//   Czechoslovakia: "Europe",
//   Wales: "Europe",
//   England: "Europe",
//   Macedonia: "Europe",
//   Malta: "Europe",
//   Croatia: "Europe",
//   Alençon: "Europe",
//   Balkans: "Europe",
//   Corsica: "Europe",
//   Sicily: "Europe",
//   Appenzell: "Europe",
//   Abruzzi: "Europe",
//   Gironde: "Europe",
//   Normandy: "Europe",
//   "Northern Italy": "Europe",
//   Flanders: "Europe",
//   Düsseldorf: "Europe",
//   Majorca: "Europe",
//   Rouen: "Europe",
//   Mulhouse: "Europe",
//   Alsace: "Europe",
//   Lyon: "Europe",
//   Berlin: "Europe",
//   Middlesex: "Europe",
//   Jouy: "Europe",
//   Nantes: "Europe",
//   Neuchatel: "Europe",
//   Lyons: "Europe",
//   Saxony: "Europe",
//   "Belgium and France": "Europe",
//   Rhine: "Europe",
//   Piedmont: "Europe",
//   Catalonia: "Europe",
//   Corsica: "Europe",
//   Normandy: "Europe",
//   Marseille: "Europe",
//   Vienna: "Europe",
//   Milan: "Europe",
//   Palma: "Europe",
//   Byzantium: "Europe",
//   Dubrovnik: "Europe",
//   Binche: "Europe",
//   Brussels: "Europe",
//   "Sicily ()": "Europe",
//   "Great Britain": "Europe",
//   London: "Europe",
//   Mâcon: "Europe",
//   Angers: "Europe",
//   Cyclades: "Europe",
//   Granada: "Europe",
//   Olivet: "Europe",
//   Tønder: "Europe",
//   Hanover: "Europe",
//   Leeds: "Europe",
//   Aix: "Europe",
//   Huesca: "Europe",
//   Rhone: "Europe",
//   Leipzig: "Europe",
//   "Seine et Marne": "Europe",
//   Beautiran: "Europe",
//   Narumi: "Europe",
//   Abruzzi: "Europe",
//   Toledo: "Europe",
//   Saxony: "Europe",
//   Albania: "Europe",
//   Nimes: "Europe",
//   Augsburg: "Europe",
//   Neuchâtel: "Europe",

//   // NORTH AMERICA
//   USA: "North America",
//   "United States": "North America",
//   "U.S.A.": "North America",
//   Canada: "North America",
//   Mexico: "North America",
//   "West Virginia": "North America",
//   "New York": "North America",
//   Massachusetts: "North America",
//   "Rhode Island": "North America",
//   Connecticut: "North America",
//   Bridgeport: "North America",
//   "New Jersey": "North America",
//   Quebec: "North America",
//   "French Canada": "North America",
//   "Great Bookham": "North America",
//   Poplar: "North America",
//   Wethersfield: "North America",
//   Norwich: "North America",
//   Guildford: "North America",
//   Ipswich: "North America",

//   // SOUTH AMERICA
//   Brazil: "South America",
//   Argentina: "South America",
//   Peru: "South America",
//   Colombia: "South America",
//   Chile: "South America",
//   Bolivia: "South America",
//   Paraguay: "South America",
//   Guyana: "South America",
//   Uruguay: "South America",
//   Ecuador: "South America",
//   Suriname: "South America",
//   Chancay: "South America",
//   Celedin: "South America",
//   Lagartera: "South America",
//   Tiahuanaco: "South America",

//   // OCEANIA
//   Australia: "Oceania",
//   "New Zealand": "Oceania",
//   Samoa: "Oceania",
//   Fiji: "Oceania",
// };

// // Define the function to categorize and log by continent
// function categorizeAndLogByContinent() {
//   const continents = {
//     Africa: [],
//     Asia: [],
//     Europe: [],
//     "North America": [],
//     "South America": [],
//     Oceania: [],
//   };

//   for (const [place, continent] of Object.entries(placeToContinent)) {
//     if (continents[continent]) {
//       continents[continent].push(place);
//     }
//   }

//   // Log each continent and its places to the console
//   for (const [continent, places] of Object.entries(continents)) {
//     console.log(`${continent}:`);
//     console.log(places.join(", "));
//   }
// }

// const colorThief = new ColorThief();
// const sidebar = document.querySelector(".sidebar");
// const hamburgerMenu = document.querySelector(".hamburger-menu");
// const imageGrid = document.getElementById("imageGrid");
// // const colorGradient = document.getElementById("colorGradient");

// const showAllBtn = document.querySelector(".show-all-btn");
// const countrySelect = document.querySelector(".country-select");

// let colorData = [];
// let continentFilteredData = [];

// hamburgerMenu.addEventListener("click", () => sidebar.classList.toggle("open"));
// // hamburgerMenu.addEventListener("click", () => title-container.classList.);

// const gradientColors = [
//   { r: 230, g: 57, b: 70 },
//   { r: 244, g: 162, b: 97 },
//   { r: 233, g: 196, b: 106 },
//   { r: 42, g: 157, b: 143 },
//   { r: 38, g: 70, b: 83 },
//   { r: 109, g: 104, b: 117 },
//   { r: 181, g: 131, b: 141 },
// ];

// function colorDistance(color1, color2) {
//   return Math.sqrt(
//     Math.pow(color1.r - color2.r, 2) +
//       Math.pow(color1.g - color2.g, 2) +
//       Math.pow(color1.b - color2.b, 2)
//   );
// }

// function rgbToHsl(r, g, b) {
//   r /= 255;
//   g /= 255;
//   b /= 255;
//   const max = Math.max(r, g, b);
//   const min = Math.min(r, g, b);
//   let h,
//     s,
//     l = (max + min) / 2;

//   if (max === min) {
//     h = s = 0;
//   } else {
//     const d = max - min;
//     s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
//     switch (max) {
//       case r:
//         h = (g - b) / d + (g < b ? 6 : 0);
//         break;
//       case g:
//         h = (b - r) / d + 2;
//         break;
//       case b:
//         h = (r - g) / d + 4;
//         break;
//     }
//     h /= 6;
//   }
//   return [h * 360, s * 100, l * 100];
// }

// function getDominantTextileColor(img) {
//   const colorPalette = colorThief.getPalette(img, 5);
//   let textileColor = null;

//   colorPalette.forEach((color) => {
//     const [hue, saturation, lightness] = rgbToHsl(color[0], color[1], color[2]);

//     if (saturation > 20) {
//       textileColor = textileColor || {
//         r: color[0],
//         g: color[1],
//         b: color[2],
//       };
//     }
//   });

//   return textileColor || { r: 128, g: 128, b: 128 };
// }
// function transformDataForGrid(data) {
//   return data.map((item) => ({
//     id: item.id,
//     image: item.image,
//     fullSizeUrl: item.image?.content || "", // Full-size image URL
//     metadata: {
//       title: item.title || "Untitled", // Fallback title
//       place: item.place || "Unknown", // Fallback place
//       period: item.period || "Unknown", // Fallback period
//       description: item.description || "No description available.", // Fallback description
//       link: item.link || "", // Optional link
//     },
//   }));
// }

// function displayRandomImages() {
//   imageGrid.className = "image-grid random-layout";
//   imageGrid.innerHTML = "";

//   displayData = colorData.slice(0, 1000);

//   displayData.forEach((imageData, index) => {
//     const divContainer = document.createElement("div");
//     divContainer.className = "image-container";

//     const img = new Image();
//     img.crossOrigin = "Anonymous";
//     img.src = imageData.image;
//     img.style.opacity = "0";

//     img.addEventListener("load", () => {
//       divContainer.appendChild(img);

//       divContainer.style.left = `${Math.random() * 100}vw`;
//       divContainer.style.top = `${Math.random() * 100}vh`;

//       img.style.animation = `fadeIn 3s ease-in forwards`;
//       img.style.animationDelay = `${index * 0.2}s`;

//       imageGrid.appendChild(divContainer);
//     });

//     img.addEventListener("error", () => {
//       console.error("Failed to load image:", imageData.image);
//     });
//   });
// }

// function displayColorGrid(images, isFilteringMaterial = false) {
//   // isFilteringMaterial) {
//   imageGrid.className = "image-grid";
//   imageGrid.innerHTML = "";

//   const viewportWidth =
//     window.innerWidth - (sidebar.classList.contains("open") ? 180 : 0);
//   const viewportHeight = window.innerHeight;
//   const imageCount = images.length;

//   const aspectRatio = viewportWidth / viewportHeight;
//   const cols = Math.ceil(Math.sqrt(imageCount * aspectRatio));
//   const rows = Math.ceil(imageCount / cols);

//   const gridStyles = `
//   .image-grid {
//   display: grid;
//   grid-template-columns: repeat(${cols}, 1fr);
//   grid-template-rows: repeat(${rows}, 1fr);
//   height: 100vh;
//   width: 100%;
//   overflow: hidden;
//   }

//   .image-container {
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
//   cursor: pointer;
//   }
//   `;

//   let styleEl = document.getElementById("dynamic-grid-styles");
//   if (!styleEl) {
//     styleEl = document.createElement("style");
//     styleEl.id = "dynamic-grid-styles";
//     document.head.appendChild(styleEl);
//   }
//   styleEl.textContent = gridStyles;

//   images.forEach((imageData) => {
//     console.log(imageData.image);
//     const divContainer = document.createElement("div");
//     divContainer.className = "image-container";
//     divContainer.dataset.id = imageData.id;

//     const img = new Image();
//     img.crossOrigin = "Anonymous";
//     img.src = isFilteringMaterial ? imageData.image.thumbnail : imageData.image;
//     img.style.width = "100%";
//     img.style.height = "100%";
//     img.style.objectFit = "cover";
//     img.style.transform = "scale(1)";

//     divContainer.appendChild(img);
//     imageGrid.appendChild(divContainer);

//     // Add click event listener to open the overlay
//     divContainer.addEventListener("click", () => {
//       const overlay = document.getElementById("selectedImageOverlay");
//       const selectedImg = document.getElementById("selectedImage");

//       // Update image and metadata
//       selectedImg.src = imageData.fullSizeUrl;
//       document.getElementById("metadataTitle").textContent =
//         imageData.metadata.title;
//       document.getElementById("metadataPlace").textContent =
//         imageData.metadata.place || "Unknown";
//       document.getElementById("metadataPeriod").textContent =
//         imageData.metadata.period || "Unknown";

//       const description =
//         imageData.metadata.description &&
//         imageData.metadata.description !== "Research in Progress"
//           ? imageData.metadata.description
//           : "Description not available.";
//       document.getElementById("metadataDescription").textContent = description;

//       // Update link
//       const linkElement = document.getElementById("metadataLink");
//       if (imageData.metadata.link) {
//         linkElement.href = imageData.metadata.link;
//         linkElement.style.display = "inline";
//       } else {
//         linkElement.style.display = "none";
//       }

//       overlay.classList.add("active");
//     });
//   });

//   countryBtn.addEventListener("click", () => {
//     // Get unique countries from the colorData array
//     const countries = [
//       ...new Set(
//         colorData
//           .map((item) => item.metadata.place)
//           .filter((place) => place && place.trim() !== "")
//       ),
//     ]; // Remove empty or null values

//     // Sort countries alphabetically
//     countries.sort();

//     // Group images by country
//     const countryGroups = {};
//     countries.forEach((country) => {
//       countryGroups[country] = colorData.filter(
//         (item) => item.metadata.place === country
//       );
//     });

//     // Calculate total images for each country
//     const countryCounts = Object.entries(countryGroups)
//       .sort(([countryA], [countryB]) => countryA.localeCompare(countryB))
//       .map(([country, images]) => ({
//         country,
//         count: images.length,
//       }));

//     // Create a dropdown menu
//     const dropdown = document.createElement("select");
//     dropdown.style.cssText = `
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   padding: 10px;
//   border-radius: 5px;
//   background: rgba(255, 255, 255, 0.9);
//   z-index: 2001;
//   `;

//     // Add default option
//     dropdown.innerHTML = `<option value="">Select a country</option>`;

//     // Add options for each country
//     countryCounts.forEach(({ country, count }) => {
//       dropdown.innerHTML += `
//   <option value="${country}">${country} (${count})</option>
//   `;
//     });

//     // Add dropdown to body
//     document.body.appendChild(dropdown);

//     // Handle selection
//     dropdown.addEventListener("change", (e) => {
//       const selectedCountry = e.target.value;
//       if (selectedCountry) {
//         const filteredImages = colorData.filter(
//           (item) => item.metadata.place === selectedCountry
//         );
//         displayColorGrid(filteredImages);
//       }
//       // Remove dropdown after selection
//       dropdown.remove();
//     });

//     // Close dropdown when clicking outside
//     document.addEventListener(
//       "click",
//       (e) => {
//         if (e.target !== dropdown && e.target !== countryBtn) {
//           dropdown.remove();
//         }
//       },
//       { once: true }
//     );
//   });
// }

// // Function to populate continent select
// function populateContinentSelect() {
//   const continents = [...new Set(Object.values(placeToContinent))]; // Extract unique continents

//   // Sort continents alphabetically
//   continents.sort();

//   // Clear existing options except the first one
//   countrySelect.innerHTML = '<option value="">Select Continent</option>';

//   continents.forEach((continent) => {
//     const option = document.createElement("option");
//     option.value = continent;
//     option.textContent = continent;
//     countrySelect.appendChild(option);
//   });
// }

// let currentFilteredData = []; // Holds the currently filtered data based on continent, country, etc.

// countrySelect.addEventListener("change", (e) => {
//   const selectedContinent = e.target.value;

//   // Reset currentFilteredData to all images if no continent is selected
//   if (!selectedContinent) {
//     currentFilteredData = colorData;
//     const sortedImages = [...colorData].sort((a, b) => {
//       const hslA = rgbToHsl(
//         a.dominantColor.r,
//         a.dominantColor.g,
//         a.dominantColor.b
//       );
//       const hslB = rgbToHsl(
//         b.dominantColor.r,
//         b.dominantColor.g,
//         b.dominantColor.b
//       );
//       return hslA[0] - hslB[0];
//     });
//     displayColorGrid(sortedImages);
//   } else {
//     // Filter images based on the selected continent
//     currentFilteredData = colorData.filter((item) => {
//       const place = item.metadata.place;
//       return place && placeToContinent[place] === selectedContinent;
//     });
//     displayColorGrid(currentFilteredData);
//   }
// });

// // Update the color swatch filter function to use currentFilteredData
// function applyColorFilter(selectedColor) {
//   const hueThreshold = 30;
//   const saturationThreshold = 30;

//   const matchingTextiles = currentFilteredData.filter((item) => {
//     const dominantColor = item.dominantColor;
//     const [hue, saturation] = rgbToHsl(
//       dominantColor.r,
//       dominantColor.g,
//       dominantColor.b
//     );
//     // Check for black and white specifically
//     if (
//       (selectedColor.r === 0 &&
//         selectedColor.g === 0 &&
//         selectedColor.b === 0) || // Black
//       (selectedColor.r === 255 &&
//         selectedColor.g === 255 &&
//         selectedColor.b === 255) // White
//     ) {
//       const isGrayscale =
//         Math.abs(dominantColor.r - dominantColor.g) < 10 &&
//         Math.abs(dominantColor.r - dominantColor.b) < 10;
//       if (selectedColor.r === 0) {
//         return isGrayscale && dominantColor.r < 100; // Dark grayscale for black
//       } else {
//         return isGrayscale && dominantColor.r > 150; // Light grayscale for white
//       }
//     }
//     const [selectedHue] = rgbToHsl(
//       selectedColor.r,
//       selectedColor.g,
//       selectedColor.b
//     );

//     return (
//       Math.abs(hue - selectedHue) <= hueThreshold &&
//       saturation >= saturationThreshold
//     );
//   });

//   displayColorGrid(matchingTextiles);
// }

// document.addEventListener("DOMContentLoaded", () => {
//   const showAllBtn = document.querySelector(".show-all-btn");

//   if (showAllBtn) {
//     showAllBtn.addEventListener("click", () => {
//       // Reset filters
//       currentFilteredData = colorData;

//       // Display all images
//       const sortedImages = [...colorData].sort((a, b) => {
//         const hslA = rgbToHsl(
//           a.dominantColor.r,
//           a.dominantColor.g,
//           a.dominantColor.b
//         );
//         const hslB = rgbToHsl(
//           b.dominantColor.r,
//           b.dominantColor.g,
//           b.dominantColor.b
//         );
//         return hslA[0] - hslB[0];
//       });

//       displayColorGrid(sortedImages);
//     });
//   }
// });

// // const countrySelect = document.querySelector(".country-select");
// // Initial display to set up currentFilteredData with all items when the page loads
// fetch("./data/data_NEW.json")
//   .then((response) => response.json())
//   .then((jsonData) => {
//     const imagePaths = jsonData.slice(0, 1000).map((item) => ({
//       image: `${folderPath}${item.filename || `image_${item.id}.jpg`}`,
//       id: item.id,
//       fullSizeUrl: item.image.content,
//       metadata: {
//         title: item.title,
//         place: item.place,
//         period: item.period,
//         description: item.description,
//         link: item.link,
//       },
//     }));

//     return Promise.all(
//       imagePaths.map((item) => {
//         return new Promise((resolve) => {
//           const img = new Image();
//           img.crossOrigin = "Anonymous";
//           img.src = item.image;
//           img.onload = () => {
//             const dominantColor = getDominantTextileColor(img);
//             resolve({
//               ...item,
//               dominantColor: {
//                 r: dominantColor.r,
//                 g: dominantColor.g,
//                 b: dominantColor.b,
//               },
//             });
//           };
//           img.onerror = () => resolve(null);
//         });
//       })
//     );
//   })
//   .then((processedData) => {
//     colorData = processedData.filter((item) => item !== null);
//     currentFilteredData = colorData; // Initially set to all images
//     populateContinentSelect();
//     displayRandomImages();
//   })
//   .catch((error) => console.error("Error loading images:", error));

// const folderPath = "./05_node_image_download/downloads_new/";

// // fetch("./data/data_NEW.json")
// // .then((response) => response.json())
// // .then((jsonData) => {
// // // Map both thumbnail path and full content URL
// // const imagePaths = jsonData.slice(0, 1000).map((item) => ({
// // image: `${folderPath}${item.filename || `image_${item.id}.jpg`}`, // thumbnail for grid
// // id: item.id,
// // fullSizeUrl: item.image.content, // Store the full-size image URL
// // metadata: {
// // title: item.title,
// // place: item.place,
// // period: item.period,
// // link: item.link,
// // },
// // }));
// // console.log(imagePaths);

// // return Promise.all(
// // imagePaths.map((item) => {
// // return new Promise((resolve) => {
// // const img = new Image();
// // img.crossOrigin = "Anonymous";
// // img.src = item.image;

// // img.onload = () => {
// // try {
// // const dominantColor = getDominantTextileColor(img);
// // resolve({
// // image: item.image,
// // id: item.id,
// // fullSizeUrl: item.fullSizeUrl, // Keep the full-size URL
// // metadata: item.metadata,
// // dominantColor: {
// // r: dominantColor.r,
// // g: dominantColor.g,
// // b: dominantColor.b,
// // },
// // });
// // } catch (error) {
// // resolve(null);
// // }
// // };

// // img.onerror = () => resolve(null);
// // });
// // })
// // );
// // })
// // .then((processedData) => {
// // colorData = processedData.filter((item) => item !== null);
// // // populateCountrySelect(); // Add this line to populate the select
// // displayRandomImages();
// // })
// // .catch((error) => console.error("Error loading images:", error));

// // Add click handler for close button
// document.getElementById("closeButton").addEventListener("click", () => {
//   const overlay = document.getElementById("selectedImageOverlay");
//   const selectedImg = document.getElementById("selectedImage");

//   overlay.classList.remove("active");
//   selectedImg.classList.remove("active");
//   setTimeout(() => {
//     selectedImg.src = "";
//   }, 300);
// });

// // Updated overlay click handler
// document
//   .getElementById("selectedImageOverlay")
//   .addEventListener("click", (e) => {
//     if (e.target === e.currentTarget) {
//       const overlay = document.getElementById("selectedImageOverlay");
//       const selectedImg = document.getElementById("selectedImage");

//       overlay.classList.remove("active");
//       setTimeout(() => {
//         selectedImg.src = "";
//       }, 300); // Clear the source after the fade-out animation
//     }
//   });

// // const folderPath = "./05_node_image_download/downloads_new/";
// // Assign event listeners to each SVG region
// const svgPaths = document.querySelectorAll("svg path"); // Select all paths in the SVG

// svgPaths.forEach((path) => {
//   path.addEventListener("click", () => {
//     const continent = path.getAttribute("title"); // Get continent from SVG region
//     filterByContinent(continent); // Filter textiles based on the continent
//   });
// });

// // Function to filter textiles by continent
// function filterByContinent(continent) {
//   // Map places in the dataset to continents
//   const filteredTextiles = colorData.filter((textile) => {
//     const place = textile.metadata.place; // Extract the place from textile metadata
//     return place && placeToContinent[place] === continent; // Match place to continent
//   });

//   // Render the filtered textiles in the grid
//   displayColorGrid(filteredTextiles);

//   // Highlight the clicked region in the SVG
//   highlightPaths(continent);
// }

// // Function to highlight paths in the SVG
// function highlightPaths(selectedContinent) {
//   svgPaths.forEach((path) => {
//     const continent = path.getAttribute("data-continent");
//     if (continent === selectedContinent) {
//       path.style.fill = "purple"; // Highlight matching region
//     } else {
//       path.style.fill = "#1da1f2"; // Reset color for non-matching regions
//     }
//   });
// }
// // First, create the technique extractor that can handle large datasets
// function extractTechniquesFromLargeDataset(data) {
//   // Initialize storage for techniques
//   const techniqueMap = new Map(); // Use Map for better performance with large datasets

//   // Process each item in the dataset
//   data.forEach((item) => {
//     if (!item.medium) return; // Skip items without medium description

//     try {
//       const mediumText = item.medium.toLowerCase();

//       // Check for explicit technique description
//       if (mediumText.includes("technique:")) {
//         const [_, technique] = mediumText.split("technique:");
//         if (technique) {
//           const cleanTechnique = technique.trim();
//           // Store technique with count and example items
//           techniqueMap.set(cleanTechnique, {
//             count: (techniqueMap.get(cleanTechnique)?.count || 0) + 1,
//             examples: [
//               ...(techniqueMap.get(cleanTechnique)?.examples || []),
//               {
//                 id: item.id,
//                 title: item.title,
//                 period: item.period,
//               },
//             ].slice(0, 5), // Keep only 5 examples per technique
//           });
//         }
//       }

//       // Also check for implicit techniques in medium description
//       const implicitTechniques = [
//         "weave",
//         "printed",
//         "woodblock",
//         "tapestry",
//         "supplementary",
//         "velvet",
//         "brocade",
//         "compound",
//         "embroidered",
//         "painted",
//         "dyed",
//       ];

//       implicitTechniques.forEach((tech) => {
//         if (mediumText.includes(tech)) {
//           const context = extractTechniqueContext(mediumText, tech);
//           if (context) {
//             techniqueMap.set(context, {
//               count: (techniqueMap.get(context)?.count || 0) + 1,
//               examples: [
//                 ...(techniqueMap.get(context)?.examples || []),
//                 {
//                   id: item.id,
//                   title: item.title,
//                   period: item.period,
//                 },
//               ].slice(0, 5),
//             });
//           }
//         }
//       });
//     } catch (error) {
//       console.warn(`Error processing item ${item.id}:`, error);
//     }
//   });

//   return techniqueMap;
// }

// // Helper function to extract technique context
// function extractTechniqueContext(text, keyword) {
//   const words = text.split(" ");
//   const keywordIndex = words.findIndex((word) => word.includes(keyword));
//   if (keywordIndex === -1) return null;

//   // Get 3 words before and after for context
//   const start = Math.max(0, keywordIndex - 3);
//   const end = Math.min(words.length, keywordIndex + 4);
//   return words.slice(start, end).join(" ");
// }

// // Function to categorize techniques
// function categorizeTechniques(techniqueMap) {
//   const categories = {
//     primary: {
//       name: "Primary Construction",
//       techniques: new Map(),
//     },
//     surface: {
//       name: "Surface Decoration",
//       techniques: new Map(),
//     },
//     structural: {
//       name: "Structural Modification",
//       techniques: new Map(),
//     },
//   };

//   // Keywords for categorization
//   const categoryKeywords = {
//     primary: ["weave", "tapestry", "twill", "satin", "plain"],
//     surface: ["printed", "painted", "dyed", "woodblock", "brush"],
//     structural: ["supplementary", "pile", "velvet", "brocade"],
//   };

//   // Categorize each technique
//   techniqueMap.forEach((data, technique) => {
//     for (const [category, keywords] of Object.entries(categoryKeywords)) {
//       if (
//         keywords.some((keyword) => technique.toLowerCase().includes(keyword))
//       ) {
//         categories[category].techniques.set(technique, data);
//         break;
//       }
//     }
//   });

//   return categories;
// }

// // Example usage with async data loading
// async function processTechniques() {
//   try {
//     // Load data (replace with your actual data loading method)
//     const response = await fetch("your-textile-data.json");
//     const data = await response.json();

//     // console.log(`Processing ${data.length} textile items...`);

//     // Extract techniques
//     const techniqueMap = extractTechniquesFromLargeDataset(data);
//     // console.log(`Found ${techniqueMap.size} unique techniques`);

//     // Categorize techniques
//     const categorizedTechniques = categorizeTechniques(techniqueMap);

//     // Generate statistics
//     const stats = {
//       totalItems: data.length,
//       uniqueTechniques: techniqueMap.size,
//       categoryCounts: {
//         primary: categorizedTechniques.primary.techniques.size,
//         surface: categorizedTechniques.surface.techniques.size,
//         structural: categorizedTechniques.structural.techniques.size,
//       },
//       mostCommon: Array.from(techniqueMap.entries())
//         .sort((a, b) => b[1].count - a[1].count)
//         .slice(0, 10),
//     };

//     return {
//       techniques: techniqueMap,
//       categories: categorizedTechniques,
//       statistics: stats,
//     };
//   } catch (error) {
//     console.error("Error processing techniques:", error);
//     throw error;
//   }
// }

// // Example of using the processor
// async function initializeTextileAnalysis() {
//   try {
//     const results = await processTechniques();

//     // console.log("Processing complete!");
//     // console.log(`Total items processed: ${results.statistics.totalItems}`);
//     // console.log(
//     // `Unique techniques found: ${results.statistics.uniqueTechniques}`
//     // );

//     // Log category breakdowns
//     Object.entries(results.statistics.categoryCounts).forEach(
//       ([category, count]) => {
//         // console.log(`${category}: ${count} techniques`);
//       }
//     );

//     // Log most common techniques
//     // console.log("\nMost common techniques:");
//     results.statistics.mostCommon.forEach(([technique, data]) => {
//       // console.log(`${technique}: ${data.count} occurrences`);
//     });

//     return results;
//   } catch (error) {
//     console.error("Analysis failed:", error);
//   }
// }
// // Add this after processing the data to see the techniques
// async function logTechniqueData() {
//   try {
//     const response = await fetch("./data/data_NEW.json");
//     const data = await response.json();

//     // console.log("=== ANALYZING TEXTILE TECHNIQUES ===");

//     // Get techniques map
//     const techniqueMap = extractTechniquesFromLargeDataset(data);

//     // console.log("\n=== ALL UNIQUE TECHNIQUES ===");
//     techniqueMap.forEach((data, technique) => {
//       // console.log(`\nTechnique: ${technique}`);
//       // console.log(`Occurrences: ${data.count}`);
//       // console.log("Example items:");
//       data.examples.forEach((example) => {
//         // console.log(`- ${example.title} (${example.period})`);
//       });
//     });

//     // Get categorized techniques
//     const categorized = categorizeTechniques(techniqueMap);

//     // console.log("\n=== TECHNIQUES BY CATEGORY ===");

//     Object.entries(categorized).forEach(([category, data]) => {
//       // console.log(`\n${data.name}:`);
//       data.techniques.forEach((techData, technique) => {
//         // console.log(`- ${technique} (${techData.count} occurrences)`);
//       });
//     });

//     // // Statistics
//     // console.log("\n=== STATISTICS ===");
//     console.log(`Total unique techniques: ${techniqueMap.size}`);
//     Object.entries(categorized).forEach(([category, data]) => {
//       // console.log(`${data.name}: ${data.techniques.size} techniques`);
//     });

//     // Most common techniques
//     // console.log("\n=== TOP 10 MOST COMMON TECHNIQUES ===");
//     const sortedTechniques = Array.from(techniqueMap.entries())
//       .sort((a, b) => b[1].count - a[1].count)
//       .slice(0, 10);

//     sortedTechniques.forEach(([technique, data], index) => {
//       // console.log(`${index + 1}. ${technique} (${data.count} occurrences)`);
//     });
//   } catch (error) {
//     // console.error("Error analyzing techniques:", error);
//   }
// }

// // Call the function to see the results
// logTechniqueData();

// // Select all paths in the SVG
// const paths = document.querySelectorAll("path");

// // Get the element to display the title
// const hoverTitle = document.getElementById("hover-title");

// // Add hover event listeners to each path
// paths.forEach((path) => {
//   path.addEventListener("mouseover", () => {
//     const title = path.getAttribute("title");
//     hoverTitle.textContent = title; // Update the text below the map
//   });

//   path.addEventListener("mouseout", () => {
//     hoverTitle.textContent = ""; // Clear the title when hover ends
//   });
// });
// document.addEventListener("DOMContentLoaded", () => {
//   const colorSwatchesContainer = document.getElementById("colorSwatches");
//   const colors = [
//     { r: 230, g: 57, b: 70 },
//     { r: 244, g: 162, b: 97 },
//     { r: 233, g: 196, b: 106 },
//     { r: 42, g: 157, b: 143 },
//     { r: 38, g: 70, b: 83 },
//     { r: 109, g: 104, b: 117 },
//     { r: 181, g: 131, b: 141 },
//   ];

//   colors.forEach((color) => {
//     const swatch = document.createElement("div");
//     swatch.className = "color-swatch";
//     swatch.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;

//     // Add click event for filtering
//     swatch.addEventListener("click", () => {
//       applyColorFilter(color);
//     });

//     colorSwatchesContainer.appendChild(swatch);
//   });
// });

// // Function to filter images by color
// function applyColorFilter(selectedColor) {
//   const hueThreshold = 30; // Adjust as needed
//   const saturationThreshold = 20; // Adjust as needed

//   const filteredImages = currentFilteredData.filter((item) => {
//     const dominantColor = item.dominantColor;
//     if (!dominantColor) return false;

//     const [hue, saturation] = rgbToHsl(
//       dominantColor.r,
//       dominantColor.g,
//       dominantColor.b
//     );
//     const [selectedHue] = rgbToHsl(
//       selectedColor.r,
//       selectedColor.g,
//       selectedColor.b
//     );

//     return (
//       Math.abs(hue - selectedHue) <= hueThreshold &&
//       saturation >= saturationThreshold
//     );
//   });

//   displayColorGrid(filteredImages);
// }
// document.addEventListener("DOMContentLoaded", () => {
//   const continentRectangles = document.querySelectorAll(".continent-rectangle");

//   continentRectangles.forEach((rectangle) => {
//     rectangle.addEventListener("click", () => {
//       const selectedContinent = rectangle.dataset.continent;

//       // Filter textiles based on the selected continent
//       const filteredTextiles = colorData.filter((textile) => {
//         const place = textile.metadata.place;
//         return place && placeToContinent[place] === selectedContinent;
//       });

//       // Display the filtered textiles in the grid
//       displayColorGrid(filteredTextiles);
//     });
//   });
// });
// // Add click event listeners to continent paths in the SVG
// document.addEventListener("DOMContentLoaded", () => {
//   // Select all continent groups
//   const continents = document.querySelectorAll(
//     "#Africa, #Asia, #Europe, #North_America, #South_America, #Oceania"
//   );

//   continents.forEach((continent) => {
//     continent.addEventListener("click", () => {
//       // Get continent name from the ID
//       const continentName = continent.id.replace(/_/g, " ");

//       // Style changes for interactivity
//       continents.forEach((c) => {
//         c.style.opacity = "0.5";
//         c.style.transition = "opacity 0.3s ease";
//       });
//       continent.style.opacity = "1";

//       // Filter textiles based on continent
//       const filteredTextiles = colorData.filter((textile) => {
//         const place = textile.metadata.place;
//         return place && placeToContinent[place] === continentName;
//       });

//       // Display filtered results
//       displayColorGrid(filteredTextiles);

//       // Update the select dropdown to match
//       const countrySelect = document.querySelector(".country-select");
//       if (countrySelect) {
//         countrySelect.value = continentName;
//       }
//     });

//     // Add hover effects
//     continent.addEventListener("mouseenter", () => {
//       continent.style.opacity = "0.8";
//       continent.style.cursor = "pointer";
//     });

//     continent.addEventListener("mouseleave", () => {
//       continent.style.opacity = "1";
//     });
//   });
// });
// document.addEventListener("DOMContentLoaded", function () {
//   const aboutTab = document.querySelector(".about-tab");
//   const aboutToggle = document.querySelector(".about-tab-toggle");

//   aboutToggle.addEventListener("click", function () {
//     aboutTab.classList.toggle("open");
//   });
// });
// document.addEventListener("DOMContentLoaded", function () {
//   const aboutBtn = document.querySelector(".about-btn");
//   const aboutModal = document.querySelector(".about-modal");
//   const closeAbout = document.querySelector(".close-about");

//   aboutBtn.addEventListener("click", () => {
//     aboutModal.style.display = "block";
//   });

//   closeAbout.addEventListener("click", () => {
//     aboutModal.style.display = "none";
//   });

//   window.addEventListener("click", (e) => {
//     if (e.target === aboutModal) {
//       aboutModal.style.display = "none";
//     }
//   });
// });
// // // Material Filtering Logic
// // fetch("./data/data_NEW.json")
// //   .then((response) => response.json())
// //   .then((data) => {
// //     const categorizedByMaterial = {};
// //     const normalizedMaterials = [
// //       //silk//
// //       "raw silk",
// //       "tussah silk",
// //       "cashmere wool",
// //       "mohair wool",
// //       "yak wool",
// //       "worsted wool",
// //       "horsehair",
// //       "animal bristle",
// //       "ivory",
// //       "bone",
// //       "horn",
// //       "mother of pearl",
// //       "tortoise shell",
// //       "coral",
// //       "leather",
// //       "suede",
// //       "hide",
// //       "fur",
// //       "human hair",
// //       "peacock",
// //       "ostrich",
// //       "marabou",
// //       "cotton",
// //       "linen",
// //       "hemp",
// //       "jute",
// //       "ramie",
// //       "agave",
// //       "mulberry",
// //       "birch",
// //       "straw",
// //       "raffia",
// //       "grass",
// //       "bamboo",
// //       "ebony",
// //       "mahogany",
// //       "sandalwood",
// //       "palm",
// //       "walnut",
// //       "oak",
// //       "gold",
// //       "silver",
// //       "iron",
// //       "copper",
// //       "bronze",
// //       "brass",
// //       "steel",
// //       "satin",
// //       "shakudo",
// //       "jade",
// //       "diamond",
// //       "emerald",
// //       "garnet",
// //       "turquoise",
// //       "glass",
// //       "mica",
// //       "stoneware",
// //       "ceramic",
// //       "paste",
// //       //paper//
// //       "mulberry paper",
// //       "laid paper",
// //       "wove paper",
// //       "machine made paper",
// //       "handmade paper",
// //       "oiled paper",
// //       "translucent paper",
// //       "tracing paper",
// //       "parchment",
// //       "vellum",
// //       "cardboard",
// //       "buckram",
// //       "membrane",
// //       "viscose",
// //       "acetate",
// //       "mercerized",
// //       "celluloid",
// //       "vulcanized rubber",
// //       "plastic",
// //     ].map((material) => material.toLowerCase());

// //     // Loop through the data to categorize by material
// //     data.forEach((item) => {
// //       if (item.medium) {
// //         // Ensure medium exists
// //         const medium = item.medium.toLowerCase();

// //         normalizedMaterials.forEach((material) => {
// //           if (medium.includes(material)) {
// //             if (!categorizedByMaterial[material]) {
// //               categorizedByMaterial[material] = [];
// //             }
// //             categorizedByMaterial[material].push(item);
// //           }
// //         });
// //       }
// //     });

// //     // Log the categorized results (optional)
// //     // console.log(categorizedByMaterial);

// //     // Display materials in the sidebar
// //     const techniqueContentDiv = document.getElementById("techniqueContent");

// //     if (techniqueContentDiv) {
// //       // Create a list of materials
// //       const materialList = document.createElement("ul");
// //       materialList.className = "technique-list";

// //       Object.keys(categorizedByMaterial).forEach((material) => {
// //         const listItem = document.createElement("li");
// //         listItem.className = "technique-item";
// //         listItem.textContent = `${material} (${categorizedByMaterial[material].length})`; // Show material name and count

// //         // Add click event to filter textiles
// //         listItem.addEventListener("click", () => {
// //           const filteredTextiles = transformDataForGrid(
// //             categorizedByMaterial[material]
// //           );
// //           // Update the grid with filtered textiles
// //           displayColorGrid(filteredTextiles, true); // Pass filtered textiles to displayColorGrid
// //         });

// //         materialList.appendChild(listItem);
// //       });

// //       techniqueContentDiv.appendChild(materialList);
// //     }
// //   })
// //   .catch((error) => console.error("Error categorizing materials:", error));
// fetch("./data/data_NEW.json")
//   .then((response) => response.json())
//   .then((data) => {
//     const categorizedByMaterial = {
//       "Animal-based": [
//         "silk",
//         "wool",
//         "cashmere",
//         "mohair",
//         "leather",
//         "suede",
//         "hide",
//         "fur",
//         "ivory",
//         "bone",
//         "horn",
//         "mother of pearl",
//         "tortoise shell",
//         "coral",
//         "peacock",
//         "ostrich",
//         "marabou",
//       ],
//       "Plant-based": [
//         "cotton",
//         "linen",
//         "hemp",
//         "jute",
//         "ramie",
//         "agave",
//         "straw",
//         "raffia",
//         "grass",
//         "mulberry",
//         "bamboo",
//       ],
//       "Minerals & Stones": [
//         "jade",
//         "diamond",
//         "emerald",
//         "garnet",
//         "turquoise",
//         "mica",
//         "stoneware",
//         "ceramic",
//         "paste",
//         "glass",
//       ],
//       Metals: [
//         "gold",
//         "silver",
//         "iron",
//         "copper",
//         "bronze",
//         "brass",
//         "steel",
//         "shakudo",
//       ],
//       Wood: ["ebony", "mahogany", "sandalwood", "palm", "walnut", "oak"],
//       Synthetic: [
//         "viscose",
//         "acetate",
//         "celluloid",
//         "plastic",
//         "nylon",
//         "polyester",
//         "rubber",
//         "vulcanized rubber",
//       ],
//     };

//     const categorizedResults = {};

//     // Categorize items by material
//     Object.entries(categorizedByMaterial).forEach(([category, materials]) => {
//       categorizedResults[category] = {};

//       materials.forEach((material) => {
//         const materialLowerCase = material.toLowerCase();
//         categorizedResults[category][material] = data.filter((item) =>
//           item.medium?.toLowerCase().includes(materialLowerCase)
//         );
//       });
//     });

//     const techniqueContentDiv = document.getElementById("techniqueContent");

//     if (techniqueContentDiv) {
//       Object.entries(categorizedResults).forEach(
//         ([category, materials], idx) => {
//           // Create an accordion item for each category
//           const accordionItem = document.createElement("div");
//           accordionItem.className = "accordion-item";

//           accordionItem.innerHTML = `
//           <h2 class="accordion-header" id="heading-${idx}">
//             <button
//               class="accordion-button collapsed"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#collapse-${idx}"
//               aria-expanded="false"
//               aria-controls="collapse-${idx}"
//             >
//               ${category}
//             </button>
//           </h2>
//           <div
//             id="collapse-${idx}"
//             class="accordion-collapse collapse"
//             aria-labelledby="heading-${idx}"
//             data-bs-parent="#materialAccordion"
//           >
//             <div class="accordion-body">
//               <ul class="list-group">
//                 <!-- Material list items will go here -->
//               </ul>
//             </div>
//           </div>
//         `;

//           const listGroup = accordionItem.querySelector(".list-group");

//           // Add materials as list items
//           Object.entries(materials).forEach(([material, items]) => {
//             const listItem = document.createElement("li");
//             listItem.className = "list-group-item list-group-item-action";
//             listItem.textContent = `${material} (${items.length})`;

//             // Add click event to filter by material
//             listItem.addEventListener("click", () => {
//               const filteredTextiles = transformDataForGrid(items);
//               displayColorGrid(filteredTextiles, true);
//             });

//             listGroup.appendChild(listItem);
//           });

//           techniqueContentDiv.appendChild(accordionItem);
//         }
//       );
//     }
//   })
//   .catch((error) => console.error("Error categorizing materials:", error));
// document
//   .querySelector(".sidebar-tab-toggle")
//   .addEventListener("click", function () {
//     const sidebarTab = document.querySelector(".sidebar-tab");
//     sidebarTab.classList.toggle("open");
//   });
// PLACES FILTER
function getUniquePlaces(data) {
  const placesSet = new Set(); // Use a Set to ensure uniqueness

  data.forEach((item) => {
    if (item.place) {
      // Check if "place" exists in the item
      placesSet.add(item.place);
    }
  });

  return Array.from(placesSet); // Convert the Set back to an array
}

const placeToContinent = {
  // AFRICA
  Egypt: "Africa",
  Morocco: "Africa",
  Sudan: "Africa",
  "Democratic Republic of the Congo": "Africa",
  Tunisia: "Africa",
  "South Africa": "Africa",
  Algeria: "Africa",
  Azemmour: "Africa",
  Kasai: "Africa",

  // ASIA
  China: "Asia",
  India: "Asia",
  Iran: "Asia",
  Japan: "Asia",
  "Near East": "Asia",
  Persia: "Asia",
  Indonesia: "Asia",
  Java: "Asia",
  Turkey: "Asia",
  Yemen: "Asia",
  Afghanistan: "Asia",
  Kashan: "Asia",
  Kashmir: "Asia",
  Korea: "Asia",
  Rajasthan: "Asia",
  Sumatra: "Asia",
  Yogyakarta: "Asia",
  Bali: "Asia",
  Philippines: "Asia",
  Pondicherry: "Asia",
  Maharashtra: "Asia",
  "Fukuoka prefecture": "Asia",
  Tenganan: "Asia",
  Gujarat: "Asia",
  Palembang: "Asia",
  Bukhara: "Asia",
  Lampung: "Asia",
  Thailand: "Asia",
  Azerbaijan: "Asia",
  Uzbekistan: "Asia",
  Turkmenistan: "Asia",
  Bikaner: "Asia",
  Yucatan: "Asia",
  Istanbul: "Asia",
  Tabriz: "Asia",
  Rasht: "Asia",
  Pekalongan: "Asia",
  Aceh: "Asia",
  Bengal: "Asia",
  Tiahuanaco: "Asia",
  Golconda: "Asia",
  Honshu: "Asia",
  Sumba: "Asia",
  "Awaji island": "Asia",
  "Coromandel Coast": "Asia",
  Naxos: "Asia",
  "Coromandel coast": "Asia",
  "Coromandel Coast (for Thai market)": "Asia",

  // EUROPE
  France: "Europe",
  Italy: "Europe",
  Spain: "Europe",
  Germany: "Europe",
  Switzerland: "Europe",
  Belgium: "Europe",
  Russia: "Europe",
  Ireland: "Europe",
  "United Kingdom": "Europe",
  Scotland: "Europe",
  Norway: "Europe",
  Denmark: "Europe",
  Finland: "Europe",
  Netherlands: "Europe",
  Hungary: "Europe",
  Portugal: "Europe",
  Poland: "Europe",
  Romania: "Europe",
  Sweden: "Europe",
  Austria: "Europe",
  Greece: "Europe",
  Slovakia: "Europe",
  Albania: "Europe",
  Bohemia: "Europe",
  Czechoslovakia: "Europe",
  Wales: "Europe",
  England: "Europe",
  Macedonia: "Europe",
  Malta: "Europe",
  Croatia: "Europe",
  Alençon: "Europe",
  Balkans: "Europe",
  Corsica: "Europe",
  Sicily: "Europe",
  Appenzell: "Europe",
  Abruzzi: "Europe",
  Gironde: "Europe",
  Normandy: "Europe",
  "Northern Italy": "Europe",
  Flanders: "Europe",
  Düsseldorf: "Europe",
  Majorca: "Europe",
  Rouen: "Europe",
  Mulhouse: "Europe",
  Alsace: "Europe",
  Lyon: "Europe",
  Berlin: "Europe",
  Middlesex: "Europe",
  Jouy: "Europe",
  Nantes: "Europe",
  Neuchatel: "Europe",
  Lyons: "Europe",
  Saxony: "Europe",
  "Belgium and France": "Europe",
  Rhine: "Europe",
  Piedmont: "Europe",
  Catalonia: "Europe",
  Corsica: "Europe",
  Normandy: "Europe",
  Marseille: "Europe",
  Vienna: "Europe",
  Milan: "Europe",
  Palma: "Europe",
  Byzantium: "Europe",
  Dubrovnik: "Europe",
  Binche: "Europe",
  Brussels: "Europe",
  "Sicily ()": "Europe",
  "Great Britain": "Europe",
  London: "Europe",
  Mâcon: "Europe",
  Angers: "Europe",
  Cyclades: "Europe",
  Granada: "Europe",
  Olivet: "Europe",
  Tønder: "Europe",
  Hanover: "Europe",
  Leeds: "Europe",
  Aix: "Europe",
  Huesca: "Europe",
  Rhone: "Europe",
  Leipzig: "Europe",
  "Seine et Marne": "Europe",
  Beautiran: "Europe",
  Narumi: "Europe",
  Abruzzi: "Europe",
  Toledo: "Europe",
  Saxony: "Europe",
  Albania: "Europe",
  Nimes: "Europe",
  Augsburg: "Europe",
  Neuchâtel: "Europe",

  // NORTH AMERICA
  USA: "North America",
  "United States": "North America",
  "U.S.A.": "North America",
  Canada: "North America",
  Mexico: "North America",
  "West Virginia": "North America",
  "New York": "North America",
  Massachusetts: "North America",
  "Rhode Island": "North America",
  Connecticut: "North America",
  Bridgeport: "North America",
  "New Jersey": "North America",
  Quebec: "North America",
  "French Canada": "North America",
  "Great Bookham": "North America",
  Poplar: "North America",
  Wethersfield: "North America",
  Norwich: "North America",
  Guildford: "North America",
  Ipswich: "North America",

  // SOUTH AMERICA
  Brazil: "South America",
  Argentina: "South America",
  Peru: "South America",
  Colombia: "South America",
  Chile: "South America",
  Bolivia: "South America",
  Paraguay: "South America",
  Guyana: "South America",
  Uruguay: "South America",
  Ecuador: "South America",
  Suriname: "South America",
  Chancay: "South America",
  Celedin: "South America",
  Lagartera: "South America",
  Tiahuanaco: "South America",

  // OCEANIA
  Australia: "Oceania",
  "New Zealand": "Oceania",
  Samoa: "Oceania",
  Fiji: "Oceania",
};

// Define the function to categorize and log by continent
function categorizeAndLogByContinent() {
  const continents = {
    Africa: [],
    Asia: [],
    Europe: [],
    "North America": [],
    "South America": [],
    Oceania: [],
  };

  for (const [place, continent] of Object.entries(placeToContinent)) {
    if (continents[continent]) {
      continents[continent].push(place);
    }
  }

  // Log each continent and its places to the console
  for (const [continent, places] of Object.entries(continents)) {
    console.log(`${continent}:`);
    console.log(places.join(", "));
  }
}

const colorThief = new ColorThief();
const sidebar = document.querySelector(".sidebar");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const imageGrid = document.getElementById("imageGrid");
// const colorGradient = document.getElementById("colorGradient");

const showAllBtn = document.querySelector(".show-all-btn");
const countrySelect = document.querySelector(".country-select");

let colorData = [];
let continentFilteredData = [];

hamburgerMenu.addEventListener("click", () => sidebar.classList.toggle("open"));
// hamburgerMenu.addEventListener("click", () => title-container.classList.);

const gradientColors = [
  { r: 230, g: 57, b: 70 },
  { r: 244, g: 162, b: 97 },
  { r: 233, g: 196, b: 106 },
  { r: 42, g: 157, b: 143 },
  { r: 38, g: 70, b: 83 },
  { r: 109, g: 104, b: 117 },
  { r: 181, g: 131, b: 141 },
];

function colorDistance(color1, color2) {
  return Math.sqrt(
    Math.pow(color1.r - color2.r, 2) +
      Math.pow(color1.g - color2.g, 2) +
      Math.pow(color1.b - color2.b, 2)
  );
}

function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return [h * 360, s * 100, l * 100];
}

function getDominantTextileColor(img) {
  const colorPalette = colorThief.getPalette(img, 5);
  let textileColor = null;

  colorPalette.forEach((color) => {
    const [hue, saturation, lightness] = rgbToHsl(color[0], color[1], color[2]);

    if (saturation > 20) {
      textileColor = textileColor || {
        r: color[0],
        g: color[1],
        b: color[2],
      };
    }
  });

  return textileColor || { r: 128, g: 128, b: 128 };
}
function transformDataForGrid(data) {
  return data.map((item) => ({
    id: item.id,
    image: item.image,
    fullSizeUrl: item.image?.content || "", // Full-size image URL
    metadata: {
      title: item.title || "Untitled", // Fallback title
      place: item.place || "Unknown", // Fallback place
      period: item.period || "Unknown", // Fallback period
      description: item.description || "No description available.", // Fallback description
      link: item.link || "", // Optional link
    },
  }));
}

function displayRandomImages() {
  imageGrid.className = "image-grid random-layout";
  imageGrid.innerHTML = "";

  displayData = colorData.slice(0, 500);

  displayData.forEach((imageData, index) => {
    const divContainer = document.createElement("div");
    divContainer.className = "image-container";

    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageData.image;
    img.style.opacity = "0";

    img.addEventListener("load", () => {
      divContainer.appendChild(img);

      divContainer.style.left = `${Math.random() * 100}vw`;
      divContainer.style.top = `${Math.random() * 100}vh`;

      img.style.animation = `fadeIn 3s ease-in forwards`;
      img.style.animationDelay = `${index * 0.2}s`;

      imageGrid.appendChild(divContainer);
    });

    img.addEventListener("error", () => {
      console.error("Failed to load image:", imageData.image);
    });
  });
}

function displayColorGrid(images, isFilteringMaterial = false) {
  // isFilteringMaterial) {
  imageGrid.className = "image-grid";
  imageGrid.innerHTML = "";

  const viewportWidth =
    window.innerWidth - (sidebar.classList.contains("open") ? 180 : 0);
  const viewportHeight = window.innerHeight;
  const imageCount = images.length;

  const aspectRatio = viewportWidth / viewportHeight;
  const cols = Math.ceil(Math.sqrt(imageCount * aspectRatio));
  const rows = Math.ceil(imageCount / cols);

  const gridStyles = `
  .image-grid {
  display: grid;
  grid-template-columns: repeat(${cols}, 1fr);
  grid-template-rows: repeat(${rows}, 1fr);
  height: 100vh;
  width: 100%;
  overflow: hidden;
  }
 
  .image-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
  }
  `;

  let styleEl = document.getElementById("dynamic-grid-styles");
  if (!styleEl) {
    styleEl = document.createElement("style");
    styleEl.id = "dynamic-grid-styles";
    document.head.appendChild(styleEl);
  }
  styleEl.textContent = gridStyles;

  images.forEach((imageData) => {
    console.log(imageData.image);
    const divContainer = document.createElement("div");
    divContainer.className = "image-container";
    divContainer.dataset.id = imageData.id;

    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = isFilteringMaterial ? imageData.image.thumbnail : imageData.image;
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";
    img.style.transform = "scale(1)";

    divContainer.appendChild(img);
    imageGrid.appendChild(divContainer);

    // Add click event listener to open the overlay
    divContainer.addEventListener("click", () => {
      const overlay = document.getElementById("selectedImageOverlay");
      const selectedImg = document.getElementById("selectedImage");

      // Update image and metadata
      selectedImg.src = imageData.fullSizeUrl;
      document.getElementById("metadataTitle").textContent =
        imageData.metadata.title;
      document.getElementById("metadataPlace").textContent =
        imageData.metadata.place || "Unknown";
      document.getElementById("metadataPeriod").textContent =
        imageData.metadata.period || "Unknown";

      const description =
        imageData.metadata.description &&
        imageData.metadata.description !== "Research in Progress"
          ? imageData.metadata.description
          : "Description not available.";
      document.getElementById("metadataDescription").textContent = description;

      // Update link
      const linkElement = document.getElementById("metadataLink");
      if (imageData.metadata.link) {
        linkElement.href = imageData.metadata.link;
        linkElement.style.display = "inline";
      } else {
        linkElement.style.display = "none";
      }

      overlay.classList.add("active");
    });
  });

  countryBtn.addEventListener("click", () => {
    // Get unique countries from the colorData array
    const countries = [
      ...new Set(
        colorData
          .map((item) => item.metadata.place)
          .filter((place) => place && place.trim() !== "")
      ),
    ]; // Remove empty or null values

    // Sort countries alphabetically
    countries.sort();

    // Group images by country
    const countryGroups = {};
    countries.forEach((country) => {
      countryGroups[country] = colorData.filter(
        (item) => item.metadata.place === country
      );
    });

    // Calculate total images for each country
    const countryCounts = Object.entries(countryGroups)
      .sort(([countryA], [countryB]) => countryA.localeCompare(countryB))
      .map(([country, images]) => ({
        country,
        count: images.length,
      }));

    // Create a dropdown menu
    const dropdown = document.createElement("select");
    dropdown.style.cssText = `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.9);
  z-index: 2001;
  `;

    // Add default option
    dropdown.innerHTML = `<option value="">Select a country</option>`;

    // Add options for each country
    countryCounts.forEach(({ country, count }) => {
      dropdown.innerHTML += `
  <option value="${country}">${country} (${count})</option>
  `;
    });

    // Add dropdown to body
    document.body.appendChild(dropdown);

    // Handle selection
    dropdown.addEventListener("change", (e) => {
      const selectedCountry = e.target.value;
      if (selectedCountry) {
        const filteredImages = colorData.filter(
          (item) => item.metadata.place === selectedCountry
        );
        displayColorGrid(filteredImages);
      }
      // Remove dropdown after selection
      dropdown.remove();
    });

    // Close dropdown when clicking outside
    document.addEventListener(
      "click",
      (e) => {
        if (e.target !== dropdown && e.target !== countryBtn) {
          dropdown.remove();
        }
      },
      { once: true }
    );
  });
}

// Function to populate continent select
function populateContinentSelect() {
  const continents = [...new Set(Object.values(placeToContinent))]; // Extract unique continents

  // Sort continents alphabetically
  continents.sort();

  // Clear existing options except the first one
  countrySelect.innerHTML = '<option value="">Select Continent</option>';

  continents.forEach((continent) => {
    const option = document.createElement("option");
    option.value = continent;
    option.textContent = continent;
    countrySelect.appendChild(option);
  });
}

let currentFilteredData = []; // Holds the currently filtered data based on continent, country, etc.

countrySelect.addEventListener("change", (e) => {
  const selectedContinent = e.target.value;

  // Reset currentFilteredData to all images if no continent is selected
  if (!selectedContinent) {
    currentFilteredData = colorData;
    const sortedImages = [...colorData].sort((a, b) => {
      const hslA = rgbToHsl(
        a.dominantColor.r,
        a.dominantColor.g,
        a.dominantColor.b
      );
      const hslB = rgbToHsl(
        b.dominantColor.r,
        b.dominantColor.g,
        b.dominantColor.b
      );
      return hslA[0] - hslB[0];
    });
    displayColorGrid(sortedImages);
  } else {
    // Filter images based on the selected continent
    currentFilteredData = colorData.filter((item) => {
      const place = item.metadata.place;
      return place && placeToContinent[place] === selectedContinent;
    });
    displayColorGrid(currentFilteredData);
  }
});

// Update the color swatch filter function to use currentFilteredData
function applyColorFilter(selectedColor) {
  const hueThreshold = 30;
  const saturationThreshold = 30;

  const matchingTextiles = currentFilteredData.filter((item) => {
    const dominantColor = item.dominantColor;
    const [hue, saturation] = rgbToHsl(
      dominantColor.r,
      dominantColor.g,
      dominantColor.b
    );
    // Check for black and white specifically
    if (
      (selectedColor.r === 0 &&
        selectedColor.g === 0 &&
        selectedColor.b === 0) || // Black
      (selectedColor.r === 255 &&
        selectedColor.g === 255 &&
        selectedColor.b === 255) // White
    ) {
      const isGrayscale =
        Math.abs(dominantColor.r - dominantColor.g) < 10 &&
        Math.abs(dominantColor.r - dominantColor.b) < 10;
      if (selectedColor.r === 0) {
        return isGrayscale && dominantColor.r < 100; // Dark grayscale for black
      } else {
        return isGrayscale && dominantColor.r > 150; // Light grayscale for white
      }
    }
    const [selectedHue] = rgbToHsl(
      selectedColor.r,
      selectedColor.g,
      selectedColor.b
    );

    return (
      Math.abs(hue - selectedHue) <= hueThreshold &&
      saturation >= saturationThreshold
    );
  });

  displayColorGrid(matchingTextiles);
}

document.addEventListener("DOMContentLoaded", () => {
  const showAllBtn = document.querySelector(".show-all-btn");

  if (showAllBtn) {
    showAllBtn.addEventListener("click", () => {
      // Reset filters
      currentFilteredData = colorData;

      // Display all images
      const sortedImages = [...colorData].sort((a, b) => {
        const hslA = rgbToHsl(
          a.dominantColor.r,
          a.dominantColor.g,
          a.dominantColor.b
        );
        const hslB = rgbToHsl(
          b.dominantColor.r,
          b.dominantColor.g,
          b.dominantColor.b
        );
        return hslA[0] - hslB[0];
      });

      displayColorGrid(sortedImages);
    });
  }
});

// const countrySelect = document.querySelector(".country-select");
// Initial display to set up currentFilteredData with all items when the page loads
fetch("./data/data_NEW.json")
  .then((response) => response.json())
  .then((jsonData) => {
    const imagePaths = jsonData.slice(0, 500).map((item) => ({
      image: item.image.thumbnail + "&max=200",
      // image: `${folderPath}${item.filename || `image_${item.id}.jpg`}`,
      id: item.id,
      fullSizeUrl: item.image.content,
      metadata: {
        title: item.title,
        place: item.place,
        period: item.period,
        description: item.description,
        link: item.link,
      },
    }));

    return Promise.all(
      imagePaths.map((item) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.crossOrigin = "Anonymous";
          img.src = item.image;
          img.onload = () => {
            const dominantColor = getDominantTextileColor(img);
            resolve({
              ...item,
              dominantColor: {
                r: dominantColor.r,
                g: dominantColor.g,
                b: dominantColor.b,
              },
            });
          };
          img.onerror = () => resolve(null);
        });
      })
    );
  })
  .then((processedData) => {
    colorData = processedData.filter((item) => item !== null);
    currentFilteredData = colorData; // Initially set to all images
    populateContinentSelect();
    displayRandomImages();
  })
  .catch((error) => console.error("Error loading images:", error));

// const folderPath = "./05_node_image_download/downloads_new/";

// fetch("./data/data_NEW.json")
// .then((response) => response.json())
// .then((jsonData) => {
// // Map both thumbnail path and full content URL
// const imagePaths = jsonData.slice(0, 1000).map((item) => ({
// image: `${folderPath}${item.filename || `image_${item.id}.jpg`}`, // thumbnail for grid
// id: item.id,
// fullSizeUrl: item.image.content, // Store the full-size image URL
// metadata: {
// title: item.title,
// place: item.place,
// period: item.period,
// link: item.link,
// },
// }));
// console.log(imagePaths);

// return Promise.all(
// imagePaths.map((item) => {
// return new Promise((resolve) => {
// const img = new Image();
// img.crossOrigin = "Anonymous";
// img.src = item.image;

// img.onload = () => {
// try {
// const dominantColor = getDominantTextileColor(img);
// resolve({
// image: item.image,
// id: item.id,
// fullSizeUrl: item.fullSizeUrl, // Keep the full-size URL
// metadata: item.metadata,
// dominantColor: {
// r: dominantColor.r,
// g: dominantColor.g,
// b: dominantColor.b,
// },
// });
// } catch (error) {
// resolve(null);
// }
// };

// img.onerror = () => resolve(null);
// });
// })
// );
// })
// .then((processedData) => {
// colorData = processedData.filter((item) => item !== null);
// // populateCountrySelect(); // Add this line to populate the select
// displayRandomImages();
// })
// .catch((error) => console.error("Error loading images:", error));

// Add click handler for close button
document.getElementById("closeButton").addEventListener("click", () => {
  const overlay = document.getElementById("selectedImageOverlay");
  const selectedImg = document.getElementById("selectedImage");

  overlay.classList.remove("active");
  selectedImg.classList.remove("active");
  setTimeout(() => {
    selectedImg.src = "";
  }, 300);
});

// Updated overlay click handler
document
  .getElementById("selectedImageOverlay")
  .addEventListener("click", (e) => {
    if (e.target === e.currentTarget) {
      const overlay = document.getElementById("selectedImageOverlay");
      const selectedImg = document.getElementById("selectedImage");

      overlay.classList.remove("active");
      setTimeout(() => {
        selectedImg.src = "";
      }, 300); // Clear the source after the fade-out animation
    }
  });

// const folderPath = "./05_node_image_download/downloads_new/";
// Assign event listeners to each SVG region
const svgPaths = document.querySelectorAll("svg path"); // Select all paths in the SVG

svgPaths.forEach((path) => {
  path.addEventListener("click", () => {
    const continent = path.getAttribute("title"); // Get continent from SVG region
    filterByContinent(continent); // Filter textiles based on the continent
  });
});

// Function to filter textiles by continent
function filterByContinent(continent) {
  // Map places in the dataset to continents
  const filteredTextiles = colorData.filter((textile) => {
    const place = textile.metadata.place; // Extract the place from textile metadata
    return place && placeToContinent[place] === continent; // Match place to continent
  });

  // Render the filtered textiles in the grid
  displayColorGrid(filteredTextiles);

  // Highlight the clicked region in the SVG
  highlightPaths(continent);
}

// Function to highlight paths in the SVG
function highlightPaths(selectedContinent) {
  svgPaths.forEach((path) => {
    const continent = path.getAttribute("data-continent");
    if (continent === selectedContinent) {
      path.style.fill = "purple"; // Highlight matching region
    } else {
      path.style.fill = "#1da1f2"; // Reset color for non-matching regions
    }
  });
}
// First, create the technique extractor that can handle large datasets
function extractTechniquesFromLargeDataset(data) {
  // Initialize storage for techniques
  const techniqueMap = new Map(); // Use Map for better performance with large datasets

  // Process each item in the dataset
  data.forEach((item) => {
    if (!item.medium) return; // Skip items without medium description

    try {
      const mediumText = item.medium.toLowerCase();

      // Check for explicit technique description
      if (mediumText.includes("technique:")) {
        const [_, technique] = mediumText.split("technique:");
        if (technique) {
          const cleanTechnique = technique.trim();
          // Store technique with count and example items
          techniqueMap.set(cleanTechnique, {
            count: (techniqueMap.get(cleanTechnique)?.count || 0) + 1,
            examples: [
              ...(techniqueMap.get(cleanTechnique)?.examples || []),
              {
                id: item.id,
                title: item.title,
                period: item.period,
              },
            ].slice(0, 5), // Keep only 5 examples per technique
          });
        }
      }

      // Also check for implicit techniques in medium description
      const implicitTechniques = [
        "weave",
        "printed",
        "woodblock",
        "tapestry",
        "supplementary",
        "velvet",
        "brocade",
        "compound",
        "embroidered",
        "painted",
        "dyed",
      ];

      implicitTechniques.forEach((tech) => {
        if (mediumText.includes(tech)) {
          const context = extractTechniqueContext(mediumText, tech);
          if (context) {
            techniqueMap.set(context, {
              count: (techniqueMap.get(context)?.count || 0) + 1,
              examples: [
                ...(techniqueMap.get(context)?.examples || []),
                {
                  id: item.id,
                  title: item.title,
                  period: item.period,
                },
              ].slice(0, 5),
            });
          }
        }
      });
    } catch (error) {
      console.warn(`Error processing item ${item.id}:`, error);
    }
  });

  return techniqueMap;
}

// Helper function to extract technique context
function extractTechniqueContext(text, keyword) {
  const words = text.split(" ");
  const keywordIndex = words.findIndex((word) => word.includes(keyword));
  if (keywordIndex === -1) return null;

  // Get 3 words before and after for context
  const start = Math.max(0, keywordIndex - 3);
  const end = Math.min(words.length, keywordIndex + 4);
  return words.slice(start, end).join(" ");
}

// Function to categorize techniques
function categorizeTechniques(techniqueMap) {
  const categories = {
    primary: {
      name: "Primary Construction",
      techniques: new Map(),
    },
    surface: {
      name: "Surface Decoration",
      techniques: new Map(),
    },
    structural: {
      name: "Structural Modification",
      techniques: new Map(),
    },
  };

  // Keywords for categorization
  const categoryKeywords = {
    primary: ["weave", "tapestry", "twill", "satin", "plain"],
    surface: ["printed", "painted", "dyed", "woodblock", "brush"],
    structural: ["supplementary", "pile", "velvet", "brocade"],
  };

  // Categorize each technique
  techniqueMap.forEach((data, technique) => {
    for (const [category, keywords] of Object.entries(categoryKeywords)) {
      if (
        keywords.some((keyword) => technique.toLowerCase().includes(keyword))
      ) {
        categories[category].techniques.set(technique, data);
        break;
      }
    }
  });

  return categories;
}

// Example usage with async data loading
async function processTechniques() {
  try {
    // Load data (replace with your actual data loading method)
    const response = await fetch("your-textile-data.json");
    const data = await response.json();

    // console.log(`Processing ${data.length} textile items...`);

    // Extract techniques
    const techniqueMap = extractTechniquesFromLargeDataset(data);
    // console.log(`Found ${techniqueMap.size} unique techniques`);

    // Categorize techniques
    const categorizedTechniques = categorizeTechniques(techniqueMap);

    // Generate statistics
    const stats = {
      totalItems: data.length,
      uniqueTechniques: techniqueMap.size,
      categoryCounts: {
        primary: categorizedTechniques.primary.techniques.size,
        surface: categorizedTechniques.surface.techniques.size,
        structural: categorizedTechniques.structural.techniques.size,
      },
      mostCommon: Array.from(techniqueMap.entries())
        .sort((a, b) => b[1].count - a[1].count)
        .slice(0, 10),
    };

    return {
      techniques: techniqueMap,
      categories: categorizedTechniques,
      statistics: stats,
    };
  } catch (error) {
    console.error("Error processing techniques:", error);
    throw error;
  }
}

// Example of using the processor
async function initializeTextileAnalysis() {
  try {
    const results = await processTechniques();

    // console.log("Processing complete!");
    // console.log(`Total items processed: ${results.statistics.totalItems}`);
    // console.log(
    // `Unique techniques found: ${results.statistics.uniqueTechniques}`
    // );

    // Log category breakdowns
    Object.entries(results.statistics.categoryCounts).forEach(
      ([category, count]) => {
        // console.log(`${category}: ${count} techniques`);
      }
    );

    // Log most common techniques
    // console.log("\nMost common techniques:");
    results.statistics.mostCommon.forEach(([technique, data]) => {
      // console.log(`${technique}: ${data.count} occurrences`);
    });

    return results;
  } catch (error) {
    console.error("Analysis failed:", error);
  }
}
// Add this after processing the data to see the techniques
async function logTechniqueData() {
  try {
    const response = await fetch("./data/data_NEW.json");
    const data = await response.json();

    // console.log("=== ANALYZING TEXTILE TECHNIQUES ===");

    // Get techniques map
    const techniqueMap = extractTechniquesFromLargeDataset(data);

    // console.log("\n=== ALL UNIQUE TECHNIQUES ===");
    techniqueMap.forEach((data, technique) => {
      // console.log(`\nTechnique: ${technique}`);
      // console.log(`Occurrences: ${data.count}`);
      // console.log("Example items:");
      data.examples.forEach((example) => {
        // console.log(`- ${example.title} (${example.period})`);
      });
    });

    // Get categorized techniques
    const categorized = categorizeTechniques(techniqueMap);

    // console.log("\n=== TECHNIQUES BY CATEGORY ===");

    Object.entries(categorized).forEach(([category, data]) => {
      // console.log(`\n${data.name}:`);
      data.techniques.forEach((techData, technique) => {
        // console.log(`- ${technique} (${techData.count} occurrences)`);
      });
    });

    // // Statistics
    // console.log("\n=== STATISTICS ===");
    console.log(`Total unique techniques: ${techniqueMap.size}`);
    Object.entries(categorized).forEach(([category, data]) => {
      // console.log(`${data.name}: ${data.techniques.size} techniques`);
    });

    // Most common techniques
    // console.log("\n=== TOP 10 MOST COMMON TECHNIQUES ===");
    const sortedTechniques = Array.from(techniqueMap.entries())
      .sort((a, b) => b[1].count - a[1].count)
      .slice(0, 10);

    sortedTechniques.forEach(([technique, data], index) => {
      // console.log(`${index + 1}. ${technique} (${data.count} occurrences)`);
    });
  } catch (error) {
    // console.error("Error analyzing techniques:", error);
  }
}

// Call the function to see the results
logTechniqueData();

// Select all paths in the SVG
const paths = document.querySelectorAll("path");

// Get the element to display the title
const hoverTitle = document.getElementById("hover-title");

// Add hover event listeners to each path
paths.forEach((path) => {
  path.addEventListener("mouseover", () => {
    const title = path.getAttribute("title");
    hoverTitle.textContent = title; // Update the text below the map
  });

  path.addEventListener("mouseout", () => {
    hoverTitle.textContent = ""; // Clear the title when hover ends
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const colorSwatchesContainer = document.getElementById("colorSwatches");
  const colors = [
    { r: 230, g: 57, b: 70 },
    { r: 244, g: 162, b: 97 },
    { r: 233, g: 196, b: 106 },
    { r: 42, g: 157, b: 143 },
    { r: 38, g: 70, b: 83 },
    { r: 109, g: 104, b: 117 },
    { r: 181, g: 131, b: 141 },
  ];

  colors.forEach((color) => {
    const swatch = document.createElement("div");
    swatch.className = "color-swatch";
    swatch.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;

    // Add click event for filtering
    swatch.addEventListener("click", () => {
      applyColorFilter(color);
    });

    colorSwatchesContainer.appendChild(swatch);
  });
});

// Function to filter images by color
function applyColorFilter(selectedColor) {
  const hueThreshold = 30; // Adjust as needed
  const saturationThreshold = 20; // Adjust as needed

  const filteredImages = currentFilteredData.filter((item) => {
    const dominantColor = item.dominantColor;
    if (!dominantColor) return false;

    const [hue, saturation] = rgbToHsl(
      dominantColor.r,
      dominantColor.g,
      dominantColor.b
    );
    const [selectedHue] = rgbToHsl(
      selectedColor.r,
      selectedColor.g,
      selectedColor.b
    );

    return (
      Math.abs(hue - selectedHue) <= hueThreshold &&
      saturation >= saturationThreshold
    );
  });

  displayColorGrid(filteredImages);
}
document.addEventListener("DOMContentLoaded", () => {
  const continentRectangles = document.querySelectorAll(".continent-rectangle");

  continentRectangles.forEach((rectangle) => {
    rectangle.addEventListener("click", () => {
      const selectedContinent = rectangle.dataset.continent;

      // Filter textiles based on the selected continent
      const filteredTextiles = colorData.filter((textile) => {
        const place = textile.metadata.place;
        return place && placeToContinent[place] === selectedContinent;
      });

      // Display the filtered textiles in the grid
      displayColorGrid(filteredTextiles);
    });
  });
});
// Add click event listeners to continent paths in the SVG
document.addEventListener("DOMContentLoaded", () => {
  // Select all continent groups
  const continents = document.querySelectorAll(
    "#Africa, #Asia, #Europe, #North_America, #South_America, #Oceania"
  );

  continents.forEach((continent) => {
    continent.addEventListener("click", () => {
      // Get continent name from the ID
      const continentName = continent.id.replace(/_/g, " ");

      // Style changes for interactivity
      continents.forEach((c) => {
        c.style.opacity = "0.5";
        c.style.transition = "opacity 0.3s ease";
      });
      continent.style.opacity = "1";

      // Filter textiles based on continent
      const filteredTextiles = colorData.filter((textile) => {
        const place = textile.metadata.place;
        return place && placeToContinent[place] === continentName;
      });

      // Display filtered results
      displayColorGrid(filteredTextiles);

      // Update the select dropdown to match
      const countrySelect = document.querySelector(".country-select");
      if (countrySelect) {
        countrySelect.value = continentName;
      }
    });

    // Add hover effects
    continent.addEventListener("mouseenter", () => {
      continent.style.opacity = "0.8";
      continent.style.cursor = "pointer";
    });

    continent.addEventListener("mouseleave", () => {
      continent.style.opacity = "1";
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const aboutTab = document.querySelector(".about-tab");
  const aboutToggle = document.querySelector(".about-tab-toggle");

  aboutToggle.addEventListener("click", function () {
    aboutTab.classList.toggle("open");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const aboutBtn = document.querySelector(".about-btn");
  const aboutModal = document.querySelector(".about-modal");
  const closeAbout = document.querySelector(".close-about");

  aboutBtn.addEventListener("click", () => {
    aboutModal.style.display = "block";
  });

  closeAbout.addEventListener("click", () => {
    aboutModal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === aboutModal) {
      aboutModal.style.display = "none";
    }
  });
});
// Material Filtering Logic
fetch("./data/data_NEW.json")
  .then((response) => response.json())
  .then((data) => {
    const categorizedByMaterial = {};
    const normalizedMaterials = [
      //silk//
      "raw silk",
      "tussah silk",
      "cashmere wool",
      "mohair wool",
      "yak wool",
      "worsted wool",
      "horsehair",
      "animal bristle",
      "ivory",
      "bone",
      "horn",
      "mother of pearl",
      "tortoise shell",
      "coral",
      "leather",
      "suede",
      "hide",
      "fur",
      "human hair",
      "peacock",
      "ostrich",
      "marabou",
      "cotton",
      "linen",
      "hemp",
      "jute",
      "ramie",
      "agave",
      "mulberry",
      "birch",
      "straw",
      "raffia",
      "grass",
      "bamboo",
      "ebony",
      "mahogany",
      "sandalwood",
      "palm",
      "walnut",
      "oak",
      "gold",
      "silver",
      "iron",
      "copper",
      "bronze",
      "brass",
      "steel",
      "satin",
      "shakudo",
      "jade",
      "diamond",
      "emerald",
      "garnet",
      "turquoise",
      "glass",
      "mica",
      "stoneware",
      "ceramic",
      "paste",
      //paper//
      "mulberry paper",
      "laid paper",
      "wove paper",
      "machine made paper",
      "handmade paper",
      "oiled paper",
      "translucent paper",
      "tracing paper",
      "parchment",
      "vellum",
      "cardboard",
      "buckram",
      "membrane",
      "viscose",
      "acetate",
      "mercerized",
      "celluloid",
      "vulcanized rubber",
      "plastic",
    ].map((material) => material.toLowerCase());

    // Loop through the data to categorize by material
    data.forEach((item) => {
      if (item.medium) {
        // Ensure medium exists
        const medium = item.medium.toLowerCase();

        normalizedMaterials.forEach((material) => {
          if (medium.includes(material)) {
            if (!categorizedByMaterial[material]) {
              categorizedByMaterial[material] = [];
            }
            categorizedByMaterial[material].push(item);
          }
        });
      }
    });

    // Log the categorized results (optional)
    // console.log(categorizedByMaterial);

    // Display materials in the sidebar
    const techniqueContentDiv = document.getElementById("techniqueContent");

    if (techniqueContentDiv) {
      // Create a list of materials
      const materialList = document.createElement("ul");
      materialList.className = "technique-list";

      Object.keys(categorizedByMaterial).forEach((material) => {
        const listItem = document.createElement("li");
        listItem.className = "technique-item";
        listItem.textContent = `${material} (${categorizedByMaterial[material].length})`; // Show material name and count

        // Add click event to filter textiles
        listItem.addEventListener("click", () => {
          const filteredTextiles = transformDataForGrid(
            categorizedByMaterial[material]
          );
          // Update the grid with filtered textiles
          displayColorGrid(filteredTextiles, true); // Pass filtered textiles to displayColorGrid
        });

        materialList.appendChild(listItem);
      });

      techniqueContentDiv.appendChild(materialList);
    }
  })
  .catch((error) => console.error("Error categorizing materials:", error));
