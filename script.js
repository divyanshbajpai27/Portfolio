const buttons = document.querySelectorAll('.nav-item');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => {
            btn.classList.remove('active');
            btn.classList.add('nactive');
        })
        button.classList.add('active');
        button.classList.remove('nactive');

        const targetUrl = button.getAttribute('data-url');
        window.location.href = targetUrl;
    });
});


document.getElementById('CVbtn').addEventListener('click', function() {
    CV();
});

function CV() {
    var pdfUrl = 'Resume.pdf';
    var link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Divyansh\'s Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

document.addEventListener("DOMContentLoaded", function() {
    var options = {
        strings: [" Divyansh Bajpai"],
        typeSpeed: 50,
        backSpeed: 50,
        startDelay: 1500, 
        loop: false,
        showCursor: true,
        cursorChar: '|'
    };

    var typed = new Typed("#name", options);
});
