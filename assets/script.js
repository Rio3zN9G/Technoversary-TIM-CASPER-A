
const notyf = new Notyf({
    duration: 4000,
    position: {
        x: 'right',
        y: 'top',
    },
    types: [
        {
            type: 'success',
            background: '#00C853',
            icon: {
                className: 'fas fa-check-circle',
                tagName: 'i',
                text: ''
            }
        },
        {
            type: 'error',
            background: '#EF4444',
            icon: {
                className: 'fas fa-times-circle',
                tagName: 'i',
                text: ''
            }
        },
        {
            type: 'warning',
            background: '#FFD600',
            icon: {
                className: 'fas fa-exclamation-triangle',
                tagName: 'i',
                text: ''
            }
        },
        {
            type: 'info',
            background: '#2979FF',
            icon: {
                className: 'fas fa-info-circle',
                tagName: 'i',
                text: ''
            }
        }
    ]
});


document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    const iconContainer = document.getElementById('eco-icon');
    const textContainer = document.getElementById('text-container');
    const loadingMeta = document.getElementById('loading-meta');
    const progressBar = document.getElementById('progress-bar');
    const percentText = document.getElementById('percent');
    const blockTransition = document.getElementById('block-slash-transition');


    for (let i = 0; i < 100; i++) {
        const block = document.createElement('div');
        block.className = 'block';
        blockTransition.appendChild(block);
    }

    const blocks = document.querySelectorAll('.block');


    const drawSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3');
    const popSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3');
    const ambianceSound = new Audio('https://assets.mixkit.co/active_storage/sfx/143/143-preview.mp3');


    drawSound.volume = 0.4;
    popSound.volume = 0.5;
    ambianceSound.volume = 0.3;
    ambianceSound.loop = true;

    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    async function startSequence() {

        ambianceSound.play().catch(e => console.log("Browser blocked autoplay"));


        await wait(300);
        iconContainer.classList.add('draw-stem');
        drawSound.play();


        await wait(600);
        iconContainer.classList.add('draw-left');
        drawSound.play();


        await wait(600);
        iconContainer.classList.add('draw-right');
        drawSound.play();


        await wait(800);
        iconContainer.classList.add('filled');
        popSound.play();


        await wait(400);
        textContainer.classList.add('show-text');


        await wait(800);
        loadingMeta.classList.add('visible');


        let progress = 0;
        await new Promise(resolve => {
            const interval = setInterval(() => {
                progress += Math.random() * 5;
                if (progress > 100) progress = 100;

                progressBar.style.width = `${progress}%`;
                percentText.innerText = `${Math.floor(progress)}%`;

                if (progress === 100) {
                    clearInterval(interval);
                    resolve();
                }
            }, 50);
        });


        await wait(500);


        blocks.forEach((block, index) => {
            setTimeout(() => {
                block.style.transform = 'scaleY(1)';
            }, index * 20);
        });

        await wait(1500);


        loadingScreen.classList.add('hidden');
        mainContent.style.display = 'block';


        initializeMainWebsite();
    }


    startSequence();
});


