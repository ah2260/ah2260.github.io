// JavaScript Document

//function increaseFontSizeBy100px() {
	//document.getElementById('a').style.fontSize = "400px";
		//  document.getElementById('a').style.color = "red";

    //}
    //function increaseFontSizeBy1px() {
     //   var id = document.getElementById('b');
     //   var style = window.getComputedStyle(id, null).getPropertyValue('font-size');
     //   var currentSize = parseInt(style);
     //   currentSize++;
     //   document.getElementById('b').style.fontSize = currentSize.toString();
  //  }

var getButton = document.getElementById("button");
var getHeart = document.getElementById("heart");
var getHeart2 = document.getElementById("heart2");

getButton.addEventListener("click", heartexpand);

function heartexpand(e){
	getHeart.style.fontSize = "240px";
	getHeart2.style.visibility = "visible";
	getHeart2.style.opacity = "0";
	getHeart2.style.fontSize = "540px";
}