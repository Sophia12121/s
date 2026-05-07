const movies = [
    { title: "Inception", year: 2010, rating: 8.8, icon: "🌀", desc: "Science-fiction et structures oniriques." },
    { title: "Interstellar", year: 2014, rating: 8.7, icon: "🚀", desc: "Physique théorique et voyage temporel." },
    { title: "The Imitation Game", year: 2014, rating: 8.0, icon: "💻", desc: "Cryptographie et mathématiques appliquées." },
    { title: "A Beautiful Mind", year: 2001, rating: 8.2, icon: "🧠", desc: "Théorie des jeux et génie mathématique." }
];

const grid = document.getElementById('movie-grid');

movies.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
        <div class="movie-poster">${movie.icon}</div>
        <div class="movie-info">
            <h3>${movie.title}</h3>
            <p><strong>Année:</strong> ${movie.year}</p>
            <p><strong>Note:</strong> <span class="rating">★ ${movie.rating}</span></p>
            <p style="font-size: 0.9rem; color: #94a3b8;">${movie.desc}</p>
        </div>
    `;
    grid.appendChild(card);
});
