'use strict';

jQuery(document).ready(function($) {

  $('.animsition').animsition({
    inClass: 'fade-in-down-sm',
    outClass: 'fade-out-up-sm',
    inDuration: 1000,
    outDuration: 800,
    linkElement: 'a',
    loading: true,
    loadingParentElement: 'body',
    loadingClass: 'animsition-loading',
    loadingInner: '', // e.g '<img src='loading.svg' />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    overlay: false,
    overlayParentElement: 'body',
    transition: function(url){ window.location.href = url; }
  });

}(jQuery));
