// Toggle Navigation Icon State
$( ".navigation-toggle").click(function() {
    $( ".navigation-toggle, .navigation" ).toggleClass( "active" );
});


// Pricing Table Toggle
$( ".one-pager .price-plan").click(function() {
    $( ".one-pager" ).toggleClass( "open" );
});

$( ".basic .price-plan").click(function() {
    $( ".basic" ).toggleClass( "open" );
});

$( ".business .price-plan").click(function() {
    $( ".business" ).toggleClass( "open" );
});

$( ".mega .price-plan").click(function() {
    $( ".mega" ).toggleClass( "open" );
});

$( ".button-video, .close-icon").click(function() {
    $( ".editor-video" ).toggleClass( "play" );
});
