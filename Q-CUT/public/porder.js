document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    const stars = document.querySelectorAll('.star');
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = this.dataset.value;
            const item = this.closest('.star-rating').dataset.item;
            console.log(`Star clicked. Item: ${item}, Rating: ${rating}`);
            
            // Set the hidden input value to the selected rating
            document.getElementById(`rating${item}`).value = rating;
            
            // Highlight stars up to the selected rating
            const starContainer = this.parentElement;
            starContainer.querySelectorAll('.star').forEach(s => {
                if (s.dataset.value <= rating) {
                    s.classList.add('selected');
                } else {
                    s.classList.remove('selected');
                }
            });
        });
    });
});

