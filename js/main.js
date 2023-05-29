(function ($) {
    "use strict";

    // Spinner - блюда(плов)
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // прилипающий нав
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Выпадающий список при наведении мыши
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // // Back to top button
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 300) {
    //         $('.back-to-top').fadeIn('slow');
    //     } else {
    //         $('.back-to-top').fadeOut('slow');
    //     }
    // });
    // $('.back-to-top').click(function () {
    //     $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    //     return false;
    // });


    // Счетчик
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // Карусель отзывов
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

// для кнопки формы(получение)
// const toastTrigger = document.getElementById('liveToastBtn')
// const toastLiveExample = document.getElementById('liveToast')

// if (toastTrigger) {
//     const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
//     toastTrigger.addEventListener('click', () => {
//     toastBootstrap.show()
//     })
// }

// форма отправки
// const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
// const appendAlert = (message, type) => {
//     const wrapper = document.createElement('div')
//     wrapper.innerHTML = [
//     `<div class="alert alert-${type} alert-dismissible" role="alert">`,
//     `   <div>${message}</div>`,
//     '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
//     '</div>'
//     ].join('')

//     alertPlaceholder.append(wrapper)
// }
// const alertTrigger = document.getElementById('liveAlertBtn')
// if (alertTrigger) {
//     alertTrigger.addEventListener('click', () => {
//     appendAlert('Nice, you triggered this alert message!', 'success')
//     })
// }
// const form = document.querySelector('form')
// const btn = document.querySelector('#liveAlertBtn')
// btn.onclick = () => form.reset()

const alertHide = document.querySelector('.alertHide')
const sendMessage = document.querySelector('.sendMessage')
sendMessage.addEventListener('click', () => {
    alertHide.classList.add('alertShow')
})
