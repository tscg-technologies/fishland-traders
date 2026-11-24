const fs = require('fs');

let script = fs.readFileSync('js/script.js', 'utf8');

const OLD_SVG_PATH = 'M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.97.545 1.76.837 2.796.837 3.183 0 5.77-2.587 5.77-5.766 0-3.18-2.587-5.766-5.77-5.766zm8.411 5.766c0 4.655-3.787 8.442-8.411 8.442-1.424 0-2.766-.356-3.95-1.019l-4.526 1.187 1.209-4.417c-.742-1.258-1.144-2.709-1.144-4.203 0-4.655 3.787-8.442 8.411-8.442 4.624 0 8.411 3.787 8.411 8.442z';
const AUTHENTIC_WA_SVG_PATH = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z';

// Replace all broken WhatsApp SVG paths in script.js
script = script.split(OLD_SVG_PATH).join(AUTHENTIC_WA_SVG_PATH);

// Product image updates:
// 1. Catla:
script = script.replace(
  /id:\s*"fish-catla",[\s\S]*?image:\s*"assets\/images\/Project_Images\/freshwater\.webp",/,
  (match) => match.replace('"assets/images/Project_Images/freshwater.webp"', '"assets/images/products/catla.jpg"')
);

// 2. Tilapia:
script = script.replace(
  /id:\s*"fish-tilapia",[\s\S]*?image:\s*"assets\/images\/Project_Images\/murrel\.webp",/,
  (match) => match.replace('"assets/images/Project_Images/murrel.webp"', '"assets/images/products/tilapia.jpg"')
);

// 3. White Pomfret:
script = script.replace(
  /id:\s*"fish-white-pomfret",[\s\S]*?image:\s*"assets\/images\/Project_Images\/sea-fish\.webp",/,
  (match) => match.replace('"assets/images/Project_Images/sea-fish.webp"', '"assets/images/products/white-pomfret.jpg"')
);

// 4. Black Pomfret:
script = script.replace(
  /id:\s*"fish-black-pomfret",[\s\S]*?image:\s*"assets\/images\/Project_Images\/sea-fish\.webp",/,
  (match) => match.replace('"assets/images/Project_Images/sea-fish.webp"', '"assets/images/products/black-pomfret.jpg"')
);

// 5. Yellowfin Tuna:
script = script.replace(
  /id:\s*"fish-tuna",[\s\S]*?image:\s*"assets\/images\/Project_Images\/sea-fish\.webp",/,
  (match) => match.replace('"assets/images/Project_Images/sea-fish.webp"', '"assets/images/products/yellowfin-tuna.jpg"')
);

// 6. Scampi:
script = script.replace(
  /id:\s*"prawn-scampi",[\s\S]*?image:\s*"assets\/images\/Project_Images\/tiger-prawns\.webp",/,
  (match) => match.replace('"assets/images/Project_Images/tiger-prawns.webp"', '"assets/images/products/scampi.jpg"')
);

// 7. Cleaned Squid Rings:
script = script.replace(
  /id:\s*"squid-cleaned",[\s\S]*?image:\s*"assets\/images\/Project_Images\/other\.webp",/,
  (match) => match.replace('"assets/images/Project_Images/other.webp"', '"assets/images/products/squid-rings.jpg"')
);

// 8. Frozen Fish Fillets:
script = script.replace(
  /id:\s*"frozen-fillets",[\s\S]*?image:\s*"assets\/images\/Project_Images\/vanjaram\.webp",/,
  (match) => match.replace('"assets/images/Project_Images/vanjaram.webp"', '"assets/images/products/fish-fillets.jpg"')
);

// 9. Frozen Vanjaram Steaks:
script = script.replace(
  /id:\s*"frozen-vanjaram-steaks",[\s\S]*?image:\s*"assets\/images\/Project_Images\/vanjaram\.webp",/,
  (match) => match.replace('"assets/images/Project_Images/vanjaram.webp"', '"assets/images/products/vanjaram-steaks.jpg"')
);

// Add Touch Swipe Support to Hero Slider
const touchSwipeCode = `
    // Mobile Touch Swipe Navigation
    let touchStartX = 0;
    let touchEndX = 0;
    sliderWrap.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopTimer();
    }, { passive: true });

    sliderWrap.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 40) {
        if (diff < 0) {
          showSlide(activeIdx + 1); // Swipe left -> next
        } else {
          showSlide(activeIdx - 1); // Swipe right -> prev
        }
      }
      startTimer();
    }, { passive: true });
`;

if (!script.includes('touchStartX')) {
  script = script.replace('showSlide(0);', touchSwipeCode + '\n    showSlide(0);');
}

fs.writeFileSync('js/script.js', script, 'utf8');
console.log('js/script.js updated successfully!');
