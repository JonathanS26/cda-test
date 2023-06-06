import $ from 'jquery';

export default () => {
  console.log('test');
  // Toggle the side navigation
  $('#sidebarToggle, #sidebarToggleTop').on('click', () => {
    $('body').toggleClass('sidebar-toggled');
    console.log('test');
    $('.sidebar').toggleClass('toggled');
    if ($('.sidebar').hasClass('toggled')) {
      $('.sidebar .collapse').collapse('hide');
    }
  });

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(() => {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    }

    // Toggle the side navigation when window is resized below 480px
    if ($(window).width() < 480 && !$('.sidebar').hasClass('toggled')) {
      $('body').addClass('sidebar-toggled');
      $('.sidebar').addClass('toggled');
      $('.sidebar .collapse').collapse('hide');
    }
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', (e) => {
    if ($(window).width() > 768) {
      const { originalEvent } = e;
      const delta = originalEvent.wheelDelta || -originalEvent.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', () => {
    const scrollDistance = $(this).scrollTop();

    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', (e) => {
    const anchor = $(this);

    $('html, body').stop().animate({
      scrollTop: ($(anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });
};
