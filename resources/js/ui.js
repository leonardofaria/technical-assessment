var App = App || {};

App.UI = (function (document) {

  'use strict';

  var initModal = function() {

    var modalLink = document.querySelector(".modal-link");
    if (modalLink) {
      modalLink.addEventListener('click', function(){
        document.querySelector(".modal-dialog").classList.toggle('active');
        document.querySelector("html").classList.toggle('modal-open');
      });

      var close = document.querySelector(".close");
      close.addEventListener('click', function(){
        document.querySelector(".modal-dialog").classList.toggle('active');
        document.querySelector("html").classList.toggle('modal-open');
      });

      var overlay = document.querySelector(".background");
      overlay.addEventListener('click', function(){
        close.click();
      });
      overlay.addEventListener('touchend', function(){
        close.click();
      });
    }

  };


  var init = function() {
    initModal();
  };

  return {
    init: init
  };

}(window.document));