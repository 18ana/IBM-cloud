// ==================== DATA ====================
const destinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    shortDesc: "Iconic white-washed buildings with stunning sunsets over the Aegean Sea",
    fullDesc: "Experience the magic of Santorini, where white-washed buildings cascade down volcanic cliffs, overlooking the deep blue Aegean Sea. This Greek island paradise offers breathtaking sunsets, ancient ruins, world-class cuisine, and unforgettable romantic moments.",
    price: 1299,
    rating: 4.9,
    duration: "7 Days / 6 Nights",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80",
      "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=600&q=80",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80",
      "https://images.unsplash.com/photo-1504512485720-7d83a16ee930?w=600&q=80"
    ],
    itinerary: [
      { day: 1, title: "Arrival & Welcome", desc: "Airport pickup, hotel check-in, welcome dinner at sunset restaurant" },
      { day: 2, title: "Oia Exploration", desc: "Walking tour of Oia, visit blue domes, wine tasting experience" },
      { day: 3, title: "Volcano Cruise", desc: "Full-day catamaran cruise to volcanic islands, hot springs visit" },
      { day: 4, title: "Ancient Akrotiri", desc: "Guided tour of ancient Akrotiri ruins, Red Beach afternoon" },
      { day: 5, title: "Fira & Wineries", desc: "Explore Fira town, cable car ride, premium winery tour" },
      { day: 6, title: "Beach Day", desc: "Relax at Kamari Beach, spa treatment, farewell dinner" },
      { day: 7, title: "Departure", desc: "Breakfast, airport transfer, departure" }
    ],
    services: ["5-Star Hotel", "Daily Breakfast", "Airport Transfers", "Guided Tours", "Wine Tastings", "Catamaran Cruise"],
    testimonials: [
      { name: "Sarah M.", text: "Absolutely magical! The sunset from Oia was beyond words.", rating: 5 },
      { name: "James & Emily", text: "Perfect honeymoon destination. Every detail was thoughtfully arranged.", rating: 5 }
    ]
  },
  {
    id: 2,
    name: "Bali, Indonesia",
    shortDesc: "Tropical paradise with ancient temples and lush rice terraces",
    fullDesc: "Discover the enchanting island of Bali, where ancient Hindu temples rise above misty jungle canopies, emerald rice terraces cascade down volcanic hillsides, and pristine beaches meet crystal-clear waters. Experience spiritual awakening, adventure, and relaxation.",
    price: 899,
    rating: 4.8,
    duration: "8 Days / 7 Nights",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&q=80",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=600&q=80",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&q=80",
      "https://images.unsplash.com/photo-1573790387438-4da905039392?w=600&q=80"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Paradise", desc: "Airport pickup, resort check-in, Balinese welcome ceremony" },
      { day: 2, title: "Ubud Cultural Tour", desc: "Sacred Monkey Forest, Tegallalang Rice Terraces, art villages" },
      { day: 3, title: "Temple Circuit", desc: "Tirta Empul, Gunung Kawi, traditional blessing ceremony" },
      { day: 4, title: "Adventure Day", desc: "White water rafting, jungle swing, waterfall visit" },
      { day: 5, title: "Mount Batur", desc: "Sunrise trek to volcanic crater, natural hot springs" },
      { day: 6, title: "Beach Escape", desc: "Transfer to Seminyak, beach club, sunset dinner" },
      { day: 7, title: "Island Hopping", desc: "Day trip to Nusa Penida, snorkeling with manta rays" },
      { day: 8, title: "Departure", desc: "Spa morning, airport transfer" }
    ],
    services: ["Luxury Villa", "All Meals", "Private Driver", "Temple Guides", "Adventure Activities", "Spa Treatment"],
    testimonials: [
      { name: "Michael R.", text: "The rice terraces at sunrise were absolutely breathtaking!", rating: 5 },
      { name: "Lisa K.", text: "Best cultural experience of my life. The guides were incredible.", rating: 5 }
    ]
  },
  {
    id: 3,
    name: "Swiss Alps",
    shortDesc: "Majestic mountain peaks with charming alpine villages",
    fullDesc: "Journey through the breathtaking Swiss Alps, where snow-capped peaks pierce azure skies, pristine lakes mirror mountain majesty, and charming villages preserve centuries of alpine tradition. Experience world-class skiing, scenic train rides, and Swiss hospitality.",
    price: 2199,
    rating: 4.9,
    duration: "6 Days / 5 Nights",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
      "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=600&q=80",
      "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=600&q=80",
      "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=600&q=80"
    ],
    itinerary: [
      { day: 1, title: "Zurich Arrival", desc: "Airport pickup, scenic drive to Interlaken, hotel check-in" },
      { day: 2, title: "Jungfrau Excursion", desc: "Train to Top of Europe, ice palace, alpine views" },
      { day: 3, title: "Lake Lucerne", desc: "Steamboat cruise, Mount Pilatus cable car, Chapel Bridge" },
      { day: 4, title: "Zermatt & Matterhorn", desc: "Scenic train ride, Gornergrat, mountain photography" },
      { day: 5, title: "Alpine Adventure", desc: "Paragliding or hiking, cheese fondue experience" },
      { day: 6, title: "Departure", desc: "Swiss chocolate workshop, Zurich transfer" }
    ],
    services: ["4-Star Hotels", "Swiss Travel Pass", "Mountain Excursions", "Cable Car Access", "Traditional Dinners", "Photography Guide"],
    testimonials: [
      { name: "David & Anna", text: "The Matterhorn views were absolutely spectacular!", rating: 5 },
      { name: "Tom H.", text: "Swiss precision meets natural beauty. Unforgettable experience.", rating: 5 }
    ]
  },
  {
    id: 4,
    name: "Maldives",
    shortDesc: "Crystal-clear waters and overwater luxury villas",
    fullDesc: "Escape to the Maldives, where overwater villas hover above crystal-clear turquoise lagoons, pristine white sand beaches stretch to the horizon, and vibrant coral reefs teem with marine life. Experience ultimate luxury and tranquility in paradise.",
    price: 3499,
    rating: 5.0,
    duration: "5 Days / 4 Nights",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80",
      "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=600&q=80",
      "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=600&q=80"
    ],
    itinerary: [
      { day: 1, title: "Paradise Arrival", desc: "Seaplane transfer, villa check-in, sunset champagne" },
      { day: 2, title: "Ocean Adventures", desc: "Snorkeling safari, dolphin cruise, beach dinner" },
      { day: 3, title: "Spa & Relaxation", desc: "Overwater spa treatment, underwater restaurant" },
      { day: 4, title: "Island Exploration", desc: "Local island visit, fishing trip, stargazing" },
      { day: 5, title: "Departure", desc: "Sunrise yoga, breakfast, seaplane transfer" }
    ],
    services: ["Overwater Villa", "All-Inclusive Dining", "Seaplane Transfers", "Water Sports", "Spa Access", "Butler Service"],
    testimonials: [
      { name: "Jennifer L.", text: "Pure paradise! The overwater villa exceeded all expectations.", rating: 5 },
      { name: "Mark & Susan", text: "The most romantic getaway we've ever had. Absolutely perfect.", rating: 5 }
    ]
  },
  {
    id: 5,
    name: "Kyoto, Japan",
    shortDesc: "Ancient temples and serene bamboo forests",
    fullDesc: "Step into the timeless beauty of Kyoto, Japan's cultural heart, where ancient temples and shrines stand amid serene zen gardens, geishas glide through traditional streets, and the famous bamboo groves whisper ancient secrets. Experience harmony, tradition, and natural beauty.",
    price: 1599,
    rating: 4.8,
    duration: "7 Days / 6 Nights",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80",
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80",
      "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=600&q=80",
      "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=600&q=80"
    ],
    itinerary: [
      { day: 1, title: "Welcome to Kyoto", desc: "Bullet train from Tokyo, ryokan check-in, kaiseki dinner" },
      { day: 2, title: "Eastern Temples", desc: "Kiyomizu-dera, Gion district, geisha experience" },
      { day: 3, title: "Zen Gardens", desc: "Ryoan-ji, Kinkaku-ji Golden Pavilion, tea ceremony" },
      { day: 4, title: "Arashiyama", desc: "Bamboo grove, monkey park, boat ride, temple hopping" },
      { day: 5, title: "Fushimi & Sake", desc: "Thousands of torii gates, sake brewery tour" },
      { day: 6, title: "Nara Day Trip", desc: "Deer park, Todai-ji temple, ancient treasures" },
      { day: 7, title: "Departure", desc: "Morning meditation, farewell breakfast" }
    ],
    services: ["Traditional Ryokan", "JR Rail Pass", "Private Guides", "Tea Ceremonies", "Kaiseki Meals", "Cultural Workshops"],
    testimonials: [
      { name: "Rachel W.", text: "Walking through the bamboo forest was absolutely magical.", rating: 5 },
      { name: "Chris & Amy", text: "The cultural immersion was incredible. Best trip ever!", rating: 5 }
    ]
  },
  {
    id: 6,
    name: "Amalfi Coast, Italy",
    shortDesc: "Dramatic coastline with colorful cliffside villages",
    fullDesc: "Wind along the spectacular Amalfi Coast, where pastel-colored villages cling to dramatic cliffs above azure Mediterranean waters, fragrant lemon groves perfume the air, and Italian dolce vita comes alive. Experience la bella vita with world-class cuisine and timeless beauty.",
    price: 1899,
    rating: 4.9,
    duration: "6 Days / 5 Nights",
    image: "https://images.unsplash.com/photo-1533606688076-b6683a5f59f1?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1455587734955-081b22074882?w=600&q=80",
      "https://images.unsplash.com/photo-1534008897995-27a23e859048?w=600&q=80",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&q=80",
      "https://images.unsplash.com/photo-1559386484-97dfc0e15539?w=600&q=80"
    ],
    itinerary: [
      { day: 1, title: "Positano Arrival", desc: "Naples airport pickup, scenic drive, hotel check-in" },
      { day: 2, title: "Amalfi & Ravello", desc: "Historic Amalfi, Villa Rufolo gardens, cliffside lunch" },
      { day: 3, title: "Capri Island", desc: "Blue Grotto, chairlift to Monte Solaro, shopping" },
      { day: 4, title: "Path of the Gods", desc: "Legendary coastal hike, lemon grove visit" },
      { day: 5, title: "Cooking & Leisure", desc: "Italian cooking class, beach time, farewell dinner" },
      { day: 6, title: "Departure", desc: "Limoncello tasting, Naples transfer" }
    ],
    services: ["Boutique Hotel", "Daily Breakfast", "Private Transfers", "Boat Tours", "Cooking Class", "Wine Tastings"],
    testimonials: [
      { name: "Patricia N.", text: "The views from Ravello were absolutely stunning!", rating: 5 },
      { name: "Robert M.", text: "Italian hospitality at its finest. Food was incredible.", rating: 5 }
    ]
  }
];

