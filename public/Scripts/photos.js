/*    JavaScript 6th Edition
 *    Chapter 5
 *    Chapter case

 *    Photo gallery
 *    Variables and functions
 *    Author: 
 *    Date:   

 *    Filename: photos.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrder = [1,2,3,4,5];

var autoAdvance = setInterval(rightAdvance,4000);
var figureCount = 3;

var favorites = [];

var head_txt = ['This is a scientific calculator I developed by myself.It has many useful yet subtle features:Pi (3.1415926...), +-*/, ^ (power), square root, reciprocal',
'This is a registration module, and I am responsible for completing it. It is highly technical and versatile. Almost all websites need to log in to the registration module.',
'The development environment of this project is: Ubuntu VScode C/C++ development environment, Linux operating system, which occupies less resources and runs fast, which also has its advantages.',
'This project is about Oracle database, the following are commonly used sql statements:SELECT t.LastName, t. FirstName,t. State FROM CUSTOMERS t WHERE t. City = " New Jersey" ---&&&--- SELECT t.Order#, t. ShipDate FROM ORDERS t WHERE t. ShipDate > to_date("2009-04-01 00:00:00","yyyy-mm-dd hh24:mi:ss") ---&&&---SELECT t. Title , t. Category FROM BOOKS t WHERE t. Category <> "FITNESS" or t. Category is null ---&&&--- SELECT t.Customer#, t.LastName, t.STATE FROM CUSTOMERS t WHERE t.City ="New Jersey" or t.City = "Georgia" ORDER BY t.LastName ASC  ',
'This is a crawler game I developed by myself. It is very fun. I have also developed several other games. I will continue to develop new games when there is a chance in the future.'];
rightArrow();
//只用 IMG_04sm.jpg 
function goonClick(morder) {
	var mid_=morder;
	if(morder == (favorites.length -1)){
		//delete lastOne
		
      var mid="m"+morder;
		var nid="n"+morder;
		//alert("mid="+mid +"nid="+nid);
		document.getElementById(nid).style.visibility="hidden";
		document.getElementById(mid).style.visibility="hidden"; //先可见，才能用window.opener.document.getElementById(mid).
	    
		
		favorites.splice(morder,1); 	
	   

	}else{
		//要删除的 不是最后一个,从morder+1起到最后一个，把数组favorites里的图片号（相当于图片文件名），付给数组的前一个元素
		//alert("000要删的收藏夹序号="+morder);
		var morder_=morder+1;
      
		for (var ii = morder_; ii < favorites.length; ii++) {
			var iii=ii-1;
			favorites[iii] = favorites[ii];
			var fname = "Assets/images/IMG_0" + favorites[iii] + ".jpg";
			var mid="m"+iii;
		    var nid="n"+iii;
          
		    document.getElementById(mid).src = fname;
          
		}

        var ll=favorites.length-1;
        var mid="m"+ll;
		var nid="n"+ll;
		document.getElementById(nid).style.visibility="hidden";
		document.getElementById(mid).style.visibility="hidden"; //先可见，才能用window.opener.document.getElementById(mid).
		
		favorites.splice(morder,1); 
	}
	
}

//alert(document.getElementById("m3").src); 
/* add src values to img elements based on order specified in photoOrder array */
function populateFigures() {
   var filename;
   var currentFig;
   var mid_=1;
   if (figureCount === 3) {
      for (var i = 1; i < 4; i++) {
         filename = "Assets/images/IMG_0" + photoOrder[i] + "sm.jpg";
         currentFig = document.getElementsByTagName("img")[i - 1];
         currentFig.src = filename;
      }
   } else {
      for (var i = 0; i < 5; i++) {
         filename = "Assets/images/IMG_0" + photoOrder[i] + "sm.jpg";
         currentFig = document.getElementsByTagName("img")[i];
         currentFig.src = filename;
      }
      
   }

}

/* stop automatic image switching and call rightAdvance() function */
function rightArrow() {
   //alert('ggg156');
   clearInterval(autoAdvance);
   rightAdvance();
}

/* shift all images one figure to the left, and change values in photoOrder array to match  */
function rightAdvance() {
   
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] + 1) === 6) {
         photoOrder[i] = 1;
      } else {
         photoOrder[i] += 1;
      }
      populateFigures();
   }
   //alert("1112==="+photoOrder[3] );
   document.getElementById('p01').innerHTML = head_txt[photoOrder[3] -1];
}

