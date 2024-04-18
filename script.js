document.addEventListener("DOMContentLoaded", function() {
    const descriptions = document.querySelectorAll('.description');
    const images = document.querySelectorAll('.image_container img');

    function showDescription(index) {
        descriptions.forEach(function(description, i) {
            if (i === index) {
                description.style.display = 'block';
            } else {
                description.style.display = 'none';
            }
        });
    }

    images.forEach(function(image, index) {
        image.addEventListener('click', function() {
            showDescription(index);

          
            if (image.src.includes("golf1.webp")) {
                showDescription(0);
            } else if (image.src.includes("arteon1.webp")) {
                showDescription(1);
            } else if (image.src.includes("tiguan1.webp")) {
                showDescription(2);
            } else if (image.src.includes("touareg1.webp")) {
                showDescription(3);
            }
        });
    });
});

