Responsive design is a set of three practices that allows a website to automatically change its visuals. In other words, to respond based on the device it is displayed on.
It is the combination of three techniques-
  1. flexible grids
  2. fluid images
  3. media queries.
 ## Flexible Grids 
 1. Flexible grids are made up of columns, gutters and margins.
 2. The space between the columns is called the gutter and the spaces between the content and the left and right edges of the screen are called margins.
 3.  Instead of defining website Element sizes based on pixels, ###flexible grids are defined in percentage values, allowing them to adjust depending on screen size.

## Fluid Images
  1. Set the CSS max width property of images to 100%.
  2. The images will scale down smaller if they're containing column becomes narrower than the images size but never grow larger.
  3. This enables an image to scale down to fit in a flexibly sized column rather than overflow it but not grow larger and become pixelated if the column becomes wider than the image.

## Media Query
  1. They allow developers to query the display size orientation and aspect ratio to conditionally apply CSS rules.
  2. For example, if you wanted your website background to appear blue on a screen size less than or equal to 700 pixels.
  3. Like on a mobile phone, you could use a media rule to set the background depending on the size of the screen.

 In responsive design, the pixel value specified is often referred to as the breakpoint. 
 A breakpoint is the point at which a website's content and layout will adapt to provide the best possible user experience. 
 A Breakpoint can function in different ways across three different grids a fixed grid fluid or for with grids and lastly, hybrid grids. 
 Let's explore each of these now, firstly, 
 ## a fixed grid has fixed with columns 
   1.The fixed grid has a fixed content with that doesn't change in a specific breakpoint range while the flexible margins occupy the remaining space on screen.
 ## flexible margins
   1.  fluid or full width grids with fluid with columns and fixed gutters and side margins.
   2.  The fluid grid has a flexible content with that goes edge to edge as per the screen size.
   3.  In a fluid grid, columns either grow or shrink to adapt to the available space.
   4.  And finally there are hybrid grids that have both fluid width and fixed with components
