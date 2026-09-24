document.addEventListener('DOMContentLoaded', () => {


    /* =========================================
       1. QUICK BOOKING FORM
    ========================================= */

    const bookingForm =
        document.getElementById('bookingForm');


    if (bookingForm) {

        bookingForm.addEventListener(
            'submit',
            (e) => {

                e.preventDefault();


                // Get input values

                const nameInput =
                    document
                        .getElementById('bName')
                        .value
                        .trim();


                const phoneInput =
                    document
                        .getElementById('bPhone')
                        .value
                        .trim();


                const serviceSelect =
                    document
                        .getElementById('bService')
                        .value;


                // Indian 10-digit mobile validation

                const phoneRegex =
                    /^[6-9]\d{9}$/;


                if (!phoneRegex.test(phoneInput)) {

                    alert(
                        'Please enter a valid 10-digit Indian mobile number.'
                    );

                    return;
                }


                // Success message

                alert(
                    `Thank you, ${nameInput}! Your booking request for "${serviceSelect}" has been received successfully.\nOur verified professional will dispatch or call you within 30 minutes.`
                );


                // Reset form

                bookingForm.reset();

            }
        );

    }



    /* =========================================
       2. SMOOTH SCROLLING
    ========================================= */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach((anchor) => {

            anchor.addEventListener(
                'click',
                function (e) {

                    const targetId =
                        this.getAttribute('href');


                    if (targetId === '#') {

                        return;

                    }


                    const targetElement =
                        document.querySelector(targetId);


                    if (targetElement) {

                        e.preventDefault();


                        targetElement.scrollIntoView({

                            behavior: 'smooth',

                            block: 'start'

                        });

                    }

                }
            );

        });



    /* =========================================
       3. AUTOMATIC SERVICE IMAGE SLIDER
    ========================================= */

    const slides =
        document.querySelectorAll('.slide');


    const dots =
        document.querySelectorAll('.slider-dot');


    const previousButton =
        document.querySelector('.slider-prev');


    const nextButton =
        document.querySelector('.slider-next');


    // If slider doesn't exist, stop here

    if (slides.length === 0) {

        return;

    }


    let currentSlide = 0;


    let sliderInterval;



    /* =========================================
       SHOW SLIDE
    ========================================= */

    function showSlide(index) {


        // Remove active from all slides

        slides.forEach((slide) => {

            slide.classList.remove('active');

        });


        // Remove active from all dots

        dots.forEach((dot) => {

            dot.classList.remove('active');

        });


        // Make index valid

        if (index >= slides.length) {

            currentSlide = 0;

        }

        else if (index < 0) {

            currentSlide =
                slides.length - 1;

        }

        else {

            currentSlide = index;

        }


        // Activate selected slide

        slides[currentSlide]
            .classList
            .add('active');


        // Activate selected dot

        if (dots[currentSlide]) {

            dots[currentSlide]
                .classList
                .add('active');

        }

    }



    /* =========================================
       NEXT SLIDE
    ========================================= */

    function nextSlide() {

        showSlide(currentSlide + 1);

    }



    /* =========================================
       PREVIOUS SLIDE
    ========================================= */

    function previousSlide() {

        showSlide(currentSlide - 1);

    }



    /* =========================================
       START AUTO SLIDER
    ========================================= */

    function startSlider() {

        clearInterval(sliderInterval);


        sliderInterval =
            setInterval(
                nextSlide,
                4000
            );

    }



    /* =========================================
       STOP / RESTART SLIDER
    ========================================= */

    function restartSlider() {

        startSlider();

    }



    /* =========================================
       NEXT BUTTON
    ========================================= */

    if (nextButton) {

        nextButton.addEventListener(
            'click',
            () => {

                nextSlide();

                restartSlider();

            }
        );

    }



    /* =========================================
       PREVIOUS BUTTON
    ========================================= */

    if (previousButton) {

        previousButton.addEventListener(
            'click',
            () => {

                previousSlide();

                restartSlider();

            }
        );

    }



    /* =========================================
       DOT BUTTONS
    ========================================= */

    dots.forEach((dot, index) => {

        dot.addEventListener(
            'click',
            () => {

                showSlide(index);

                restartSlider();

            }
        );

    });



    /* =========================================
       INITIALIZE SLIDER
    ========================================= */

    showSlide(0);


    // Automatically change every 4 seconds

    startSlider();

});