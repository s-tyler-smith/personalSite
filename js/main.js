$(function() {

    // Closes the sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
        toggleSideBar();
    });

    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        toggleSideBar();
    });

    // Scrolls to the selected menu item on the page
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                toggleSideBar();
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);

                return false;
            }
        }
    });
    function toggleSideBar(){
        $("#sidebar-wrapper").toggleClass("active");
    }
});