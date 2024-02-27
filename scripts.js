const images = [
    image1 = {
        src: "images/image1.jpg",
        alt: "First image",
        w: 2256,
        h: 1504,
    },
    image2 = {
        src: "images/image2.jpg",
        alt: "Second image",
        w: 1504,
        h: 1840,
    },
    image3 = {
        src: "images/image3.jpg",
        alt: "Third image",
        w: 1688,
        h: 1592,
    },
    image4 = {
        src: "images/image4.jpg",
        alt: "Fourth image",
        w: 662,
        h: 1466,
    },
    image5 = {
        src: "images/image5.jpg",
        alt: "Fifth image",
        w: 1504,
        h: 1504,
    },
    image6 = {
        src: "images/image6.jpg",
        alt: "Sixth image",
        w: 3416,
        h: 2744,
    },
    image7 = {
        src: "images/image7.jpg",
        alt: "7th image",
        w: 300,
        h: 400,
    },
    image8 = {
        src: "images/image8.jpg",
        alt: "8th image",
        w: 400,
        h: 300,
    },
    image9 = {
        src: "images/image9.jpg",
        alt: "9th image",
        w: 500,
        h: 500,
    },
    image10 = {
        src: "images/image10.jpg",
        alt: "10th image",
        w: 500,
        h: 500,
    },
    image11 = {
        src: "images/image11.jpg",
        alt: "11th image",
        w: 1200,
        h: 800,
    },
    image12 = {
        src: "images/image12.jpg",
        alt: "12th image",
        w: 1200,
        h: 800,
    },
];

// Declare initial global variables
let columnHeights; 
let columnStrings;

// Function to set the number of columns based on screen size
function updateNumOfColumns() {
    if (window.innerWidth < 600) {
        columnHeights = Array(1).fill(0);
        columnStrings = Array(1).fill("");
    }
    else if (window.innerWidth < 1200) {
        columnHeights = Array(3).fill(0);
        columnStrings = Array(3).fill("");
    }
    else {
        columnHeights = Array(4).fill(0);
        columnStrings = Array(4).fill("");
    }
    setGallery();
}

// Add each image to the column with the shortest height
function addImagesToColumns(img) {
    let shortestColumn = columnHeights.indexOf(Math.min(...columnHeights));
    let imageHeight = (img.h / img.w) * 100;

    columnStrings[shortestColumn] += `<img src="${img.src}" alt="${img.alt}" title="${img.alt}" />`;
    columnHeights[shortestColumn] += imageHeight;
}

// Combine the column html code and insert into DOM
function setGallery() {
    images.forEach(addImagesToColumns);
    let galleryHTML = "";
    for (var i = 0; i < columnStrings.length; i++) {
        galleryHTML += `<div>${columnStrings[i]}</div>`;
    }

    document.getElementById("gallery").innerHTML = galleryHTML;
}

// Initial set up of columns on page load
updateNumOfColumns();

// Add event listener for window resize
window.addEventListener('resize', updateNumOfColumns);
