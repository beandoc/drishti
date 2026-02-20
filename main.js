document.addEventListener('DOMContentLoaded', () => {
    console.log('Nav-Jyoti Healthcare Portal Loaded');

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar-wrapper');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar ? navbar.classList.add('scrolled') : null;
        } else {
            navbar ? navbar.classList.remove('scrolled') : null;
        }
    });

    // Specialities Scroll Logic
    const track = document.getElementById('spec-track');
    const prevBtn = document.getElementById('spec-prev');
    const nextBtn = document.getElementById('spec-next');

    if (track && prevBtn && nextBtn) {
        const scrollAmount = 350;

        nextBtn.addEventListener('click', () => {
            track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        // Hide/Show buttons based on scroll position
        track.addEventListener('scroll', () => {
            prevBtn.style.opacity = track.scrollLeft <= 0 ? '0.3' : '1';
            prevBtn.style.pointerEvents = track.scrollLeft <= 0 ? 'none' : 'auto';

            const maxScroll = track.scrollWidth - track.clientWidth;
            nextBtn.style.opacity = track.scrollLeft >= maxScroll - 5 ? '0.3' : '1';
            nextBtn.style.pointerEvents = track.scrollLeft >= maxScroll - 5 ? 'none' : 'auto';
        });

        // Initialize button state
        prevBtn.style.opacity = '0.3';
        prevBtn.style.pointerEvents = 'none';
    }

    // Education Tabs Logic
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            // Add filtering logic here if needed
        });
    });

    // FAQ Accordion Logic
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            const isActive = item.classList.contains('active');

            // Close all other items
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});
