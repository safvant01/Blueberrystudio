<script>
    const gmailLink = document.getElementById('gmail-link');
    const tooltip = document.getElementById('tooltip-box');

    gmailLink.addEventListener('click', function(event) {
        // This prevents the mail client from opening
        event.preventDefault(); 

        const email = 'blueberrygallerylab@gmail.com';

        // The 'Copy to Clipboard' command
        navigator.clipboard.writeText(email).then(() => {
            // Show a confirmation tooltip
            const linkRect = gmailLink.getBoundingClientRect();
            tooltip.style.left = ${linkRect.left + (linkRect.width / 2)}px;
            tooltip.style.top = ${linkRect.top - tooltip.offsetHeight - 10}px;
            tooltip.classList.add('visible');
            
            // Hide the tooltip after 2 seconds
            setTimeout(() => {
                tooltip.classList.remove('visible');
            }, 2000);

        }).catch(err => {
            // Fallback if copy fails: open the mail client
            console.error('Failed to copy email: ', err);
            window.location.href = 'mailto:' + email;
        });
    });
</script>