/* shift all images one figure to the right, and change values in photoOrder array to match  */
function leftArrow() {
   clearInterval(autoAdvance);
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] - 1) === 0) {
         photoOrder[i] = 5;
      } else {
         photoOrder[i] -= 1;
      }
      populateFigures();
   }
   document.getElementById('p01').innerHTML = head_txt[photoOrder[3] -1];
}

/* switch to 5-image layout */
function previewFive() {
   var articleEl = document.getElementsByTagName("article")[0];
   // create figure and img elements for fifth image
   var lastFigure = document.createElement("figure");
   lastFigure.id = "fig5";
   lastFigure.style.zIndex = "5";
   lastFigure.style.position = "absolute";
   lastFigure.style.right = "45px";
   lastFigure.style.top = "67px";
   var lastImage = document.createElement("img");
   lastImage.width = "240";
   lastImage.height = "135";
   lastFigure.appendChild(lastImage);
//   articleEl.appendChild(lastFigure);
   articleEl.insertBefore(lastFigure, document.getElementById("rightarrow"));
   
   //clone figure element for fifth image and edit to be first image
   var firstFigure = lastFigure.cloneNode(true);
   firstFigure.id = "fig1";
   firstFigure.style.right = "";
   firstFigure.style.left = "45px";
   articleEl.insertBefore(firstFigure, document.getElementById("fig2"));
   
   figureCount = 5;
   //change button to hide extra images
   var numberButton = document.querySelector("#fiveButton p");
   numberButton.innerHTML = "Show fewer images";
   if (numberButton.addEventListener) {
      numberButton.removeEventListener("click", previewFive, false);
      numberButton.addEventListener("click", previewThree, false);
   } else if (numberButton.attachEvent) {
      numberButton.detachEvent("onclick", previewFive);
      numberButton.attachEvent("onclick", previewThree);
   }
   
   // add appropriate src values to two new img elements
   document.getElementsByTagName("img")[0].src = "Assets/images/IMG_0" + photoOrder[0] + "sm.jpg";
   document.getElementsByTagName("img")[4].src = "Assets/images/IMG_0" + photoOrder[4] + "sm.jpg";
}

/* switch to 3-image layout */
function previewThree() {
   var articleEl = document.getElementsByTagName("article")[0];
   var numberButton = document.querySelector("#fiveButton p");
   figureCount = 3;
   articleEl.removeChild(document.getElementById("fig1"));
   articleEl.removeChild(document.getElementById("fig5"));
   numberButton.innerHTML = "Show more images";
   if (numberButton.addEventListener) {
      numberButton.removeEventListener("click", previewThree, false);
      numberButton.addEventListener("click", previewFive, false);
   } else if (numberButton.attachEvent) {
      numberButton.detachEvent("onclick", previewThree);
      numberButton.attachEvent("onclick", previewFive);
   }
}

/* open center figure in separate window */
function zoomFig() {
   var propertyWidth = 960;
   var propertyHeight  = 600;
   var winLeft = ((screen.width - propertyWidth) / 2);
   var winTop = ((screen.height - propertyHeight) / 2);
   var winOptions = "width=960,height=600";
   winOptions += ",left=" + winLeft;
   winOptions += ",top=" + winTop;
   var zoomWindow = window.open("zoom.htm", "zoomwin", winOptions);
   zoomWindow.focus();
}


/* create event listeners for left arrow, right arrow, and center figure element */
function createEventListeners() {
   var leftarrow = document.getElementById("leftarrow");
   if (leftarrow.addEventListener) {
     leftarrow.addEventListener("click", leftArrow, false); 
   } else if (leftarrow.attachEvent)  {
     leftarrow.attachEvent("onclick", leftArrow);
   }

   var rightarrow = document.getElementById("rightarrow");
   if (rightarrow.addEventListener) {
     rightarrow.addEventListener("click", rightArrow, false); 
   } else if (rightarrow.attachEvent)  {
     rightarrow.attachEvent("onclick", rightArrow);
   }

   var mainFig = document.getElementsByTagName("img")[1];
   if (mainFig.addEventListener) {
     mainFig.addEventListener("click", zoomFig, false); 
   } else if (mainFig.attachEvent)  {
     mainFig.attachEvent("onclick", zoomFig);
   }
   
   var showAllButton = document.querySelector("#fiveButton p");
   if (showAllButton.addEventListener) {
      showAllButton.addEventListener("click", previewFive, false);
   } else if (showAllButton.attachEvent) {
      showAllButton.attachEvent("onclick", previewFive);
   }
}

/* create event listeners and populate image elements */
function setUpPage() {
   createEventListeners();
   populateFigures();
}

/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false); 
} else if (window.attachEvent)  {
  window.attachEvent("onload", setUpPage);
}
