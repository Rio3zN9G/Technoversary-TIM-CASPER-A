
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

    // Initialize Particles.js
    if (window.particlesJS) {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
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
        { icon: "🥤", name: "Botol Plastik", price: "Rp 2.000/kg", type: "plastik" },
        { icon: "🛍️", name: "Kantong Plastik", price: "Rp 1.500/kg", type: "plastik" },
        { icon: "📦", name: "Kardus", price: "Rp 3.000/kg", type: "kertas" },
        { icon: "📰", name: "Koran", price: "Rp 2.500/kg", type: "kertas" },
        { icon: "🍶", name: "Botol Kaca", price: "Rp 1.800/kg", type: "kaca" },
        { icon: "🔩", name: "Kaleng", price: "Rp 2.200/kg", type: "logam" },
        { icon: "🔌", name: "Kabel Bekas", price: "Rp 5.000/kg", type: "elektronik" },
        { icon: "📱", name: "HP Rusak", price: "Rp 15.000/unit", type: "elektronik" },
        { icon: "🍂", name: "Daun Kering", price: "Rp 500/kg", type: "organik" },
        { icon: "🍏", name: "Sisa Makanan", price: "Rp 300/kg", type: "organik" }
    ];


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


    const wasteItemsContainer = document.querySelector('.waste-items');

    function renderWasteItems(filterType = 'all') {
        wasteItemsContainer.innerHTML = '';

        const filteredItems = filterType === 'all'
            ? wasteItemsData
            : wasteItemsData.filter(item => item.type === filterType);

        if (filteredItems.length === 0) {
            wasteItemsContainer.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--dark-gray);">Belum ada item untuk kategori ini.</div>';
            return;
        }

        filteredItems.forEach((item, index) => {
            const wasteItem = document.createElement('div');
            wasteItem.className = 'waste-item reveal-block';
            // Stagger delay for animation
            wasteItem.style.transitionDelay = `${index * 100}ms`;

            wasteItem.innerHTML = `
                <div class="waste-icon">${item.icon}</div>
                <h4>${item.name}</h4>
                <p>${item.price}</p>
            `;
            wasteItemsContainer.appendChild(wasteItem);

            // Observe the new item for animation
            observer.observe(wasteItem);
        });
    }

    // Initial render
    renderWasteItems('plastik'); // Default to plastik or 'all' based on design preference

    // Parallax Effect for Floating Elements
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        gsap.to('.floating-element', {
            x: (i) => (i + 1) * 30 * (mouseX - 0.5),
            y: (i) => (i + 1) * 30 * (mouseY - 0.5),
            duration: 1,
            ease: 'power2.out'
        });
    });


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

    window.addEventListener('scroll', setActiveNavItem);


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
            // Remove active class from all
            document.querySelectorAll('.category').forEach(cat => {
                cat.classList.remove('active');
            });

            // Add active class to clicked
            this.classList.add('active');

            // Get category type
            const type = this.textContent.toLowerCase().trim();

            // Render items
            renderWasteItems(type);
        });
    });


    // Smart Chat System
    const chatBotKnowledge = {
        "halo": ["Halo juga! Semangat menjaga bumi!", "Hai! Ada yang bisa dibantu terkait lingkungan?", "Halo! Senang bertemu sesama Eco-Warrior."],
        "hai": ["Halo! Mari kita buat bumi lebih hijau.", "Hai! Apa kabar hari ini?", "Halo! Siap beraksi untuk lingkungan?"],
        "sampah": ["Jangan lupa pilah sampahmu ya! Organik, Anorganik, dan B3.", "Sampah plastik bisa didaur ulang menjadi kerajinan lho.", "Sudah setor sampah ke Bank Sampah hari ini?", "Ingat 3R: Reduce, Reuse, Recycle!"],
        "plastik": ["Plastik butuh ratusan tahun untuk terurai. Kurangi penggunaannya yuk!", "Bawa botol minum sendiri bisa mengurangi sampah plastik lho.", "Daur ulang botol plastikmu di Bank Sampah PURE."],
        "poin": ["Kumpulkan poin dengan setor sampah dan selesaikan modul edukasi!", "Poin bisa ditukar dengan reward menarik lho.", "Cek leaderboard untuk lihat peringkat poinmu.", "Setiap 1kg sampah plastik bernilai 50 poin!"],
        "daur ulang": ["Daur ulang adalah langkah kecil berdampak besar.", "Botol plastik bekas bisa jadi pot tanaman yang cantik.", "Kertas bekas bisa didaur ulang jadi kertas baru lagi.", "Pisahkan sampahmu sebelum didaur ulang ya."],
        "banjir": ["Banjir sering disebabkan oleh sampah yang menyumbat saluran air.", "Mari jaga kebersihan sungai agar tidak banjir.", "Tanam pohon untuk membantu penyerapan air hujan.", "Jangan buang sampah sembarangan ya!"],
        "pohon": ["Satu pohon bisa menyuplai oksigen untuk 2 orang seumur hidup.", "Yuk ikut event penanaman pohon minggu depan!", "Pohon menyejukkan udara dan mengurangi polusi.", "Menanam pohon = menanam kehidupan."],
        "energi": ["Matikan lampu jika tidak digunakan untuk hemat energi.", "Gunakan energi terbarukan seperti panel surya.", "Hemat energi = hemat biaya dan selamatkan bumi."],
        "kompos": ["Sampah organik bisa dijadikan pupuk kompos lho.", "Kompos sangat baik untuk menyuburkan tanaman.", "Membuat kompos itu mudah, cukup siapkan wadah dan sampah organik."],
        "default": ["Wah, menarik sekali! Ceritakan lebih lanjut.", "Setuju banget!", "Terima kasih infonya, sangat bermanfaat.", "Semangat terus untuk menjaga lingkungan!", "Keren! Lanjutkan aksi baikmu.", "Mantap! Inspiratif sekali."]
    };

    document.getElementById('send-message').addEventListener('click', function () {
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

            // Analyze Message & Generate Response
            const lowerMsg = message.toLowerCase();
            let replyText = "";
            let matched = false;

            // Check for keywords
            for (const [key, answers] of Object.entries(chatBotKnowledge)) {
                if (key !== "default" && lowerMsg.includes(key)) {
                    replyText = answers[Math.floor(Math.random() * answers.length)];
                    matched = true;
                    break;
                }
            }

            // Fallback if no keyword matched
            if (!matched) {
                const defaults = chatBotKnowledge["default"];
                replyText = defaults[Math.floor(Math.random() * defaults.length)];
            }

            // Simulate Typing Delay
            const typingDelay = Math.random() * 1000 + 1000; // 1-2 seconds

            setTimeout(() => {
                const randomUser = onlineUsers[Math.floor(Math.random() * onlineUsers.length)];

                const replyMessage = document.createElement('div');
                replyMessage.className = 'chat-message';
                replyMessage.style.opacity = '0'; // Start hidden for animation
                replyMessage.innerHTML = `
                            <div class="chat-avatar">${randomUser.avatar}</div>
                            <div class="chat-bubble">
                                <div class="chat-user">${randomUser.name}</div>
                                <div class="chat-text">${replyText}</div>
                                <div class="chat-time">Baru saja</div>
                            </div>
                        `;

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

                // Play subtle pop sound if available (optional)
                // const popSound = new Audio('assets/media/pop.mp3');
                // popSound.play().catch(() => {});

            }, typingDelay);
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
        notyf.success('Selamat datang di EcoSphere! Mari bersama-sama selamatkan bumi.');
    }, 1000);
}
