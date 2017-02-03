// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


$(function() {

// copyyyyyyyyyyyyyyyy

// var copyTextareaBtn = document.querySelector('.js-textareacopybtn');
//
// copyTextareaBtn.addEventListener('click', function(event) {
//   var copyTextarea = document.querySelector('.js-copytextarea');
//   var deneme = document.getElementById(this);
//   console.log(deneme);
//
//   copyTextarea.select();



$(document).on('click', '.js-textareacopybtn', function() {
  // var buttonId = $(this).attr('id');
  // var element = document.getElementById(buttonId);
 var element = $(this);
 console.log(element);
  element.select();
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    // console.log('Copying text command was ' + msg);
  } catch (err) {
    // console.log('Oops, unable to copy');
  }
})
  //
  // try {
  //   var successful = document.execCommand('copy');
  //   var msg = successful ? 'successful' : 'unsuccessful';
  //   console.log('Copying text command was ' + msg);
  // } catch (err) {
  //   console.log('Oops, unable to copy');
  // }
// });

// copyyyyyyyyyyyyyyyy



    $(".resim").click(function(){
      alert("aldım");
    });

  $(".toggle").click(function(e) {
    e.preventDefault();
    $(".menu").toggleClass("showMenu");
    if ($(".dropdown").is(":visible")) {
      $(".dropdown").removeClass("showDropdown");
    }
  });

  $(".dropdownStart").click(function(e) {
    $(".dropdown").toggleClass("showDropdown");
  });
});
