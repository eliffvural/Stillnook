(function ($) {
    // Calc correct app height for mobile devices
    document.documentElement.style.setProperty('--app-height', window.innerHeight + 'px');
    $(window).on('resize', function() {
        document.documentElement.style.setProperty('--app-height', window.innerHeight + 'px');
    });

    // Registering scripts
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

    var cookieBarHeight = 0; // cookie was in top at first (50)

    function imageContainerWidth() {
        $('img[srcset]').each(function() {
            $(this).attr('sizes', $(this).parent().width() + 'px');
        });
    }
    imageContainerWidth();
    $(window).resize(imageContainerWidth);

    /**
     * PIN section scroll
     */
    function scrollTriggerPin() {
        var oneSlideWaitPX       = 1250;
        var oneSlideWaitPXMobile = 1000;

        if (window.innerWidth > 1000) {
            oneSlideWaitPX = window.innerWidth - (window.innerWidth * 0.15);
        }

        // Pinning and horizontal scrolling
        var $sectionModules = $('.section-product-modules');

        $sectionModules.each(function() {
            var $el = $(this);
            var end = oneSlideWaitPX;

            if (window.innerWidth <= 767) {
                end = oneSlideWaitPXMobile;
            }

            end = end * $el.find('.swiper-pagination-bullet').length;

            var offset = $('.header').innerHeight();

            if (! getCookie('catAccCookies')) {
                offset = offset + cookieBarHeight;
            }

            var sectionInnerHeight = $el.find('.section-product-modules__slide-content').innerHeight() + parseFloat(getComputedStyle($el.find('.swiper-slide').get(0)).paddingTop) + $('.header').innerHeight() - 32;

            if (sectionInnerHeight < window.innerHeight && window.innerWidth >= 768) {
                var tween = gsap.to($el, {
                    scrollTrigger: {
                        id: 'section-product-modules',
                        scrub: true,
                        trigger: '.section-product-modules',
                        pin: true,
                        anticipatePin: 1,
                        // pinSpacing: false,
                        start: '-' + offset + 'px top',
                        end: end,
                        onUpdate: function(el) { // Inside target scroll
                            var start       = el.start;
                            var progress    = el.progress; // 0 - 1
                            var $target     = $(el.trigger);
                            var swiperIndex = $target.find('[data-slider]').attr('data-slider');
                            var stepsCount  = $target.find('.swiper-pagination-bullet').length; // slides count
                            var min         = 0;
                            var max         = 1;
                            var step;

                            if (
                                progress > 0 && progress <= 0.5 && stepsCount === 2 ||
                                progress > 0 && progress <= 0.3333 && stepsCount === 3 ||
                                progress > 0 && progress <= 0.25 && stepsCount === 4 ||
                                progress > 0 && progress <= 0.2 && stepsCount === 5 ||
                                progress > 0 && progress <= 0.1667 && stepsCount === 6
                            ) {
                                step = 1;
                            }

                            if (
                                progress > 0.5 && progress <= 1 && stepsCount === 2 ||
                                progress > 0.3333 && progress <= 0.6667 && stepsCount === 3 ||
                                progress > 0.25 && progress <= 0.5 && stepsCount === 4 ||
                                progress > 0.2 && progress <= 0.4 && stepsCount === 5 ||
                                progress > 0.1667 && progress <= 0.3333 && stepsCount === 6
                            ) {
                                step = 2;
                            }

                            if (
                                progress > 0.6667 && progress <= 1 && stepsCount === 3 ||
                                progress > 0.5 && progress <= 0.75 && stepsCount === 4 ||
                                progress > 0.4 && progress <= 0.6 && stepsCount === 5 ||
                                progress > 0.3333 && progress <= 0.5 && stepsCount === 6
                            ) {
                                step = 3;
                            }

                            if (
                                progress > 0.75 && progress <= 1 && stepsCount === 4 ||
                                progress > 0.6 && progress <= 0.8 && stepsCount === 5 ||
                                progress > 0.5 && progress <= 0.6667 && stepsCount === 6
                            ) {
                                step = 4;
                            }

                            if (
                                progress > 0.8 && progress <= 1 && stepsCount === 5 ||
                                progress > 0.6667 && progress <= 0.8333 && stepsCount === 6
                            ) {
                                step = 5;
                            }

                            if (
                                progress > 0.8333 && progress <= 1 && stepsCount === 6
                            ) {
                                step = 6;
                            }
        
                            if (step) {
                                window.swipers[swiperIndex].slideTo(step - 1);
                            }
                        },
                    },
                    ease: 'none'
                });

                window.tween = tween;
            }
        });

        window.ScrollTrigger = ScrollTrigger;

        ScrollTrigger.refresh();
    }

    function pinSection() {
        if (window.innerWidth <= 767) {
            ScrollTrigger.create({
                trigger: '.section-product-modules',
                pin: true,
                anticipatePin: 1,
                start: '-35px',
                end: '+=500',
            });
        } else {
            scrollTriggerPin();
        }
    }
    pinSection();

    /**
     * InView
     */
    function inViewInit(selector, threshold) {
        inView(selector)
            .on('enter', function (el) {
                el = $(el);
                if (el.attr('data-inview') !== 'true') {
                    el.attr('data-inview', true);
                    if (el.hasClass('product-features-alt__col-video-wrap')) {
                        el.find('video.is-active').get(0).play();
                    }
                    if (el.hasClass('video-wrap')) {
                        el.find('video').get(0).play();
                    }
                }
            })
            .on('exit', function (el) {
                el = $(el);
                if (el.hasClass('product-features-alt__col-video-wrap')) {
                    el.attr('data-inview', '');
                    el.find('video.is-active').get(0).pause();
                }
                if (el.hasClass('video-wrap')) {
                    el.attr('data-inview', '');
                    el.find('video').get(0).pause();
                }
            });
        inView.threshold(threshold);
    }
    inViewInit('[data-inview]', 1);

    /**
     * Swiper
     */
    window.swipers = [];

    function sliderOnInitResize(el, type) {
        setTimeout(function() {

            var $swiperWrap = el.closest('.swiper-wrap');

            if ($swiperWrap.classList.contains('swiper-wrap') && type === 'init') {
                $swiperWrap.classList.add('swiper-wrap--initialized');
            }

            if ($swiperWrap.querySelector('.swiper-pagination-bullet') !== null && $swiperWrap.querySelectorAll('.swiper-pagination-bullet').length > 1) {
                if ($swiperWrap.querySelector('[class*="swiper-button-"]') !== null) {
                    $swiperWrap.querySelector('[class*="swiper-button-"]').style.display = '';
                    Array.prototype.forEach.call($swiperWrap.querySelectorAll('[class*="swiper-button-"]'), function(el, index) {
                        el.classList.remove('is-hidden');
                    });
                }

                Array.prototype.forEach.call($swiperWrap.querySelectorAll('.swiper-pagination'), function(el, index) {
                    el.style.display = '';
                    el.classList.remove('is-hidden');
                });

                el.classList.add('swiper--active');
            } else {
                if ($swiperWrap.querySelector('[class*="swiper-button-"]') !== null) {
                    Array.prototype.forEach.call($swiperWrap.querySelectorAll('[class*="swiper-button-"]'), function(el, index) {
                        el.style.display = 'none';
                    });
                }

                if ($swiperWrap.querySelector('.swiper-pagination') !== null) {
                    Array.prototype.forEach.call($swiperWrap.querySelectorAll('.swiper-pagination'), function(el, index) {
                        el.style.display = 'none';
                    });
                }

                el.classList.remove('swiper--active');
            }
        }, 50);
    }

    function sectionModulesDarkToggle(el, index) {
        if ($(el).hasClass('swiper-container--modules')) {
            var activeIndex     = window.swipers[index].activeIndex;
            var $activeSlide    = $(el).find('.swiper-slide:nth-child(' + (activeIndex + 1) + ')');
            var $section        = $(el).closest('.section-product-modules');     
            var navLinkSelector = '.section-product-modules__nav-link';
            var $navLink        = $section.find(navLinkSelector);

            $navLink.closest('ul').find(navLinkSelector).removeClass('is-active');
            $section.find('.section-product-modules__nav > li:nth-child(' + (activeIndex + 1) + ') ' + navLinkSelector).addClass('is-active');
            $section[$activeSlide.hasClass('is-dark') ? 'addClass' : 'removeClass']('section-product-modules--dark');
        }
    }

    function initSwiper() {
        var $swiper = document.querySelectorAll('.swiper-container');

        if ($swiper.length) {
            Array.prototype.forEach.call($swiper, function(el, index) {
                el.setAttribute('data-slider', index);

                var $el         = $(el);
                var $swiperWrap = el.closest('.swiper-wrap');

                 var options = {
                    init: false,
                    effect: 'fade', // Could be "slide", "fade", "cube", "coverflow" or "flip"
                    speed: 800,
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    loop: false,
                    spaceBetween: 24,
                    observer: true,
                    observeParents: true,
                    simulateTouch: false,
                    navigation: {
                        nextEl: $swiperWrap.classList.contains('swiper-wrap') ? $swiperWrap.querySelector('.swiper-button-next') : el.querySelector('.swiper-button-next'),
                        prevEl: $swiperWrap.classList.contains('swiper-wrap') ? $swiperWrap.querySelector('.swiper-button-prev') : el.querySelector('.swiper-button-prev')
                    },
                    pagination: {
                        el: $swiperWrap.classList.contains('swiper-wrap') ? $swiperWrap.querySelector('.swiper-pagination') : el.querySelector('.swiper-pagination'),
                        clickable: true,
                    },
                    keyboard: {
                        enabled: true,
                        onlyInViewport: true
                    },
                    on: {
                        init: function() {
                            sliderOnInitResize(el, 'init');
                            sectionModulesDarkToggle(el, index);
                        },
                        resize: function() {
                            sliderOnInitResize(el, 'resize');
                        },
                        slideChange: function() {
                            sectionModulesDarkToggle(el, index);
                        },
                    }
                }
                window.swipers[index] = new Swiper(el, options);
                window.swipers[index].init();
            });
        }
    }
    initSwiper();

    /**
     * Slider nav
     */
    var previousIndex = 1;

    $(document.body).on('click', '.section-product-modules__nav-link', function(evt) {
        evt.preventDefault();
        var $el         = $(this);
        var $parent     = $el.parent();
        var index       = $parent.index();
        var sliderIndex = $el.closest('.section-product-modules').find('[data-slider]').attr('data-slider');
        if (window.innerWidth <= 767) {
            window.swipers[0].slideTo(index, 800, false);
            return false;
        }

        var start         = window.tween.scrollTrigger.start;
        var slidesScrollY = (window.tween.scrollTrigger.end - start);
        var slides        = $el.closest('.section-product-modules__nav').find(' > li').length;
        var slideScrollY  = slidesScrollY / slides;
        var currentIndex  = index;
        var forward       = true;

        if (currentIndex < previousIndex) {
            forward = false;
        }

        var scrollTo = start + (slideScrollY * (currentIndex + 1));

        if (slides <= 2) {
            scrollTo = start + (slidesScrollY * (currentIndex));
        } else {
            if (! forward) {
                scrollTo = scrollTo - slideScrollY;
            }
        }
        $('html, body').stop(true, false).animate({
            scrollTop: scrollTo,
        }, 300);

        previousIndex = currentIndex;
    });

    /**
     * Toggle sound
     */
    $(document).on('click', '.product-features-alt__col-video-toggle-sound, .video-wrap__toggle-sound', function() {
        var $el         = $(this);
        var sound       = $el.attr('data-sound');
        var soundStatus = 'off';
        var muted       = true;
        var timeout     = 0;

        if (sound === 'off') {
            soundStatus = 'on';
        }
        $el.attr('data-sound', soundStatus);

        if (soundStatus === 'on') {
            muted   = false;
            timeout = 50;
        }

        if ($el.is('.product-features-alt__col-video-toggle-sound')) {
            setTimeout(function() {
                $el.parent().find('video.is-active').get(0).muted = muted;
            }, timeout);
        }

        if ($el.is('.video-wrap__toggle-sound')) {
            setTimeout(function() {
                $el.parent().find('video').get(0).muted = muted;
            }, timeout);
        }
    });

    /**
     * Play video
     */
    function playVideoWithControls($el, id) {
        var muted         = true;
        var sound         = $el.closest('.product-features-alt__col-video-wrap').find('.product-features-alt__col-video-toggle-sound').attr('data-sound');
        var $wrap         = $el.closest('.product-features-alt__col-video-wrap');
        var $currentVideo = $wrap.find('video:nth-child(' + id + ')');

        if ($wrap.attr('data-inview')) {
            $wrap.find('video:nth-child(' + id + ')').prevAll('video').each(function() {
                var $video = $(this);
                $video.get(0).pause();
            });
            $wrap.find('video:nth-child(' + id + ')').nextAll('video').each(function() {
                var $video = $(this);
                $video.get(0).pause();
            });
            setTimeout(function() {
                $currentVideo.get(0).play();
            }, 50);

            setTimeout(function() {
                if (sound === 'on') {
                    muted = false;
                }
                $currentVideo.get(0).muted = muted;
            }, 100);
        }

        $wrap.find('video').removeClass('is-active');
        $currentVideo.addClass('is-active');
    }

    // To keep the first video active all the time
    // $('.product-features-alt__col-video-slider [type="range"]').each(function() {
    //     var $el = $(this);
    //     playVideoWithControls($el);
    // });
    $(document).on('click', '.js-play-video', function() {
        var $el = $(this);
        $('.js-play-video').removeClass('is-active');
        $el.addClass('is-active');
        playVideoWithControls($(this), $(this).attr('data-id'));
    });

    // $(document).on('change', '.product-features-alt__col-video-slider [type="range"]', function(evt) {
    //     var $el = $(this);
    //     // alert(evt.type)
    //     playVideoWithControls($el, evt.type);
    // });

    /*
     * Mobile/desktop video
     */
    // function mobileDesktopVideo($el) {
    //     var index        = $el.index() + 1;
    //     var desktopVideo = $el.closest('.product-features-alt__col-video').find('.product-features-alt__col-video-desktop[data-index="' + index + '"]').attr('data-video');
    //     var mobileVideo  = $el.closest('.product-features-alt__col-video').find('.product-features-alt__col-video-mobile[data-index="' + index + '"]').attr('data-video');
    //     var video;

    //     if (mobileVideo) {
    //         $el.find('source').remove();

    //         if (window.innerWidth <= 767) {
    //             video = mobileVideo;
    //         } else {
    //             video = desktopVideo;
    //         }

    //         $el.prepend('<source src="' + video + '" type="video/mp4">');
    //     }
    // }

    // $('.product-features-alt__col-video-in video').each(function() {
    //     var $el = $(this);
    //     // mobileDesktopVideo($el);
    // });

    /*
     * ScrollTop
     */
    function scrollToElement(tar) {
        if (typeof tar !== 'undefined') {
            var $scrollTarget = $(tar);
            var offset        = $('.header').innerHeight();

            if (! getCookie('catAccCookies')) {
                offset = offset + $('#catapult-cookie-bar').innerHeight();
            }

            $('html, body').stop(true, false).animate({
                scrollTop: $scrollTarget.offset().top - $('.header').innerHeight()
            }, 1000);
        }
    }

    $(document).on('click', '.button-scroll-top', function() {
        var $el = $(this);
        scrollToElement($('.section:first-of-type').get(0));
    });

    $(document.body).on('click', 'button[data-scroll-to]', function() {
        var el = $(this);
        var id = el.attr('data-scroll-to').split('#')[1];

        if ($('[id="' + id + '"]').length) {
            scrollToElement($('#' + id).get(0));
        }
    });

    window.onload = function() {
        var hash  = window.location.hash;
        var split = hash.split('#')[1];
    
        if (hash) {
            setTimeout( function() {
                $('button[data-scroll-to="#' + split + '"]').click();
            }, 200);
        }

        $(document.body).addClass('is-loaded');
    }
	
	$('.open-range').each(function(){
		$(this).click(function(){
			$(this).closest('.range-item').addClass("range-visible");
		});
	});
	
	$('.close-range').each(function(){
		$(this).click(function(){
			$(this).closest('.range-item').removeClass("range-visible");
		});
	});

})(jQuery);

var video = document.querySelectorAll('video');

// Add source to video tag
function addSourceToVideo(element, src) {
    var source = document.createElement('source');
    source.src = src;
    source.type = 'video/mp4';
    element.appendChild(source);
}

// Determine screen size and select mobile or desktop vid
function whichSizeVideo(element, src) {
    var windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
    var video       = src.dataset.desktopVid;

    if (windowWidth <= 767) {
        if (src.dataset.mobileVid) {
            video = src.dataset.mobileVid;
        }
    }

    addSourceToVideo(element, video);
}

// Init only if page has videos
function videoSize() {
    if (video !== undefined) {
        video.forEach(function(element, index) {
            whichSizeVideo(
                element, // element
                element  // src locations
            );
        });
    }
}
videoSize();
