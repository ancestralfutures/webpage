
(function($) {
    // 'use strict';

    // Main Navigation
    $( '.hamburger-menu' ).on( 'click', function() {
        $(this).toggleClass('open');
        $('.site-navigation').toggleClass('show');
    });

    var countdown_date = new Date("Nov 7, 2019 19:00:00").getTime();

    $('.countdown').countdown(countdown_date, function(event) {
        $('.dday').html(event.strftime('%-D'));
        $('.dhour').html(event.strftime('%-H'));
        $('.dmin').html(event.strftime('%-M'));
        $('.dsec').html(event.strftime('%-S'));
    });

    // Events Slider
    var next_event_slider = new Swiper('.next-event-slider', {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        centeredSlides: true,
        breakpoints: {
            // when window width is <= 320px
            576: {
                slidesPerView: 1
            },
            // when window width is <= 480px
            768: {
                slidesPerView: 2
            },
            // when window width is <= 640px
            1200: {
                slidesPerView: 3
            }
        },
        navigation: {
            nextEl: '.next-event-slider-wrap .swiper-button-next'
        }
    });

    // Testimonial slider
    var testimonialsSlider = new Swiper('.testimonials-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.testimonials-container .swiper-button-next'
        }
    });

    // Buy Tickets Form
    $(".increase-ticket").click(function() {
        var $n = $(this)
            .parent(".number-of-tickets")
            .parent(".flex")
            .parent(".ticket-row")
            .find(".ticket-count");
        $n.val(Number($n.val())+1 );
    });

    $(".decrease-ticket").click(function() {
        var $n = $(this)
            .parent(".number-of-tickets")
            .parent(".flex")
            .parent(".ticket-row")
            .find(".ticket-count");
        var amount = Number($n.val());
        if (amount > 0) {
            $n.val(amount-1);
        }
    });

    $(".clear-ticket-count").on( 'click', function() {
        var $count = $('.ticket-count');
        $count.val('1');
    });

    // Tabs
    $(function() {
        $('.tab-content:first-child').show();

        $('.tab-nav').bind('click', function(e) {
            $this = $(this);
            $tabs = $this.parent().parent().next();
            $target = $($this.data("target"));
            $this.siblings().removeClass('active');
            $target.siblings().css("display", "none");
            $this.addClass('active');
            $target.fadeIn("slow");
        });

        $('.tab-nav:first-child').trigger('click');
    });

    // Accordion & Toggle
    $('.accordion-wrap.type-accordion').collapsible({
        accordion: true,
        contentOpen: 0,
        arrowRclass: 'arrow-r',
        arrowDclass: 'arrow-d'
    });

    $('.accordion-wrap .entry-title').on('click', function() {
        $('.accordion-wrap .entry-title').removeClass('active');
        $(this).addClass('active');
    });

    // Circular Progress Bar
    $('#hard_work').circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.75,
        size: 220,
        thickness: 3,
        fill: {
            gradient: ["#00d1ff", "#1effc5"]
        }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(75 * progress) + '<span>%</span>');
    });

    $('#good_music').circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.83,
        size: 220,
        thickness: 3,
        fill: {
            gradient: ["#00d1ff", "#1effc5"]
        }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(83 * progress) + '<span>%</span>');
    });

    $('#power').circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.65,
        size: 220,
        thickness: 3,
        fill: {
            gradient: ["#00d1ff", "#1effc5"]
        }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(65 * progress) + '<span>%</span>');
    });

    $('#fun_time').circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 1,
        size: 220,
        thickness: 3,
        fill: {
            gradient: ["#00d1ff", "#1effc5"]
        }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(100 * progress) + '<span>%</span>');
    });

    // Counter
    $(".start-counter").each(function () {
        var counter = $(this);

        counter.countTo({
            formatter: function (value, options) {
                return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
            }
        });
    });

    // Load more events
    var $container      = $('.blog-list-page');
    var $item           = $('.single-blog-content');

    $item.slice(0, 6).addClass('visible');

    $('.load-more .btn').on('click', function (e) {
        e.preventDefault();

        $('.single-blog-content:hidden').slice(0, 6).addClass('visible');
        $container.masonry();
    });

    // Back to Top
    if ( $( '.back-to-top' ).length) {
        var scrollTrigger = 500, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.back-to-top').addClass('show');
                } else {
                    $('.back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('.back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 800);
        });
    }

})(jQuery);

const canvas = document.getElementById('canvas');

let canvasWidth;
let canvasHeight;

const resizeCanvas = () => {
  canvasWidth = window.innerWidth
  canvasHeight = window.innerHeight
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
}

resizeCanvas();

addEventListener('resize', () => {
  resizeCanvas();
  init();
});

const getRandomArbitrary = (min, max, roundN = 0) => {
  roundN = Number(`1e${roundN}`);
  return Math.floor((Math.random() * (max - min) + min) * roundN) / roundN;
}

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const randDirection = (min, max, f, roundN = 0) => {
  let result = 0;
  while (result === 0) {
    result = f(min, max, roundN);
  }
  return result;
}


const ctx = canvas.getContext('2d');
const SHADOW_BLUR = 20;
const COUNT_STARS = 400;
const PI2 = Math.PI * 2;
const dirStars = randDirection(-1, 1, getRandomInt);

class Star {
  constructor({ x, y, radius, speed, opacity, color }) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speed = speed;
    this.opacity = opacity;
    this.color = color;
  }

  draw() {
    ctx.beginPath();
    ctx.save();
    ctx.arc(this.x, this.y, this.radius, 0, PI2, false);
    ctx.fillStyle = ctx.shadowColor = this.color;
    ctx.shadowBlur = SHADOW_BLUR;
    ctx.globalAlpha = this.opacity;
    ctx.fill();
    ctx.restore();
    ctx.closePath();
  }

  update() {
    this.x += this.speed;

    if (this.x < -this.radius) {
      this.x = canvasWidth + this.radius;
      this.y = getRandomArbitrary(0, canvasHeight, 2);
    }

    if (this.x > canvasWidth + this.radius) {
      this.x = -this.radius;
      this.y = getRandomArbitrary(0, canvasHeight, 2);
    }

    this.draw();
  }

  static createNewStar() {
    let options = Object.create(null);
    options.x = getRandomArbitrary(0, canvasWidth, 2);
    options.y = getRandomArbitrary(0, canvasHeight, 2);
    options.radius = getRandomArbitrary(.5, 1.5, 2);
    options.speed = dirStars * getRandomArbitrary(0, .5, 2);
    options.opacity = getRandomArbitrary(.5, 1, 2);
    options.color = 'rgb(255, 255, 255)';
    return new this(options);
  }
}

let stars = new Set();

let req;


const init = () => {
  stars.clear();
  cancelAnimationFrame(req);

  for (let i = 0; i < COUNT_STARS; i++) {
    let star = Star.createNewStar();
    stars.add(star);
    star.draw();
  }


  const animate = () => {
    ctx.fillStyle = '#121212';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    for (let star of stars) {
      star.update();
    }

    req = requestAnimationFrame(animate);
  }

  req = requestAnimationFrame(animate);
}

init();