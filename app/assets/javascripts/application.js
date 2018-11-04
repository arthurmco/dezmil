// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require serviceworker-companion
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery3
//= require jquery-ui
//= require popper
//= require bootstrap
//= require transactions
//


$(document).on('ready turbolinks:load', function(){
  $('#search').focus();

  var isOnline = false;
  setInterval(function(){
    if (isOnline === true) {
      $.ajax('/ping').catch(function(){
        $('#is-offline').slideDown().delay(5000).slideUp();
        console.log('isOnline = false')
        isOnline = false;
      });
    } else if (isOnline === false) {
      $.ajax('/ping').then(function(){
        $('#is-online').slideDown().delay(5000).slideUp();
        console.log('isOnline = true');
        isOnline = true;
      });
    }
  }, 3000);
});