const packages = [
  {
    name: "Explorer",
    price: 799,
    features: ["3-Star Accommodation", "Airport Transfers", "Breakfast Included", "City Tours", "Travel Insurance"],
    popular: false
  },
  {
    name: "Premium",
    price: 1499,
    features: ["4-Star Accommodation", "All Transfers", "All Meals Included", "Private Tours", "Travel Insurance", "Spa Access", "24/7 Support"],
    popular: true
  },
  {
    name: "Luxury",
    price: 2999,
    features: ["5-Star Accommodation", "Private Jet Transfers", "Fine Dining", "Personal Concierge", "Premium Insurance", "Exclusive Experiences", "Spa & Wellness", "VIP Access"],
    popular: false
  }
];

const whyChooseUs = [
  { icon: "🌟", title: "Curated Experiences", desc: "Handpicked destinations and activities tailored to your preferences" },
  { icon: "🛡️", title: "Safe Travel", desc: "Comprehensive safety measures and 24/7 emergency support" },
  { icon: "💎", title: "Premium Quality", desc: "Only the finest accommodations and services for our guests" },
  { icon: "🤝", title: "Local Experts", desc: "Experienced local guides with insider knowledge" }
];

// ==================== STATE MANAGEMENT ====================
let currentPage = 'home';
let currentDestinationId = null;
let lightboxImage = null;
let showBookingModal = false;
let showLightbox = false;

