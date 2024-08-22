const buttons = document.querySelectorAll('.nav-item');

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwbJ_oa4M7DeLkRSe1HyqQBLqgyMhdmtpgCvA--PiXPyIVZnakNq5RyMa8Bv5-zIAGtCw/exec';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => {
            btn.classList.remove('active');
            btn.classList.add('nactive');
        });
        button.classList.add('active');
        button.classList.remove('nactive');

        const targetUrl = button.getAttribute('data-url');
        window.location.href = targetUrl;
    });
});

document.getElementById('sendData').addEventListener('click', uploadData);

function uploadData() {
    const name = document.getElementById('name').value;
    const dateTime = new Date().toLocaleString();
    const msg = document.getElementById('message').value;
    const email = document.getElementById('email').value;
    const url = `${GOOGLE_SCRIPT_URL}?action=putMsg&user=${name}&message=${msg}&dateTime=${encodeURIComponent(dateTime)}&email=${email}`;
    fetch(url)
        .then(response => response.text(), alert('Message sent successfully'))
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
}