var map;
    	
    	var changingSlides = false;
    	
        var currentSlideId = -1;
        var currentSlide;
        var infoWindows = [];
        
        function showNextSlide() {
        	if (currentSlideId == (slides.length - 1)) {
   				showSlide(0);
    		} else {
    			showSlide(currentSlideId + 1);
    		}
        }
        
        function showPreviousSlide() {
        	if (currentSlideId > 0) {
       			showSlide(currentSlideId - 1);
        	} else {
        		showSlide(slides.length - 1);
        	}
        }
        
        function showSlide(slideId) {
        	var previousSlide = currentSlide;
        	if (!changingSlides) {
	        	changingSlides = true;
	        	var slide = document.getElementById("slide" + currentSlideId);
	        	if (slide) {
	        		slide.className = "";
	        	}
	        	
	        	if (infoWindows[currentSlideId]) {
		        	infoWindows[currentSlideId].close(map);
	        	}
	        	
	        	if (slideId >= 0 && slideId < slides.length) {
	        		currentSlideId = slideId;
	        		if (!previousSlide || ( 
	        				previousSlide.point.lat() != slides[currentSlideId].point.lat() ||
	        				previousSlide.point.lng() != slides[currentSlideId].point.lng() ||
	        				previousSlide.zoom != slides[currentSlideId].zoom)
	        				) {
	        			doZoomOut();
	        		} else {
	        			doShowCurrentSlide();
	        		}
	        	}
	        	currentSlide = slides[currentSlideId];
	        	document.getElementById("slide" + currentSlideId).className = "activeSlide";
        	}
        }
        
        function doZoomOut() {
        	if (map.getZoom() > 2) {
        		map.setZoom(map.getZoom() - 1);
        		setTimeout("doZoomOut()", 100);
        	} else {
        		setTimeout("doPan()", 200);
        	}
    		
        }
        
        function doPan() {
        	var slide = slides[currentSlideId];
        	map.panTo(slide.point);
        	doZoomIn();
        }
        
        function doZoomIn() {
        	var slide = slides[currentSlideId];
        	if (map.getZoom() < slide.zoom) {
        		map.setZoom(map.getZoom() + 1);
        		setTimeout("doZoomIn()", 100);
 	       } else {
        		doShowCurrentSlide();
 	       }
        }
        
        function doShowCurrentSlide() {
        	infoWindows[currentSlideId].open(map);
    		changingSlides = false;
        }
        
        function initialize() {
            var myOptions = {
              center: new google.maps.LatLng(0,0),
              zoom: 2,
              disableDefaultUI: true,
              mapTypeId: google.maps.MapTypeId.SATELLITE
            };
            map = new google.maps.Map(document.getElementById("map_canvas"),
                myOptions);
            
            setupInfoWindows();
			setupSlideList();
			setTimeout("showNextSlide()", 3000);
            
            document.onkeyup = onKeyPress;
      	}
        
        function setupInfoWindows() {
        	for (var i = 0; i < slides.length; i++) {
            	var infoWindow = new google.maps.InfoWindow();
            	infoWindow.setContent("<div class='infowindow'><h1>" + slides[i].title + "</h1>" + slides[i].contents + "</div>");
            	infoWindow.setPosition(slides[i].point);
            	infoWindows[i] = infoWindow;
        	}
        }
        
        function setupSlideList() {
        	var slideList = document.getElementById("slideList");
			
        	for (var i = 0; i < slides.length; i++) {
        		var child = document.createElement('li');
        		
        		(function (i) {
        		    child.addEventListener("click", function() { 
        		      showSlide(i);
        		    }); 
        		  })(i);
        		
            	child.innerHTML = "<p><em>" + slides[i].title + "</em></p>"; 
            	child.setAttribute("id", "slide" + i);
            	slideList.appendChild(child);
            	
        	}
        	
        }
        
        function onKeyPress(event) {
        	if (event.keyCode == 40 || event.keyCode == 34 || event.keyCode == 39 || event.keyCode == 32) {
        		showNextSlide();
        	} else if (event.keyCode == 38 || event.keyCode == 33 || event.keyCode == 37) {
        		showPreviousSlide();
        	}
        }