// Default config
const defaultConfig = {
  hero_title: "Discover Your Next Adventure",
  hero_subtitle: "Explore breathtaking destinations around the world with our expertly curated travel experiences",
  company_name: "Wanderlust",
  primary_color: "#0D5C63",
  secondary_color: "#14919B",
  text_color: "#1A1A2E",
  background_color: "#FDF8F4",
  accent_color: "#D4AF37"
};

let config = { ...defaultConfig };

// ==================== ROUTING ====================
function navigateTo(page, id = null) {
  currentPage = page;
  currentDestinationId = id;
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function getDestinationById(id) {
  return destinations.find(d => d.id === parseInt(id));
}

// ==================== HELPER FUNCTIONS ====================
function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  let stars = '';
  for (let i = 0; i < 5; i++) {
    if (i < fullStars || (i === fullStars && hasHalf)) {
      stars += '<span class="star">★</span>';
    } else {
      stars += '<span class="text-gray-300">★</span>';
    }
  }
  return stars;
}

function openBookingModal() {
  showBookingModal = true;
  render();
}

function closeBookingModal(e) {
  if (e && e.target !== e.currentTarget) return;
  showBookingModal = false;
  render();
}

function openLightbox(img) {
  lightboxImage = img;
  showLightbox = true;
  render();
}

function closeLightbox() {
  showLightbox = false;
  lightboxImage = null;
  render();
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('hidden');
}

function selectPackage(name) {
  openBookingModal();
}

