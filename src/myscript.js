$('#navbarNavDropdown ul li a')
    .click(function (event) {
        //event.preventDefault();
        var link = this;
        $.smoothScroll({
            scrollTarget: link.hash,
            easing: 'swing',
            speed: 1000
        });
    });


AOS.init();