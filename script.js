document.addEventListener('DOMContentLoaded', function() {
    // Eksempel på tillatte cfx.re identifikatorer
    const allowedIdentifiers = ['abc123', 'xyz456']; // Legg til cfx.re identifikatorene dine her
    let currentIdentifier = null; // Her skal du få inn brukerens cfx.re identifier på et senere tidspunkt

    // For testing (skru på når du har autentisering implementert)
    //currentIdentifier = 'abc123';  // Erstatt med autentisert bruker

    // Når brukeren er logget inn med en tillatt cfx.re ID, vis "Post" knappen
    const postSection = document.getElementById('post-script');
    const contactFormSection = document.getElementById('contact-form-section');

    if (allowedIdentifiers.includes(currentIdentifier)) {
        // Vis posten sekjonen hvis brukerens cfx.re identifikator er tillatt
        postSection.classList.add('visible');
    } else {
        // Skjul kontaktformular for brukere som ikke har tillatelse til å poste
        contactFormSection.classList.remove('visible');
    }

    // Håndtere innsendelse av kontaktformular
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Message sent!');
    });

    // Håndtere innsendelse av postformular
    document.getElementById('post-form').addEventListener('submit', function(e) {
        e.preventDefault();
        // Her kan du legge til logikken for å lagre et innlegg
        let postCategory = document.getElementById('category-select').value;
        let postTitle = document.getElementById('post-title').value;
        let postDescription = document.getElementById('post-description').value;
        let postPrice = document.getElementById('post-price').value;

        let postContainer = document.getElementById('scripts-list');
        let postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h3>${postTitle}</h3>
            <p>${postDescription}</p>
            <p>Price: $${postPrice}</p>
            <button class="buy-btn">Buy Now</button>
        `;

        // Legg til innlegget under valgt kategori
        let categoryElement = document.querySelector(`#category-${postCategory}`);
        if (categoryElement) {
            categoryElement.appendChild(postElement);
        }

        alert('Script posted successfully!');
    });

    // Dynamisk opprettelse av kategorier
    const categories = ['Cars', 'MLOs', 'Scripts', 'Clothes'];

    const categoriesBox = document.getElementById('categories-box');
    categories.forEach(category => {
        let categoryDiv = document.createElement('div');
        categoryDiv.classList.add('category');
        categoryDiv.innerHTML = `<p>${category}</p>`;
        categoryDiv.addEventListener('click', () => showCategory(category));
        categoriesBox.appendChild(categoryDiv);
    });

    // Vis kategorier
    function showCategory(category) {
        const scripts = document.getElementById('script-list');
        scripts.innerHTML = `<h3>Scripts in ${category}</h3><p>List of scripts for ${category} will appear here.</p>`;
    }

});

// Lag funksjon for å legge til eller fjerne innlegg fra spesifik kategori
function postToCategory(category, title, description, price) {
    let categoryElement = document.getElementById(category);
    if (categoryElement) {
        categoryElement.innerHTML += `
            <div class="post">
                <h3>${title}</h3>
                <p>${description}</p>
                <p>Price: $${price}</p>
                <button class="buy-btn">Buy Now</button>
            </div>
        `;
    }
}
