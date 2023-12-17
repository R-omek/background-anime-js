const container = document.querySelector('.container')

for (let i = 0; i <= 100; i++) {
    const block = document.createElement('div')
    block.classList.add('block')
    container.appendChild(block)
}


function animateBlocks() {
    anime({
        targets: '.block',
        translateX: function() {
            return anime.random(-900, 900)
        },
        translateY: function() {
            return anime.random(-500, 420)
        },
        scale: function() {
            return anime.random(1, 5)
        },
        easing: 'linear',
        duration: 3000,
        delay: anime.stagger(10),
        complete: animateBlocks
    })
}

animateBlocks()