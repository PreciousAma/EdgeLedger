/*//initialize and add the map
function initMap() {
    //your location
    const loc = { lat: 6.556890, lng: 3.367080 };
    //centered map on  location
    const map = new google.maps.Map(document.querySelector('.map')
    , {
        zoom: 14,
        center: loc
    });
    //The marker, positioned at location
    const marker = new google.maps.Marker({ position: loc, map: map });
}

//smooth scrolling
// $(document).ready(function() {
// $('a').on('click', function(event) {
//     if (this.hash !== '') {
//         event.preventDefault();

//         const hash= this.hash;

//         $('html, body').animate({
//             scrollTop: $(hash).offset().top
//           }, 800, function(){
    
           
//             window.location.hash = hash;
//           });
//         } 
//       });
//     });


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});*/


// Initialize and add the map
function initMap() {
    // Your location
    const loc = { lat: 42.361145, lng: -71.057083 };
    // Centered map on location
    const map = new google.maps.Map(document.querySelector('.map'), {
      zoom: 14,
      center: loc
    });
    // The marker, positioned at location
    const marker = new google.maps.Marker({ position: loc, map: map });
  }
  
  // Sticky menu background
  window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
      document.querySelector('#navbar').style.opacity = 0.9;
    } else {
      document.querySelector('#navbar').style.opacity = 1;
    }
  });
  
  
  // Smooth Scrolling
  $('#navbar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 100
        },
        800
      );
    }
  });
