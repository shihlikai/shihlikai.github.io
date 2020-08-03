// ******************************************* //
// ********** Farmie Template Js ************* //
// ******************************************* //

import jQuery from 'jquery'
// import WOW from 'wow.js'

(function ($) {
  'use strict'

  var browserWindow = $(window)


  // :: 1.0 Preloader Active Code
  // browserWindow.on('load', function () {
  //   $('.preloader').fadeOut('slow', function () {
  //     $(this).remove()
  //   })
  // })

  // :: 2.0 Tooltip Active Code
  if ($.fn.tooltip) {
    $('[data-toggle="tooltip"]').tooltip()
  }

  // :: 3.0 Nav Active Code
  if ($.fn.classyNav) {
    $('#famieNav').classyNav()
  }

  // :: 4.0 Sticky Active Code
  if ($.fn.sticky) {

  }

  // :: 5.0 Sliders Active Code
  if ($.fn.owlCarousel) {
    // $('.testimonial-slides').owlCarousel({
    //   items: 1,
    //   margin: 0,
    //   loop: true,
    //   dots: false,
    //   nav: true,
    //   navText: ['<i class="arrow_left"></i>', '<i class="arrow_right"></i>'],
    //   autoplay: true,
    //   autoplayTimeout: 5000,
    //   smartSpeed: 1000,
    //   animateIn: 'fadeIn',
    //   animateOut: 'fadeOut'
    // })
  }

  // :: 6.0 ScrollUp Active Code
  if ($.fn.scrollUp) {
    browserWindow.scrollUp({
      scrollSpeed: 1500,
      scrollText: '<i class="arrow_up"></i>'
    })
  }

  // :: 7.0 Video Play Icons Active Code
  if ($.fn.magnificPopup) {
    $('.play-icon').magnificPopup({
      type: 'iframe'
    })
  }

  // :: 8.0 Jarallax Active Code
  if ($.fn.jarallax) {
    $('.jarallax').jarallax({
      speed: 0.2
    })
  }

  // :: 9.0 Prevent Default a Click
  $('a[href="#"]').on('click', function (e) {
    e.preventDefault()
  })

  // :: 10.0 Search Box Active Code
  $('#searchIcon').on('click', function () {
    $('.search-form').toggleClass('search-active')
  })
  $('.closeIcon').on('click', function () {
    $('.search-form').removeClass('search-active')
  })

  // :: 11.0 Wow Active Code
  if (browserWindow.width() > 767) {
    // new WOW().init()
  }
})(jQuery)
