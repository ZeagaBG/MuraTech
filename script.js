document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('message');
    const currentCount = document.getElementById('currentCount');
    const maxCount = document.getElementById('maxCount');

    // Dynamically set the max count based on the HTML maxlength attribute
    const maxLength = textarea.getAttribute('maxlength');
    maxCount.textContent = maxLength;

    // Update counter on user input
    textarea.addEventListener('input', () => {
        const textLength = textarea.value.length;
        currentCount.textContent = textLength;
        
        // Optional: Turn text red if they get close (e.g., 50 characters remaining)
        if (maxLength - textLength <= 50) {
            currentCount.parentElement.style.color = 'red';
        } else {
            currentCount.parentElement.style.color = '#666';
        }
    });
});