document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a');
    
    links.forEach(link => {
        link.addEventListener('click', function() {
            alert('You are now being redirected to ' + this.href);
        });
    });
});
