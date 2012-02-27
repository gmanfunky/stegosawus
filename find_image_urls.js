var imageURLs = [];

function findImages() {
	var result = document.getElementsByTagName("img");
    //TODO: add background image? Any others?
    for (var key in result) {
		if (!isNaN(result[key].width)) {
			if(result[key].width > 100) { //TODO: arbitrary image size okay? 
				imageURLs.push(result[key].src);
			}
		}
	}
	console.log("END findImages()");
}

findImages();
chrome.extension.sendRequest(imageURLs);
