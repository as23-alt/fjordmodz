document.addEventListener('DOMContentLoaded', function() {
    // Fake cfx.re identifier for testing (Replace with actual cfx.re login mechanism later)
    const allowedIdentifiers = ['abc123', 'xyz456']; // Add real identifiers here
    const currentIdentifier = 'abc123'; // Replace with real cfx.re ID

    const postSection = document.getElementById('post-script');
    
    // Show the "Post" section only if the user is allowed
    if (allowedIdentifiers.includes(currentIdentifier)) {
        postSection.classList.add('visible');
    }

    // Handle contact form submission
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Message sent!');
    });

    // Handle post script form submission
    document.getElementById('post-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Script posted!');
    });
});

function showCategory(category) {
    const scripts = document.getElementById('script-list');
    scripts.innerHTML = `<h3>Scripts in ${category}</h3><p>List of scripts for ${category} will appear here.</p>`;
}