function initializeMainWebsite() {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    const isMobile = window.innerWidth < 768;

    // Initialize Particles.js
    if (window.particlesJS) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": isMobile ? 20 : 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#00E676"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#00E676",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }

    const educationData = [
        {
            title: "Daur Ulang Sampah Plastik",
            description: "Pelajari cara mendaur ulang sampah plastik dengan benar untuk mengurangi polusi lingkungan dan menciptakan ekonomi sirkular.",
            points: 50,
            badge: "Populer",
            image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
            icon: "fas fa-recycle",
            what: "Daur ulang plastik adalah proses mengubah limbah plastik menjadi produk baru yang bermanfaat, mengurangi kebutuhan untuk bahan baku baru dan mengurangi polusi lingkungan.",
            impact: [
                "Mengurangi polusi plastik di laut dan daratan",
                "Menghemat energi hingga 80% dibanding produksi baru",
                "Mengurangi emisi gas rumah kaca",
                "Menciptakan lapangan kerja di sektor daur ulang"
            ],
            benefits: [
                "Mengurangi sampah di TPA",
                "Menghemat sumber daya alam",
                "Mengurangi ketergantungan pada minyak bumi",
                "Menciptakan ekonomi sirkular"
            ],
            howto: [
                "Pisahkan sampah plastik di rumah",
                "Cuci dan keringkan plastik sebelum didaur ulang",
                "Gunakan fasilitas bank sampah terdekat",
                "Dukung produk dari bahan daur ulang"
            ]
        },
        {
            title: "Energi Terbarukan",
            description: "Eksplorasi berbagai sumber energi terbarukan yang ramah lingkungan dan berkelanjutan untuk masa depan yang lebih hijau.",
            points: 75,
            image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            icon: "fas fa-solar-panel",
            what: "Energi terbarukan adalah energi yang berasal dari sumber alami yang dapat diperbarui secara terus-menerus, seperti matahari, angin, air, dan panas bumi.",
            impact: [
                "Mengurangi emisi gas rumah kaca",
                "Mengurangi ketergantungan pada bahan bakar fosil",
                "Menciptakan ketahanan energi nasional",
                "Mengurangi polusi udara dan air"
            ],
            benefits: [
                "Sumber energi yang tidak akan habis",
                "Biaya operasional yang lebih rendah",
                "Menciptakan lapangan kerja hijau",
                "Meningkatkan kemandirian energi"
            ],
            howto: [
                "Pasang panel surya di rumah",
                "Gunakan energi listrik pada jam non-puncak",
                "Dukung kebijakan energi terbarukan",
                "Edukasi masyarakat tentang manfaat energi bersih"
            ]
        },
        {
            title: "Pertanian Berkelanjutan",
            description: "Teknik pertanian yang menjaga keseimbangan ekosistem, meningkatkan biodiversitas, dan mengurangi dampak negatif.",
            points: 60,
            badge: "Baru",
            image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
            icon: "fas fa-tractor",
            what: "Pertanian berkelanjutan adalah praktik pertanian yang mempertimbangkan kesehatan ekologi, ekonomi, dan sosial untuk memenuhi kebutuhan saat ini tanpa mengorbankan kemampuan generasi mendatang.",
            impact: [
                "Meningkatkan kesuburan tanah jangka panjang",
                "Mengurangi erosi dan degradasi lahan",
                "Meningkatkan keanekaragaman hayati",
                "Mengurangi polusi air dan tanah dari pupuk kimia"
            ],
            benefits: [
                "Produk pertanian yang lebih sehat",
                "Ketahanan pangan yang lebih baik",
                "Penghematan biaya input pertanian",
                "Pelestarian sumber daya alam"
            ],
            howto: [
                "Gunakan pupuk organik dan kompos",
                "Terapkan rotasi tanaman",
                "Kembangkan pertanian terintegrasi",
                "Gunakan metode irigasi yang efisien"
            ]
        },
        {
            title: "Konservasi Air",
            description: "Cara-cara sederhana untuk menghemat air dalam kehidupan sehari-hari dan melindungi sumber daya air yang terbatas.",
            points: 40,
            image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            icon: "fas fa-tint",
            what: "Konservasi air adalah praktik menggunakan air secara efisien untuk mengurangi penggunaan yang tidak perlu dan melestarikan sumber daya air untuk generasi mendatang.",
            impact: [
                "Mengurangi tekanan pada sumber air alami",
                "Menghemat energi untuk pengolahan dan distribusi air",
                "Melindungi ekosistem perairan",
                "Mengurangi biaya air bagi masyarakat"
            ],
            benefits: [
                "Penghematan biaya tagihan air",
                "Ketersediaan air yang lebih terjamin",
                "Perlindungan terhadap kekeringan",
                "Pelestarian lingkungan perairan"
            ],
            howto: [
                "Perbaiki kebocoran pipa dan keran",
                "Gunakan shower hemat air",
                "Kumpulkan air hujan untuk penyiraman tanaman",
                "Siram tanaman pada pagi atau sore hari"
            ]
        }
    ];

    const wasteItemsData = [
        { icon: "🥤", name: "Botol Plastik", price: "Rp 2.000/kg", category: "Plastik" },
        { icon: "🛍️", name: "Kantong Plastik", price: "Rp 1.500/kg", category: "Plastik" },
        { icon: "📦", name: "Kardus", price: "Rp 3.000/kg", category: "Kertas" },
        { icon: "📰", name: "Koran", price: "Rp 2.500/kg", category: "Kertas" },
        { icon: "🍎", name: "Sisa Makanan", price: "Rp 500/kg", category: "Organik" },
        { icon: "🍂", name: "Daun Kering", price: "Rp 300/kg", category: "Organik" },
        { icon: "🔩", name: "Kaleng", price: "Rp 2.200/kg", category: "Logam" },
        { icon: "🔧", name: "Besi Tua", price: "Rp 4.000/kg", category: "Logam" },
        { icon: "🍶", name: "Botol Kaca", price: "Rp 1.800/kg", category: "Kaca" },
        { icon: "🪞", name: "Pecahan Kaca", price: "Rp 1.000/kg", category: "Kaca" },
        { icon: "💻", name: "Laptop Bekas", price: "Rp 50.000/unit", category: "Elektronik" },
        { icon: "📱", name: "HP Bekas", price: "Rp 30.000/unit", category: "Elektronik" }
    ];

    const wasteItemsContainer = document.querySelector('.waste-items');
    const categoryButtons = document.querySelectorAll('.category');

    function renderWasteItems(category) {
        wasteItemsContainer.innerHTML = ''; // Clear existing items

        const filteredItems = wasteItemsData.filter(item => item.category === category);

        if (filteredItems.length === 0) {
            wasteItemsContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--dark-gray);">Belum ada data untuk kategori ini.</p>';
            return;
        }

        filteredItems.forEach((item, index) => {
            const wasteItem = document.createElement('div');
            wasteItem.className = 'wasteItem reveal-block'; // Changed class name slightly to avoid conflict if any
            wasteItem.classList.add('waste-item'); // Add original class back
            wasteItem.style.animationDelay = `${index * 100}ms`; // Stagger animation

            wasteItem.innerHTML = `
                <div class="waste-icon">${item.icon}</div>
                <h4>${item.name}</h4>
                <p>${item.price}</p>
            `;
            wasteItemsContainer.appendChild(wasteItem);

            // Trigger animation
            setTimeout(() => {
                wasteItem.classList.add('active');
            }, 50);
        });
    }

    // Initial render
    renderWasteItems('Plastik');

    // Event listeners for category buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            // Render items for selected category
            renderWasteItems(button.innerText);
        });
    });

    const chatMessages = [
        {
            user: "Sari Indah",
            avatar: "S",
            message: "Hai semua! Saya baru saja berhasil mengurangi sampah plastik di rumah dengan menggunakan wadah kaca untuk menyimpan makanan. Ada tips lain?",
            time: "10:30",
            own: false
        },
        {
            user: "Andi Pratama",
            avatar: "A",
            message: "Bagus sekali, Sari! Saya biasanya membawa tas belanja sendiri dan botol minum agar tidak perlu menggunakan plastik sekali pakai.",
            time: "10:35",
            own: false
        },
        {
            user: "Budi Santoso",
            avatar: "B",
            message: "Di komplek saya sedang menggalakkan composting untuk sampah organik. Hasilnya bisa digunakan untuk tanaman. Mau saya bagikan caranya?",
            time: "10:40",
            own: false
        },
        {
            user: "Kamu",
            avatar: "K",
            message: "Wah ide yang bagus! Saya tertarik untuk memulai composting. Bisa dibagikan caranya?",
            time: "10:45",
            own: true
        }
    ];

    const onlineUsers = [
        { name: "Ario Zulkaisi Nubli", avatar: "A", status: "SMK Pertiwi Kuningan" },
        { name: "Syaidina", avatar: "S", status: "SMK Pertiwi Kuningan" },
        { name: "M.Thosim", avatar: "T", status: "SMK Pertiwi Kuningan" },
    ];


    const educationGrid = document.getElementById('education-grid');
    educationData.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'card reveal-block'; // Added reveal-block class
        // card.setAttribute('data-aos', 'fade-up'); // Removed AOS to use custom animation

        card.innerHTML = `
            ${item.badge ? `<div class="achievement-badge">${item.badge}</div>` : ''}
            <div class="card-header" style="background-image: url('${item.image}');"></div>
            <div class="card-icon"><i class="${item.icon}"></i></div>
            <div class="card-content">
                <h3 class="reveal-slash">${item.title}</h3>
                <p>${item.description}</p>
                <div class="card-footer">
                    <div class="card-points">
                        <i class="fas fa-star"></i>
                        <span>+${item.points} Poin</span>
                    </div>
                    <button class="learn-btn" data-index="${index}">
                        Pelajari <i class="fas fa-arrow-right" style="font-size: 0.8rem; margin-left: 5px;"></i>
                    </button>
                </div>
            </div>
        `;

        educationGrid.appendChild(card);
    });

    // Custom Animation Observer
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');

                // Trigger children animations
                const slashes = entry.target.querySelectorAll('.reveal-slash');
                slashes.forEach(slash => slash.classList.add('active'));

                const dashes = entry.target.querySelectorAll('.reveal-dash');
                dashes.forEach(dash => dash.classList.add('active'));

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-block').forEach(el => {
        observer.observe(el);
    });

    // Parallax Effect for Floating Elements (Disabled on Mobile)
    if (!isMobile) {
        document.addEventListener('mousemove', (e) => {
            requestAnimationFrame(() => {
                const mouseX = e.clientX / window.innerWidth;
                const mouseY = e.clientY / window.innerHeight;

                gsap.to('.floating-element', {
                    x: (i) => (i + 1) * 30 * (mouseX - 0.5),
                    y: (i) => (i + 1) * 30 * (mouseY - 0.5),
                    duration: 1,
                    ease: 'power2.out'
                });
            });
        });
    }


    const chatContainer = document.getElementById('chat-container');
    chatMessages.forEach(message => {
        const chatMessage = document.createElement('div');
        chatMessage.className = `chat-message ${message.own ? 'own' : ''}`;
        chatMessage.innerHTML = `
                    <div class="chat-avatar">${message.avatar}</div>
                    <div class="chat-bubble">
                        <div class="chat-user">${message.user}</div>
                        <div class="chat-text">${message.message}</div>
                        <div class="chat-time">${message.time}</div>
                    </div>
                `;
        chatContainer.appendChild(chatMessage);
    });


    const onlineUsersContainer = document.getElementById('online-users');
    onlineUsers.forEach(user => {
        const onlineUser = document.createElement('div');
        onlineUser.className = 'online-user';
        onlineUser.innerHTML = `
                    <div class="online-user-avatar">${user.avatar}</div>
                    <div class="online-user-info">
                        <div class="online-user-name">${user.name}</div>
                        <div class="online-user-status">
                            <div class="online-indicator"></div>
                            <span>${user.status}</span>
                        </div>
                    </div>
                `;
        onlineUsersContainer.appendChild(onlineUser);
    });


    const typingText = document.getElementById('typing-text');
    const texts = [
        "Mulai dari kita, indungi Bumi.",
        "Bersama kita bisa membuat perbedaan untuk masa depan bumi yang lebih hijau dan berkelanjutan.",
        "Setiap aksi kecil berarti. Mulai dari diri sendiri, selamatkan bumi untuk generasi mendatang."
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            typingText.innerHTML = currentText.substring(0, charIndex - 1) + '<span class="typing-cursor"></span>';
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.innerHTML = currentText.substring(0, charIndex + 1) + '<span class="typing-cursor"></span>';
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 1000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    }


    setTimeout(type, 1000);


    gsap.to('.hero-title', {
        duration: 1.2,
        opacity: 1,
        y: 0,
        ease: "power3.out"
    });

    gsap.to('.cta-buttons', {
        duration: 1.2,
        opacity: 1,
        y: 0,
        delay: 0.6,
        ease: "power3.out"
    });


    gsap.to('.floating-element', {
        y: -20,
        rotation: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5
    });


    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section');

    function setActiveNavItem() {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollY >= (sectionTop - 200)) {
                currentSection = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').substring(1) === currentSection) {
                item.classList.add('active');
            }
        });
    }

    // Throttle function for scroll performance
    function throttle(func, limit) {
        let inThrottle;
        return function () {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    window.addEventListener('scroll', throttle(setActiveNavItem, 100));


    let isScrolling = false;

    function smoothScrollTo(target) {
        if (isScrolling) return;

        isScrolling = true;
        const targetElement = document.querySelector(target);
        const targetPosition = targetElement.offsetTop;

        gsap.to(window, {
            duration: 0.8,
            scrollTo: { y: targetPosition, autoKill: false },
            ease: "power2.inOut",
            onComplete: () => {
                isScrolling = false;
            }
        });
    }


    navItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            smoothScrollTo(target);
        });
    });


    const map = L.map('map').setView([-6.2088, 106.8456], 11); // Default to Jakarta

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                const userLat = position.coords.latitude;
                const userLng = position.coords.longitude;


                map.setView([userLat, userLng], 13);


                const userIcon = L.divIcon({
                    className: 'user-marker',
                    html: '<div style="background: #EF4444; width: 25px; height: 25px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 15px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; color: white; font-size: 12px;"><i class="fas fa-user"></i></div>',
                    iconSize: [25, 25],
                    iconAnchor: [12, 12]
                });

                L.marker([userLat, userLng], { icon: userIcon })
                    .addTo(map)
                    .bindPopup('Lokasi Anda')
                    .openPopup();

                notyf.success('Lokasi Anda berhasil ditemukan');
            },
            function (error) {
                console.log('Error getting location:', error);
                notyf.error('Tidak dapat mengakses lokasi Anda');
            }
        );
    }


    const markers = [
        {
            lat: -6.2088,
            lng: 106.8456,
            title: 'Aksi Bersih Pantai',
            description: 'Bergabunglah dengan aksi bersih pantai di Ancol setiap minggu pertama bulan ini. Kita akan membersihkan sampah plastik dan mengedukasi pengunjung tentang pentingnya menjaga kebersihan pantai.',
            date: 'Minggu, 15 Oktober 2023',
            time: '08:00 - 12:00 WIB',
            location: 'Pantai Kuta, Bali',
            participants: 45,
            maxParticipants: 100
        },
        {
            lat: -6.2297,
            lng: 106.6894,
            title: 'Penanaman Pohon',
            description: 'Program penanaman 1000 pohon di kawasan Taman Nasional. Kita akan menanam berbagai jenis pohon lokal untuk meningkatkan biodiversitas dan menyerap karbon.',
            date: 'Sabtu, 21 Oktober 2023',
            time: '07:00 - 11:00 WIB',
            location: 'Taman Nasional, Jakarta',
            participants: 32,
            maxParticipants: 80
        },
        {
            lat: -6.1751,
            lng: 106.8650,
            title: 'Workshop Daur Ulang',
            description: 'Pelatihan membuat kerajinan dari sampah plastik. Pelajari cara mengubah sampah menjadi barang bernilai dan mengurangi limbah plastik di lingkungan.',
            date: 'Minggu, 29 Oktober 2023',
            time: '10:00 - 14:00 WIB',
            location: 'Pusat Kota, Jakarta',
            participants: 28,
            maxParticipants: 50
        }
    ];

    markers.forEach(marker => {
        const customIcon = L.divIcon({
            className: 'custom-marker',
            html: '<div style="background: linear-gradient(135deg, #00C853, #2979FF); width: 30px; height: 30px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 15px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; color: white; font-size: 14px;"><i class="fas fa-leaf"></i></div>',
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        });

        const mapMarker = L.marker([marker.lat, marker.lng], { icon: customIcon }).addTo(map);


        const popupContent = `
                    <div class="event-popup">
                        <h3>${marker.title}</h3>
                        <p>${marker.description}</p>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
                            <div><i class="fas fa-calendar"></i> ${marker.date}</div>
                            <div><i class="fas fa-users"></i> ${marker.participants}/${marker.maxParticipants}</div>
                        </div>
                        <button class="btn btn-primary" onclick="joinEventFromMap('${marker.title}')"><i class="fas fa-user-plus"></i> Bergabung</button>
                    </div>
                `;

        mapMarker.bindPopup(popupContent, {
            maxWidth: 300,
            className: 'custom-popup'
        });


        mapMarker.on('mouseover', function () {
            this.openPopup();
            gsap.to(this._icon, {
                scale: 1.2,
                duration: 0.3,
                ease: "back.out(1.7)"
            });
        });

        mapMarker.on('mouseout', function () {
            gsap.to(this._icon, {
                scale: 1,
                duration: 0.3,
                ease: "back.out(1.7)"
            });
        });
    });


    window.joinEventFromMap = function (eventTitle) {
        notyf.success(`Anda telah bergabung dengan ${eventTitle}!`);


        const notificationCount = document.querySelector('.notification-count');
        let count = parseInt(notificationCount.textContent);
        notificationCount.textContent = count + 1;
    };


    document.getElementById('calculate-btn').addEventListener('click', function () {
        const transport = parseFloat(document.getElementById('transport').value) || 0;
        const energy = parseFloat(document.getElementById('energy').value) || 0;
        const waste = parseFloat(document.getElementById('waste').value) || 0;


        const carbonFootprint = (transport * 0.2) + (energy * 0.5) + (waste * 2);


        const progressBar = document.getElementById('carbon-progress');
        const percentage = Math.min(carbonFootprint / 50 * 100, 100);

        anime({
            targets: progressBar,
            width: `${percentage}%`,
            duration: 1500,
            easing: 'easeOutElastic(1, .5)'
        });


        const result = document.getElementById('carbon-result');
        let level, colorClass;

        if (carbonFootprint < 10) {
            level = "Rendah";
            colorClass = "low";
            notyf.success('Jejak karbon Anda rendah! Pertahankan!');
        } else if (carbonFootprint < 25) {
            level = "Sedang";
            colorClass = "medium";
            notyf.info('Jejak karbon Anda sedang. Ada ruang untuk perbaikan!');
        } else {
            level = "Tinggi";
            colorClass = "high";
            notyf.error('Jejak karbon Anda tinggi. Mari kurangi bersama!');
        }

        result.textContent = `Jejak Karbon Anda: ${carbonFootprint.toFixed(2)} kg CO2 (${level})`;
        result.className = `result ${colorClass}`;


        gsap.fromTo(result,
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
        );
    });


    let wasteData = {
        totalWaste: 1250,
        recycled: 850,
        users: 320,
        points: 5420,
        history: [
            { type: 'plastik', amount: 2.5, date: '2023-10-15', points: 5 },
            { type: 'kertas', amount: 1.2, date: '2023-10-14', points: 3 },
            { type: 'organik', amount: 3.0, date: '2023-10-13', points: 6 },
            { type: 'plastik', amount: 1.8, date: '2023-10-12', points: 3 }
        ]
    };


    function updateWasteStats() {
        animateValue('total-waste', 0, wasteData.totalWaste, 2000);
        animateValue('recycled', 0, wasteData.recycled, 2000);
        animateValue('users', 0, wasteData.users, 1500);
        animateValue('points', 0, wasteData.points, 2500);


        const historyList = document.getElementById('waste-history-list');
        historyList.innerHTML = '';

        wasteData.history.forEach(item => {
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';

            const typeIcon = getWasteIcon(item.type);
            const date = new Date(item.date).toLocaleDateString('id-ID');

            historyItem.innerHTML = `
                        <div>
                            <strong>${typeIcon} ${item.type.charAt(0).toUpperCase() + item.type.slice(1)}</strong>
                            <div>${date}</div>
                        </div>
                        <div>
                            <strong>${item.amount} kg</strong>
                            <div>+${item.points} poin</div>
                        </div>
                    `;

            historyList.appendChild(historyItem);
        });
    }

    function getWasteIcon(type) {
        const icons = {
            plastik: '🥤',
            kertas: '📄',
            organik: '🍂',
            logam: '🔩',
            kaca: '🍶'
        };
        return icons[type] || '🗑️';
    }


    function animateValue(id, start, end, duration) {
        const obj = document.getElementById(id);
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            obj.textContent = value.toLocaleString();
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }


    document.getElementById('add-waste-btn').addEventListener('click', function () {
        const wasteType = document.getElementById('waste-type').value;
        const wasteAmount = parseFloat(document.getElementById('waste-amount').value);

        if (!wasteAmount || wasteAmount <= 0) {
            notyf.error('Masukkan jumlah sampah yang valid');
            return;
        }


        const pointsEarned = Math.floor(wasteAmount * 2);


        const today = new Date().toISOString().split('T')[0];
        wasteData.history.unshift({
            type: wasteType,
            amount: wasteAmount,
            date: today,
            points: pointsEarned
        });


        wasteData.totalWaste += wasteAmount;
        wasteData.recycled += wasteAmount * 0.7;
        wasteData.points += pointsEarned;


        const userPointsElement = document.getElementById('user-points');
        let userPoints = parseInt(userPointsElement.textContent);
        userPoints += pointsEarned;
        userPointsElement.textContent = userPoints;


        notyf.success(`Berhasil menambahkan ${wasteAmount} kg sampah ${wasteType}! Anda mendapatkan ${pointsEarned} poin.`);


        document.getElementById('waste-amount').value = '';


        updateWasteStats();


        createParticleEffect();
    });

    function createParticleEffect() {
        const particlesContainer = document.createElement('div');
        particlesContainer.style.position = 'absolute';
        particlesContainer.style.width = '100%';
        particlesContainer.style.height = '100%';
        particlesContainer.style.top = '0';
        particlesContainer.style.left = '0';
        particlesContainer.style.pointerEvents = 'none';
        particlesContainer.style.zIndex = '1';

        document.getElementById('waste-bank').appendChild(particlesContainer);

        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '8px';
            particle.style.height = '8px';
            particle.style.backgroundColor = '#00C853';
            particle.style.borderRadius = '50%';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;

            particlesContainer.appendChild(particle);

            anime({
                targets: particle,
                translateY: [-30, 0],
                opacity: [0, 1],
                scale: [0, 1],
                duration: 1200,
                delay: i * 80,
                easing: 'easeOutElastic(1, .8)',
                complete: function () {
                    anime({
                        targets: particle,
                        opacity: 0,
                        scale: 0,
                        duration: 600,
                        delay: 1000,
                        easing: 'easeInOutQuad'
                    });
                }
            });
        }


        setTimeout(() => {
            particlesContainer.remove();
        }, 3000);
    }


    updateWasteStats();


    const educationModal = document.getElementById('education-modal');
    const modalClose = document.getElementById('modal-close');
    const startLearningBtn = document.getElementById('start-learning');
    const saveEducationBtn = document.getElementById('save-education');


    modalClose.addEventListener('click', closeModal);


    educationModal.addEventListener('click', function (e) {
        if (e.target === educationModal || e.target.classList.contains('education-modal-backdrop')) {
            closeModal();
        }
    });


    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && educationModal.classList.contains('active')) {
            closeModal();
        }
    });

    function closeModal() {
        educationModal.classList.remove('active');
        setTimeout(() => {
            educationModal.style.display = 'none';
        }, 500);
    }


    document.querySelectorAll('.learn-btn').forEach(button => {
        button.addEventListener('click', function () {
            const index = this.getAttribute('data-index');
            const education = educationData[index];


            document.getElementById('modal-icon').innerHTML = `<i class="${education.icon}"></i>`;
            document.getElementById('modal-title').textContent = education.title;
            document.getElementById('modal-description').textContent = education.description;
            document.getElementById('modal-points').textContent = `+${education.points} Poin`;
            document.getElementById('modal-image').src = education.image;
            document.getElementById('modal-what').textContent = education.what;


            const impactList = document.getElementById('modal-impact');
            impactList.innerHTML = '';
            education.impact.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                impactList.appendChild(li);
            });


            const benefitsList = document.getElementById('modal-benefits');
            benefitsList.innerHTML = '';
            education.benefits.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                benefitsList.appendChild(li);
            });


            const howtoList = document.getElementById('modal-howto');
            howtoList.innerHTML = '';
            education.howto.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                howtoList.appendChild(li);
            });


            educationModal.style.display = 'flex';
            setTimeout(() => {
                educationModal.classList.add('active');
            }, 10);
        });
    });


    startLearningBtn.addEventListener('click', function () {
        const title = document.getElementById('modal-title').textContent;
        notyf.success(`Anda telah memulai pembelajaran: ${title}`);
        closeModal();


        const userPointsElement = document.getElementById('user-points');
        let userPoints = parseInt(userPointsElement.textContent);
        const points = parseInt(document.getElementById('modal-points').textContent.replace('+', '').replace(' Poin', ''));
        userPoints += points;
        userPointsElement.textContent = userPoints;


        const notificationCount = document.querySelector('.notification-count');
        let count = parseInt(notificationCount.textContent);
        notificationCount.textContent = count + 1;
    });


    saveEducationBtn.addEventListener('click', function () {
        const title = document.getElementById('modal-title').textContent;
        notyf.info(`"${title}" telah disimpan ke daftar pembelajaran Anda`);
    });


    document.querySelectorAll('.category').forEach(category => {
        category.addEventListener('click', function () {
            document.querySelectorAll('.category').forEach(cat => {
                cat.classList.remove('active');
            });
            this.classList.add('active');


            gsap.fromTo('.waste-items .waste-item',
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }
            );
        });
    });


    const GEMINI_API_KEY = "AIzaSyB4DEO_w9984PxtRa3Bt-0qhU4Uo0ybf8M";
    const AI_PERSONA = {
        name: "Eco-Friend",
        avatar: "🌿"
    };

    const SYSTEM_PROMPT = `
    Kamu adalah Eco-Friend, asisten AI yang ramah dan bijak serta berintelektual tinggi seperti seorang professor untuk website PURE (Planet Unity Resources Environment).
    Tugasmu adalah menjawab pertanyaan pengguna seputar lingkungan, edukasi, bank sampah digital, dan fitur-fitur website PURE.
    
    Informasi Website PURE:
    - Fitur: Edukasi (modul daur ulang, energi, dll), Aksi (kalkulator jejak karbon, peta event), Bank Sampah (tukar sampah jadi poin), Komunitas, dan Minigame (Eco Catcher).
    - Tujuan: Mengajak orang peduli lingkungan.
    - Latar Belakang: Website ini di buat oleh Siswa bernama Ario Zulkaisi Nubli dari Jurusan Rekayasa Perangkat Lunak SMK Pertiwi Kuningan dari tim Casper A untuk perlombaan web-desaign technoversary HIMATI Uniku, dengan signaturenya yang kas yaitu Pelajar Beribu Mimpi yang senang untuk mengexplorasi dan memiliki ambisi pada teknologi, untuk itu jangan lupa follow ignya ya @itsriod
    
    Gaya Bicara:
    - Panggilan: Eco-Friend.
    - Bahasa: Indonesia yang santai tapi edukatif.
    - PENTING: Usahakan setiap kalimat atau paragrafmu memiliki akhiran huruf yang sama dan tanpa menggunakan symbol berlebihan seperti #,*, dan lain sebagainya.
    - Gunakan konjungsi (kata hubung) yang jelas serta berintelektual tinggi.
    - Fokus: Lingkungan, edukasi, bank sampah, lelucon.
    `;

    document.getElementById('send-message').addEventListener('click', async function () {
        const chatInput = document.getElementById('chat-input');
        const message = chatInput.value.trim();

        if (message) {
            // User Message
            const chatMessage = document.createElement('div');
            chatMessage.className = 'chat-message own';
            chatMessage.innerHTML = `
                        <div class="chat-avatar">K</div>
                        <div class="chat-bubble">
                            <div class="chat-user">Kamu</div>
                            <div class="chat-text">${message}</div>
                            <div class="chat-time">Sekarang</div>
                        </div>
                    `;

            const chatContainer = document.getElementById('chat-container');
            chatContainer.appendChild(chatMessage);
            chatInput.value = '';
            chatContainer.scrollTop = chatContainer.scrollHeight;

            // Show Typing Indicator
            const typingIndicator = document.createElement('div');
            typingIndicator.className = 'chat-message';
            typingIndicator.id = 'typing-indicator';
            typingIndicator.innerHTML = `
                <div class="chat-avatar">${AI_PERSONA.avatar}</div>
                <div class="chat-bubble">
                    <div class="chat-user">${AI_PERSONA.name}</div>
                    <div class="chat-text">Sedang mengetik...</div>
                </div>
            `;
            chatContainer.appendChild(typingIndicator);
            chatContainer.scrollTop = chatContainer.scrollHeight;

            try {
                if (GEMINI_API_KEY === "YOUR_GEMINI_API_KEY_HERE") {
                    throw new Error("API Key belum disetting. Silakan masukkan API Key Gemini di assets/script.js");
                }

                const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        contents: [{
                            parts: [{ text: SYSTEM_PROMPT + "\n\nUser: " + message }]
                        }]
                    })
                });

                const data = await response.json();

                // Remove typing indicator
                const indicator = document.getElementById('typing-indicator');
                if (indicator) indicator.remove();

                let replyText = "Maaf, Eco-Friend sedang istirahat sebentar (Error API).";
                if (data.candidates && data.candidates[0].content) {
                    replyText = data.candidates[0].content.parts[0].text;
                } else if (data.error) {
                    console.error("Gemini Error:", data.error);
                    replyText = "Maaf, ada masalah koneksi dengan Eco-Friend: " + data.error.message;
                }

                // Display AI Response
                const replyMessage = document.createElement('div');
                replyMessage.className = 'chat-message';
                replyMessage.style.opacity = '0';
                replyMessage.innerHTML = `
                            <div class="chat-avatar">${AI_PERSONA.avatar}</div>
                            <div class="chat-bubble">
                                <div class="chat-user">${AI_PERSONA.name}</div>
                                <div class="chat-text"></div>
                                <div class="chat-time">Baru saja</div>
                            </div>
                        `;

                // Insert text safely
                replyMessage.querySelector('.chat-text').innerText = replyText;

                chatContainer.appendChild(replyMessage);

                // Animate entry
                anime({
                    targets: replyMessage,
                    opacity: [0, 1],
                    translateY: [20, 0],
                    duration: 500,
                    easing: 'easeOutQuad'
                });

                chatContainer.scrollTop = chatContainer.scrollHeight;

            } catch (error) {
                console.error(error);
                // Remove typing indicator
                const indicator = document.getElementById('typing-indicator');
                if (indicator) indicator.remove();

                notyf.error(error.message);
                // Fallback message
                const errorMessage = document.createElement('div');
                errorMessage.className = 'chat-message';
                errorMessage.innerHTML = `
                            <div class="chat-avatar">⚠️</div>
                            <div class="chat-bubble">
                                <div class="chat-user">System</div>
                                <div class="chat-text">${error.message}</div>
                                <div class="chat-time">System</div>
                            </div>
                        `;
                chatContainer.appendChild(errorMessage);
            }
        }
    });

    document.getElementById('chat-input').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            document.getElementById('send-message').click();
        }
    });


    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseenter', function () {
            gsap.to(this, {
                y: -10,
                duration: 0.5,
                ease: "power2.out"
            });
        });

        card.addEventListener('mouseleave', function () {
            gsap.to(this, {
                y: 0,
                duration: 0.5,
                ease: "power2.out"
            });
        });
    });


    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('section').forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });
    });


    document.querySelector('.notification-bell').addEventListener('click', function () {
        notyf.open({
            type: 'info',
            message: 'Anda memiliki 3 notifikasi baru:\n- Aksi bersih pantai minggu depan\n- Poin Anda telah mencapai 1250\n- Workshop daur ulang bulan depan',
            duration: 5000
        });
    });


    const userProfile = document.getElementById('user-profile');
    const profilePopup = document.getElementById('profile-popup');

    userProfile.addEventListener('click', function (e) {
        e.stopPropagation();
        profilePopup.classList.toggle('active');
    });


    document.addEventListener('click', function () {
        profilePopup.classList.remove('active');
    });


    profilePopup.addEventListener('click', function (e) {
        e.stopPropagation();
    });


    setTimeout(() => {
        notyf.success('Selamat datang di PURE! Mari bersama-sama selamatkan bumi.');
    }, 1000);

    // ========== PREMIUM FEATURES ========== //

    // Scroll Progress Bar
    const scrollProgressBar = document.querySelector('.scroll-progress-bar');

    function updateScrollProgress() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

        document.documentElement.style.setProperty('--scroll-progress', `${scrollPercent}%`);
    }

    window.addEventListener('scroll', throttle(updateScrollProgress, 50));

    // Back to Top Button
    const backToTopBtn = document.querySelector('.back-to-top');

    function toggleBackToTop() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    }

    window.addEventListener('scroll', throttle(toggleBackToTop, 100));

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Lazy Loading Images
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        lazyImages.forEach(img => img.classList.add('loaded'));
    }

    // Enhanced Card Animations with Stagger
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Auto-scroll chat to bottom when new message is added
    const chatContainerElement = document.getElementById('chat-container');
    if (chatContainerElement) {
        chatContainerElement.scrollTop = chatContainerElement.scrollHeight;
    }

    // Add ripple effect to buttons
    function createRipple(event) {
        const button = event.currentTarget;
        const ripple = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        ripple.style.width = ripple.style.height = `${diameter}px`;
        ripple.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        ripple.style.top = `${event.clientY - button.offsetTop - radius}px`;
        ripple.classList.add('ripple');

        const existingRipple = button.querySelector('.ripple');
        if (existingRipple) {
            existingRipple.remove();
        }

        button.appendChild(ripple);
    }

    const buttons = document.querySelectorAll('.btn, button');
    buttons.forEach(button => {
        button.addEventListener('click', createRipple);
    });

    // Performance: Debounce resize events
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            // Recalculate any layout-dependent features
            updateScrollProgress();
        }, 250);
    });

    // Accessibility: Keyboard navigation for cards
    cards.forEach(card => {
        card.setAttribute('tabindex', '0');
        card.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                card.click();
            }
        });
    });

    // Performance Monitor (Development only)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log('🚀 Performance Metrics:');
        console.log(`⏱️ Page Load: ${(perfData.loadEventEnd - perfData.fetchStart).toFixed(2)}ms`);
        console.log(`🎨 DOM Content Loaded: ${(perfData.domContentLoadedEventEnd - perfData.fetchStart).toFixed(2)}ms`);
    }

    // Service Worker Registration (for PWA capability)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            // Uncomment when you have a service worker file
            // navigator.serviceWorker.register('/sw.js')
            //     .then(reg => console.log('✅ Service Worker registered'))
            //     .catch(err => console.log('❌ Service Worker registration failed'));
        });
    }

    // Add smooth reveal for sections on scroll
    const revealSections = document.querySelectorAll('section');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    revealSections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        revealObserver.observe(section);
    });

    console.log('%c🌿 PURE - Planet Unity Resources Environment', 'color: #00E676; font-size: 20px; font-weight: bold;');
    console.log('%c✨ Website loaded successfully!', 'color: #2962FF; font-size: 14px;');
    console.log('%cMade with 💚 for a better planet', 'color: #00C853; font-size: 12px;');
}

