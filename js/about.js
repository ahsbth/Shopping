var tl = gsap.timeline()

tl = gsap.from("#logo, .nav-link, h4, h1, .form-control, .ri-search-line ", {
    y: -40,
    opacity: 0,
    stagger: 0.2
});
