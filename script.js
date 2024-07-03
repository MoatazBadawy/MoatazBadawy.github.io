document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a');
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            alert('You are now being redirected to ' + this.href);
            window.location.href = this.href;
        });
    });
});