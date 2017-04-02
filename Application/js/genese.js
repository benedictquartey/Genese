  $(".addCartBtn").click(function() {
      $(".fcontainer").show(200);

      setTimeout(function() {
          Materialize.toast('Thought you might need something extra', 3000, 'rounded');
      }, 1000);
  });

  $(".mAddToCart").click(function() {
      $(".fcontainer").hide(200);

      setTimeout(function() {
          Materialize.toast('Your meal has been added to the cart.', 3000, 'rounded');
          $('.cartNumber').css('visibility', 'visible');
      }, 1000);
  });


  $(".fCls").click(function() {
      $(".fcontainer").hide(200);
  });

  // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  // $('.collapsible').collapsible();
  $('.button-collapse').sideNav({
      menuWidth: 400, // Default is 300
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
  });

  $(document).ready(function() {
      $('.parallax').parallax();
      $('.cartNumber').css('visibility', 'hidden');
  });

  $(document).ready(function() {
      $('select').material_select();
  });

  $(document).ready(function() {
      // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();
  });