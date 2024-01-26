document.addEventListener('DOMContentLoaded', function() {
    // Initialize the page with the 'home' content
    changeContent('home');
});

function changeContent(page) {
    const contentDiv = document.getElementById('content');
    const title = document.getElementById('website-title');

    switch (page) {
        case 'home':
            title.textContent = 'Nexus Softworks - Home';
            contentDiv.innerHTML = `
                <h2>Welcome to Nexus!</h2>
                <p>Nexus Softworks, welp 😎.</p>
            `;
            break;
        case 'about':
            title.textContent = 'Nexus Softworks - About';
            contentDiv.innerHTML = `
                <h2>About Me</h2>
                <p>Welcome to Nexus, A Roblox.</p>
                <p>We will also have Other things like an: External and Internal.</p>
                
                <h3>The Founders</h3>
                <ul>
                    <li>th1quar - 888Pyro</li>
                    <li>exprvssed - Exprvssed_2</li>
                </ul>
                
                <h3>Our Mission</h3>
                <p>We Wanna, Welp. 😅</p>
            `;
            break;
        default:
            // Default content if an unknown page is selected
            title.textContent = 'Nexus Softworks';
            contentDiv.innerHTML = '<p>Page not found.</p>';
            break;
    }
}
