# hoverImage

Follow these easy steps and you're plugin will be working in a few minutes:

1. Create the HTML. If you don't want to change the CSS included with the plugin, do it with these specifications:

  - Create a div to contain the gallery of images. It must have a class (I used <strong>.gallery</strong>).
  - Create inside a second div to contain the group formed by a single image and the text that will appear when hover. The div must have a class (I used <strong>.composition</strong> ). It is capital to set a class for this div, because it will be the one that will be called in the plugin in the step 4.
  - Create inside a third div to contain the image and the text. It must have class (I used <strong>.content</strong> ).
  - Insert the image and the text. Remember to add classes to each (I used <strong>.image</strong>  for the image and <strong>.text</strong>  for the text).
  - If you want to use the <strong>.click()</strong>  function, remember to input links to the images.

2. Open the file <strong>styles.css</strong>  included in the plugin. Search for the css applied to the class <strong> .composition</strong>  and change the width and the height to match the size of your images.

3. Back in the HTML, link the JQuery file and the <strong> plugin.js</strong>  file just before the end of the body.

4. Initialize JQuery, just below the lines entered in step 3. Then introduce this line: 

          $(".composition").hoverImage();
          
5. Check that the plugin is working in your gallery.

(Remember that, if you changed the class <strong>.composition</strong> in Step 1, you will need to change the name of the class in the line you introduce in Step 4.)


