$(function() {
    $('marquee').mouseover(function() {
        $(this).attr('scrollamount',0);
    }).mouseout(function() {
         $(this).attr('scrollamount',2);
    });
});

$readMoreJS.init({
   target: '.read-more',           // Selector of the element the plugin applies to (any CSS selector, eg: '#', '.'). Default: ''
   numOfWords: 10,               // Number of words to initially display (any number). Default: 50
   toggle: true,                 // If true, user can toggle between 'read more' and 'read less'. Default: true
   moreLink: 'read more ...',    // The text of 'Read more' link. Default: 'read more ...'
   lessLink: 'read less'         // The text of 'Read less' link. Default: 'read less'
});