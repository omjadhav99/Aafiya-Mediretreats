$(document).ready(function () {
  "use strict";

  $('input[type=radio][name=sort_by_country]').each(() => {
    if($(this).attr('data-checked') === $(this).val()){
        console.log($(this).val());
        $(this).attr('checked');
    }
  })


  // auto generated side menu from top header menu start
  var topHeaderMenu = $('header nav > ul').clone();
  var sideMenu = $('.side-menu-wrap nav');
  sideMenu.append(topHeaderMenu);
  if ($(sideMenu).find('.sub-menu').length != 0) {
    $(sideMenu).find('.sub-menu').parent().append('<i class="fas fa-chevron-right d-flex align-items-center"></i>');
  }
  // auto generated side menu from top header menu end

  // close menu when clicked on menu link start
  $('.side-menu-wrap nav > ul > li > a').on('click', function () {
    sideMenuCloseAction();
  });
  // close menu when clicked on menu link end

  // open close sub menu of side menu start
  var sideMenuList = $('.side-menu-wrap nav > ul > li > i');
  $(sideMenuList).on('click', function () {
    if (!($(this).siblings('.sub-menu').hasClass('d-block'))) {
      $(this).siblings('.sub-menu').addClass('d-block');
    } else {
      $(this).siblings('.sub-menu').removeClass('d-block');
    }
  });
  // open close sub menu of side menu end

  // side menu close start
  $('.side-menu-close').on('click', function () {
    if (!($('.side-menu-close').hasClass('closed'))) {
      $('.side-menu-close').addClass('closed');
    } else {
      $('.side-menu-close').removeClass('closed');
    }
  });
  // side menu close end

  // auto append overlay to body start
  $('.wrapper').append('<div class="custom-overlay h-100 w-100"></div>');
  // auto append overlay to body end

  // open side menu when clicked on menu button start
  $('.side-menu-close').on('click', function () {
    if (!($('.side-menu-wrap').hasClass('opened')) && !($('.custom-overlay').hasClass('show'))) {
      $('.side-menu-wrap').addClass('opened');
      $('.custom-overlay').addClass('show');
    } else {
      $('.side-menu-wrap').removeClass('opened');
      $('.custom-overlay').removeClass('show');
    }
  })
  // open side menu when clicked on menu button end

  // close side menu when clicked on overlay start
  $('.custom-overlay').on('click', function () {
    sideMenuCloseAction();
  });

  function sideMenuCloseAction() {
    $('.side-menu-wrap').addClass('open');
    $('.wrapper').addClass('freeze');
    $('.custom-overlay').removeClass('show');
    $('.side-menu-wrap').removeClass('opened');
    $('.side-menu-close').removeClass('closed');
    $(sideMenuList).siblings('.sub-menu').removeClass('d-block');
  }
  // close side menu when clicked on overlay end

  // close side menu over 992px start
  $(window).on('resize', function () {
    if ($(window).width() >= 992) {
      sideMenuCloseAction();
    }
  })
  // close side menu over 992px end

  // navbar sticky start
  var topHeader = $('.top-header'),
    bottomHeader = $('.bottom-header');
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 72) {
      bottomHeader.addClass('sticky');
    } else {
      bottomHeader.removeClass('sticky');
    }
  });
  var tabsHeader = $('.tabs-header');
  $(window).on('scroll', function () {
    // console.log($(window).scrollTop());
    // console.log(topHeader.height());
    // if($(window).scrollTop() > topHeader.height()) {
    if ($(window).scrollTop() > 400) {
      tabsHeader.addClass('sticky');

    } else {
      tabsHeader.removeClass('sticky');
    }
  });
  // navbar sticky end

  // faq start
  $('.question').on('click', function () {
    //   $('.answer').stop().slideUp();
    //   $(this).siblings('.answer').stop().slideDown();
    //   $('.accordion h6').removeClass('active');
    //   $(this).children('h6').addClass('active');
    //   $('.accordion h6 span').addClass('fa-plus');
    //   $(this).children('h6').children('span').removeClass('fa-plus');

    $(this).children('h5').toggleClass('active');
    $(this).siblings('.answer').slideToggle();
    $(this).children('h5').children('span').toggleClass('fa-plus');
    $(this).parent('.accordion').siblings().find('.question').children('h5').removeClass('active');
    $(this).parent('.accordion').siblings().find('.question').siblings('.answer').slideUp();
    $(this).parent('.accordion').siblings().find('.question').children('h5').children('span').addClass('fa-plus');
  });
  // faq end

  // Navbar active starts

  // Navbar active ends


  $(".banner-slider").owlCarousel({
    // autoplay : true,
    loop: true,
    autoplaySpeed: 1500,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    nav: false,
    dots: true,
    navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 1,
        margin: 10,
        // center: true,
      },
    }
  });
  $(".popular-courses-slider").owlCarousel({
    autoplay : true,
    loop: true,
    autoplaySpeed: 1500,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    margin: 25,
    items: 3,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2,
        margin: 10
      },
      1200: {
        items: 3,
        margin: 25
      }
    }
  });
  // $(".abroad-destinations-slider").owlCarousel({
  //   autoplay : true,
  //   loop: true,
  //   autoplaySpeed: 1500,
  //   autoplayTimeout: 4000,
  //   autoplayHoverPause: true,
  //   margin: 25,
  //   items: 3,
  //   nav: false,
  //   dots: true,
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     768: {
  //       items: 2,
  //       margin: 10
  //     },
  //     1200: {
  //       items: 3,
  //       margin: 25
  //     }
  //   }
  // });
  $(".hospitals-slider").owlCarousel({
    autoplay : true,
    loop: true,
    autoplaySpeed: 1500,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    margin: 25,
    items: 3,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2,
        margin: 10
      },
      1200: {
        items: 3,
        margin: 25
      }
    }
  });
  // $(".destinations-slider").owlCarousel({
  //   // autoplay: true,
  //   loop: false,
  //   autoplaySpeed:  1500,
  //   autoplayTimeout: 4000,
  //   items:2,
  //   margin: 10,
  //   nav: true,
  //   navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
  //   dots: true,
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     768: {
  //       items: 2,
  //       // margin: 10
  //     },
  //     991: {
  //       items: 2,
  //       // margin: 15
  //     },
  //     1200: {
  //       items: 2,
  //       // margin: 25
  //     }
  //   }
  // });
  // $(".destinations-images-slider").owlCarousel({
  //   autoplay: true,
  //   loop: true,
  //   autoplaySpeed:  1500,
  //   autoplayTimeout: 3000,
  //   autoplayHoverPause: true,
  //   items: 1,
  //   // margin: 10,
  //   nav: false,
  //   dots: true,
  // });
  $(".treatments-slider").owlCarousel({
    autoplay : true,
    loop: true,
    autoplaySpeed: 1500,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    margin: 25,
    items: 4,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2,
        margin: 10
      },
      1200: {
        items: 4,
        margin: 25
      }
    }
  });
  $(".successful-treatments-slider").owlCarousel({
    autoplay : true,
    loop: true,
    autoplaySpeed: 1500,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    margin: 25,
    items: 3,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2,
        margin: 10
      },
      1200: {
        items: 3,
        margin: 25
      }
    }
  });
  $(".successful-treatments-slider2").owlCarousel({
    autoplay : true,
    loop: true,
    autoplaySpeed: 1500,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    margin: 25,
    items: 2,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 2,
        margin: 10
      }
    }
  });
  $(".health-experts-slider").owlCarousel({
    autoplay : true,
    loop: true,
    autoplaySpeed: 1500,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    margin: 25,
    items: 3,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2,
        margin: 10
      },
      1200: {
        items: 3,
        margin: 25
      }
    }
  });
  $(".our-partners-about-page-slider").owlCarousel({
    autoplay : true,
    loop: false,
    autoplaySpeed: 1500,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    margin: 25,
    items: 4,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 3,
        margin: 10
      },
      1200: {
        items: 4,
        margin: 25
      }
    }
  });
  $(".hospital-detail-image-slider").owlCarousel({
    autoplay : true,
    loop: true,
    autoplaySpeed: 1500,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    margin: 25,
    items: 1,
    nav: false,
    dots: true,
    // responsive: {
    //   0: {
    //     items: 1
    //   },
    //   768: {
    //     items: 1,
    //     margin: 10
    //   },
    //   1200: {
    //     items: 1,
    //     margin: 25
    //   }
    // }
  });
  $(".hospital-detail-treatment-slider").owlCarousel({
    autoplay : true,
    loop: true,
    autoplaySpeed: 1500,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    margin: 25,
    items: 4,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 4,
        margin: 10
      },
      1200: {
        items: 4,
        margin: 10
      }
    }
  });
  $(".find-a-job-slider").owlCarousel({
    autoplay : true,
    loop: true,
    autoplaySpeed: 1500,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    margin: 25,
    items: 2,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2,
        margin: 10
      }
    }
  });
  $(".business-opportunities-slider").owlCarousel({
    autoplay : true,
    loop: true,
    autoplaySpeed: 1500,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    margin: 25,
    items: 3,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2,
        margin: 10
      },
      1200: {
        items: 3,
        margin: 25
      }
    }
  });
  $(".students-feedback-slider").owlCarousel({
    autoplay : true,
    loop: true,
    autoplaySpeed: 1500,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 2,
        margin: 25
      }
    }
  });
  $(".latest-news-slider").owlCarousel({
    autoplay : true,
    loop: true,
    autoplaySpeed: 1500,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2,
        margin: 10
      },
      1200: {
        items: 3,
        margin: 25
      }
    }
  });
  // $('input[type="radio"]').checkRadioTweak();

  // need help form validation starts


  $('#enquiry_form_button').on('click', function() {

    let hasError = false;
    $('.error').hide();

    let name = $('#name').val().trim(),
    email = $('#email').val().trim(),
    phonenumber = $('#phonenumber').val().trim(),
    message = $('#message').val().trim();

    if(name === ''){
      hasError = true;
      $('#name').after('<div class="error">This field is required</div>');
    }

    if(email === ''){
      hasError = true;
      $('#email').after('<div class="error">This field is required</div>');
    }

    if(phonenumber === ''){
      hasError = true;
      $('#phonenumber').after('<div class="error">This field is required</div>');
    }

    if(message === ''){
      hasError = true;
      $('#message').after('<div class="error">This field is required</div>');
    }

    if(hasError === true){
      return false;
    } else {
      return true;
    }

  })
  

  // need help form validation ends

  // Contact form validation starts

  $('.contact_form_submit').on('click', function() {

    let hasError = false;
    $('.error').hide();
    
    let name = $('#name').val().trim(),
    email = $('#email').val().trim(),
    number = $('#number').val().trim(),
    subject = $('#subject').val().trim(),
    message = $('#message').val().trim();

    if(name === ''){
      hasError = true;
      $('#name').after('<div class="error">This field is required</div>');
    }
    
    if(email === ''){
      hasError = true;
      $('#email').after('<div class="error">This field is required</div>');
    }

    if(number === ''){
      hasError = true;
      $('#number').after('<div class="error">This field is required</div>');
    }

    if(subject === ''){
      hasError = true;
      $('#subject').after('<div class="error">This field is required</div>');
    }

    if(message === ''){
      hasError = true;
      $('#message').after('<div class="error">This field is required</div>');
    }

    if(hasError === true){
      return false;
    } else {
      $.ajax({
        type: 'POST',
        url: '/contact-form',
        data: {
          name, email, number, subject, message
        },
        success: function (response) {
          if(response == 'ok') {
            $('.alert.alert-success').show()
            $('#cta-contact-form, #contact-form').trigger('reset')
            setTimeout(() => {
              $('#ctaModal').modal('hide')
              $('.alert.alert-success').hide()
            }, 1500)
          } else {
            $('.alert.alert-danger').show()
            setTimeout(() => {
              $('.alert.alert-danger').hide()
            }, 1500)            
          }
        },
        error: function (response) {
          $('.alert.alert-danger').show()
          setTimeout(() => {
            $('.alert.alert-danger').hide()
          }, 1500)
        }
      })
      return false
    }

  });

  $('.contact_submit').on('click', function() {

    let hasError = false;
    $('.error').hide();
    let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    
    let name = $('#name-contact').val().trim(),
    email = $('#email-contact').val().trim(),
    number = $('#number-contact').val().trim(),
    subject = $('#subject-contact').val().trim(),
    message = $('#message-contact').val().trim();

    if(name === ''){
      hasError = true;
      $('#name-contact').after('<div class="error">This field is required</div>');
    }
    
    if(email === ''){
      hasError = true;
      $('#email-contact').after('<div class="error">This field is required</div>');
    }

    if(!emailReg.test(email)){
      hasError = true;
      $('#email-contact').after('<div class="error">Please enter correct email</div>');
    }

    if(number === ''){
      hasError = true;
      $('#number-contact').after('<div class="error">This field is required</div>');
    }

    if(subject === ''){
      hasError = true;
      $('#subject-contact').after('<div class="error">This field is required</div>');
    }

    if(message === ''){
      hasError = true;
      $('#message-contact').after('<div class="error">This field is required</div>');
    }

    if(hasError === true){
      return false;
    } else {
      $.ajax({
        type: 'POST',
        url: '/contact-form',
        data: {
          name, email, number, subject, message
        },
        success: function (response) {
          if(response == 'ok') {
            $('.alert.alert-success').show()
            $('#cta-contact-form, #contact-form').trigger('reset')
            setTimeout(() => {
              $('#ctaModal').modal('hide')
              $('.alert.alert-success').hide()
            }, 1500)
          } else {
            $('.alert.alert-danger').show()
            setTimeout(() => {
              $('.alert.alert-danger').hide()
            }, 1500)            
          }
        },
        error: function (response) {
          $('.alert.alert-danger').show()
          setTimeout(() => {
            $('.alert.alert-danger').hide()
          }, 1500)
        }
      })
      return false
    }

  });

  // Contact form validation ends

  // Join Mediretreats Form starts

  $('.join-cta').on('click', function() {
    $('#joinModal').modal('show')
  })

  $('#join_form_submit').on('click', function() {
  
    let hasError = false;
    $('.error').hide();
    let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    
    let name = $('#join-name').val().trim(),
    email = $('#join-email').val().trim(),
    number = $('#join-number').val().trim(),
    subject = $('#join-subject').val().trim(),
    hospitalName = $('#join-hospitalName').val().trim(),
    message = $('#join-message').val().trim();

    if(name === ''){
      hasError = true;
      $('#join-name').after('<div class="error">This field is required</div>');
    }
    
    if(email === ''){
      hasError = true;
      $('#join-email').after('<div class="error">This field is required</div>');
    }

    if(!emailReg.test(email)){
      hasError = true;
      $('#join-email').after('<div class="error">Please enter correct email</div>');
    }

    if(number === ''){
      hasError = true;
      $('#join-number').after('<div class="error">This field is required</div>');
    }

    if(subject === ''){
      hasError = true;
      $('#join-subject').after('<div class="error">This field is required</div>');
    }

    if(hospitalName === ''){
      hasError = true;
      $('#join-hospitalName').after('<div class="error">This field is required</div>');
    }

    if(message === ''){
      hasError = true;
      $('#join-message').after('<div class="error">This field is required</div>');
    }

    if(hasError === true){
      return false;
    } else {
      $.ajax({
        type: 'POST',
        url: '/join-form',
        data: {
          name, email, number, subject, hospitalName, message
        },
        success: function (response) {
          if(response == 'ok') {
            $('.join-alert.alert.alert-success').show()
            $('#join-contact-form').trigger('reset')
            setTimeout(() => {
              $('#joinModal').modal('hide')
              $('.join-alert.alert.alert-success').hide()
            }, 1500)
          } else {
            $('.join-alert.alert.alert-danger').show()
            setTimeout(() => {
              $('.join-alert.alert.alert-danger').hide()
            }, 1500)            
          }
        },
        error: function (response) {
          $('.join-alert.alert.alert-danger').show()
          setTimeout(() => {
            $('.join-alert.alert.alert-danger').hide()
          }, 1500)
        }
      })
      return false
    }

  })

  // Join Mediretreats Form ends

  // Enquiry form treatment starts
  $('#treatment_enquiry_form_submit').on('click', function() {

    let hasError = false;
    $('.error').hide();
    
    let name = $('#name-enquiry').val().trim(),
    email = $('#email-enquiry').val().trim(),
    number = $('#number-enquiry').val().trim(),
    subject = $('#subject-enquiry').val().trim(),
    message = $('#message-enquiry').val().trim(),
    treatment = $('#treatment-enquiry').val().trim();

    if(name === ''){
      hasError = true;
      $('#name-enquiry').after('<div class="error">This field is required</div>');
    }
    
    if(email === ''){
      hasError = true;
      $('#email-enquiry').after('<div class="error">This field is required</div>');
    }

    if(number === ''){
      hasError = true;
      $('#number-enquiry').after('<div class="error">This field is required</div>');
    }

    if(subject === ''){
      hasError = true;
      $('#subject-enquiry').after('<div class="error">This field is required</div>');
    }

    if(message === ''){
      hasError = true;
      $('#message-enquiry').after('<div class="error">This field is required</div>');
    }

    if(hasError === true){
      return false;
    } else {
      $.ajax({
        type: 'POST',
        url: '/treatment-enquiry',
        data: {
          name, email, number, subject, message, treatment
        },
        success: function (response) {
          if(response == 'ok') {
            $('.treatment-alert.alert-success').show()
            $('#treatment-enquiry-form').trigger('reset')
            setTimeout(() => {
              $('#treatmentEnquiryModal').modal('hide')
              $('.treatment-alert.alert-success').hide()
            }, 1500)
          } else {
            $('.treatment-alert.alert-danger').show()
            setTimeout(() => {
              $('.treatment-alert.alert-danger').hide()
            }, 1500)            
          }
        },
        error: function (response) {
          $('.treatment-alert.alert-danger').show()
          setTimeout(() => {
            $('.treatment-alert.alert-danger').hide()
          }, 1500)
        }
      })
      return false
    }

  });
  // Enquiry form treatment ends
  // Consultation form validation starts

  $('#consultation_form_submit').on('click', function() {
    let hasError = false;
    $('.error').hide();

    let name = $('#name').val(),
    email = $('#email').val(),
    number = $('#number').val(),
    country = $('#country').val(),
    city = $('#city').val(),
    age = $('#age').val(),
    medical_issue = $('#medical_issue').val();

    if(name === ''){
      hasError = true;
      $('#name').after('<div class="error">This field is required</div>');
    }
    
    if(email === ''){
      hasError = true;
      $('#email').after('<div class="error">This field is required</div>');
    }

    if(number === ''){
      hasError = true;
      $('#number').after('<div class="error">This field is required</div>');
    }

    if(country === ''){
      hasError = true;
      $('#country').after('<div class="error">This field is required</div>');
    }

    if(city === ''){
      hasError = true;
      $('#city').after('<div class="error">This field is required</div>');
    }

    if(age === ''){
      hasError = true;
      $('#age').after('<div class="error">This field is required</div>');
    }

    if(medical_issue === ''){
      hasError = true;
      $('#medical_issue').after('<div class="error">This field is required</div>');
    }

    if(hasError === true){
      return false;
    } else {
      return true;
    }

  })

  // Consultation form validation ends

  // page header-image change starts

  // let image = $('#page-header-hospitals').attr('data-bg');
  // $('#page-header-hospitals').css('background-image', 'url(/uploads/hospitals/hospital-header-images/'+image+')')

  // page header-image change ends

  // console.log($('iframe'));

  // $('input[type=radio][name=sort_by_country]').each(function() {
  //   let name = $(this).val().split(' ').join('-').toLowerCase();
  //   let attr = $(this).attr('data-checked');
  //   if(name === attr){
  //     $(this).attr("checked", "checked");
  //     // console.log(true);
  //   }
  // });

  // $('input[type=radio][name=sort_by_city]').each(function() {
  //   let name = $(this).val().split(' ').join('-').toLowerCase();
  //   let attr = $(this).attr('data-checked');
  //   if(name === attr){
  //     $(this).attr("checked", "checked");
  //     // console.log(true);
  //   }
  // });

  // $('input[type=radio][name=sort_by_accreditation]').each(function() {
  //   let name = $(this).val().split(' ').join('-').toLowerCase();
  //   let attr = $(this).attr('data-checked');
  //   // console.log(name)
  //   // console.log(attr)
  //   if(name === attr){
  //     $(this).attr("checked", "checked");
  //     // console.log(true);
  //   }
  // })


  // Hospital's Filtering starts
  // $('input[type=radio][name=sort_by_country]').change(function() {
  //     // console.log($(this).val());
  //     let country = $(this).val().split(' ').join('-').toLowerCase();
  //     if(country === 'all-countries'){
  //       window.location.replace('/hospitals');
  //     } else {
  //       let url = `/hospitals?country=${country}`;
  //       window.location.replace(url);
  //     }
  // })

  // $('input[type=radio][name=sort_by_city]').change(function() {
  //     let city = $(this).val().split(' ').join('-').toLowerCase();
  //     if(city === 'all-cities'){
  //       let search = window.location.search;
  //       if(search.indexOf('&city') > -1){
  //         search = search.split('&city');
  //         search = search[0];
  //         window.location = `/hospitals/${search}`;
  //       }
  //       if(search.indexOf('?city') > -1){
  //         search = search.split('?city');
  //         search = search[0];
  //         window.location = `/hospitals/${search}`;
  //       }
  //     } else {
  //       let search = window.location.search;
  //       let pathname = window.location.pathname;
  //       let url;
  //       if(search === ''){
  //         url = '/hospitals?city='+city;
  //         window.location = url;
  //       } else {
  //         if(search.indexOf('&city') > -1){
  //           search = search.split('&city');
  //           search = search[0];
  //           url = pathname+search+'&city='+city;
  //           window.location = url;
  //         } else if(search.indexOf('?city') > -1){
  //           search = search.split('?city');
  //           search = search[0];
  //           url = url = pathname+search+'?city='+city;
  //           window.location = url;
  //         } else {
  //           if(search.indexOf('&page') > -1){
  //             search = search.split('&page');
  //             search = search[0];
  //             url = pathname+search+'&city='+city;
  //             window.location = url;
  //           } else {
  //             url = pathname+search+'&city='+city;
  //             window.location = url;
  //           }
  //         }
  //       }
  //     }
  // })

  // $('input[type=radio][name=sort_by_accreditation]').change(function(){
  //   let acc = $(this).val().split(' ').join('-').toLowerCase();
  //   // var pathName = window.location.pathname;
  //   // var searchName = window.location.search;
  //   if(acc === 'all-accreditations'){

  //   } else {
  //       let search = window.location.search;
  //       let pathname = window.location.pathname;
  //       let url;
  //       if(search === ''){
  //         url = '/hospitals?accreditation='+acc;
  //         window.location = url;
  //       } else {
  //         if(search.indexOf('&accreditation') > -1){
  //           search = search.split('&accreditation');
  //           search = search[0];
  //           url = pathname+search+'&accreditation='+acc;
  //           window.location = url;
  //         } else if(search.indexOf('?accreditation') > -1){
  //           search = search.split('?accreditation');
  //           search = search[0];
  //           url = url = pathname+search+'?accreditation='+acc;
  //           window.location = url;
  //         } else {
  //           if(search.indexOf('&page') > -1){
  //             search = search.split('&page');
  //             search = search[0];
  //             url = pathname+search+'&accreditation='+acc;
  //             window.location = url;
  //           } else {
  //             url = pathname+search+'&accreditation='+acc;
  //             window.location = url;
  //           }
  //         }
  //       }
  //   }
  //   // window.location.replace(url);
  // });

  // Hospital's Filtering ends

  // Search home page starts
  
  $('.search_bar_append').hide();

  // $('.search-bar').on('keyup', function(e) {
  //   // console.log($(this).val());

  //   setTimeout(() => {
  //     if($(this).val().length > 2){
  //       let query = $(this).val();
  //       // query = `/${query}/`
  //       let url = `/search?name=${query}`
  //       $.ajax({
  //         type: 'GET',
  //         data: query,
  //         url: url,
  //         success: function(data){
  //           if(Object.keys(data).length !== 0){
  //             $('.search_bar_append ul li').hide();
  //             $('.search_bar_append').show();
  //             data.forEach(item => {
  //               $('.search_bar_append ul').append(
  //                 `
  //                 <li class="py-3 px-2">
  //                 <i class="far fa-hospital"></i>
  //                   <a href="/hospitals/${item.url}" class="d-block">
  //                     ${item.name.substring(0, 25)} (${item.country})
  //                   </a>
  //                 </li>
  //                 `
  //               )
  //             });
  //           } else {
  //             $('.search_bar_append ul li').hide();
  //           }
  //         }
  //       })
  //     } else {
  //       $('.search_bar_append').hide();
  //       $('.search_bar_append ul li').hide();
  //     }
  //   }, 1000);

  // })

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
function saveInput() {
  // console.log("Saving data");
  let query
  $('input.searchQuery').each(function() {
    if($(this).val().length > 0) {
      query = $(this).val();
    }
  })
  // let query = $('input.searchQuery').val();
  if(query && query.length > 2) {
    $('.search_bar_append ul').html('')
    let url = `/search?name=${query}`
    $.ajax({
      type: 'GET',
      data: query,
      url: url,
      success: function(data){
        if(Object.keys(data).length !== 0){
          $('.search_bar_append ul li').hide();
          $('.search_bar_append').show();
          data.forEach(item => {
            $('.search_bar_append ul').append(
              `
              <li class="py-3 px-2">
              <i class="fas fa-star-of-life"></i>
                <a href="/treatments${item.url}" class="d-block">
                  ${item.name.length > 25 ? item.name.substring(0, 25)+'...' : item.name}
                </a>
              </li>
              `
            )
          });
        } else {
          $('.search_bar_append ul li').hide();
        }
      }
    })
  } else {
    $('.search_bar_append').hide();
    $('.search_bar_append ul li').hide();
  }
}
window.processChange = debounce(() => saveInput());

  // Search home page ends

  // Pagination hospital-details starts

  let total = $('#pagination_tabs').attr('data-total')
  // console.log(total/2);
  total = parseInt(total)
  if(total == 0){
    $('#pagination_prev').hide()
    $('#pagination_next').hide()
  }

  $('#pagination_prev').on('click', function(e) {
    e.preventDefault();
    let prev = $('#pagination_prev').attr('data-prev');
    prev = parseInt(prev);
    if(!prev == 0){
      // console.log(disabled);
      console.log('prev')
      console.log(total/2);
        // window.location.search
      let pathname = window.location.pathname;
      let search = window.location.search;
      if(search === ''){
        search = search+'?page='+prev;
      } else {
        if(search.indexOf('?page') > -1){
          search = search.split('?page');
          search = search[0];
          search = search+'?page='+prev;
        } else if(search.indexOf('&page') > -1){
          search = search.split('&page');
          search = search[0];
          search = search+'&page='+prev;
        } else {
          search = search+'&page='+prev;
        }
      }
      console.log(pathname+search);
      let url = pathname+search
      // console.log(window.location);
      window.location = url;
    }
  });

  $('#pagination_next').on('click', function(e) {
    e.preventDefault();
    let next = $('#pagination_next').attr('data-next');
    next = parseInt(next)
    if(next < (total/2)+1){
      console.log('next')
      console.log(total/2);
        // window.location.search
      let pathname = window.location.pathname;
      let search = window.location.search;
      if(search === ''){
        search = search+'?page='+next;
      } else {
        if(search.indexOf('?page') > -1){
          search = search.split('?page');
          search = search[0];
          search = search+'?page='+next;
        } else if(search.indexOf('&page') > -1){
          search = search.split('&page');
          search = search[0];
          search = search+'&page='+next;
        } else {
          search = search+'&page='+next;
        }
      }
      console.log(pathname+search);
      let url = pathname+search
      // console.log(window.location);
      window.location = url;
    }

  });

  // Pagination hospital-details end

    $('input[type=radio][name=sort_by_country]').each(function() {
    let name = $(this).val().split(' ').join('-').toLowerCase();
    let attr = $(this).attr('data-checked');
    // console.log(name);
    // console.log(attr);
    if(name === attr){
      $(this).attr("checked", "checked");
      // console.log(true);
      }
    });

    $('input[type=radio][name=sort_by_city]').each(function() {
    let name = $(this).val().split(' ').join('-').toLowerCase();
    let attr = $(this).attr('data-checked');
    // console.log(name);
    // console.log(attr);
    if(name === attr){
      $(this).attr("checked", "checked");
      // console.log(true);
      }
    });

    $('input[type=radio][name=sort_by_accreditation]').each(function() {
    let name = $(this).val().split(' ').join('-').toLowerCase();
    let attr = $(this).attr('data-checked');
    // console.log(name);
    // console.log(attr);
    if(name === attr){
      $(this).attr("checked", "checked");
      // console.log(true);
      }
    });

    $('input[type=radio][name=sort_by_speciality]').each(function() {
    let name = $(this).val().split(' ').join('-').toLowerCase();
    let attr = $(this).attr('data-checked');
    // console.log(name);
    // console.log(attr);
    if(name === attr){
      $(this).attr("checked", "checked");
      // console.log(true);
      }
    });

  $('input[type=radio][name=sort_by_country]').change(function() {
    console.log($(this).val());
    let country = $(this).val();
    country = country.toLowerCase();
    country = country.split(' ').join('-');
    if(country === 'all-countries'){
      window.location = '/hospitals/filter/all/all/all/all'
    } else {
      let url = `/hospitals/filter/${country}/all/all/all`;
      window.location = url;
    }
  });

  $('input[type=radio][name=sort_by_city]').change(function() {
    let city = $(this).val();
    city = city.toLowerCase();
    city = city.split(' ').join('-');
    if(city === 'all-cities'){
      city = 'all'
    }
    let pathname = window.location.pathname;
    let num = pathname.split('/')
    let url = `/${num[1]}/${num[2]}/${num[3]}/${city}/${num[5]}/${num[6]}`;
    // console.log(url);
    window.location = url;
  });

  $('input[type=radio][name=sort_by_accreditation]').change(function() {
    let acc = $(this).val();
    acc = acc.toLowerCase();
    acc = acc.split(' ').join('-');
    let url;
    if(acc === 'all-accreditations'){
      acc = 'all';
    }
    let pathname = window.location.pathname;
    if(pathname === '/hospitals'){
      url = `/hospitals/filter/all/all/${acc}/all`;
    } else {
      let num = pathname.split('/')
      url = `/${num[1]}/${num[2]}/${num[3]}/${num[4]}/${acc}/${num[6]}`;
    }
    // console.log(url);
    window.location = url;
  });

  $('input[type=radio][name=sort_by_speciality]').change(function() {
    let speciality = $(this).val().toLowerCase();
    speciality = speciality.split(' ').join('-')
    let url;
    if(speciality === 'all-specialities'){
      speciality = 'all';
    }
    let pathname = window.location.pathname;
    if(pathname === '/hospitals'){
      url = `/hospitals/filter/all/all/all/${speciality}`;
    } else {
      let num = pathname.split('/')
      url = `/${num[1]}/${num[2]}/${num[3]}/${num[4]}/${num[5]}/${speciality}`;
    }
    // console.log(speciality);
    // console.log(url);
    window.location = url;
  })







  if($('iframe').length){
    $('iframe').addClass('w-100').addClass('h-100');
  }

  $('.cta-btn').on('click', function() {
    $('#ctaModal').modal('show')
  })

  $('#detail-select').on('change', () => {
    // console.log($(this).children('option:selected').val());
    let goto = $('#detail-select option:selected').attr('data-goto')
    // console.log($goto);
    $('html,body').animate({
      scrollTop: $(goto).offset().top-123},
      'slow');
  })


  $('.successful-treatments-card').on('click', function() {
    let id = $(this).data('id')

    $.ajax({
      type: 'GET',
      url: '/testimonial/'+id, 
      success: function(response) {
        if(response.type === 'video') {
          $("#testimonialModal .modal-body").html(`
            <div class="successful-treatments-card rounded">
              <div class="col-10 p-0">
                <p>
                  <a href="javascript:void(0)" title="${response.title}">
                    ${response.title}
                  </a>
                </p>
              </div>
              <iframe class="w-100 h-100" src="${response.video}" frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <div class="row d-flex align-items-center">
                <div class="col-3">
                  <img src="/uploads/testimonials/${response.testimonee_image}" class="testimonee-image" alt="${response.testimonee_name}">
                </div>
                <div class="col-9">
                  <div class="successful-treatments-card-information">
                    <p class="name mb-0">
                      ${response.testimonee_name}
                    </p>
                    <p class="location mb-0">
                      ${response.testimonee_city}, ${response.testimonee_country}
                    </p>
                  </div>
                </div>
              </div>
              <div class="quotes">
                <img src="/assets/images/home-page/image-(4).png" width="40" alt="">
              </div>
            </div>
          `);
        }
        if(response.type === 'text') {
          $("#testimonialModal .modal-body").html(`
            <div class="successful-treatments-card rounded">
              <div class="col-10 p-0">
                <p>
                  <a href="javascript:void(0)" title="${response.title}">
                    ${response.title}
                  </a>
                </p>
              </div>
                ${response.text}
              <div class="row d-flex align-items-center">
                <div class="col-3">
                  <img src="/uploads/testimonials/${response.testimonee_image}" class="testimonee-image" alt="${response.testimonee_name}">
                </div>
                <div class="col-9">
                  <div class="successful-treatments-card-information">
                    <p class="name mb-0">
                      ${response.testimonee_name}
                    </p>
                    <p class="location mb-0">
                      ${response.testimonee_city}, ${response.testimonee_country}
                    </p>
                  </div>
                </div>
              </div>
              <div class="quotes">
                <img src="/assets/images/home-page/image-(4).png" width="40" alt="">
              </div>
            </div>
          `)
        }
        $("#testimonialModal").modal('show')
      },
      error: function(response) {
        console.log(response);
      }
    })
  })

});