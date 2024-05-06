//Slider//
var sliderCount = 0;
var imgDiv = document.getElementById("imgDiv");
var arrImg = imgDiv.getElementsByTagName("IMG");
var srcOfImg = [];
var mainImgDiv = document.getElementById("mainImg");

for (var i = 0; i < arrImg.length; i++) {
        srcOfImg.push(arrImg[i].src);
}
        console.log(srcOfImg); 

function renderSlide() {
        // if (srcOfImg.length > 0) {
        //         mainImg.src = srcOfImg[0];
        //     }
        mainImg.src = srcOfImg[sliderCount];
}

renderSlide();

function nextSlide() {
        if (sliderCount == srcOfImg.length -1) {
                sliderCount = 0;
                console.log(sliderCount)
        } else {
                sliderCount ++;
                console.log(sliderCount)
        }
        renderSlide()
}       

function prevSlide() {
        if (sliderCount == srcOfImg.length -1) {
                sliderCount = 0;
                console.log(sliderCount)
        } else {
                sliderCount --;
                console.log(sliderCount)
        }
        renderSlide()
        } 