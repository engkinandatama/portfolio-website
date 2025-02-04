document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah form submit default

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        this.reset(); // Mengosongkan form
    } else {
        alert('Please fill in all fields.');
    }
});