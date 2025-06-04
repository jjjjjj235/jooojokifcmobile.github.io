// Toggle Mobile Menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Ubah ikon menu
    const icon = menuToggle.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Tutup menu saat mengklik link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.querySelector('i').classList.remove('fa-times');
        menuToggle.querySelector('i').classList.add('fa-bars');
    });
});

// Validasi form kontak
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validasi sederhana
        const name = this.querySelector('input[type="text"]');
        const email = this.querySelector('input[type="email"]');
        const message = this.querySelector('textarea');
        
        if (name.value.trim() === '') {
            alert('Nama harus diisi');
            name.focus();
            return;
        }
        
        if (email.value.trim() === '') {
            alert('Email harus diisi');
            email.focus();
            return;
        }
        
        if (message.value.trim() === '') {
            alert('Pesan harus diisi');
            message.focus();
            return;
        }
        
        // Jika validasi berhasil
        alert('Terima kasih! Pesan Anda telah terkirim.');
        this.reset();
    });
}

// Efek scroll halus untuk semua link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Deteksi perubahan orientasi layar
window.addEventListener('orientationchange', function() {
    // Reload halaman saat orientasi berubah untuk memastikan tata letak yang tepat
    window.location.reload();
});

// Optimasi untuk sentuhan
document.addEventListener('touchstart', function() {}, {passive: true});