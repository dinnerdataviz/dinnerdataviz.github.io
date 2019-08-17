// animate text

function animateText() {

    var textWrapper = document.querySelector('.header__text .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: true })
        .add({
            targets: '.header__text .letter',
            translateY: ["1.1em", 0],
            translateZ: 0,
            duration: 750,
            delay: function (el, i) {
                return 50 * i;
            }
        }).add({
            targets: '.header__text',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
}