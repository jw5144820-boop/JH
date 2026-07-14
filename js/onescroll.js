$(function () {

    // =====================
    // 비디오 팝업
    // =====================

    const modal = document.getElementById("videoModal");
    const popupVideo = document.getElementById("popupVideo");
    const closeBtn = document.querySelector(".close");

    // 카드 클릭
    document.querySelectorAll(".item").forEach(item => {

        item.addEventListener("click", () => {

            const video = item.dataset.video;

            popupVideo.src = video;

            modal.style.display = "flex";

            popupVideo.load();
            popupVideo.play();

        });

    });

    // 닫기
    closeBtn.addEventListener("click", () => {

        modal.style.display = "none";

        popupVideo.pause();

        popupVideo.src = "";

    });

    // 바깥 클릭
    modal.addEventListener("click", (e) => {

        if (e.target === modal) {

            modal.style.display = "none";

            popupVideo.pause();

            popupVideo.src = "";

        }

    });


    // =====================
    // 메뉴 클릭 이동
    // =====================
    $('header ul li').click(function () {

        const idx = $(this).index();

        $('header ul li').removeClass('on');
        $(this).addClass('on');

        const target = $('main section').eq(idx);
        const offsetTop = target.offset().top - 100;

        $('html, body').animate({
            scrollTop: offsetTop
        }, 500);
        $('header nav').removeClass('active');
        $('.menu-toggle').removeClass('active');
    });


    // =====================
    // 스크롤 시 메뉴 활성화
    // =====================
    $(window).on('scroll', function () {

        let scrollTop = $(window).scrollTop();
        let currentIndex = 0;

        $('main section').each(function (i) {

            const sectionTop = $(this).offset().top - 150;

            if (scrollTop >= sectionTop) {
                currentIndex = i;
            }

        });

        $('header ul li').removeClass('on');
        $('header ul li').eq(currentIndex).addClass('on');

    });

    // 햄버거

    $('.menu-toggle').click(function () {

        $(this).toggleClass('active');

        $('header nav').toggleClass('active');

    });

    const fadeEls = document.querySelectorAll('.fade-up');

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }

        });

    }, {
        threshold: 0.2
    });
    fadeEls.forEach(el => {
        observer.observe(el);
    });

    // =====================
    // Cards Swiper
    // =====================

    const cardsSwiper = new Swiper(".cardsSwiper", {

        slidesPerView: 3,
        spaceBetween: 35,
        loop: true,
        speed: 600,
        grabCursor: true,

        pagination: {
            el: ".cardsSwiper .swiper-pagination",
            clickable: true,
        },

        breakpoints: {

            0: {
                slidesPerView: 1,
                spaceBetween: 20
            },

            768: {
                slidesPerView: 2,
                spaceBetween: 25
            },

            1200: {
                slidesPerView: 3,
                spaceBetween: 35
            }

        }

    });


    // =====================
    // Showcase Swiper
    // =====================

    const showcaseSwiper = new Swiper(".showcaseSwiper", {

        slidesPerView: 5,

        spaceBetween: 40,

        loop: true,

        grabCursor: true,

        pagination: {
            el: ".showcaseSwiper .swiper-pagination",
            clickable: true,
        },

        breakpoints: {

            0: {
                slidesPerView: 1,
                spaceBetween: 20
            },

            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },

            1200: {
                slidesPerView: 5,
                spaceBetween: 40
            }

        }

    });
});

