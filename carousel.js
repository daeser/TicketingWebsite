$(document).ready(function() {
    const carouselImages = $('.carousel-image');
    var prev = $('.arrow-left');
    var next = $('.arrow-right');
  
    let images = 0;
    let interval;
  
    function showImage(index) {
        carouselImages.fadeTo(100, 0, function() {
          // Callback function when fadeTo() is complete
          carouselImages.hide();
          $(carouselImages[index]).fadeTo(100, 1);
        });
      }
  
    function startCarousel() {
      interval = setInterval(function() {
        images = (images + 1) % carouselImages.length;
        showImage(images);
      }, 6000);
    }
  
    function stopCarousel() {
      clearInterval(interval);
    }
  
    prev.on('click', function() {
      images = (images - 1 + carouselImages.length) % carouselImages.length;
      showImage(images);
      stopCarousel();
    });
  
    next.on('click', function() {
      images = (images + 1) % carouselImages.length;
      showImage(images);
      stopCarousel();
    });
  
    showImage(images);
    startCarousel();
  });