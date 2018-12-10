# Shape Detection API (Almost like Tensorflow!)
[![HitCount](http://hits.dwyl.io/RaymondDashWu/https://github.com/RaymondDashWu/shape-detection-api.svg)](http://hits.dwyl.io/RaymondDashWu/https://github.com/RaymondDashWu/shape-detection-api)
The Shape Detection API is an amazing experimental API that allows for basic detection of faces, barcodes, and text straight from the browser - no need to install anything. As of the time of this writing the only thing needed to get the API running is to enable an experimental feature in Chrome. With this API there are quite a few applications. For example, one use case was to see if there was a person watching the video (linked below). In this specific scenario this type of information would be great for advertisers. It would allow them to distinguish between an actual person watching the video and a person that fell asleep with autoplaying videos.

![](https://cdn-images-1.medium.com/max/1600/1*yhOEl2bSxrpJKMP3sSqK9w.png)
Image from here: https://medium.com/@eyevinntechnology/using-shape-detection-api-in-chrome-to-detect-if-anyone-is-watching-the-video-f3f898d2912

However, the documentation states that the API can go as far as detecting facial features such as the eyes, mouth, and nose. This could be used to make Snapchat-esque filters such as the one below. Note: this was created in combination with deeplearnjs. 
![](https://cdn-images-1.medium.com/max/1600/1*JjNhlQety_34TEQBmgSZ1g.png)
Image from here: https://medium.com/the-unitgb/building-a-real-time-smile-detection-app-with-deeplearn-js-820eb48e09b7

While others have had great success with this project, I struggled quite a bit with this API. I learned the most by looking at practical applications of it. There are a lot of nuances to this API that I had to overcome. For example, when I first came across it it was quite overwhelming. The part that confused me primarily was getting things to work with a webcam interface. It would be nice to have a documentation section dedicated to setting this up with different interfaces (webcam, image/video upload, etc.). However, once that obstacle was bypassed the API makes sense. It returns a promise called Detected(Face/Text/Barcode) depending on which one you're using. Inside that is an array containing:
- boundingBox - A rectangle indicating the position and extent of a detected feature aligned to the image axes. In this case Canvas was used to highlight the section of interest and make an object detection interface not dissimilar to how Tensorflow works (albeit minus a confidence rating)
- landmarks - This is supposed to be used to denotefeatures of interest. However, according to the documentation this is currently, as of the writing of this, only used to detect in the face detection to denote the eyes, mouth, and nose.

![](https://cdn-images-1.medium.com/max/2000/1*NAIfEgarF_TsG4101wBt7g.png)
Image from here: https://blog.arnellebalane.com/introduction-to-the-shape-detection-api-e07425396861

However, despite these difficulties, I recognize that it is an experimental feature. There is a lot of potential and use cases. There is still plenty of time for documentation improvements and additional features. While I do like playing with it I do have to wonder how people would react to it if they knew that their phone or laptop was being used against their knowledge. In the case of laptops they often have some sort of light to indicate that the webcam is being used.

### Compatibility
Notes on compatibility can be found here:
https://github.com/WICG/shape-detection-api#overview

### Installation
In order to view this you'll need Chrome 57 or newer as well as enabling the Experimental Web Platform Features flag. This is done in chrome by going to:
chrome://flags

Once that is done simply clone/download the repo and run index.html

### Development
Deveopment of the Shape Detection API can be tracked here:
https://wicg.github.io/shape-detection-api/

### Additional Resources
- https://wicg.github.io/shape-detection-api/
--Document describing the development of the API
- https://codepen.io/collection/DwWVJj/
-- Sample code with several implementations of the Shape Detection API. Great place to get started! 
- https://blog.arnellebalane.com/introduction-to-the-shape-detection-api-e07425396861
-- Great resource demonstrating the use of all three types of shape detection. My primary reference.
- https://medium.com/@eyevinntechnology/using-shape-detection-api-in-chrome-to-detect-if-anyone-is-watching-the-video-f3f898d2912
-- Another use case scenario demonstrating the facial recognition of the API.

### Todos

 - Barcode scanner not working
 - rawValue outputting undefined or not reading values.

License
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
