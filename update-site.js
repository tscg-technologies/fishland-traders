const fs = require('fs');

const OLD_SVG_PATH = 'M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.97.545 1.76.837 2.796.837 3.183 0 5.77-2.587 5.77-5.766 0-3.18-2.587-5.766-5.77-5.766zm8.411 5.766c0 4.655-3.787 8.442-8.411 8.442-1.424 0-2.766-.356-3.95-1.019l-4.526 1.187 1.209-4.417c-.742-1.258-1.144-2.709-1.144-4.203 0-4.655 3.787-8.442 8.411-8.442 4.624 0 8.411 3.787 8.411 8.442z';
const AUTHENTIC_WA_SVG_PATH = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z';

const FLOATING_WIDGET_HTML = `  <!-- Floating WhatsApp Widget (Creative, Professional, Live Online Pill) -->
  <a href="https://wa.me/910000000000?text=Hello%20Fish%20Land%20Traders%2C%20I%20would%20like%20to%20enquire%20about%20daily%20fresh%20seafood%20rates." class="floating-wa-widget" target="_blank" rel="noopener noreferrer" aria-label="Chat directly on WhatsApp with Fish Land Traders">
    <span class="floating-wa-pill">
      <span class="wa-pulse-dot"></span>
      <span class="wa-pill-text">Chat on WhatsApp</span>
    </span>
    <span class="floating-wa-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="${AUTHENTIC_WA_SVG_PATH}"/>
      </svg>
    </span>
  </a>`;

// -------------------------------------------------------------
// 1. UPDATE INDEX.HTML
// -------------------------------------------------------------
let indexHtml = fs.readFileSync('index.html', 'utf8');

const heroOldRegex = /<section class="hero-section" id="hero" aria-label="Seafood Showcase">[\s\S]*?<\/section>/;
const heroNew = `    <!-- ========================================================
         HERO SECTION: OFFICIAL STORE BANNER CAROUSEL
         (IMAGE-ONLY BANNERS, RESPONSIVE ACROSS ALL DEVICES)
         ======================================================== -->
    <section class="hero-section hero-banner-carousel" id="hero" aria-label="Fish Land Traders Store Banners">
      <div class="hero-slider-wrap">
        
        <!-- Slide 1: Official Banner 1 -->
        <div class="hero-slide active">
          <img src="assets/images/banners/client-banner-1.jpg" alt="Fish Land Traders Official Store Banner 1 - Daily Fresh Catch" class="hero-slide-bg" loading="eager">
        </div>

        <!-- Slide 2: Official Banner 2 -->
        <div class="hero-slide">
          <img src="assets/images/banners/client-banner-2.jpg" alt="Fish Land Traders Official Store Banner 2 - Wholesale Supply" class="hero-slide-bg" loading="lazy">
        </div>

        <!-- Slide 3: Official Banner 3 -->
        <div class="hero-slide">
          <img src="assets/images/banners/client-banner-3.jpg" alt="Fish Land Traders Official Store Banner 3 - Hygienic Seafood Processing" class="hero-slide-bg" loading="lazy">
        </div>

        <!-- Slide 4: Official Banner 4 -->
        <div class="hero-slide">
          <img src="assets/images/banners/client-banner-4.jpg" alt="Fish Land Traders Official Store Banner 4 - Coastal Harbors Supply" class="hero-slide-bg" loading="lazy">
        </div>

        <!-- Slider Arrows -->
        <button type="button" class="carousel-nav-btn carousel-nav-prev" aria-label="Previous Banner">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <button type="button" class="carousel-nav-btn carousel-nav-next" aria-label="Next Banner">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        </button>

        <!-- Indicators -->
        <div class="carousel-indicators-bar">
          <span class="carousel-indicator-dot active" aria-label="Go to banner 1"></span>
          <span class="carousel-indicator-dot" aria-label="Go to banner 2"></span>
          <span class="carousel-indicator-dot" aria-label="Go to banner 3"></span>
          <span class="carousel-indicator-dot" aria-label="Go to banner 4"></span>
        </div>
      </div>
    </section>`;

indexHtml = indexHtml.replace(heroOldRegex, heroNew);

const waFloatingRegex = /<!-- Floating WhatsApp Button -->[\s\S]*?<a href="https:\/\/wa\.me\/910000000000[^"]*" class="floating-wa-btn"[\s\S]*?<\/a>/;
indexHtml = indexHtml.replace(waFloatingRegex, FLOATING_WIDGET_HTML);
indexHtml = indexHtml.split(OLD_SVG_PATH).join(AUTHENTIC_WA_SVG_PATH);
fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log('Updated index.html');

// -------------------------------------------------------------
// 2. UPDATE ABOUT.HTML
// -------------------------------------------------------------
let aboutHtml = fs.readFileSync('about.html', 'utf8');
const aboutFloatingRegex = /<a href="https:\/\/wa\.me\/910000000000[^"]*" class="floating-wa-btn"[\s\S]*?<\/a>/;
aboutHtml = aboutHtml.replace(aboutFloatingRegex, FLOATING_WIDGET_HTML);
aboutHtml = aboutHtml.split(OLD_SVG_PATH).join(AUTHENTIC_WA_SVG_PATH);
fs.writeFileSync('about.html', aboutHtml, 'utf8');
console.log('Updated about.html');

// -------------------------------------------------------------
// 3. UPDATE CATEGORIES.HTML
// -------------------------------------------------------------
let catHtml = fs.readFileSync('categories.html', 'utf8');
const catFloatingRegex = /<a href="https:\/\/wa\.me\/910000000000[^"]*" class="floating-wa-btn"[\s\S]*?<\/a>/;
catHtml = catHtml.replace(catFloatingRegex, FLOATING_WIDGET_HTML);
catHtml = catHtml.split(OLD_SVG_PATH).join(AUTHENTIC_WA_SVG_PATH);
fs.writeFileSync('categories.html', catHtml, 'utf8');
console.log('Updated categories.html');