function handleNewsletter(e) {
  e.preventDefault();
  const email = document.getElementById('newsletterEmail').value;
  const messageEl = document.getElementById('newsletterMessage');
  if (email && email.includes('@')) {
    messageEl.textContent = '✓ Thank you for subscribing!';
    messageEl.classList.remove('hidden', 'text-red-400');
    messageEl.classList.add('text-green-400');
    document.getElementById('newsletterEmail').value = '';
  } else {
    messageEl.textContent = 'Please enter a valid email address';
    messageEl.classList.remove('hidden', 'text-green-400');
    messageEl.classList.add('text-red-400');
  }
}

function handleBooking(e) {
  e.preventDefault();
  const messageEl = document.getElementById('bookingMessage');
  const name  = document.getElementById('bookingName').value;
  const email = document.getElementById('bookingEmail').value;
  const date  = document.getElementById('bookingDate').value;
  if (name && email && date) {
    messageEl.innerHTML = `
      <div class="text-green-600">
        <svg class="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <p class="font-semibold">Booking Request Sent!</p>
        <p class="text-sm mt-1">We'll contact you at ${email} within 24 hours.</p>
      </div>
    `;
    messageEl.classList.remove('hidden');
    setTimeout(() => { closeBookingModal(); }, 3000);
  }
}

// ==================== SCROLL ANIMATIONS ====================
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
}

function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  const appWrapper = document.querySelector('.app-wrapper');
  if (appWrapper) {
    appWrapper.addEventListener('scroll', () => {
      if (appWrapper.scrollTop > 50) {
        navbar.classList.add('bg-white', 'shadow-lg');
      } else {
        navbar.classList.remove('bg-white', 'shadow-lg');
      }
    });
  }
}

// ==================== COMPONENTS ====================

function Navbar() {
  return `
    <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" id="navbar">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <div class="flex items-center cursor-pointer" onclick="navigateTo('home')">
            <span class="text-2xl font-display font-bold" style="color:${config.primary_color}">${config.company_name}</span>
            <span class="ml-1 text-gold">✈</span>
          </div>
          <div class="hidden md:flex items-center space-x-8">
            <a href="#destinations" class="text-dark hover:text-primary transition-colors font-medium">Destinations</a>
            <a href="#packages" class="text-dark hover:text-primary transition-colors font-medium">Packages</a>
            <a href="#about" class="text-dark hover:text-primary transition-colors font-medium">About</a>
            <button onclick="openBookingModal()" class="btn-shimmer px-6 py-2.5 rounded-full text-white font-semibold transition-all hover:shadow-lg" style="background:${config.primary_color}">
              Book Now
            </button>
          </div>
          <button class="md:hidden text-dark" onclick="toggleMobileMenu()">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>
      <div id="mobileMenu" class="hidden md:hidden bg-white shadow-lg">
        <div class="px-4 py-4 space-y-3">
          <a href="#destinations" class="block text-dark hover:text-primary transition-colors font-medium py-2">Destinations</a>
          <a href="#packages" class="block text-dark hover:text-primary transition-colors font-medium py-2">Packages</a>
          <a href="#about" class="block text-dark hover:text-primary transition-colors font-medium py-2">About</a>
          <button onclick="openBookingModal()" class="w-full px-6 py-2.5 rounded-full text-white font-semibold" style="background:${config.primary_color}">Book Now</button>
        </div>
      </div>
    </nav>
  `;
}

function HeroSection() {
  return `
    <section class="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 parallax-bg" id="heroBg">
        <img src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&q=80"
             alt="Beautiful beach destination"
             class="w-full h-full object-cover"
             loading="lazy"
             onerror="this.style.background='linear-gradient(135deg,#0D5C63,#14919B)'; this.alt='Travel background';">
        <div class="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark/70"></div>
      </div>
      <div class="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 class="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
          ${config.hero_title}
        </h1>
        <p class="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto animate-fade-in-up delay-200">
          ${config.hero_subtitle}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
          <a href="#destinations" class="btn-shimmer px-8 py-4 rounded-full text-white font-semibold text-lg transition-all hover:shadow-2xl hover:scale-105" style="background:${config.primary_color}">
            Explore Destinations
          </a>
          <button onclick="openBookingModal()" class="px-8 py-4 rounded-full font-semibold text-lg border-2 border-white text-white hover:bg-white hover:text-dark transition-all">
            Plan Your Trip
          </button>
        </div>
      </div>
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <a href="#destinations" class="text-white opacity-80 hover:opacity-100 transition-opacity">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </a>
      </div>
    </section>
  `;
}