/* --- MINIGAME LOGIC --- */
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas');
    if (!canvas) return; // Guard clause if canvas doesn't exist

    const ctx = canvas.getContext('2d');
    const startBtn = document.getElementById('start-game-btn');
    const restartBtn = document.getElementById('restart-game-btn');
    const overlay = document.getElementById('game-start-overlay');
    const gameOverModal = document.getElementById('game-over-modal');
    const scoreEl = document.getElementById('game-score');
    const finalScoreEl = document.getElementById('final-score');
    const livesContainer = document.getElementById('game-lives');

    let gameActive = false;
    let score = 0;
    let lives = 3;
    let animationId;
    let width, height;

    // Game Objects
    const basket = {
        x: 0,
        y: 0,
        width: 80,
        height: 60,
        color: '#FFD600'
    };

    let items = [];
    let particles = [];
    let spawnRate = 60; // Frames
    let frameCount = 0;
    let speedMultiplier = 1;

    // Assets (Emojis)
    const itemTypes = [
        { type: 'good', emoji: '♻️', score: 10 },
        { type: 'good', emoji: '🥤', score: 5 },
        { type: 'good', emoji: '📰', score: 5 },
        { type: 'good', emoji: '📦', score: 5 },
        { type: 'bad', emoji: '💣', score: -10 },
        { type: 'bad', emoji: '💨', score: -5 }
    ];

    function resizeCanvas() {
        const container = document.querySelector('.game-container');
        if (container) {
            width = container.clientWidth;
            height = container.clientHeight;
            canvas.width = width;
            canvas.height = height;
            basket.y = height - 80;
            // Ensure basket stays within bounds after resize
            if (basket.x > width - basket.width) basket.x = width - basket.width;
        }
    }

    window.addEventListener('resize', resizeCanvas);

    // Call resize initially, but also when game starts to be safe
    setTimeout(resizeCanvas, 1000); // Try after a second just in case

    // Input Handling
    function moveBasket(clientX) {
        if (!gameActive) return;
        const rect = canvas.getBoundingClientRect();
        basket.x = clientX - rect.left - basket.width / 2;

        // Clamp
        if (basket.x < 0) basket.x = 0;
        if (basket.x > width - basket.width) basket.x = width - basket.width;
    }

    canvas.addEventListener('mousemove', (e) => moveBasket(e.clientX));

    canvas.addEventListener('touchmove', (e) => {
        e.preventDefault(); // Prevent scrolling
        moveBasket(e.touches[0].clientX);
    }, { passive: false });

    function startGame() {
        resizeCanvas(); // Ensure size is correct
        gameActive = true;
        score = 0;
        lives = 3;
        items = [];
        particles = [];
        speedMultiplier = 1;
        frameCount = 0;
        scoreEl.innerText = score;
        updateLives();
        overlay.classList.add('hidden');
        gameOverModal.classList.remove('active');
        gameLoop();
    }

    function updateLives() {
        livesContainer.innerHTML = '';
        for (let i = 0; i < lives; i++) {
            livesContainer.innerHTML += '<i class="fas fa-heart"></i>';
        }
    }

    function createExplosion(x, y, color) {
        for (let i = 0; i < 10; i++) {
            particles.push({
                x: x,
                y: y,
                vx: (Math.random() - 0.5) * 10,
                vy: (Math.random() - 0.5) * 10,
                life: 1,
                color: color
            });
        }
    }

    function gameLoop() {
        if (!gameActive) return;

        ctx.clearRect(0, 0, width, height);

        // Draw Basket
        ctx.font = '50px Arial';
        ctx.fillText('🗑️', basket.x + 10, basket.y + 50);

        // Spawn Items
        frameCount++;
        if (frameCount % Math.floor(spawnRate / speedMultiplier) === 0) {
            const randomItem = itemTypes[Math.floor(Math.random() * itemTypes.length)];
            items.push({
                x: Math.random() * (width - 40),
                y: -50,
                ...randomItem,
                speed: (Math.random() * 2 + 2) * speedMultiplier
            });
        }

        // Increase difficulty
        if (frameCount % 500 === 0) {
            speedMultiplier += 0.1;
        }

        // Update & Draw Items
        for (let i = items.length - 1; i >= 0; i--) {
            let item = items[i];
            item.y += item.speed;

            ctx.font = '30px Arial';
            ctx.fillText(item.emoji, item.x, item.y);

            // Collision Detection
            if (
                item.x < basket.x + basket.width &&
                item.x + 30 > basket.x &&
                item.y < basket.y + basket.height &&
                item.y + 30 > basket.y
            ) {
                // Caught
                if (item.type === 'good') {
                    score += item.score;
                    createExplosion(item.x, item.y, '#00E676');
                } else {
                    score += item.score;
                    lives--;
                    updateLives();
                    createExplosion(item.x, item.y, '#FF5252');
                    if (lives <= 0) {
                        endGame();
                        return;
                    }
                }
                scoreEl.innerText = score;
                items.splice(i, 1);
            } else if (item.y > height) {
                items.splice(i, 1);
            }
        }

        // Update & Draw Particles
        for (let i = particles.length - 1; i >= 0; i--) {
            let p = particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.life -= 0.05;

            ctx.globalAlpha = p.life;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1;

            if (p.life <= 0) particles.splice(i, 1);
        }

        animationId = requestAnimationFrame(gameLoop);
    }

    function endGame() {
        gameActive = false;
        cancelAnimationFrame(animationId);
        finalScoreEl.innerText = score;
        gameOverModal.classList.add('active');
    }

    if (startBtn) startBtn.addEventListener('click', startGame);
    if (restartBtn) restartBtn.addEventListener('click', startGame);
});

/* --- Interactive Card Stack Slider Logic --- */
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider-container');
    if (!slider) return;

    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const items = document.querySelectorAll('.slider-item');
            slider.appendChild(items[0]);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            const items = document.querySelectorAll('.slider-item');
            slider.prepend(items[items.length - 1]);
        });
    }
});
