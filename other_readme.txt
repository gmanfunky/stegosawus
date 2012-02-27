So far, this is just a proof of concept to show binary image data using javascipt. 

Next comes image analysis. It will probably be limited to jpegs at first. It is already limited to <img> tags in the initial page load. 

I don't want to call out to native code... so this will likely involve re-implementing parts of the jpeg library in javascript. (which also includes compression). 

Maybe i should start wit BMPs first, as they are uncompressed. 

The extension re-requests image files. In other words, every image is downloaded a second time. If browser caching is good, it might pull it from cache... but on second thought, that may have been disabled by browser security model. 




