$(document).ready(function() {   
  // Change top styles when scrolling past a certain point
  var scrollTop = 0;
  
  // Check before adding scrolling function
  function checkActive() {    
    // Change top styles when scrolling past a certain point
    var scrollTop = 0;
    var menuHeight = $("#nav-menu").height();
    var menuOuterHeight = $("#nav-menu").outerHeight(true) * 1.2; // Change this then change below, from smooth scrolling also
    var currentTop = $(document).scrollTop();
    var headerTop = $("header").offset().top - menuOuterHeight;
    var headerBottom = headerTop + $("header").outerHeight(true) - menuOuterHeight;
    var aboutTop = $("#about").offset().top - menuOuterHeight;
    var aboutBottom = aboutTop + $("#about").outerHeight(true) - menuOuterHeight;
    var projectsTop = $("#projects").offset().top - menuOuterHeight;
    var projectsBottom = projectsTop + $("#projects").outerHeight(true) - menuOuterHeight;
    var contactTop = $("#contact").offset().top - menuOuterHeight;
    if (currentTop > menuHeight) {
      $('header nav').addClass('scrolling');
      $('header .scrolling').css("animation-name", "change");
      $('#nav-menu').addClass('scrolling');
    }  
    if(headerTop + menuOuterHeight == 0) {
      $("a.top").addClass("active");
    }
    if(currentTop >= headerTop - 5 || currentTop >= headerBottom){
      $("header nav a").removeClass("active");
      $("a.top").addClass("active");
    } 
    if(currentTop >= aboutTop - 5 || currentTop >= aboutBottom){
      $("header nav a").removeClass("active");
      $("a.about").addClass("active");
    } 
    if(currentTop >= projectsTop - 5 || currentTop >= projectsBottom){
      $("header nav a").removeClass("active");
      $("a.projects").addClass("active");
    } 
    if(currentTop >= contactTop - 5){
      $("header nav a").removeClass("active");
      $("a.contact").addClass("active");
    } 
  }
  checkActive();
  
  /* Run the function after resizing action is finished */
  var id;
  $(window).resize(function() {
    clearTimeout(id);
    id = setTimeout(checkActive, 100);
  });
  /* End */
  
  $(window).scroll(function(){
    // Change top styles when scrolling past a certain point
    var menuHeight = $("#nav-menu").height();
    var menuOuterHeight = $("#nav-menu").outerHeight(true) * 1.2; // Change this then change below, from smooth scrolling also
    var currentTop = $(document).scrollTop();
    var headerTop = $("header").offset().top - menuOuterHeight;
    var headerBottom = headerTop + $("header").outerHeight(true) - menuOuterHeight;
    var aboutTop = $("#about").offset().top - menuOuterHeight;
    var aboutBottom = aboutTop + $("#about").outerHeight(true) - menuOuterHeight;
    var projectsTop = $("#projects").offset().top - menuOuterHeight;
    var projectsBottom = projectsTop + $("#projects").outerHeight(true) - menuOuterHeight;
    var contactTop = $("#contact").offset().top - menuOuterHeight;
    scrollTop = $(window).scrollTop();    
    if (scrollTop > menuHeight) {
      $('header nav').addClass('scrolling');
      $('header .scrolling').css("animation-name", "change");
      $('#nav-menu').addClass('scrolling');
    } else if (scrollTop == 0) {
      $('header nav').removeClass('scrolling');      
      $('header nav').css("animation-name", "unchange");
      $('#nav-menu').removeClass('scrolling');
    }   
    
    if(scrollTop >= headerTop - 5 || scrollTop >= headerBottom){
      $("header nav a").removeClass("active");
      $("a.top").addClass("active");
    } 
    if(scrollTop >= aboutTop - 5 || scrollTop >= aboutBottom){
      $("header nav a").removeClass("active");
      $("a.about").addClass("active");
    } 
    if(scrollTop >= projectsTop - 5 || scrollTop >= projectsBottom){
      $("header nav a").removeClass("active");
      $("a.projects").addClass("active");
    } 
    if(scrollTop >= contactTop - 5){
      $("header nav a").removeClass("active");
      $("a.contact").addClass("active");
    } 
  });   

  // Fadeout loading screen
  $("#loading").fadeOut();
  
  // Toogle hamburger menu
  $(".hamburger").click(function(event) {    
    event.preventDefault();
    event.stopPropagation();
    $(".hamburger").toggleClass("active");
    $("nav ul").toggleClass("active");
    $("#hamburger-menu").toggleClass("active");
  });
  
  //Click outside the menu will close it
  $(document).click(function () {
    if($(".hamburger").hasClass("active")) {
      $(".hamburger").removeClass("active");
    }
    if($("nav ul").hasClass("active")) {
      $("nav ul").removeClass("active");
    }
    if($("#hamburger-menu").hasClass("active")) {
      $("#hamburger-menu").removeClass("active");
    }
  });
  
  // Smooth scrooling
  var menuOuterHeight = $("#nav-menu").outerHeight(true);
  // Select all links with hashes
  $('a[href*="#"]')  
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        if($("#hamburger-menu").is(':visible')) {          
          $('html, body').animate({
            scrollTop: target.offset().top 
          }, 500, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
  //          $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
  //            $target.focus(); // Set focus again
            };
          });
        } else if(!$("#hamburger-menu").is(':visible')) {
          $('html, body').animate({
            scrollTop: target.offset().top - (menuOuterHeight * 1.2)
          }, 500, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
  //          $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
  //            $target.focus(); // Set focus again
            };
          });
        }
      }
    }
  });
  
  
  ///////////////////////
  // SUBMIT VALIDATION //
  ///////////////////////
  function getInputValue(id) {
    return document.getElementById(id).value;
  }

  function hasValidLength(string, min, max) {
    var stringLength = string.length;
    return stringLength >= min && stringLength <= max;
  }
  
  function trimWhiteSpace(string) {
    string = string.replace(/ +(?= )/g,'');
    return string;
  }
  
  function checkName() {
    var name = $("#name");
    var nameValue = name.val();
    var error = false;    
    
    nameValue = trimWhiteSpace(nameValue);
    name.val(nameValue);

    if(!hasValidLength(nameValue, 5, 30)) {     
      error = true;
    }

    if(error == false) {
      return true;
    }
    else {
      return false;
    }			
  }

  function checkEmail() {
    var email = document.getElementById("email").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email)) {
      return false;
    }
    else {
      return true;
    }			
  }  
  
  function countWords(s) {
    s = s.replace(/(^\s*)|(\s*$)/gi,""); //exclude  start and end white-space
    s = s.replace(/[ ]{2,}/gi," "); //2 or more space to 1
    s = s.replace(/\n /,"\n"); // exclude newline with a start spacing
    return s.split(' ').length; 
  }
  
  function checkMessage() {    
    var message = $("#message");
    var messageValue = message.val();
    var words;
    var error = false;
    
    messageValue = trimWhiteSpace(messageValue);
    message.val(messageValue);     
    
    words = countWords(messageValue);

    if(words < 10 || words > 100) {     
      error = true;
    }
    if(!hasValidLength(messageValue, 1, 1000)) {     
      error = true;
    }

    if(error == false) {
      return true;
    }
    else {
      return false;
    }			
  }
  
  $("#submit-button").click(function() {
    var error = false;    
    checkName();
    if(!checkName()) {
      $("#name ~ p.error").addClass("active");
      $("#name ~ input").addClass("error");
      $("#name ~ textarea").addClass("error");
      error = true;
    }
    else {      
      $("#name ~ p.error").removeClass("active");
      $("#name ~ input").removeClass("error");
      $("#name ~ textarea").removeClass("error");  
    }
    
    checkEmail();    
    if(!checkEmail()) {
      $("#email ~ p.error").addClass("active");
      $("#email ~ input").addClass("error");
      $("#email ~ textarea").addClass("error");
      error = true;
    }
    else {      
      $("#email ~ p.error").removeClass("active");
      $("#email ~ input").removeClass("error");
      $("#email ~ textarea").removeClass("error");  
    }
    
    checkMessage();    
    if(!checkMessage()) {
      $("#message ~ p.error").addClass("active");
      $("#message ~ input").addClass("error");
      $("#message ~ textarea").addClass("error");
      error = true;
    }
    else {      
      $("#message ~ p.error").removeClass("active");
      $("#message ~ input").removeClass("error");
      $("#message ~ textarea").removeClass("error");  
    }
    
    if(error == false) {
      return true;
    }
    else {
      return false;
    }	
  });  
  
});