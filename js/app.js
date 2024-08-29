document.addEventListener('DOMContentLoaded', () => {
    const card1 = document.querySelector('.card1');
    const card2 = document.querySelector('.card2');
    const card3 = document.querySelector('.card3');
    const container = document.querySelector('.row');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const triggerPoint = window.innerHeight / 1.3;

        if (scrollPosition > triggerPoint) {
            // Animación de la primera card centrada
            card1.classList.add('show-card1');
            setTimeout(() => {
                card1.classList.remove('show-card1');

                // Animación de la segunda card centrada
                card2.classList.add('show-card2');
                setTimeout(() => {
                    card2.classList.remove('show-card2');

                    // Animación de la tercera card centrada
                    card3.classList.add('show-card3');
                    setTimeout(() => {
                        card3.classList.remove('show-card3');

                        // Animación final: Las tres cards caen desde arriba y se alinean en fila
                        setTimeout(() => {
                            container.classList.add('final');
                            card1.classList.add('drop-cards');
                            card2.classList.add('drop-cards');
                            card3.classList.add('drop-cards');
                        }, 500);
                    }, 3000);
                }, 3000);
            }, 3000);
        }
    });
});




