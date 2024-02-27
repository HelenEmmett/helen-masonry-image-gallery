# Responsive masonry image gallery
A responsive masonry image gallery built with vanilla javascript by Helen Emmett. [View the live page here](https://helenemmett.github.io/helen-masonry-image-gallery/).

## Goals

- Solve the problem of making a masonry image gallery responsive, so that the user has control over the order images are displayed.
- Enhance my understanding of javascript.

## Notes on gallery logic

- Place in columns, less calulations than using absolute positioning.
- Once the columns are calulated, it only needs to be re-calculated if the columns change.
- Set up an empty div for columns with a unique id.
- Get number of columns - based on screen size.
- Keep track of image sizes, as I need to know what the shortest column is.


## Notes for future improvement

- Import images from a JSON file
- Display images on page scroll
- Open gallery to full screen images, navigate with swipe, arrow key and arrow buttons

## Acknowledgments

- [W3Schools Responsive Image Grid] (https://www.w3schools.com/howto/howto_css_image_grid_responsive.asp) - this posed the problem of not being able to control the order images are displayed.
- [Masonry Cascading grid layout library] (https://masonry.desandro.com/) - this works by calculating absolute positions of each image. It gave me to idea to caculate image heights and add them to columns dynamically.
- Images are all created with Adobe Photoshop (beta) text to image, with the prompt: *Embroidery with the number "1" in the centre. warm Green, emerald green, gold, teal*.