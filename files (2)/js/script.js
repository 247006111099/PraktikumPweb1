// Fungsi untuk menampilkan pesan sesuai ketentuan praktikum
function showMessage() {
    alert("Terima kasih telah mengunjungi portofolio saya!");
}

// Fungsi tambahan untuk interaksi yang lebih menarik
document.addEventListener('DOMContentLoaded', function() {
    
    // Animasi smooth scroll untuk navigasi (jika ada)
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Event listener untuk tombol contact
    const contactBtn = document.getElementById('contactBtn');
    if (contactBtn) {
        contactBtn.addEventListener('click', showMessage);
    }

    // Animasi fade in saat scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe semua section
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Interaksi hover pada skill cards
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f0f7ff';
        });
        card.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'white';
        });
    });

    // Efek typing pada tagline (opsional, bisa diaktifkan)
    const tagline = document.querySelector('.tagline');
    if (tagline) {
        const text = tagline.textContent;
        tagline.textContent = '';
        let index = 0;
        
        function typeWriter() {
            if (index < text.length) {
                tagline.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // Uncomment baris di bawah untuk mengaktifkan efek typing
        // setTimeout(typeWriter, 500);
    }

    // Log untuk debugging
    console.log('Portfolio website loaded successfully!');
    console.log('Total sections:', document.querySelectorAll('.section').length);
});

// Fungsi untuk menampilkan waktu kunjungan
function showVisitTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('id-ID');
    alert('Anda mengunjungi portfolio ini pada pukul: ' + timeString);
}
