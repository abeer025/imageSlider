//Slider//
var imgDiv = document.getElementById("imgDiv");
var arrImg = imgDiv.getElementsByTagName("IMG");
var srcOfImg = [];

for (var i = 0; i < arrImg.length; i++) {
        srcOfImg.push(arrImg[i].src);
}
        console.log(srcOfImg); 

var mainImgDiv = document.getElementById("mainImg");
function renderSlide() {
        if (srcOfImg.length > 0) {
                mainImg.src = srcOfImg[0];
            }
        }

renderSlide()