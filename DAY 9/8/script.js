document.addEventListener('DOMContentLoaded', function() {
    const paragraph = document.getElementById('myParagraph');
    const button = document.getElementById('toggleClassButton');

    button.addEventListener('click', function() {
        // Toggle the highlight class on the paragraph
        paragraph.classList.toggle('highlight');
    });
});
