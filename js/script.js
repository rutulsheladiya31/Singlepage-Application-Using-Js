// Owl Carousel jquery
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

// top to bottom icon jquery
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {
            $('#return-to-top').fadeIn(200);
        } else {
            $('#return-to-top').fadeOut(200);
        }
    });
    $('#return-to-top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });
});

// for single page application
function hideData(link) {
    const data = document.getElementsByClassName('section_change');
    for (const col of data) {
        if (link == 'home') {
            col.classList.remove("hide");
        } else {
            if (!col.classList.contains(link)) {
                col.classList.add("hide");
            } else {
                col.classList.remove("hide");
            }
        }
    }
}

