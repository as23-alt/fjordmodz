// JavaScript for form validation or other dynamic content (if needed)
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        const name = form.querySelector('input[name="name"]');
        const email = form.querySelector('input[name="email"]');
        const message = form.querySelector('textarea[name="message"]');

        if (!name.value || !email.value || !message.value) {
            alert("Alle feltene må fylles ut.");
            e.preventDefault();
        }
    });
});
