# helen-masonry-image-gallery
 A masonry image gallery built with vanilla javascript.

## Notes on gallery logic

- Place in columns, less calulations than using absolute positioning
- Once the columns are calulated, it only needs to be re-calculated in the columns change.
- Set up empty div for columns with a unique id
- Get number of columns - based on screen size? Or select?
- Possibly select 2-6, or select responsive
- Keep track of image sizes, need to know what the shortest column is.


## Variables needed

- Array of images
- Number of columns
- height of each column (keep track of image height)
- Shortest column length
- String for HTML code

## Notes for improvement

- Display images on page scroll
- Open gallery to full screen images, navigate with swipe, arrow key and arrow buttons


