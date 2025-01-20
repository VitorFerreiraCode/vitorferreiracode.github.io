document.querySelector('.profile-picture').addEventListener('mouseenter', function() {
    const originalSrc = this.src;
    const hoverSrc = this.getAttribute('data-hover');
    this.src = hoverSrc;
    
    this.addEventListener('mouseleave', function onMouseLeave() {
        this.src = originalSrc;
        this.removeEventListener('mouseleave', onMouseLeave);
    });
});
