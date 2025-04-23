document.addEventListener('DOMContentLoaded', function() {
    // Mock for å simulere innlogging
    const currentIdentifier = 'abc123';  // Denne skal settes til den innloggede cfx.re ID-en via API-et

    // Les inn autoriserte identifikatorer
    fetch('allowed_identifiers.txt')
        .then(response => response.text())
        .then(data => {
            const allowedIdentifiers = data.split('\n').map(line => line.trim());
            
            // Sjekk om den nåværende ID-en er i listen over autoriserte brukere
            if (allowedIdentifiers.includes(currentIdentifier)) {
                // Hvis brukeren er autorisert, vis post-seksjonen
                document.getElementById('post-script').classList.add('visible');
            } else {
                // Hvis ikke autorisert, skjul post-seksjonen
                document.getElementById('post-script').classList.remove('visible');
            }
        });

    // Håndtere innsendelse av postformular
    document.getElementById('post-form').addEventListener('submit', function(e) {
        e.preventDefault();

        // Hent data fra skjemaet
        const postCategory = document.getElementById('category-select').value;
        const postTitle = document.getElementById('post-title').value;
        const postDescription = document.getElementById('post-description').value;
        const postPrice = document.getElementById('post-price').value;

        // Lag et nytt innlegg og vis det i riktig kategori
        const postElement = document.createElement('div');
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