function DestinationCard(dest, index) {
  return `
    <article class="destination-card bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer scroll-animate"
             style="animation-delay:${index * 0.1}s"
             onclick="navigateTo('destination',${dest.id})">
      <div class="relative h-56 overflow-hidden">
        <img src="${dest.image}" alt="${dest.name}"
             class="card-image w-full h-full object-cover transition-transform duration-500"
             loading="lazy"
             onerror="this.style.background='linear-gradient(135deg,#0D5C63,#14919B)'; this.alt='Destination image';">
        <div class="absolute top-4 right-4 glass px-3 py-1 rounded-full">
          <span class="text-white text-sm font-semibold">From $${dest.price}</span>
        </div>
        <div class="absolute bottom-4 left-4 flex items-center gap-1">
          ${renderStars(dest.rating)}
          <span class="text-white text-sm ml-1">${dest.rating}</span>
        </div>
      </div>
      <div class="p-6">
        <h3 class="font-display text-xl font-bold mb-2" style="color:${config.primary_color}">${dest.name}</h3>
        <p class="text-gray-600 text-sm mb-4 line-clamp-2">${dest.shortDesc}</p>
        <div class="flex items-center justify-between">
          <span class="text-sm text-gray-500">${dest.duration}</span>
          <button class="flex items-center gap-2 font-semibold transition-colors hover:gap-3" style="color:${config.primary_color}">
            View Details
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </article>
  `;
}

function DestinationsSection() {
  return `
    <section id="destinations" class="py-20 px-4" style="background:${config.background_color}">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 scroll-animate">
          <span class="text-sm font-semibold tracking-wider uppercase" style="color:${config.secondary_color}">Popular Destinations</span>
          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4" style="color:${config.primary_color}">
            Explore the World's Best Places
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            From tropical paradises to mountain retreats, discover handpicked destinations that promise unforgettable experiences
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          ${destinations.map((dest, i) => DestinationCard(dest, i)).join('')}
        </div>
      </div>
    </section>
  `;
}

