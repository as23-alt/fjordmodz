document.addEventListener('DOMContentLoaded', function() {
    // Mock for å simulere innlogging (brukerens cfx.re identifier)
    const currentIdentifier = 'abc123';  // Denne ID-en skal settes fra autentisering via cfx.re

    // Les inn autoriserte identifikatorer fra filen
    fetch('allowed_identifiers.txt')
        .then(response => response.text())
        .then(data => {
            const allowedIdentifiers = data.split('\n').map(line => line.trim());

            // Hvis den nåværende cfx.re ID er i listen over autoriserte brukere, vis post-seksjonen
            if (allowedIdentifiers.includes(currentIdentifier)) {
                document.getElementById('post-script').classList.add('visible');
            } else {
                document.getElementById('post-script').classList.remove('visible');
            }
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

        // Legg til en container for innleggene under kategoriene
        let scriptList = document.createElement('div');
        scriptList.id = `category-${category}`;
        scriptList.classList.add('script-list');
        scriptList.innerHTML = `<p>This category is empty.</p>`;
        document.getElementById('scripts-list').appendChild(scriptList);
    });

    // Når et innlegg er sendt
    document.getElementById('post-form').addEventListener('submit', function(e) {
        e.preventDefault();

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
            <button class="buy-btn" onclick="window.location.href='https://discord.gg/VCdPuqbZdQ'">Buy Now</button>
        `;

        // Finn kategorien og vis innlegget der
        let categoryElement = document.querySelector(`#category-${postCategory}`);
        if (categoryElement) {
            // Fjern "This category is empty"-meldingen hvis noen har postet
            const emptyMessage = categoryElement.querySelector('p');
            if (emptyMessage) {
                categoryElement.removeChild(emptyMessage);
            }
            categoryElement.appendChild(postElement);
        }

        alert('Script posted successfully!');
    });

    // Vis kategorier
    function showCategory(category) {
        const categoryElement = document.querySelector(`#category-${category}`);
        const scripts = document.getElementById('scripts-list');

        if (categoryElement && categoryElement.children.length === 0) {
            scripts.innerHTML = `<h3>This category is empty.</h3>`;
        } else {
            scripts.innerHTML = `<h3>Scripts in ${category}</h3>`;
            scripts.appendChild(categoryElement);
        }
    }
});


