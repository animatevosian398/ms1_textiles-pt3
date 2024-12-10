# ms1_textiles-pt3

# Worn Worlds: A Textile Exhibition

**By Sani and Ani**

## Overview

**Worn Worlds: A Textile Exhibition** is an interactive digital platform that explores the Smithsonian's global textile collection. Bringing together textiles from the Freer & Sackler Galleries and the Cooper Hewitt Design Museum, this project presents a vibrant tapestry of textile images that users can filter by continent, color, material, and technique. Each textile reveals metadata, including its origin and period, creating a historiographical tool to study the complexity of textiles. This collection showcases the Smithsonian Institution's textiles from various origins, highlighting their craftsmanship and establishing their agency as artifacts through history.

This project hopes to exalt these textiles from the annals of history and preserve them as a shared language of labor and artistry worldwide.

## Features

- **Dynamic Textile Mosaic**:
  - A visually captivating grid of textile images that dynamically rearranges based on filters applied by the user.
- **Interactive Filters**:
  - Filter textiles by:
    - **Color**: Sort by dominant hues or gradients using `colorthief` to extract color palettes dynamically from the images.
    - **Region**: Discover textiles by their continent of origin.
    - **Material**: Explore textiles made from diverse animal, plant, or synthetic fibers.
    - **Technique**: Learn about unique craftsmanship like weaving, embroidery, and dyeing.
- **Keyword-Based Filtering**:
  - A dictionary for material and process filters was created using keywords and ChatGPT to ensure accurate and user-friendly filtering.
- **Hover and Expand**:
  - Hover over a textile to enlarge the image and reveal detailed metadata, such as title, place, period, and medium.

## Design Highlights

- **Color Palette**: Extracted using `colorthief` for an authentic visual representation of the collection.
- **Material and Technique Modals**: Provide deeper insights into textile construction and history.
- **Keyword Dictionary**: Categorized materials and techniques using a custom dictionary, created with ChatGPT and curated based on the Smithsonian collection metadata.

## Development

- **Technologies Used**:
  - **Frontend**: HTML, CSS, JavaScript (with `colorthief` for color analysis and D3.js for interactivity and visualizations).
  - **Backend**: JSON-based data structure for textile metadata.
  - **Version Control**: Hosted on GitHub for collaboration and deployment.

## Goals

- Highlight the diversity and artistry of textiles from the Smithsonian collection.
- Foster a reflective engagement with material culture, prompting users to explore textiles' historical, cultural, and aesthetic significance.
- Encourage creative exploration by connecting textiles with stories of craft, labor, and innovation.

## Future Enhancements

- **User Save Feature**: Allow users to save textiles to view later or create custom collections.
- **Expanded Themes**: Introduce pathways based on thematic concepts like **colonial history**, **Silk Road trade**, or **decorative vs. functional textiles**.
- **Interactive Timeline**: Trace the movement of textiles from their origin to their inclusion in museum collections.

## Acknowledgments

This project was inspired by the **Smithsonian's rich collections** and guided by feedback from mentors and peers. Special thanks to **Daniel** for insightful suggestions and **the Smithsonian Open Access initiative** for making this project possible.

## How to Run the Project

1. Clone the repository from GitHub.
2. Open the project folder and ensure the required files are in place.
3. Launch `NEWMAP.html` in a browser to view the application.

## Authors

- **Sani**
- **Ani**

**Explore the vibrant tapestry of textiles at the crossroads of art, history, and material culture.**
