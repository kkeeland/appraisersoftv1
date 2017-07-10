(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $(".dropdown-button").dropdown();
     $('.modal').modal();
      $('select').material_select();
      $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });
   $('.collapsible').collapsible();
   $('input.autocomplete, input.shopname').autocomplete({
    data: {
      "Susan Dahlquist": null,
      "Jedediah Dalton": null,
      "Some Guy": null
    },
    limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    onAutocomplete: function(val) {
      // Callback function when value is autcompleted.
    },
    minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  });
  $('input.shopname').autocomplete({
    data: {
      "Leifs": null,
      "Elite Collision": null,
      "ABC Auto Body": null
    },
    limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    onAutocomplete: function(val) {
      // Callback function when value is autcompleted.
    },
    minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  });
  Sortable.create(sortable, {
  animation: 200,
  group: {
    name: "shared",
    pull: false,
    put: false 
  },
  sort: true
});
 Sortable.create(sortable2, {
  animation: 200,
  group: {
    name: "shared",
    pull: false, 
    put: false
  },
  sort: true
});



  }); // end of document ready
})(jQuery); // end of jQuery name space

//https://alligator.io/vuejs/lodash-throttle-debounce/
//https://github.com/RubaXa/Sortable#cdn