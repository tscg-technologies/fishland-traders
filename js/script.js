/**
 * ============================================================================
 * FISHLAND TRADERS - CLIENT-FIRST INTERACTIVE SCRIPT
 * High Performance Vanilla JS with Banner Carousel, Live Search,
 * Category Smooth Scroll-Spy & Dynamic WhatsApp Integration
 * ============================================================================
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. CENTRALIZED STORE & WHATSAPP CONFIGURATION
     Easily edit business contact info, phone, and carousel timing here
     ========================================================================== */
  const CONFIG = {
    businessName: "Fishland Traders",
    tagline: "Fresh Seafood Wholesale & Supply",
    whatsappNumber: "917989705005",
    phoneDisplay: "+91 7989705005",
    locationDisplay: "Uppal, Hyderabad, Telangana – 500039, India",
    carouselAutoplaySpeed: 5000 // Milliseconds per slide
  };

  /* ==========================================================================
     2. B2B HERO BANNER CAROUSEL CONFIGURATION
     Targeted specifically for local seafood businesses, fish stalls, restaurants & caterers.
     ========================================================================== */
  const BANNERS_CONFIG = [
    {
      id: "b2b-banner-1",
      image: "assets/images/banners/b2b-wholesale-banner.jpg",
      alt: "Fishland Traders B2B Seafood Wholesale Supply for Local Fish Stalls & Restaurants"
    },
    {
      id: "b2b-banner-2",
      image: "assets/images/banners/b2b-prawns-banner.jpg",
      alt: "Fishland Traders Wholesale Prawn Crates & Daily Harbor Rates"
    },
    {
      id: "b2b-banner-3",
      image: "assets/images/banners/b2b-trading-banner-3.jpg",
      alt: "Fishland Traders Direct B2B Seafood Trading Bulk Fish & Prawn Supply"
    },
    {
      id: "b2b-banner-4",
      image: "assets/images/banners/banner-2.png",
      alt: "Fishland Traders Coastal Sourcing Hubs & Direct Harbor Wholesale Rates"
    }
  ];

  /* ==========================================================================
     3. 100% ENGLISH B2B SEAFOOD WHOLESALE CATALOGUE DATA
     EXCLUSIVELY FISH & PRAWNS (Strictly no crabs, squid, or unrelated seafood).
     Structured for local fish retail shops, supermarkets, restaurants, and caterers.
     ========================================================================== */
  const CATEGORIES = [
    {
      id: "sea-fish",
      name: "Fresh Sea Fish Wholesale",
      icon: "🐟",
      desc: "Daily marine arrivals from Visakhapatnam, Chennai, and Kochi harbors in wholesale crates."
    },
    {
      id: "freshwater-fish",
      name: "Freshwater Fish Wholesale",
      icon: "🌊",
      desc: "Regional freshwater harvests including Murrel, Rohu, and Catla at direct farm-gate rates."
    },
    {
      id: "prawns-shrimp",
      name: "Prawns & Shrimp Wholesale",
      icon: "🦐",
      desc: "High-demand Tiger Prawns, White Prawns, and River Scampi in wholesale crushed-ice crates."
    }
  ];

  const CATALOGUE_DATA = [
    // --- 1. Fresh Sea Fish Wholesale ---
    {
      id: "fish-vanjaram",
      categoryId: "sea-fish",
      categoryName: "Fresh Sea Fish Wholesale",
      name: "Fresh Seer Fish / Vanjaram (Wholesale Lots)",
      scientific: "Scomberomorus commerson",
      image: "assets/images/Project_Images/vanjaram.webp",
      badge: "Top Commercial Demand",
      shortDesc: "High-margin marine catch. Available in whole fish lots or custom wholesale sliced steaks.",
      fullDesc: "Fresh Seer Fish (Vanjaram) is the highest-demand premium fish for retail stalls, wedding caterers, and luxury restaurants across Hyderabad. We receive direct consignments daily from Visakhapatnam and Chennai coastal landings. Supplied whole on heavy ice or pre-sliced to your thickness specifications.",
      specs: {
        "Target Buyers": "Fish Stalls, Catering Contractors, Star Hotels",
        "Minimum Wholesale Lot": "10 kg Crates / 25 kg Master Box",
        "Available Cuts": "Whole Chilled Fish, Uniform Sliced Steaks",
        "Typical Fish Weight": "2 kg to 8 kg per fish",
        "Sourcing Harbor": "Visakhapatnam & Chennai Direct"
      }
    },
    {
      id: "fish-white-pomfret",
      categoryId: "sea-fish",
      categoryName: "Fresh Sea Fish Wholesale",
      name: "Fresh White Pomfret (Marine Crates)",
      scientific: "Pampus argenteus",
      image: "assets/images/products/white-pomfret.jpg",
      badge: "Premium Restaurant Grade",
      shortDesc: "Pristine silver luster, unblemished skin, and tender sweet meat for upscale clientele.",
      fullDesc: "White Pomfret commands top prices at retail seafood stalls and fine-dining menus. We ensure our pomfrets are sorted within hours of harvest and packed with sterile crushed ice to preserve pristine skin sheen and fresh gills.",
      specs: {
        "Target Buyers": "Seafood Retail Shops, Multi-Cuisine Restaurants",
        "Minimum Wholesale Lot": "10 kg Crates",
        "Grading / Sizing": "300g to 500g / 500g to 800g per piece",
        "Quality Standard": "100% Unblemished Whole Fish",
        "Sourcing Harbor": "Chennai Coastal Port & Vizag"
      }
    },
    {
      id: "fish-black-pomfret",
      categoryId: "sea-fish",
      categoryName: "Fresh Sea Fish Wholesale",
      name: "Fresh Black Pomfret (Wholesale Crates)",
      scientific: "Parastromateus niger",
      image: "assets/images/products/black-pomfret.jpg",
      badge: "Fast-Moving Retail Catch",
      shortDesc: "Firm, flavorful sea fish with steady everyday turnover in local retail markets.",
      fullDesc: "Black Pomfret delivers rapid turnover and dependable margin for local fish markets and highway dhabas. Firm texture and deep marine taste make it a staple for Andhra fish curries and tawa fry menus.",
      specs: {
        "Target Buyers": "Local Fish Markets, Messes, Caterers",
        "Minimum Wholesale Lot": "15 kg Crates",
        "Grading / Sizing": "400g to 1.2 kg per fish",
        "Condition": "Fresh Whole Chilled on Ice",
        "Sourcing Harbor": "Chennai Coastal Terminal"
      }
    },
    {
      id: "fish-tuna",
      categoryId: "sea-fish",
      categoryName: "Fresh Sea Fish Wholesale",
      name: "Yellowfin Tuna (Commercial Loins & Blocks)",
      scientific: "Thunnus albacares",
      image: "assets/images/products/yellowfin-tuna.jpg",
      badge: "High-Yield Boneless Cut",
      shortDesc: "Dense, ruby-red meat with zero cooking wastage. Preferred by cloud kitchens and grills.",
      fullDesc: "Yellowfin Tuna offers high yield and exceptional value for commercial kitchens, corporate cafeterias, and continental restaurants. Sourced from deep-water ocean vessels and transported under strict zero-degree refrigeration.",
      specs: {
        "Target Buyers": "Hotels, Grills, Cloud Kitchens, Caterers",
        "Minimum Wholesale Lot": "10 kg Vacuum Loins / Whole Rounds",
        "Meat Type": "Dense Ruby-Red High-Protein Meat",
        "Wastage Factor": "Virtually 0% in boneless loin cuts",
        "Sourcing Harbor": "Kochi Deep-Sea Harbor"
      }
    },

    // --- 2. Freshwater Fish Wholesale ---
    {
      id: "fish-murrel",
      categoryId: "freshwater-fish",
      categoryName: "Freshwater Fish Wholesale",
      name: "Fresh Murrel / Korrameenu (Live & Chilled Lots)",
      scientific: "Channa striata",
      image: "assets/images/Project_Images/murrel.webp",
      badge: "Telangana's #1 Retail Seller",
      shortDesc: "Premium regional favorite. High daily demand across all local Hyderabad fish markets.",
      fullDesc: "Murrel (Korrameenu) is Telangana's state fish and the fastest-selling freshwater fish in Hyderabad. Local vendors and banquet caterers rely on Fishland Traders for daily supplies of live and fresh chilled Murrel with guaranteed firm meat and authentic local flavor.",
      specs: {
        "Target Buyers": "Fish Stalls, Speciality Curry Points, Caterers",
        "Minimum Wholesale Lot": "15 kg Crates / Live Tanks",
        "Typical Weight": "800g to 2.5 kg per fish",
        "Supply Frequency": "Daily Morning 4 AM Harvest Dispatch",
        "Origin": "Accredited Regional Freshwater Reserves"
      }
    },
    {
      id: "fish-rohu",
      categoryId: "freshwater-fish",
      categoryName: "Freshwater Fish Wholesale",
      name: "Fresh Rohu (High-Volume Daily Crates)",
      scientific: "Labeo rohita",
      image: "assets/images/Project_Images/freshwater.webp",
      badge: "High-Volume Driver",
      shortDesc: "The everyday bulk staple for fish stalls, neighborhood vendors, and budget caterers.",
      fullDesc: "Rohu represents steady, dependable bulk volume for retail fish stalls and weekly community markets. Sourced directly from certified regional freshwater farms, ensuring bright clear eyes, firm belly, and intact pink gills.",
      specs: {
        "Target Buyers": "Retail Fish Shops, Mass Caterers, Canteens",
        "Minimum Wholesale Lot": "25 kg / 50 kg Crates",
        "Typical Weight": "1.2 kg to 3.5 kg per fish",
        "Condition": "Fresh Harvest Packed with Crushed Ice",
        "Origin": "Direct Freshwater Harvesting Farms"
      }
    },
    {
      id: "fish-catla",
      categoryId: "freshwater-fish",
      categoryName: "Freshwater Fish Wholesale",
      name: "Fresh Catla (Feast & Banquet Crates)",
      scientific: "Gibelion catla",
      image: "assets/images/products/catla.jpg",
      badge: "Catering & Banquet Favorite",
      shortDesc: "Large broad-body fish yielding thick, succulent steaks for large wedding feasts.",
      fullDesc: "Catla is the premier choice for large banquet preparations, wedding receptions, and catering contracts. Thick juicy steaks absorb spices deeply and hold up beautifully in high-volume cooking cauldrons.",
      specs: {
        "Target Buyers": "Wedding Caterers, Community Hall Cooks",
        "Minimum Wholesale Lot": "25 kg / 50 kg Wholesale Lots",
        "Typical Weight": "2.5 kg to 6.0 kg per fish",
        "Cut Options": "Whole Round or Cleaned & Sliced",
        "Origin": "Fresh Regional Farm Landings"
      }
    },
    {
      id: "fish-tilapia",
      categoryId: "freshwater-fish",
      categoryName: "Freshwater Fish Wholesale",
      name: "Fresh Tilapia (Commercial Bulk Crates)",
      scientific: "Oreochromis mossambicus",
      image: "assets/images/products/tilapia.jpg",
      badge: "Economical Wholesale Choice",
      shortDesc: "Clean, budget-friendly white fish for canteens, buffet services, and fish fry points.",
      fullDesc: "Tilapia delivers a mild taste, uniform sizing, and unbeatable wholesale pricing. Perfect for fast-food fish fry points, university messes, and commercial meal box providers throughout Hyderabad.",
      specs: {
        "Target Buyers": "Fish Fry Centers, Hostels, Cloud Kitchens",
        "Minimum Wholesale Lot": "20 kg Crates",
        "Typical Weight": "400g to 900g per piece",
        "Condition": "Fresh Cleaned or Whole on Ice",
        "Origin": "Controlled Regional Aquaculture"
      }
    },

    // --- 3. Prawns & Shrimp Wholesale ---
    {
      id: "prawn-tiger",
      categoryId: "prawns-shrimp",
      categoryName: "Prawns & Shrimp Wholesale",
      name: "Fresh Tiger Prawns (Jumbo Wholesale Crates)",
      scientific: "Penaeus monodon",
      image: "assets/images/Project_Images/tiger-prawns.webp",
      badge: "Jumbo Luxury Grade",
      shortDesc: "Extra large tiger prawns for tandoori bars, star hotel banquets, and luxury menus.",
      fullDesc: "Jumbo Tiger Prawns are a top-tier revenue earner for seafood retailers and restaurants. Characterized by prominent natural tiger stripes, crisp snap, and rich succulence. Delivered in insulated cold-chain crates directly to your commercial doorstep.",
      specs: {
        "Target Buyers": "Star Hotels, Specialty Seafood Restobars, Caterers",
        "Minimum Wholesale Lot": "5 kg / 10 kg Crates",
        "Count Grading": "10-15 count / 15-20 count per kg",
        "Pack": "Insulated Ice Crate (Zero Chemical Preservatives)",
        "Sourcing Hub": "Visakhapatnam & Coastal Farms"
      }
    },
    {
      id: "prawn-white",
      categoryId: "prawns-shrimp",
      categoryName: "Prawns & Shrimp Wholesale",
      name: "Fresh White Prawns (Biryani & Catering Grade)",
      scientific: "Litopenaeus vannamei",
      image: "assets/images/Project_Images/prawns.webp",
      badge: "Fastest-Selling Commercial Prawn",
      shortDesc: "The industry standard for Hyderabadi Prawn Biryani and restaurant curry preparations.",
      fullDesc: "White Prawns (Vannamei) represent our largest volume prawn wholesale item in Hyderabad. Hundreds of local restaurants, caterers, and retail vendors purchase our morning crates for daily biryani and dry roast preparation.",
      specs: {
        "Target Buyers": "Biryani Restaurants, Local Fish Stalls, Caterers",
        "Minimum Wholesale Lot": "10 kg / 20 kg Crates",
        "Count Grading": "30-40 count / 40-50 count / 50-60 count per kg",
        "Freshness": "Harvested fresh and packed with pure crushed ice",
        "Sourcing Hub": "Direct Coastal Aquaculture Centers"
      }
    },
    {
      id: "prawn-sea-shrimp",
      categoryId: "prawns-shrimp",
      categoryName: "Prawns & Shrimp Wholesale",
      name: "Medium Sea Shrimp (Wild Coastal Catch Crates)",
      scientific: "Metapenaeus monoceros",
      image: "assets/images/Project_Images/prawns.webp",
      badge: "Authentic Coastal Flavor",
      shortDesc: "Wild marine shrimp with intense sea aroma. Perfect for spicy curry and snack stalls.",
      fullDesc: "Wild marine sea shrimp caught from deep coastal currents. Packed with sweet sea flavor and a firm bite, making them ideal for traditional Andhra spicy prawn roasts and street-food fry centers.",
      specs: {
        "Target Buyers": "Local Fish Shops, Seafood Fry Stalls, Curry Messes",
        "Minimum Wholesale Lot": "15 kg Crates",
        "Count Grading": "60-70 count / 70-80 count per kg",
        "Supply Type": "Wild Trawler Marine Catch",
        "Sourcing Harbor": "Chennai Coastal Harbor Landing"
      }
    },
    {
      id: "prawn-scampi",
      categoryId: "prawns-shrimp",
      categoryName: "Prawns & Shrimp Wholesale",
      name: "Large River Prawns / Scampi (Feast Crates)",
      scientific: "Macrobrachium rosenbergii",
      image: "assets/images/products/scampi.jpg",
      badge: "Giant Scampi Grade",
      shortDesc: "Massive freshwater river prawns with thick, sweet lobster-like tail meat.",
      fullDesc: "Freshwater River Scampi are widely booked for VIP wedding feasts, corporate events, and high-end banquet catering across Hyderabad. We provide uniform size sorting and guaranteed morning delivery.",
      specs: {
        "Target Buyers": "Luxury Caterers, Event Organizers, Star Hotels",
        "Minimum Wholesale Lot": "10 kg Crates",
        "Count Grading": "5-10 count / 10-15 count per kg",
        "Meat Texture": "Dense, Sweet, Lobster-Like Tail Meat",
        "Origin": "Certified River Landings & River Farms"
      }
    }
  ];

  /* ==========================================================================
     4. B2B WHATSAPP DISPATCH HELPER
     Pre-populates wholesale inquiries tailored for local businesses & caterers
     ========================================================================== */
  function sendWhatsAppEnquiry(productName = null) {
    const cleanPhone = CONFIG.whatsappNumber.replace(/[^0-9]/g, "");
    let message = "";
    if (productName) {
      message = `Hello Fishland Traders, I run a seafood business / restaurant in Hyderabad and would like to know today's wholesale crate availability and prices for ${productName}.`;
    } else {
      message = `Hello Fishland Traders, I run a local business / restaurant in Hyderabad and want to know today's wholesale fish and prawn crate prices.`;
    }
    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    showToast(`Opening WhatsApp${productName ? ` for ${productName}` : ""}...`);
  }

  function showToast(message) {
    let toast = document.querySelector(".toast-notice");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "toast-notice";
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
      toast.classList.remove("show");
    }, 3200);
  }

  /* ==========================================================================
     5. HERO BANNER CAROUSEL SYSTEM
     Full-width pure artwork presentation (all text is embedded in artwork).
     Touch swipe, pause-on-hover, and smooth transitions
     ========================================================================== */
  function initHeroBannerCarousel() {
    const sliderWrap = document.querySelector(".hero-slider-wrap");
    if (!sliderWrap) return;

    // Render pure artwork banner slides from BANNERS_CONFIG
    if (BANNERS_CONFIG.length > 0) {
      sliderWrap.innerHTML = `
        <div class="hero-slides-deck">
          ${BANNERS_CONFIG.map((b, idx) => `
            <div class="hero-slide ${idx === 0 ? 'active' : ''}" data-index="${idx}">
              <img src="${b.image}" alt="${b.alt}" class="hero-slide-bg" loading="${idx === 0 ? 'eager' : 'lazy'}">
            </div>
          `).join('')}
        </div>

        <button type="button" class="carousel-nav-btn carousel-nav-prev" aria-label="Previous Banner">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <button type="button" class="carousel-nav-btn carousel-nav-next" aria-label="Next Banner">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        </button>

        <div class="carousel-indicators-bar">
          ${BANNERS_CONFIG.map((_, idx) => `
            <span class="carousel-indicator-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}" aria-label="Go to banner ${idx + 1}"></span>
          `).join('')}
        </div>
      `;
    }

    const slides = sliderWrap.querySelectorAll(".hero-slide");
    const dots = sliderWrap.querySelectorAll(".carousel-indicator-dot");
    const prevBtn = sliderWrap.querySelector(".carousel-nav-prev");
    const nextBtn = sliderWrap.querySelector(".carousel-nav-next");

    if (!slides.length) return;

    let activeIdx = 0;
    let timer = null;

    function showSlide(idx) {
      const nextIdx = (idx + slides.length) % slides.length;
      slides.forEach((s, i) => s.classList.toggle("active", i === nextIdx));
      dots.forEach((d, i) => d.classList.toggle("active", i === nextIdx));
      activeIdx = nextIdx;
    }

    function startTimer() {
      stopTimer();
      timer = setInterval(() => showSlide(activeIdx + 1), CONFIG.carouselAutoplaySpeed);
    }

    function stopTimer() {
      if (timer) clearInterval(timer);
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        stopTimer();
        showSlide(activeIdx - 1);
        startTimer();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        stopTimer();
        showSlide(activeIdx + 1);
        startTimer();
      });
    }

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        stopTimer();
        showSlide(i);
        startTimer();
      });
    });

    sliderWrap.addEventListener("mouseenter", stopTimer);
    sliderWrap.addEventListener("mouseleave", startTimer);

    // Mobile Touch/Swipe Support
    let touchStartX = 0;
    let touchEndX = 0;
    sliderWrap.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopTimer();
    }, { passive: true });

    sliderWrap.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchEndX - touchStartX;
      if (Math.abs(diff) > 40) {
        if (diff < 0) {
          showSlide(activeIdx + 1); // Swipe left
        } else {
          showSlide(activeIdx - 1); // Swipe right
        }
      }
      startTimer();
    }, { passive: true });

    showSlide(0);
    startTimer();
  }

  /* ==========================================================================
     5B. SEAFOOD GALLERY DISPLAY & FILTER SYSTEM
     Features real Uppal store/depot photos + coastal catch catalog
     ========================================================================== */
  const GALLERY_DATA = [
    // Real Fishland Traders Store & Depot Photos (Uploaded by Owner)
    {
      id: "store-1",
      category: "store",
      tag: "Depot Storefront",
      title: "Fishland Traders Reception & Brand Display",
      image: "assets/images/gallery/store-reception-banner.jpg",
      desc: "Reception counter and official wholesale display at our Uppal seafood depot in Hyderabad."
    },
    {
      id: "store-2",
      category: "store",
      tag: "Administrative Hub",
      title: "Wholesale Depot Office & Coordination",
      image: "assets/images/gallery/store-office-overview.jpg",
      desc: "Daily dispatch coordination and commercial supply booking office."
    },
    {
      id: "store-3",
      category: "store",
      tag: "Customer Service",
      title: "Order Consultation & Billing Desk",
      image: "assets/images/gallery/store-desk-front.jpg",
      desc: "Direct support for restaurant owners, caterers, and bulk seafood purchasers."
    },
    {
      id: "store-4",
      category: "store",
      tag: "Licensed Depot",
      title: "Coastal Supply Hub & GSTIN Registration",
      image: "assets/images/gallery/store-wall-banner.jpg",
      desc: "Official depot display featuring daily coastal sourcing routes from Vizag, Chennai, and Kochi."
    },
    {
      id: "store-5",
      category: "store",
      tag: "Billing & Dispatch",
      title: "Order Booking & Express Dispatch Desk",
      image: "assets/images/gallery/store-billing-counter.jpg",
      desc: "Dedicated counter for invoice generation, digital billing, and morning order release."
    },

    // Fresh Seafood & Catch Photos (Exclusively Fish & Prawns)
    {
      id: "g-1",
      category: "fish",
      tag: "Fresh Sea Fish",
      title: "Fresh Seer Fish / Vanjaram",
      image: "assets/images/Project_Images/vanjaram.webp",
      desc: "Direct harbor arrival Vanjaram, cleaned and sliced for prime catering and wholesale supply."
    },
    {
      id: "g-2",
      category: "prawns",
      tag: "Jumbo Grade",
      title: "Fresh Tiger Prawns",
      image: "assets/images/Project_Images/tiger-prawns.webp",
      desc: "Large firm tiger prawns packed with clean crushed ice for optimum freshness."
    },
    {
      id: "g-4",
      category: "fish",
      tag: "Freshwater Classic",
      title: "Fresh Murrel / Korrameenu",
      image: "assets/images/Project_Images/murrel.webp",
      desc: "Freshwater prize catch revered for exceptional taste and firm meat texture."
    },
    {
      id: "g-5",
      category: "fish",
      tag: "Daily Harbor Catch",
      title: "Fresh White Pomfret",
      image: "assets/images/products/white-pomfret.jpg",
      desc: "Super-grade silvery white pomfret, untouched by chemical preservatives."
    },
    {
      id: "g-6",
      category: "fish",
      tag: "Deep Sea Harvest",
      title: "Fresh Black Pomfret",
      image: "assets/images/products/black-pomfret.jpg",
      desc: "Fresh marine harvest delivered daily with robust cold-chain monitoring."
    },
    {
      id: "g-7",
      category: "prawns",
      tag: "River Catch",
      title: "Large River Scampi",
      image: "assets/images/products/scampi.jpg",
      desc: "Juicy giant freshwater prawns with sweet delicate meat for banquet catering."
    },
    {
      id: "g-8",
      category: "fish",
      tag: "Coastal Quality Check",
      title: "Harbor Landing Inspection",
      image: "assets/images/Project_Images/sea-fish.webp",
      desc: "Daily sunrise quality sorting at coastal harbor terminals before ice transport."
    },
    {
      id: "g-10",
      category: "fish",
      tag: "High Protein",
      title: "Fresh Yellowfin Tuna",
      image: "assets/images/products/yellowfin-tuna.jpg",
      desc: "Deep-sea yellowfin tuna loin portions from Kochi deep-water fleet."
    },
    {
      id: "g-12",
      category: "prawns",
      tag: "Daily Harvest",
      title: "Fresh White Prawns",
      image: "assets/images/Project_Images/prawns.webp",
      desc: "Versatile, tender white shrimp ideal for curry, biryani, and quick sauté."
    },
    {
      id: "g-13",
      category: "fish",
      tag: "Freshwater Harvest",
      title: "Fresh Rohu & Catla Wholesale Crates",
      image: "assets/images/Project_Images/freshwater.webp",
      desc: "Direct farm freshwater fish crates dispatched every morning to local fish markets."
    }
  ];

  function renderGallery() {
    const galleryContainer = document.getElementById("seafood-gallery-grid");
    if (!galleryContainer) return;

    galleryContainer.innerHTML = GALLERY_DATA.map(item => `
      <div class="gallery-card js-gallery-item" data-category="${item.category}" data-id="${item.id}" role="button" tabindex="0" aria-label="View ${item.title}">
        <img src="${item.image}" alt="${item.title}" class="gallery-card-img" loading="lazy">
        <div class="gallery-card-overlay">
          <span class="gallery-card-tag">${item.tag}</span>
          <h4 class="gallery-card-title">${item.title}</h4>
        </div>
      </div>
    `).join('');

    // Gallery filter buttons
    const filterBtns = document.querySelectorAll(".js-gallery-filter");
    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.getAttribute("data-filter");
        const cards = galleryContainer.querySelectorAll(".gallery-card");
        cards.forEach(c => {
          const cat = c.getAttribute("data-category");
          c.style.display = (filter === "all" || cat === filter) ? "block" : "none";
        });
      });
    });

    // Lightbox modal elements
    const modal = document.getElementById("gallery-modal");
    const modalImg = document.getElementById("gallery-modal-img");
    const modalTag = document.getElementById("gallery-modal-tag");
    const modalTitle = document.getElementById("gallery-modal-title");
    const modalDesc = document.getElementById("gallery-modal-desc");
    const modalWaBtn = document.getElementById("gallery-modal-wa-btn");
    const modalClose = document.getElementById("gallery-modal-close");
    const modalBackdrop = document.getElementById("gallery-modal-backdrop");

    function openModal(item) {
      if (!modal) {
        // Fallback: direct WhatsApp enquiry if modal is not in DOM
        sendWhatsAppEnquiry(item.title);
        return;
      }
      if (modalImg) modalImg.src = item.image;
      if (modalImg) modalImg.alt = item.title;
      if (modalTag) modalTag.textContent = item.tag;
      if (modalTitle) modalTitle.textContent = item.title;
      if (modalDesc) modalDesc.textContent = item.desc || "Daily fresh seafood availability at Fishland Traders, Uppal.";
      if (modalWaBtn) {
        const text = encodeURIComponent(`Hello Fishland Traders, I saw "${item.title}" in your gallery and would like to enquire about availability and wholesale prices.`);
        modalWaBtn.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${text}`;
      }
      modal.classList.add("show");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    }

    function closeModal() {
      if (!modal) return;
      modal.classList.remove("show");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }

    if (modalClose) modalClose.addEventListener("click", closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener("click", closeModal);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal && modal.classList.contains("show")) {
        closeModal();
      }
    });

    // Click on gallery card opens lightbox modal
    galleryContainer.querySelectorAll(".js-gallery-item").forEach(card => {
      const clickHandler = () => {
        const id = card.getAttribute("data-id");
        const item = GALLERY_DATA.find(x => x.id === id);
        if (item) openModal(item);
      };
      card.addEventListener("click", clickHandler);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          clickHandler();
        }
      });
    });
  }

  /* ==========================================================================
     6. CATEGORIES & ALL-CATEGORY VISIBLE PRODUCT CATALOGUE
     Renders all categories sequentially on the page as requested.
     Smooth scrolling tab bar & scrollspy to highlight active category.
     ========================================================================== */
  function renderAllCategoriesCatalogue() {
    const mainContainer = document.getElementById("all-categories-container");
    if (!mainContainer) return;

    mainContainer.innerHTML = "";

    CATEGORIES.forEach(cat => {
      const catProducts = CATALOGUE_DATA.filter(p => p.categoryId === cat.id);
      if (catProducts.length === 0) return;

      const catSection = document.createElement("section");
      catSection.className = "category-catalog-section";
      catSection.id = `cat-${cat.id}`;
      catSection.setAttribute("data-category-id", cat.id);

      catSection.innerHTML = `
        <div class="category-catalog-header">
          <div>
            <h3 class="category-catalog-title">
              <span>${cat.icon}</span>
              <span>${cat.name}</span>
              <span class="category-catalog-count">${catProducts.length} items</span>
            </h3>
            <p style="color: var(--color-secondary-text); font-size: 0.925rem; margin-top: 0.35rem;">
              ${cat.desc}
            </p>
          </div>
          <button type="button" class="btn btn-secondary js-enquire-category" data-catname="${cat.name}" style="padding: 0.45rem 1rem; font-size: 0.825rem;">
            <span>Enquire category</span>
          </button>
        </div>

        <div class="product-grid">
          ${catProducts.map(p => `
            <article class="product-card" data-product-id="${p.id}" data-name="${p.name.toLowerCase()}" data-category="${p.categoryId}">
              <div class="product-media">
                <img src="${p.image}" alt="${p.name}" class="product-image" loading="lazy">
                <span class="product-badge">${p.badge}</span>
              </div>
              <div class="product-info">
                <h4 class="product-title">${p.name}</h4>
                <p class="product-desc">${p.shortDesc}</p>
                <div class="product-card-footer">
                  <button type="button" class="btn-card-details js-open-details" data-id="${p.id}">
                    <span>View details</span>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 12l4-4-4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </button>
                  <button type="button" class="btn-card-enquire js-card-wa" data-name="${p.name}">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    <span>Enquire</span>
                  </button>
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      `;

      mainContainer.appendChild(catSection);
    });

    // Attach click listeners
    mainContainer.querySelectorAll(".js-open-details").forEach(btn => {
      btn.addEventListener("click", () => {
        const pId = btn.getAttribute("data-id");
        openProductModal(pId);
      });
    });

    mainContainer.querySelectorAll(".js-card-wa").forEach(btn => {
      btn.addEventListener("click", () => {
        const pName = btn.getAttribute("data-name");
        sendWhatsAppEnquiry(pName);
      });
    });

    mainContainer.querySelectorAll(".js-enquire-category").forEach(btn => {
      btn.addEventListener("click", () => {
        const catName = btn.getAttribute("data-catname");
        sendWhatsAppEnquiry(`${catName} wholesale options`);
      });
    });
  }

  /* ==========================================================================
     7. CATEGORY NAVIGATION TABS & SCROLL-SPY
     Smooth scrolling to category-wise sections with active state highlighting
     ========================================================================== */
  function initCategoryNavScrollSpy() {
    const tabs = document.querySelectorAll(".category-tab-btn");
    if (!tabs.length) return;

    tabs.forEach(tab => {
      tab.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = tab.getAttribute("data-target");

        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        if (targetId === "all") {
          const catalogueTop = document.getElementById("catalogue-top");
          if (catalogueTop) {
            catalogueTop.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        } else {
          const targetSection = document.getElementById(`cat-${targetId}`);
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      });
    });

    // ScrollSpy observer
    const sections = document.querySelectorAll(".category-catalog-section");
    if (!sections.length) return;

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0
    };

    const spyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const catId = entry.target.getAttribute("data-category-id");
          tabs.forEach(t => {
            const matches = t.getAttribute("data-target") === catId;
            t.classList.toggle("active", matches);
          });
        }
      });
    }, observerOptions);

    sections.forEach(sec => spyObserver.observe(sec));
  }

  /* ==========================================================================
     8. LIVE CATALOGUE SEARCH FILTER
     Filters products across all visible categories simultaneously
     ========================================================================== */
  function initLiveSearch() {
    const searchInput = document.getElementById("search-seafood-input");
    if (!searchInput) return;

    searchInput.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase().trim();
      const allCards = document.querySelectorAll(".product-card");
      const allSections = document.querySelectorAll(".category-catalog-section");

      allCards.forEach(card => {
        const title = card.getAttribute("data-name") || "";
        const desc = card.querySelector(".product-desc")?.textContent.toLowerCase() || "";
        const matches = !q || title.includes(q) || desc.includes(q);
        card.style.display = matches ? "flex" : "none";
      });

      // Hide section if no cards match
      allSections.forEach(sec => {
        const visibleCards = sec.querySelectorAll(".product-card[style*='display: flex'], .product-card:not([style*='display: none'])");
        const hasVisible = Array.from(visibleCards).some(c => c.style.display !== "none");
        sec.style.display = hasVisible ? "block" : "none";
      });
    });
  }

  /* ==========================================================================
     9. DEDICATED PRODUCT DETAILS MODAL VIEW
     Large image on left, detailed info & dynamic WhatsApp CTA on right
     ========================================================================== */
  function openProductModal(productId) {
    const product = CATALOGUE_DATA.find(p => p.id === productId);
    if (!product) return;

    let overlay = document.getElementById("product-details-modal-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "product-details-modal-overlay";
      overlay.className = "product-details-modal-overlay";
      document.body.appendChild(overlay);
    }

    const specsRows = Object.entries(product.specs || {}).map(([key, val]) => `
      <tr>
        <th>${key}</th>
        <td>${val}</td>
      </tr>
    `).join("");

    overlay.innerHTML = `
      <div class="product-details-container" role="dialog" aria-modal="true" aria-labelledby="modal-product-title">
        <button type="button" class="modal-close-corner-btn" id="modal-close-x" aria-label="Close product view">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>

        <div class="details-modal-body">
          <span class="details-back-link" id="modal-back-link">
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span>Back to all products</span>
          </span>

          <div class="details-grid">
            <div class="details-media-frame">
              <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="details-info-col">
              <span class="details-tag">${product.categoryName}</span>
              <h2 class="details-title" id="modal-product-title">${product.name}</h2>
              <p class="details-desc">${product.fullDesc}</p>

              <table class="specs-table">
                <tbody>
                  ${specsRows}
                </tbody>
              </table>

              <div class="details-actions-wrap">
                <button type="button" class="btn btn-whatsapp" id="modal-btn-wa">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  <span>Ask on WhatsApp</span>
                </button>
                <button type="button" class="btn btn-outline" id="modal-btn-close">
                  <span>Close</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    overlay.classList.add("open");
    document.body.style.overflow = "hidden";

    // Bind modal actions
    overlay.querySelector("#modal-close-x").addEventListener("click", closeProductModal);
    overlay.querySelector("#modal-back-link").addEventListener("click", closeProductModal);
    overlay.querySelector("#modal-btn-close").addEventListener("click", closeProductModal);
    overlay.querySelector("#modal-btn-wa").addEventListener("click", () => sendWhatsAppEnquiry(product.name));

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeProductModal();
      }
    });
  }

  function closeProductModal() {
    const overlay = document.getElementById("product-details-modal-overlay");
    if (overlay) {
      overlay.classList.remove("open");
      document.body.style.overflow = "";
    }
  }

  /* ==========================================================================
     10. NAVIGATION, STICKY HEADER & MOBILE DRAWER
     ========================================================================== */
  function initHeaderAndNav() {
    const header = document.getElementById("header");
    const mobileToggle = document.getElementById("mobile-menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");
    const backdrop = document.getElementById("mobile-backdrop");
    const closeBtn = document.getElementById("mobile-drawer-close");

    // Header scroll background tint
    if (header) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 30) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      }, { passive: true });
    }

    function toggleMenu(forceClose = false) {
      if (!mobileNav || !mobileToggle) return;
      const isOpen = forceClose ? false : !mobileNav.classList.contains("open");
      mobileNav.classList.toggle("open", isOpen);
      mobileToggle.classList.toggle("active", isOpen);
      if (backdrop) backdrop.classList.toggle("open", isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";
    }

    if (mobileToggle) {
      mobileToggle.addEventListener("click", () => toggleMenu());
    }

    if (backdrop) {
      backdrop.addEventListener("click", () => toggleMenu(true));
    }

    if (closeBtn) {
      closeBtn.addEventListener("click", () => toggleMenu(true));
    }

    // Close mobile menu on clicking nav link
    document.querySelectorAll(".mobile-nav-link").forEach(link => {
      link.addEventListener("click", () => toggleMenu(true));
    });
  }

  /* ==========================================================================
     11. INTERACTIVE WHOLESALE FORM & TOPIC PILLS
     Dispatches directly to WhatsApp with structured business inquiry
     ========================================================================== */
  function initContactForm() {
    const pills = document.querySelectorAll(".js-quick-pill");
    const itemsInput = document.getElementById("form-items");

    pills.forEach(pill => {
      pill.addEventListener("click", () => {
        const isActive = pill.classList.contains("active");
        pills.forEach(p => p.classList.remove("active"));
        if (!isActive) {
          pill.classList.add("active");
          const topic = pill.getAttribute("data-topic");
          if (itemsInput && topic) {
            itemsInput.value = topic;
            itemsInput.focus();
          }
        } else if (itemsInput) {
          itemsInput.value = "";
        }
      });
    });

    const form = document.getElementById("wholesale-quote-form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = (document.getElementById("form-name")?.value || "").trim();
      const phone = (document.getElementById("form-phone")?.value || "").trim();
      const items = (document.getElementById("form-items")?.value || "").trim();

      const text =
`Hello Fishland Traders,
I would like to inquire about fresh fish & prawn supply and prices.
*Name / Shop:* ${name}
*Phone:* ${phone}
*Requirement:* ${items || "Please share today's wholesale availability"}

Thank you!`;

      const cleanPhone = CONFIG.whatsappNumber.replace(/[^0-9]/g, "");
      const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank", "noopener,noreferrer");
      showToast("Opening WhatsApp to send your inquiry...");
      form.reset();
      pills.forEach(p => p.classList.remove("active"));
    });
  }

  /* ==========================================================================
     12. DYNAMIC COPYRIGHT YEAR & GLOBAL WHATSAPP TRIGGERS
     ========================================================================== */
  function initDynamicYear() {
    const currentYear = new Date().getFullYear();
    document.querySelectorAll(".js-current-year").forEach(el => {
      el.textContent = currentYear;
    });
  }

  function initGlobalWhatsAppTriggers() {
    document.querySelectorAll(".js-wa-trigger").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const pName = btn.getAttribute("data-product");
        sendWhatsAppEnquiry(pName);
      });
    });
  }

  /* ==========================================================================
     13. DOM INITIALIZATION
     ========================================================================== */
  document.addEventListener("DOMContentLoaded", () => {
    initHeaderAndNav();
    initHeroBannerCarousel();
    renderAllCategoriesCatalogue();
    initCategoryNavScrollSpy();
    initLiveSearch();
    initContactForm();
    initDynamicYear();
    initGlobalWhatsAppTriggers();
    renderGallery();

    // Escape key closes modal
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeProductModal();
      }
    });
  });

  // Expose useful hooks globally if needed
  window.FishlandTraders = {
    CONFIG,
    BANNERS_CONFIG,
    CATALOGUE_DATA,
    sendWhatsAppEnquiry,
    openProductModal,
    closeProductModal
  };

})();
