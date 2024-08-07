document.addEventListener('DOMContentLoaded', function() {
    

    // Task 9: Change text content on button click
    const clickParagraph = document.getElementById('clickParagraph');
    const changeTextButton = document.getElementById('changeTextButton');

    changeTextButton.addEventListener('click', function() {
        clickParagraph.textContent = 'How you doin?';
    });

    // Task 10: Change border color on mouseover
    const mouseoverDiv = document.getElementById('mouseoverDiv');

    mouseoverDiv.addEventListener('mouseover', function() {
        mouseoverDiv.classList.add('border-highlight');
    });

    mouseoverDiv.addEventListener('mouseout', function() {
        mouseoverDiv.classList.remove('border-highlight');
    });
});
