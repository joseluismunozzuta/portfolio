// Add smooth scrolling to all links
$('a').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {
            window.location.hash = hash;
        });
    }
});

// Initialize AOS library
AOS.init({
    duration: 1000,
    once: true
});

// Form submission with AJAX
const form = document.querySelector('#contact form');
const alertBox = document.querySelector('#contact .alert');
const nameInput = document.querySelector('#contact input[name="name"]');
const emailInput = document.querySelector('#contact input[name="email"]');
const messageInput = document.querySelector('#contact textarea[name="message"]');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name === '' || email === '' || message === '') {
        alertBox.innerHTML = 'Please fill out all fields.';
        alertBox.classList.add('alert-danger');
        alertBox.classList.remove('d-none', 'alert-success');
        return;
    }

    $.ajax({
        url: form.action,
        method: form.method,
        data: {
            name: name,
            email: email,
            message: message
        },
        dataType: 'json',
        success: function (response) {
            alertBox.innerHTML = response.message;
            alertBox.classList.remove('d-none', 'alert-danger');
            alertBox.classList.add('alert-success');
            form.reset();
        },
        error: function () {
            alertBox.innerHTML = 'An error occurred while submitting the form. Please try again later.';
            alertBox.classList.remove('d-none', 'alert-success');
            alertBox.classList.add('alert-danger');
        }
    });
});