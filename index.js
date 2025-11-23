anime({
    targets: '.avatar',
    rotateY: [
          { value: 180, duration: 600, easing: 'easeInOutSine' },
          { value: 0, duration: 600, delay: 200, easing: 'easeInOutSine' }
        ],
        scale: [
          { value: 1.05, duration: 300, easing: 'easeOutCubic' },
          { value: 1, duration: 600, easing: 'easeOutCubic' }
        ]
});