function WhyChooseUsSection() {
  return `
    <section id="about" class="py-20 px-4 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 scroll-animate">
          <span class="text-sm font-semibold tracking-wider uppercase" style="color:${config.secondary_color}">Why Travelers Love Us</span>
          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4" style="color:${config.primary_color}">
            Your Journey, Our Passion
          </h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          ${whyChooseUs.map((item, i) => `
            <div class="text-center p-8 rounded-2xl bg-cream hover:shadow-xl transition-all duration-300 hover:-translate-y-2 scroll-animate" style="animation-delay:${i * 0.1}s">
              <div class="text-5xl mb-4">${item.icon}</div>
              <h3 class="font-display text-xl font-bold mb-3" style="color:${config.primary_color}">${item.title}</h3>
              <p class="text-gray-600">${item.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function PricingSection() {
  return `
    <section id="packages" class="py-20 px-4" style="background:linear-gradient(180deg,${config.background_color} 0%,white 100%)">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 scroll-animate">
          <span class="text-sm font-semibold tracking-wider uppercase" style="color:${config.secondary_color}">Pricing Plans</span>
          <h2 class="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4" style="color:${config.primary_color}">
            Choose Your Perfect Package
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Flexible packages designed to match your travel style and budget</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          ${packages.map((pkg, i) => `
            <div class="relative bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 scroll-animate ${pkg.popular ? 'ring-2 md:scale-110 md:py-12' : ''}"
                 style="animation-delay:${i * 0.1}s${pkg.popular ? `; outline:2px solid ${config.primary_color}` : ''}">
              ${pkg.popular ? `<div class="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-1 rounded-full text-white text-sm font-semibold" style="background:${config.primary_color}">Most Popular</div>` : ''}
              <h3 class="font-display text-2xl font-bold text-center mb-2" style="color:${config.primary_color}">${pkg.name}</h3>
              <div class="text-center mb-6">
                <span class="text-4xl font-bold" style="color:${config.text_color}">$${pkg.price}</span>
                <span class="text-gray-500">/person</span>
              </div>
              <ul class="space-y-3 mb-8">
                ${pkg.features.map(f => `
                  <li class="flex items-center gap-3">
                    <svg class="w-5 h-5 flex-shrink-0" style="color:${config.secondary_color}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span class="text-gray-600">${f}</span>
                  </li>
                `).join('')}
              </ul>
              <button onclick="selectPackage('${pkg.name}')"
                      class="w-full py-3 rounded-full font-semibold transition-all hover:shadow-lg ${pkg.popular ? 'text-white' : 'border-2'}"
                      style="${pkg.popular ? `background:${config.primary_color}` : `border-color:${config.primary_color}; color:${config.primary_color}`}"
                      onmouseover="${!pkg.popular ? `this.style.background='${config.primary_color}'; this.style.color='white'` : ''}"
                      onmouseout="${!pkg.popular ? `this.style.background='transparent'; this.style.color='${config.primary_color}'` : ''}">
                Get Started
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function Footer() {
  return `
    <footer class="text-white py-16 px-4" style="background:${config.primary_color}">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div class="flex items-center mb-4">
              <span class="text-2xl font-display font-bold">${config.company_name}</span>
              <span class="ml-1 text-gold">✈</span>
            </div>
            <p class="text-white/80 mb-6">Creating unforgettable travel experiences since 2010. Your adventure awaits.</p>
            <div class="flex gap-4">
              <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><span>📘</span></a>
              <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><span>📸</span></a>
              <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><span>🐦</span></a>
            </div>
          </div>
          <div>
            <h4 class="font-display font-bold text-lg mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li><a href="#destinations" class="text-white/80 hover:text-white transition-colors">Destinations</a></li>
              <li><a href="#packages" class="text-white/80 hover:text-white transition-colors">Packages</a></li>
              <li><a href="#about" class="text-white/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" class="text-white/80 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-display font-bold text-lg mb-4">Support</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-white/80 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" class="text-white/80 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" class="text-white/80 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" class="text-white/80 hover:text-white transition-colors">Cancellation Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-display font-bold text-lg mb-4">Newsletter</h4>
            <p class="text-white/80 mb-4">Subscribe for travel tips and exclusive deals</p>
            <form onsubmit="handleNewsletter(event)" class="space-y-3">
              <input type="email" id="newsletterEmail" placeholder="Enter your email"
                     class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors"
                     required>
              <button type="submit" class="w-full py-3 rounded-lg font-semibold transition-all hover:opacity-90"
                      style="background:${config.accent_color}; color:${config.primary_color}">
                Subscribe
              </button>
            </form>
            <p id="newsletterMessage" class="text-sm mt-2 text-white/80 hidden"></p>
          </div>
        </div>
        <div class="border-t border-white/20 pt-8 text-center text-white/60">
          <p>© 2024 ${config.company_name} Travel. All rights reserved. Made with ❤️ for travelers.</p>
        </div>
      </div>
    </footer>
  `;
}

function BookingModal() {
  if (!showBookingModal) return '';
  return `
    <div class="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-overlay" style="background:rgba(0,0,0,0.6)" onclick="closeBookingModal(event)">
      <div class="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90%] overflow-y-auto modal-content animate-scale-in" onclick="event.stopPropagation()">
        <div class="flex items-center justify-between mb-6">
          <h2 class="font-display text-2xl font-bold" style="color:${config.primary_color}">Book Your Trip</h2>
          <button onclick="closeBookingModal()" class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <form onsubmit="handleBooking(event)" class="space-y-5">
          <div>
            <label for="bookingName" class="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
            <input type="text" id="bookingName" required placeholder="John Doe"
                   class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 transition-all">
          </div>
          <div>
            <label for="bookingEmail" class="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
            <input type="email" id="bookingEmail" required placeholder="john@example.com"
                   class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 transition-all">
          </div>
          <div>
            <label for="bookingDate" class="block text-sm font-medium text-gray-700 mb-2">Preferred Travel Date *</label>
            <input type="date" id="bookingDate" required
                   class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 transition-all">
          </div>
          <div>
            <label for="bookingTravelers" class="block text-sm font-medium text-gray-700 mb-2">Number of Travelers</label>
            <select id="bookingTravelers"
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 transition-all">
              <option value="1">1 Traveler</option>
              <option value="2" selected>2 Travelers</option>
              <option value="3">3 Travelers</option>
              <option value="4">4 Travelers</option>
              <option value="5+">5+ Travelers</option>
            </select>
          </div>
          <div id="bookingMessage" class="hidden p-4 rounded-xl text-center"></div>
          <button type="submit" class="btn-shimmer w-full py-4 rounded-xl text-white font-semibold text-lg transition-all hover:shadow-lg"
                  style="background:${config.primary_color}">
            Request Booking
          </button>
          <p class="text-center text-sm text-gray-500">We'll contact you within 24 hours to confirm your booking</p>
        </form>
      </div>
    </div>
  `;
}

function LightboxModal() {
  if (!showLightbox || !lightboxImage) return '';
  return `
    <div class="fixed inset-0 z-[100] flex items-center justify-center p-4 modal-overlay" style="background:rgba(0,0,0,0.9)" onclick="closeLightbox()">
      <button onclick="closeLightbox()" class="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
      <img src="${lightboxImage}" alt="Gallery preview"
           class="max-w-full max-h-[90%] object-contain rounded-xl animate-scale-in"
           loading="lazy"
           onerror="this.style.background='#374151';">
    </div>
  `;
}

// ==================== PAGES ====================

function DestinationDetailsPage() {
  const dest = getDestinationById(currentDestinationId);
  if (!dest) {
    return `
      <div class="min-h-screen flex items-center justify-center">
        <div class="text-center">
          <h1 class="text-4xl font-display font-bold mb-4">Destination Not Found</h1>
          <button onclick="navigateTo('home')" class="px-6 py-3 rounded-full text-white" style="background:${config.primary_color}">Back to Home</button>
        </div>
      </div>
    `;
  }

  return `
    ${Navbar()}
    <section class="relative h-[60%] min-h-[400px] pt-20">
      <img src="${dest.image}" alt="${dest.name}" class="w-full h-full object-cover" loading="lazy"
           onerror="this.style.background='linear-gradient(135deg,#0D5C63,#14919B)';">
      <div class="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/40 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 p-8">
        <div class="max-w-7xl mx-auto">
          <button onclick="navigateTo('home')" class="flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            Back to Destinations
          </button>
          <h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">${dest.name}</h1>
          <div class="flex flex-wrap items-center gap-4 text-white animate-fade-in-up delay-100">
            <div class="flex items-center gap-1">${renderStars(dest.rating)}<span class="ml-2">${dest.rating} Rating</span></div>
            <span class="text-white/60">|</span>
            <span>${dest.duration}</span>
            <span class="text-white/60">|</span>
            <span class="text-2xl font-bold">From $${dest.price}</span>
          </div>
        </div>
      </div>
    </section>

    <main class="py-16 px-4" style="background:${config.background_color}">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div class="lg:col-span-2 space-y-12">

            <section class="bg-white rounded-2xl p-8 shadow-lg scroll-animate">
              <h2 class="font-display text-2xl font-bold mb-4" style="color:${config.primary_color}">About This Destination</h2>
              <p class="text-gray-600 leading-relaxed">${dest.fullDesc}</p>
            </section>

            <section class="scroll-animate">
              <h2 class="font-display text-2xl font-bold mb-6" style="color:${config.primary_color}">Photo Gallery</h2>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                ${dest.gallery.map((img, i) => `
                  <div class="relative group cursor-pointer overflow-hidden rounded-xl aspect-square" onclick="openLightbox('${img}')">
                    <img src="${img}" alt="Gallery image ${i + 1}"
                         class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                         loading="lazy" onerror="this.style.background='#e5e7eb';">
                    <div class="absolute inset-0 bg-dark/0 group-hover:bg-dark/30 transition-colors flex items-center justify-center">
                      <svg class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                      </svg>
                    </div>
                  </div>
                `).join('')}
              </div>
            </section>

            <section class="bg-white rounded-2xl p-8 shadow-lg scroll-animate">
              <h2 class="font-display text-2xl font-bold mb-8" style="color:${config.primary_color}">Trip Itinerary</h2>
              <div class="relative pl-8 border-l-2" style="border-color:${config.primary_color}">
                ${dest.itinerary.map((item, i) => `
                  <div class="timeline-item relative pb-8 ${i === dest.itinerary.length - 1 ? 'pb-0' : ''}">
                    <div class="bg-cream rounded-xl p-6 ml-4">
                      <span class="text-sm font-semibold" style="color:${config.secondary_color}">Day ${item.day}</span>
                      <h3 class="font-display text-lg font-bold mt-1 mb-2" style="color:${config.primary_color}">${item.title}</h3>
                      <p class="text-gray-600">${item.desc}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </section>

            <section class="scroll-animate">
              <h2 class="font-display text-2xl font-bold mb-6" style="color:${config.primary_color}">Traveler Reviews</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                ${dest.testimonials.map(t => `
                  <div class="bg-white rounded-2xl p-6 shadow-lg">
                    <div class="flex items-center gap-1 mb-4">${renderStars(t.rating)}</div>
                    <p class="text-gray-600 italic mb-4">"${t.text}"</p>
                    <p class="font-semibold" style="color:${config.primary_color}">${t.name}</p>
                  </div>
                `).join('')}
              </div>
            </section>
          </div>

          <div class="space-y-8">
            <div class="bg-white rounded-2xl p-8 shadow-lg sticky top-24 scroll-animate">
              <div class="text-center mb-6">
                <span class="text-sm text-gray-500">Starting from</span>
                <div class="text-4xl font-bold" style="color:${config.primary_color}">$${dest.price}</div>
                <span class="text-gray-500">per person</span>
              </div>
              <button onclick="openBookingModal()"
                      class="btn-shimmer w-full py-4 rounded-xl text-white font-semibold text-lg transition-all hover:shadow-lg mb-4"
                      style="background:${config.primary_color}">
                Book Now
              </button>
              <p class="text-center text-sm text-gray-500">Free cancellation up to 24 hours before</p>
            </div>

            <div class="bg-white rounded-2xl p-8 shadow-lg scroll-animate">
              <h3 class="font-display text-xl font-bold mb-6" style="color:${config.primary_color}">What's Included</h3>
              <ul class="space-y-4">
                ${dest.services.map(s => `
                  <li class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-full flex items-center justify-center" style="background:${config.background_color}">
                      <svg class="w-4 h-4" style="color:${config.secondary_color}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span class="text-gray-700">${s}</span>
                  </li>
                `).join('')}
              </ul>
            </div>

            <div class="rounded-2xl p-8 text-white" style="background:linear-gradient(135deg,${config.primary_color},${config.secondary_color})">
              <h3 class="font-display text-xl font-bold mb-4">Need Help Planning?</h3>
              <p class="text-white/90 mb-6">Our travel experts are ready to assist you in creating the perfect trip.</p>
              <button class="w-full py-3 rounded-xl font-semibold transition-all hover:opacity-90"
                      style="background:white; color:${config.primary_color}">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
    ${Footer()}
  `;
}

function HomePage() {
  return `
    ${Navbar()}
    ${HeroSection()}
    ${DestinationsSection()}
    ${WhyChooseUsSection()}
    ${PricingSection()}
    ${Footer()}
  `;
}

// ==================== MAIN RENDER ====================
function render() {
  const app = document.getElementById('app');
  let content = '';
  if (currentPage === 'home') {
    content = HomePage();
  } else if (currentPage === 'destination') {
    content = DestinationDetailsPage();
  }
  content += BookingModal();
  content += LightboxModal();
  app.innerHTML = content;
  setTimeout(() => {
    initScrollAnimations();
    initNavbarScroll();
  }, 100);
}

// ==================== SDK INITIALIZATION ====================
async function onConfigChange(newConfig) {
  config = { ...defaultConfig, ...newConfig };
  render();
}

function mapToCapabilities(cfg) {
  return {
    recolorables: [
      { get: () => cfg.background_color || defaultConfig.background_color, set: (v) => { cfg.background_color = v; window.elementSdk.setConfig({ background_color: v }); } },
      { get: () => cfg.primary_color   || defaultConfig.primary_color,   set: (v) => { cfg.primary_color   = v; window.elementSdk.setConfig({ primary_color:   v }); } },
      { get: () => cfg.text_color      || defaultConfig.text_color,      set: (v) => { cfg.text_color      = v; window.elementSdk.setConfig({ text_color:      v }); } },
      { get: () => cfg.secondary_color || defaultConfig.secondary_color, set: (v) => { cfg.secondary_color = v; window.elementSdk.setConfig({ secondary_color: v }); } },
      { get: () => cfg.accent_color    || defaultConfig.accent_color,    set: (v) => { cfg.accent_color    = v; window.elementSdk.setConfig({ accent_color:    v }); } }
    ],
    borderables: [],
    fontEditable: {
      get: () => cfg.font_family || 'Playfair Display',
      set: (v) => { cfg.font_family = v; window.elementSdk.setConfig({ font_family: v }); }
    },
    fontSizeable: {
      get: () => cfg.font_size || 16,
      set: (v) => { cfg.font_size = v; window.elementSdk.setConfig({ font_size: v }); }
    }
  };
}

function mapToEditPanelValues(cfg) {
  return new Map([
    ["hero_title",    cfg.hero_title    || defaultConfig.hero_title],
    ["hero_subtitle", cfg.hero_subtitle || defaultConfig.hero_subtitle],
    ["company_name",  cfg.company_name  || defaultConfig.company_name]
  ]);
}

// Initialize
// Initialize
if (window.elementSdk) {
  window.elementSdk.init({ defaultConfig, onConfigChange, mapToCapabilities, mapToEditPanelValues });
}

render();

// Watson Assistant Chat
window.watsonAssistantChatOptions = {
  integrationID: "43f24ff2-33ed-428b-b525-577bea75c61a",
  region: "us-south",
  serviceInstanceID: "43f3e55f-82f6-49c7-a89b-12b95b5514f1",
  onLoad: async (instance) => { await instance.render(); }
};

setTimeout(function() {
  const t = document.createElement('script');
  t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
    (window.watsonAssistantChatOptions.clientVersion || 'latest') +
    "/WatsonAssistantChatEntry.js";
  document.head.appendChild(t);
});