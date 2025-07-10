// This script creates a staggered fade-in animation for key page elements.

// We wait for the entire HTML document to be loaded and parsed before running any code.
document.addEventListener('DOMContentLoaded', () => {

    // Select all elements that have the 'animate-on-load' class.
    // This returns a NodeList, which is like an array.
    const elementsToAnimate = document.querySelectorAll('.animate-on-load');

    // Loop through each selected element.
    elementsToAnimate.forEach((element, index) => {
        // Use setTimeout to create a delay for each element.
        // The delay increases for each element (0ms, 150ms, 300ms, etc.),
        // creating a pleasant staggered or "cascade" effect.
        const delay = index * 150; // 150 milliseconds between each element's animation

        setTimeout(() => {
            // Add the 'visible' class to the element.
            // The CSS will then handle the transition to make it fade in and slide up.
            element.classList.add('visible');
        }, delay);
    });

});