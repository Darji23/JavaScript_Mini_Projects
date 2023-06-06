(function(){
    "use strict";

    var myImages=["image1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpg"];
    var currentImage = 0;

    document.getElementById('next').onclick = nextPhoto;
    document.getElementById('previous').onclick = previousPhoto;

    function nextPhoto(){
        currentImage = currentImage+1;
        if(currentImage>4){ 
            currentImage=0;
        }
        document.getElementById('myimage').src=myImages[currentImage];
    }

    function previousPhoto(){
        currentImage=currentImage-1;
        if(currentImage<0){
            currentImage=4;
        }
        document.getElementById('myimage').src=myImages[currentImage];
    }

})();