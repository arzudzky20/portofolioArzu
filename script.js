// 1. Menghapus Loading Screen saat halaman selesai dimuat
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.style.opacity = '0';
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500); // Menunggu transisi opacity selesai
});

// 2. Scroll Animation menggunakan Intersection Observer
// API ini mendeteksi kapan sebuah elemen masuk ke dalam area layar (viewport)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15 // Animasi mulai saat 15% elemen terlihat di layar
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Menambahkan class 'show' untuk menjalankan animasi CSS
            entry.target.classList.add('show');
            // Berhenti mengamati elemen setelah animasi berjalan 1x
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Mengambil semua elemen yang memiliki class 'hidden' atau yang berawalan 'hidden-delay'
const hiddenElements = document.querySelectorAll('.hidden, [class*="hidden-delay"]');

// Memasukkan elemen-elemen tersebut ke dalam observer
hiddenElements.forEach((el) => {
    observer.observe(el);
});