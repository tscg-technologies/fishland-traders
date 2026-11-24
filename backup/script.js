/**
 * ============================================================================
 * FISH LAND TRADERS - SEAFOOD WHOLESALE & SUPPLY APPLICATION SCRIPT
 * Vanilla JavaScript (ES6+) - High-Performance, Accessible & Modular Architecture
 * ============================================================================
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. CENTRALIZED BUSINESS CONFIGURATION
     ========================================================================== */
  const CONFIG = {
    businessName: "Fish Land Traders",
    tagline: "Daily Fresh Catch. Retail & Wholesale Supply.",
    
    // Centralized editable contact number placeholder:
    whatsappNumber: "910000000000",
    phoneDisplay: "+91 00000 00000",
    phoneRaw: "+910000000000",
    
    // General Service Location (Hyderabad Commercial Service Hub)
    locationDisplay: "Uppal, Hyderabad, Telangana – 500039, India",
    
    // WhatsApp pre-filled inquiry templates
    whatsappTemplates: {
      product: "Hello Fish Land Traders, I am interested in wholesale supply of [PRODUCT NAME]. Please share availability and current pricing.",
      general: "Hello Fish Land Traders, I would like to inquire about your daily fresh catch and commercial seafood supply in Hyderabad."
    },
    
    // Hero carousel auto-rotation interval (milliseconds)
    carouselAutoplaySpeed: 6000
  };

  /* ==========================================================================
     2. 100% CERTIFIED LEGAL SEAFOOD CATALOGUE (HYDERABAD MARKET VERIFIED)
     All species listed are fully legal, non-endangered, approved for commercial
     sale under Indian Fisheries Acts, FSSAI regulations, and Telangana state norms.
     Zero banned species (e.g. African Catfish / Schedule-I marine animals prohibited).
     ========================================================================== */
  const CATALOGUE_DATA = {
    categories: [
      {
        id: "cat-freshwater-fish",
        name: "Fresh Freshwater & River Fish",
        teluguName: "తాజా మంచినీటి చేపలు",
        badge: "Daily Fresh Catch",
        description: "100% legal, hygienically handled freshwater carps and river fish sourced daily for Hyderabad restaurants, banquets, and retail markets.",
        icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 16C10 11 18 10 25 16C18 22 10 21 7 16Z"></path><path d="M25 16L29 12V20L25 16Z"></path><circle cx="11" cy="15" r="1"></circle></svg>`,
        products: [
          {
            id: "fish-rohu",
            categoryId: "cat-freshwater-fish",
            name: "Fresh Rohu (శీలావతి / రోహు)",
            scientificName: "Labeo rohita",
            image: "assets/images/Project_Images/freshwater.webp",
            fallbackImage: "assets/images/Project_Images/freshwater.webp",
            shortDesc: "The most popular, sweet-tasting freshwater fish in Telangana, harvested daily and packed on ice.",
            fullDesc: "Fresh Rohu is an Indian Major Carp and the quintessential choice for home dining and commercial catering in Hyderabad. Carefully graded, scaled, and chilled under food-grade standards with zero chemical preservatives.",
            specs: {
              "Legal & Commercial Status": "100% Legal Commercial Food Fish (FSSAI Approved)",
              "Supply Type": "Commercial Wholesale & Retail Bulk",
              "Handling Condition": "Daily Fresh Catch Packed on Clean Crushed Ice",
              "Size Availability": "1.0 kg to 3.5+ kg per fish"
            }
          },
          {
            id: "fish-catla",
            categoryId: "cat-freshwater-fish",
            name: "Fresh Catla (బొచ్చె / కాట్లా)",
            scientificName: "Gibelion catla",
            image: "assets/images/Project_Images/freshwater.webp",
            fallbackImage: "assets/images/Project_Images/freshwater.webp",
            shortDesc: "Large freshwater Indian carp with tender thick meat, ideal for traditional Andhra & Telangana curries.",
            fullDesc: "Fresh Catla (Bocche) is prized for its high culinary yield and rich flavor. Sourced from certified aquaculture reservoirs, delivered fresh every morning to hotels and caterers across Hyderabad.",
            specs: {
              "Legal & Commercial Status": "100% Legal Commercial Food Fish (Approved)",
              "Supply Type": "Restaurant & Event Catering Wholesale",
              "Handling Condition": "Chilled Ice Crates",
              "Size Availability": "2.0 kg to 5.0+ kg per fish"
            }
          },
          {
            id: "fish-murrel",
            categoryId: "cat-freshwater-fish",
            name: "Fresh Murrel / Korrameenu (కొర్రమీను)",
            scientificName: "Channa striata",
            image: "assets/images/Project_Images/murrel.webp",
            fallbackImage: "assets/images/Project_Images/murrel.webp",
            shortDesc: "Official State Fish of Telangana. Highly prized boneless firm meat with rich nutrition.",
            fullDesc: "Fresh Murrel (Korrameenu) is Telangana's celebrated freshwater delicacy. Renowned for its firm texture, rich medicinal and nutritional value, and exquisite taste when prepared in authentic regional recipes.",
            specs: {
              "Legal & Commercial Status": "Telangana Official State Fish • 100% Legal",
              "Supply Type": "Premium Wholesale & Special Orders",
              "Handling Condition": "Daily Inspected Fresh Catch",
              "Size Availability": "700g to 2.5 kg"
            }
          },
          {
            id: "fish-tilapia",
            categoryId: "cat-freshwater-fish",
            name: "Fresh Tilapia (తిలాపియా)",
            scientificName: "Oreochromis mossambicus",
            image: "assets/images/Project_Images/murrel.webp",
            fallbackImage: "assets/images/Project_Images/murrel.webp",
            shortDesc: "Mild, versatile freshwater fish with uniform sizing for commercial cloud kitchens and catering.",
            fullDesc: "Fresh Tilapia harvested from legally monitored commercial fish farms. Consistently sized, clean-flavored, and budget-friendly for high-volume institutional food supply.",
            specs: {
              "Legal & Commercial Status": "100% Legal Commercial Aquaculture Species",
              "Supply Type": "Institutional & Daily Bulk Supply",
              "Handling Condition": "Clean Chilled Slurry",
              "Size Availability": "400g to 1.0 kg"
            }
          }
        ]
      },
      {
        id: "cat-sea-fish",
        name: "Fresh Sea Fish",
        teluguName: "తాజా సముద్రపు చేపలు",
        badge: "Direct Coastal Catch",
        description: "Premium marine fish procured daily from trusted coastal landing hubs in Visakhapatnam, Chennai, and Kochi, rushed to Hyderabad under continuous cold chain.",
        icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"></path><path d="M12 6v6l4 2"></path></svg>`,
        products: [
          {
            id: "fish-vanjaram",
            categoryId: "cat-sea-fish",
            name: "Fresh Seer Fish / Vanjaram (వంజరం)",
            scientificName: "Scomberomorus commerson",
            image: "assets/images/Project_Images/vanjaram.webp",
            fallbackImage: "assets/images/Project_Images/vanjaram.webp",
            shortDesc: "The undisputed king of sea fish in Hyderabad. Firm white meat, zero intra-muscular bones, unbeatable for fish fry.",
            fullDesc: "Fresh Vanjaram (King Seer Fish) sourced from early morning coastal landings in Visakhapatnam and Chennai. Handled with supreme care on ice, delivering pure oceanic freshness and firm slices for luxury hotels and top restaurants.",
            specs: {
              "Legal & Commercial Status": "100% Legal Commercial Marine Fish",
              "Supply Type": "Whole Fish / Uniform Steaks / Wholesale",
              "Handling Condition": "Sub-Zero Chilled Transport",
              "Size Availability": "1.5 kg to 8.0+ kg"
            }
          },
          {
            id: "fish-white-pomfret",
            categoryId: "cat-sea-fish",
            name: "Fresh White Pomfret (తెల్ల చందువ)",
            scientificName: "Pampus argenteus",
            image: "assets/images/Project_Images/sea-fish.webp",
            fallbackImage: "assets/images/Project_Images/sea-fish.webp",
            shortDesc: "Delicate, buttery silver pomfret with bright gleaming skin and exquisite fine meat.",
            fullDesc: "Fresh Silver White Pomfret (Tella Chanduva) prized across fine-dining menus. Graded meticulously by weight, chilled immediately upon catch to retain its sweet tenderness.",
            specs: {
              "Legal & Commercial Status": "100% Legal Commercial Catch (FSSAI Compliant)",
              "Supply Type": "Commercial Wholesale Orders",
              "Handling Condition": "Fresh on Crushed Ice",
              "Size Availability": "300g to 700g per fish"
            }
          },
          {
            id: "fish-black-pomfret",
            categoryId: "cat-sea-fish",
            name: "Fresh Black Pomfret (నల్ల చందువ)",
            scientificName: "Parastromateus niger",
            image: "assets/images/Project_Images/sea-fish.webp",
            fallbackImage: "assets/images/Project_Images/sea-fish.webp",
            shortDesc: "Hearty, deep-flavored black pomfret, popular for spicy tawa fry and rich seafood curries.",
            fullDesc: "Fresh Black Pomfret (Nalla Chanduva) offering firm flesh and high omega-3 content. A favorite staple in seafood specialty restaurants throughout Hyderabad.",
            specs: {
              "Legal & Commercial Status": "100% Legal Commercial Marine Fish",
              "Supply Type": "Regular Restaurant Supply",
              "Handling Condition": "Daily Chilled Catch",
              "Size Availability": "400g to 1.2 kg"
            }
          },
          {
            id: "fish-tuna",
            categoryId: "cat-sea-fish",
            name: "Fresh Yellowfin Tuna (ట్యూనా)",
            scientificName: "Thunnus albacares",
            image: "assets/images/Project_Images/sea-fish.webp",
            fallbackImage: "assets/images/Project_Images/sea-fish.webp",
            shortDesc: "Dense, vibrant ocean tuna cuts packed with natural protein and deep culinary versatility.",
            fullDesc: "Fresh Coastal Yellowfin Tuna harvested in commercial waters under sustainable fishery practices. Cleaned, chilled, and delivered for multi-cuisine commercial kitchens.",
            specs: {
              "Legal & Commercial Status": "100% Legal Commercial Marine Species",
              "Supply Type": "Loin Cuts & Whole Wholesale",
              "Handling Condition": "Temperature-Regulated Ice Matrix",
              "Size Availability": "Customized per order"
            }
          }
        ]
      },
      {
        id: "cat-prawns-shrimp",
        name: "Prawns & Shrimp",
        teluguName: "రొయ్యలు",
        badge: "Clean & Graded",
        description: "Freshly harvested tiger prawns, white prawns, and sea shrimp graded by exact count for restaurants, cloud kitchens, and event caterers.",
        icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"></path><path d="M12 6v6l4 2"></path></svg>`,
        products: [
          {
            id: "prawn-tiger",
            categoryId: "cat-prawns-shrimp",
            name: "Fresh Tiger Prawns (టైగర్ రొయ్యలు)",
            scientificName: "Penaeus monodon",
            image: "assets/images/Project_Images/tiger-prawns.webp",
            fallbackImage: "assets/images/Project_Images/tiger-prawns.webp",
            shortDesc: "Jumbo tiger prawns with distinctive stripes, firm juicy bite, and premium natural sweetness.",
            fullDesc: "Fresh Tiger Prawns sorted by count (10-15 count / 15-20 count). Rinsed in chilled filtered water and packed in aerated ice containers for five-star catering and luxury banquets.",
            specs: {
              "Legal & Commercial Status": "100% Legal Certified Commercial Catch",
              "Supply Type": "Wholesale Packs (Whole / Headless)",
              "Handling Condition": "Fresh on Crushed Ice",
              "Grading": "10-15, 15-20, 20-30 Count/Kg"
            }
          },
          {
            id: "prawn-white",
            categoryId: "cat-prawns-shrimp",
            name: "Fresh White Prawns (తెల్ల రొయ్యలు)",
            scientificName: "Litopenaeus vannamei",
            image: "assets/images/Project_Images/prawns.webp",
            fallbackImage: "assets/images/Project_Images/prawns.webp",
            shortDesc: "Tender, succulent white prawns with uniform sizing for biryanis, curries, and daily kitchen use.",
            fullDesc: "Fresh White Prawns sourced from verified coastal aquaculture belts in Andhra Pradesh. Consistent high-yield culinary performance with strict microbiological hygiene checks.",
            specs: {
              "Legal & Commercial Status": "100% Legal Commercial Aquaculture Species",
              "Supply Type": "Daily Restaurant Wholesale",
              "Handling Condition": "Continuous Chilled Chain",
              "Grading": "30-40, 40-50, 50-60 Count/Kg"
            }
          },
          {
            id: "prawn-sea-shrimp",
            categoryId: "cat-prawns-shrimp",
            name: "Medium Sea Shrimp (సముద్రపు రొయ్యలు)",
            scientificName: "Metapenaeus monoceros",
            image: "assets/images/Project_Images/prawns.webp",
            fallbackImage: "assets/images/Project_Images/prawns.webp",
            shortDesc: "Coastal wild shrimp with intense natural sweetness, popular for spicy Andhra prawn fry.",
            fullDesc: "Daily harvested sea shrimp delivered straight from boat landings to Hyderabad. Graded for freshness and packed carefully on crushed ice.",
            specs: {
              "Legal & Commercial Status": "100% Legal Commercial Marine Harvest",
              "Supply Type": "Bulk Wholesale Crates",
              "Handling Condition": "Chilled Ice Crates",
              "Grading": "Medium / Regular Currying Grade"
            }
          },
          {
            id: "prawn-scampi",
            categoryId: "cat-prawns-shrimp",
            name: "Large River Scampi (పెద్ద రొయ్యలు)",
            scientificName: "Macrobrachium rosenbergii",
            image: "assets/images/Project_Images/tiger-prawns.webp",
            fallbackImage: "assets/images/Project_Images/tiger-prawns.webp",
            shortDesc: "Giant freshwater prawns with long blue claws and rich, meaty tail portions.",
            fullDesc: "Fresh River Scampi harvested from licensed freshwater farms. Known for its succulent lobster-like meat and impressive visual presentation on banquet platters.",
            specs: {
              "Legal & Commercial Status": "100% Legal Freshwater Commercial Product",
              "Supply Type": "Pre-order Wholesale",
              "Handling Condition": "Live / Chilled Monitored",
              "Grading": "5-10, 10-15 Count/Kg"
            }
          }
        ]
      },
      {
        id: "cat-crabs",
        name: "Fresh Crabs",
        teluguName: "తాజా పీతలు",
        badge: "Live & Chilled Supply",
        description: "100% legal, edible mud crabs and blue swimming crabs inspected for full shell meat density.",
        icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><path d="M12 7V3M12 21v-4M7 12H3M21 12h-4M5.6 5.6L3 3M21 21l-2.6-2.6M5.6 18.4L3 21M21 3l-2.6 2.6"></path></svg>`,
        products: [
          {
            id: "crab-mud",
            categoryId: "cat-crabs",
            name: "Fresh Mud Crab (మడ్ క్రాబ్స్)",
            scientificName: "Scylla serrata",
            image: "assets/images/Project_Images/mud-crabs.webp",
            fallbackImage: "assets/images/Project_Images/mud-crabs.webp",
            shortDesc: "Dense, sweet meat packed inside heavy claws. The top culinary crab in South India.",
            fullDesc: "Fresh Green Mud Crabs graded by claw fullness and shell hardness. Harvested from approved coastal backwaters, handled under humane and food-safe commercial guidelines.",
            specs: {
              "Legal & Commercial Status": "100% Legal Commercial Food Species",
              "Supply Type": "Live / Chilled Wholesale",
              "Handling Condition": "Aerated Marine Crates",
              "Grading": "300g to 1.0+ kg per crab"
            }
          },
          {
            id: "crab-blue",
            categoryId: "cat-crabs",
            name: "Blue Swimming Crab (సముద్రపు పీతలు)",
            scientificName: "Portunus pelagicus",
            image: "assets/images/Project_Images/crabs.webp",
            fallbackImage: "assets/images/Project_Images/crabs.webp",
            shortDesc: "Beautiful speckled marine crabs with tender sweet meat, beloved for rich crab curries.",
            fullDesc: "Fresh Blue Swimming Crabs harvested from daily coastal net catches. Chilled immediately in ice slurries to preserve sweet meat texture and ocean taste.",
            specs: {
              "Legal & Commercial Status": "100% Legal Commercial Marine Catch",
              "Supply Type": "Wholesale Crates",
              "Handling Condition": "Fresh on Crushed Ice",
              "Grading": "Medium to Large"
            }
          },
          {
            id: "crab-sea",
            categoryId: "cat-crabs",
            name: "Fresh Sea Crab (సముద్రపు పీతలు)",
            scientificName: "Portunus sanguinolentus",
            image: "assets/images/Project_Images/crabs.webp",
            fallbackImage: "assets/images/Project_Images/crabs.webp",
            shortDesc: "Daily wild ocean catch crabs with authentic coastal flavor and fast cooking yield.",
            fullDesc: "Fresh Sea Crabs sorted for restaurants and regional fish stalls in Hyderabad, providing reliable daily supply for soup kitchens and curry specialists.",
            specs: {
              "Legal & Commercial Status": "100% Legal Commercial Marine Catch",
              "Supply Type": "Commercial Wholesale Supply",
              "Handling Condition": "Chilled Marine Crates",
              "Grading": "Standard Commercial Grade"
            }
          }
        ]
      },
      {
        id: "cat-squid-cuttlefish",
        name: "Squid & Cuttlefish",
        teluguName: "స్క్విడ్ & కటిల్‌ఫిష్",
        badge: "Cleaned & Kitchen Ready",
        description: "100% legal edible marine cephalopods available as whole daily catch or cleaned rings for instant kitchen preparation.",
        icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"></path></svg>`,
        products: [
          {
            id: "squid-fresh",
            categoryId: "cat-squid-cuttlefish",
            name: "Fresh Ocean Squid (తాజా స్క్విడ్)",
            scientificName: "Loligo duvaucelii",
            image: "assets/images/Project_Images/other.webp",
            fallbackImage: "assets/images/Project_Images/other.webp",
            shortDesc: "Whole fresh squid with firm tubes and vibrant translucency, handled on sub-zero ice.",
            fullDesc: "Fresh Squid sourced from authorized coastal trawlers. Handled gently to protect outer skin integrity and tender texture for frying and grilling.",
            specs: {
              "Legal & Commercial Status": "100% Legal Commercial Marine Species",
              "Supply Type": "Commercial Wholesale",
              "Handling Condition": "Daily Fresh Catch on Ice",
              "Packaging": "Insulated Protective Crates"
            }
          },
          {
            id: "squid-cuttlefish",
            categoryId: "cat-squid-cuttlefish",
            name: "Fresh Cuttlefish (కటిల్‌ఫిష్)",
            scientificName: "Sepia pharaonis",
            image: "assets/images/Project_Images/other.webp",
            fallbackImage: "assets/images/Project_Images/other.webp",
            shortDesc: "Thick-walled cuttlefish with deep natural umami, excellent for stir-fries and spicy gravies.",
            fullDesc: "Fresh Cuttlefish offering substantial flesh thickness. Handled under certified cold-chain oversight to preserve its characteristic succulent texture.",
            specs: {
              "Legal & Commercial Status": "100% Legal Commercial Marine Catch",
              "Supply Type": "Wholesale Bulk",
              "Handling Condition": "Crushed Ice Slurry",
              "Packaging": "Food-Grade Shipping Crates"
            }
          },
          {
            id: "squid-cleaned",
            categoryId: "cat-squid-cuttlefish",
            name: "Cleaned Squid Rings (క్లీన్డ్ స్క్విడ్ రింగ్స్)",
            scientificName: "Loligo spp.",
            image: "assets/images/Project_Images/other.webp",
            fallbackImage: "assets/images/Project_Images/other.webp",
            shortDesc: "Gutted, de-skinned, and washed squid rings ready for instant restaurant cooking with zero wastage.",
            fullDesc: "Cleaned Squid Rings processed in hygienic seafood facilities. Rinsed with treated potable water, saving valuable prep time for commercial chefs.",
            specs: {
              "Legal & Commercial Status": "100% Legal FSSAI-Compliant Food Preparation",
              "Supply Type": "Ready-to-Cook Wholesale",
              "Handling Condition": "Chilled Sub-Zero",
              "Packaging": "Vacuum / Sealed Food Trays"
            }
          }
        ]
      },
      {
        id: "cat-frozen-seafood",
        name: "Hygienic Frozen Seafood",
        teluguName: "హైజీనిక్ ఫ్రోజెన్ సీఫుడ్",
        badge: "Cold Chain Verified (-18°C)",
        description: "Individually quick-frozen (IQF) fish fillets, peeled prawns, and steaks that lock in ocean-fresh texture with zero preservatives.",
        icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14"></path></svg>`,
        products: [
          {
            id: "frozen-prawns",
            categoryId: "cat-frozen-seafood",
            name: "Frozen IQF Prawns (ఫ్రోజెన్ రొయ్యలు)",
            scientificName: "Litopenaeus vannamei",
            image: "assets/images/Project_Images/prawns.webp",
            fallbackImage: "assets/images/Project_Images/prawns.webp",
            shortDesc: "Individually quick-frozen, peeled & deveined prawns. Thaw only what you need with zero waste.",
            fullDesc: "Frozen IQF Prawns blast-frozen at -40°C within hours of harvest to preserve nutritional moisture and succulent sweetness. Ideal for hotels, cafes, and cloud kitchens.",
            specs: {
              "Legal & Commercial Status": "100% Legal Certified Frozen Food (Export Grade)",
              "Supply Type": "Master Cartons (1kg / 5kg packs)",
              "Storage Temperature": "Deep Frozen (-18°C)",
              "Shelf Life": "12 Months from Packing"
            }
          },
          {
            id: "frozen-fillets",
            categoryId: "cat-frozen-seafood",
            name: "Frozen Fish Fillets (ఫిష్ ఫిల్లెట్స్)",
            scientificName: "Commercial Whitefish",
            image: "assets/images/Project_Images/vanjaram.webp",
            fallbackImage: "assets/images/Project_Images/vanjaram.webp",
            shortDesc: "Boneless and skinless whitefish fillets, portion-controlled for fish fingers, burgers, and grilling.",
            fullDesc: "Frozen Fish Fillets precision-trimmed under strict hygienic standards. Provides complete portion control and consistent cooking yield for hospitality kitchens.",
            specs: {
              "Legal & Commercial Status": "100% Legal Food Grade Product",
              "Supply Type": "Commercial Wholesale Cartons",
              "Storage Temperature": "Deep Frozen (-18°C)",
              "Portion Size": "120g - 180g per fillet"
            }
          },
          {
            id: "frozen-vanjaram-steaks",
            categoryId: "cat-frozen-seafood",
            name: "Frozen Seer Fish Steaks (వంజరం స్లైసెస్)",
            scientificName: "Scomberomorus commerson",
            image: "assets/images/Project_Images/vanjaram.webp",
            fallbackImage: "assets/images/Project_Images/vanjaram.webp",
            shortDesc: "Evenly cut frozen seer fish center steaks, ready to marinate and fry without thawing loss.",
            fullDesc: "Frozen Vanjaram Steaks cut from prime king mackerel catches and flash-frozen. Vacuum-sealed to prevent freezer burn and preserve authentic coastal flavor.",
            specs: {
              "Legal & Commercial Status": "100% Legal Commercial Marine Species",
              "Supply Type": "Wholesale Sealed Packs",
              "Storage Temperature": "Deep Frozen (-18°C)",
              "Packaging": "Poly-wrapped Master Boxes"
            }
          },
          {
            id: "frozen-squid",
            categoryId: "cat-frozen-seafood",
            name: "Frozen Cleaned Squid (ఫ్రోజెన్ స్క్విడ్)",
            scientificName: "Loligo spp.",
            image: "assets/images/Project_Images/other.webp",
            fallbackImage: "assets/images/Project_Images/other.webp",
            shortDesc: "Cleaned frozen squid tubes and rings for fast-food restaurants, grills, and buffet preparations.",
            fullDesc: "Frozen Cleaned Squid processed under stringent HACCP standards, blast-frozen to maintain tender chew and authentic marine freshness.",
            specs: {
              "Legal & Commercial Status": "100% Legal Commercial Catch",
              "Supply Type": "Bulk Master Packaging",
              "Storage Temperature": "Continuous Cold Chain (-18°C)",
              "Packaging": "Moisture-Barrier Food Packs"
            }
          }
        ]
      }
    ]
  };

  /* ==========================================================================
     3. WHATSAPP ENQUIRY BUILDER & CLICK DISPATCH
     ========================================================================== */
  function buildWhatsAppUrl(productName = null) {
    const phone = (CONFIG.whatsappNumber || "").replace(/[^0-9]/g, "");
    let text = "";

    if (productName) {
      text = CONFIG.whatsappTemplates.product.replace("[PRODUCT NAME]", productName);
    } else {
      text = CONFIG.whatsappTemplates.general;
    }

    const encodedText = encodeURIComponent(text);
    return `https://wa.me/${phone}?text=${encodedText}`;
  }

  function handleWhatsAppClick(event, productName = null) {
    if (event && event.preventDefault) event.preventDefault();
    const url = buildWhatsAppUrl(productName);
    window.open(url, "_blank", "noopener,noreferrer");
    showToastNotification(`Connecting to WhatsApp for: ${productName || "General Seafood Inquiry"}`);
  }

  function showToastNotification(message) {
    let toast = document.getElementById("toast-notification");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "toast-notification";
      toast.className = "toast-notification";
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
      toast.classList.remove("show");
    }, 3500);
  }

  /* ==========================================================================
     4. CATEGORIES & PRODUCTS RENDERING (FOR CATEGORIES PAGE & IN-PAGE DISPLAY)
     ========================================================================== */
  let activeTargetCategoryId = null;

  function renderAllCategorySections() {
    const catalogueMainDisplayEl = document.getElementById("catalogue-all-display");
    if (!catalogueMainDisplayEl) return;
    catalogueMainDisplayEl.innerHTML = "";

    CATALOGUE_DATA.categories.forEach(category => {
      const categoryBlock = document.createElement("section");
      categoryBlock.className = "category-block reveal-item";
      categoryBlock.id = category.id;
      categoryBlock.setAttribute("aria-labelledby", `heading-${category.id}`);

      // Category Header
      const headerDiv = document.createElement("div");
      headerDiv.className = "category-block-header";
      headerDiv.innerHTML = `
        <div class="cat-title-wrap">
          <div class="cat-icon-badge" aria-hidden="true">${category.icon}</div>
          <div>
            <h3 class="category-block-title" id="heading-${category.id}">
              ${category.name}
              <span class="cat-telugu-name" style="font-size: 0.85em; font-weight: 500; color: #a4d2d4; margin-left: 0.5rem;">(${category.teluguName})</span>
            </h3>
            <span class="category-block-badge">${category.badge}</span>
          </div>
        </div>
        <p class="category-block-desc">${category.description}</p>
      `;
      categoryBlock.appendChild(headerDiv);

      // Product Grid
      const gridDiv = document.createElement("div");
      gridDiv.className = "product-grid";

      category.products.forEach(product => {
        const card = document.createElement("article");
        card.className = "product-card";
        card.setAttribute("data-product-id", product.id);

        card.innerHTML = `
          <div class="product-media">
            <img 
              src="${product.image}" 
              alt="${product.name}" 
              class="product-image"
              loading="lazy"
              onerror="this.onerror=null; this.src='assets/images/Project_Images/sea-fish.webp';"
            >
            <span class="product-badge">100% Legal Catch</span>
          </div>
          <div class="product-info">
            <h4 class="product-title">${product.name}</h4>
            <p class="product-desc">${product.shortDesc}</p>
            <div class="product-card-footer">
              <button type="button" class="btn btn-card-details" data-id="${product.id}" aria-label="View specifications for ${product.name}">
                <span>View Details</span>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M6 12l4-4-4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <button type="button" class="btn btn-card-enquire" data-name="${product.name}" aria-label="Enquire on WhatsApp about ${product.name}">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.97.545 1.76.837 2.796.837 3.183 0 5.77-2.587 5.77-5.766 0-3.18-2.587-5.766-5.77-5.766zm8.411 5.766c0 4.655-3.787 8.442-8.411 8.442-1.424 0-2.766-.356-3.95-1.019l-4.526 1.187 1.209-4.417c-.742-1.258-1.144-2.709-1.144-4.203 0-4.655 3.787-8.442 8.411-8.442 4.624 0 8.411 3.787 8.411 8.442z"/>
                </svg>
                <span>Enquire</span>
              </button>
            </div>
          </div>
        `;

        // Card button events
        const detailsBtn = card.querySelector(".btn-card-details");
        detailsBtn.addEventListener("click", () => showProductDetails(product.id));

        const enquireBtn = card.querySelector(".btn-card-enquire");
        enquireBtn.addEventListener("click", (e) => handleWhatsAppClick(e, product.name));

        gridDiv.appendChild(card);
      });

      categoryBlock.appendChild(gridDiv);
      catalogueMainDisplayEl.appendChild(categoryBlock);
    });
  }

  /* Product Details Modal / View */
  function showProductDetails(productId) {
    let targetProduct = null;
    let targetCategory = null;

    for (const cat of CATALOGUE_DATA.categories) {
      const found = cat.products.find(p => p.id === productId);
      if (found) {
        targetProduct = found;
        targetCategory = cat;
        break;
      }
    }

    if (!targetProduct) return;

    let productDetailsViewEl = document.getElementById("product-details-view");
    let catalogueMainDisplayEl = document.getElementById("catalogue-all-display");
    let categoryTabsNavEl = document.getElementById("category-tabs-nav");

    if (!productDetailsViewEl) {
      // If modal does not exist on page, create dynamically
      productDetailsViewEl = document.createElement("div");
      productDetailsViewEl.id = "product-details-view";
      productDetailsViewEl.className = "product-details-view";
      document.body.appendChild(productDetailsViewEl);
    }

    let specsHtml = "";
    if (targetProduct.specs) {
      specsHtml = `
        <div class="product-specs-table-wrap">
          <table class="product-specs-table">
            <tbody>
              ${Object.entries(targetProduct.specs).map(([key, val]) => `
                <tr>
                  <th scope="row">${key}</th>
                  <td>${val}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `;
    }

    productDetailsViewEl.innerHTML = `
      <div class="product-details-container">
        <nav class="product-breadcrumbs" aria-label="Breadcrumb">
          <button type="button" class="btn-breadcrumb-back" id="btn-back-breadcrumb">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8l4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Back to Products</span>
          </button>
          <span class="breadcrumb-sep">&gt;</span>
          <span class="breadcrumb-cat">${targetCategory ? targetCategory.name : 'Catalogue'}</span>
          <span class="breadcrumb-sep">&gt;</span>
          <span class="breadcrumb-current">${targetProduct.name}</span>
        </nav>

        <div class="product-details-card">
          <div class="product-details-grid">
            <div class="details-media-col">
              <div class="details-image-frame">
                <img 
                  src="${targetProduct.image}" 
                  alt="${targetProduct.name}" 
                  class="details-main-image"
                  onerror="this.onerror=null; this.src='assets/images/Project_Images/sea-fish.webp';"
                >
                <span class="details-badge">100% Certified Legal Seafood</span>
              </div>
            </div>

            <div class="details-content-col">
              <div class="details-header">
                <span class="details-category-tag">${targetCategory ? targetCategory.name : 'Seafood'}</span>
                <h2 class="details-title">${targetProduct.name}</h2>
                ${targetProduct.scientificName ? `<p class="details-scientific" style="font-style: italic; color: var(--color-teal); font-size: 0.9rem; margin-top: -0.25rem; margin-bottom: 0.75rem;">Scientific: ${targetProduct.scientificName}</p>` : ''}
              </div>

              <p class="details-desc">${targetProduct.fullDesc || targetProduct.shortDesc}</p>

              ${specsHtml}

              <div class="details-actions">
                <button type="button" class="btn btn-details-whatsapp" id="btn-details-whatsapp">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.97.545 1.76.837 2.796.837 3.183 0 5.77-2.587 5.77-5.766 0-3.18-2.587-5.766-5.77-5.766zm8.411 5.766c0 4.655-3.787 8.442-8.411 8.442-1.424 0-2.766-.356-3.95-1.019l-4.526 1.187 1.209-4.417c-.742-1.258-1.144-2.709-1.144-4.203 0-4.655 3.787-8.442 8.411-8.442 4.624 0 8.411 3.787 8.411 8.442z"/>
                  </svg>
                  <span>Chat on WhatsApp for Wholesale Rates</span>
                </button>
                <button type="button" class="btn btn-details-back" id="btn-details-back">
                  <span>Back to Catalogue</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    if (catalogueMainDisplayEl) catalogueMainDisplayEl.style.display = "none";
    if (categoryTabsNavEl) categoryTabsNavEl.style.display = "none";
    productDetailsViewEl.style.display = "block";

    productDetailsViewEl.scrollIntoView({ behavior: "smooth", block: "start" });

    // Events for modal buttons
    const backBtn1 = productDetailsViewEl.querySelector("#btn-back-breadcrumb");
    const backBtn2 = productDetailsViewEl.querySelector("#btn-details-back");
    const waBtn = productDetailsViewEl.querySelector("#btn-details-whatsapp");

    if (backBtn1) backBtn1.addEventListener("click", () => closeProductDetails());
    if (backBtn2) backBtn2.addEventListener("click", () => closeProductDetails());
    if (waBtn) waBtn.addEventListener("click", (e) => handleWhatsAppClick(e, targetProduct.name));
  }

  function closeProductDetails(shouldScroll = true) {
    const productDetailsViewEl = document.getElementById("product-details-view");
    const catalogueMainDisplayEl = document.getElementById("catalogue-all-display");
    const categoryTabsNavEl = document.getElementById("category-tabs-nav");

    if (productDetailsViewEl) {
      productDetailsViewEl.style.display = "none";
      productDetailsViewEl.innerHTML = "";
    }
    if (catalogueMainDisplayEl) catalogueMainDisplayEl.style.display = "block";
    if (categoryTabsNavEl) categoryTabsNavEl.style.display = "block";

    if (shouldScroll) {
      const categoriesSection = document.getElementById("categories");
      if (categoriesSection) {
        categoriesSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }

  function initCategoryNavigation() {
    const tabButtons = document.querySelectorAll(".cat-tab-btn");
    if (!tabButtons.length) return;

    tabButtons.forEach(btn => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("data-target");
        if (!targetId) return;

        closeProductDetails(false);

        tabButtons.forEach(b => b.classList.remove("active"));
        this.classList.add("active");

        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          const headerOffset = 80;
          const pos = targetEl.getBoundingClientRect().top + window.pageYOffset - headerOffset;
          window.scrollTo({ top: pos, behavior: "smooth" });
        }
      });
    });
  }

  /* ==========================================================================
     5. HERO BANNER CAROUSEL (IMAGES-ONLY ARCHITECTURE)
     ========================================================================== */
  function initHeroCarousel() {
    const carouselEl = document.getElementById("hero-carousel");
    if (!carouselEl) return;

    const slides = carouselEl.querySelectorAll(".carousel-slide");
    const indicators = carouselEl.querySelectorAll(".carousel-indicator");
    const prevBtn = carouselEl.querySelector(".carousel-arrow-prev");
    const nextBtn = carouselEl.querySelector(".carousel-arrow-next");

    if (!slides.length) return;

    let currentIndex = 0;
    let autoplayTimer = null;
    let isTransitioning = false;

    function goToSlide(index) {
      if (isTransitioning) return;
      isTransitioning = true;

      const nextIdx = (index + slides.length) % slides.length;

      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === nextIdx);
      });

      indicators.forEach((ind, i) => {
        ind.classList.toggle("active", i === nextIdx);
        ind.setAttribute("aria-selected", i === nextIdx ? "true" : "false");
      });

      currentIndex = nextIdx;
      setTimeout(() => { isTransitioning = false; }, 750);
    }

    function startAutoplay() {
      stopAutoplay();
      autoplayTimer = setInterval(() => {
        goToSlide(currentIndex + 1);
      }, CONFIG.carouselAutoplaySpeed || 6000);
    }

    function stopAutoplay() {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        stopAutoplay();
        goToSlide(currentIndex - 1);
        startAutoplay();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        stopAutoplay();
        goToSlide(currentIndex + 1);
        startAutoplay();
      });
    }

    indicators.forEach((ind, idx) => {
      ind.addEventListener("click", () => {
        stopAutoplay();
        goToSlide(idx);
        startAutoplay();
      });
    });

    carouselEl.addEventListener("mouseenter", stopAutoplay);
    carouselEl.addEventListener("mouseleave", startAutoplay);
    carouselEl.addEventListener("focusin", stopAutoplay);
    carouselEl.addEventListener("focusout", startAutoplay);

    goToSlide(0);
    startAutoplay();
  }

  /* ==========================================================================
     6. NAVIGATION BAR, MOBILE DRAWER & ACTIVE LINK MANAGEMENT
     ========================================================================== */
  function initNavigation() {
    const header = document.getElementById("header");
    const mobileToggle = document.getElementById("mobile-menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");
    const mobileBackdrop = document.getElementById("mobile-backdrop");
    const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");

    if (header) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 30) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      }, { passive: true });
    }

    function toggleMobileMenu(forceClose = false) {
      if (!mobileNav || !mobileToggle) return;
      const isOpen = forceClose ? false : !mobileNav.classList.contains("open");
      mobileNav.classList.toggle("open", isOpen);
      mobileToggle.classList.toggle("active", isOpen);
      if (mobileBackdrop) mobileBackdrop.classList.toggle("open", isOpen);
      mobileToggle.setAttribute("aria-expanded", isOpen);
      mobileNav.setAttribute("aria-hidden", !isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";
    }

    if (mobileToggle) {
      mobileToggle.addEventListener("click", () => toggleMobileMenu());
    }

    if (mobileBackdrop) {
      mobileBackdrop.addEventListener("click", () => toggleMobileMenu(true));
    }

    navLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        const targetHref = this.getAttribute("href");
        if (targetHref && targetHref.startsWith("#")) {
          e.preventDefault();
          const targetSection = document.querySelector(targetHref);
          if (targetSection) {
            toggleMobileMenu(true);
            const headerOffset = 70;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
          }
        } else {
          // Normal page navigation (about.html, categories.html, contact.html)
          toggleMobileMenu(true);
        }
      });
    });
  }

  /* ==========================================================================
     7. CONTACT FORM ENQUIRY DISPATCH (DIRECT TO WHATSAPP)
     ========================================================================== */
  function initContactForm() {
    const contactForm = document.getElementById("wholesale-contact-form");
    if (!contactForm) return;

    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = (document.getElementById("contact-name")?.value || "").trim();
      const phone = (document.getElementById("contact-phone")?.value || "").trim();
      const businessType = (document.getElementById("contact-biz-type")?.value || "").trim();
      const items = (document.getElementById("contact-seafood-items")?.value || "").trim();
      const quantity = (document.getElementById("contact-quantity")?.value || "").trim();
      const message = (document.getElementById("contact-message")?.value || "").trim();

      const waText = 
`Hello Fish Land Traders,
*New Wholesale Enquiry:*
- *Customer Name:* ${name}
- *Phone:* ${phone}
- *Business:* ${businessType || 'Direct Wholesale Buyer'}
- *Requested Items:* ${items || 'Daily Fresh Catch'}
- *Estimated Quantity:* ${quantity || 'Standard Commercial Order'}
- *Additional Notes:* ${message || 'Please send pricing & availability.'}

Looking forward to your quotation.`;

      const destPhone = (CONFIG.whatsappNumber || "910000000000").replace(/[^0-9]/g, "");
      const finalUrl = `https://wa.me/${destPhone}?text=${encodeURIComponent(waText)}`;

      window.open(finalUrl, "_blank", "noopener,noreferrer");
      showToastNotification("Opening WhatsApp to submit your wholesale inquiry...");
      contactForm.reset();
    });
  }

  /* ==========================================================================
     8. GLOBAL ACCESSIBILITY & INITIALIZATION
     ========================================================================== */
  document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initHeroCarousel();
    renderAllCategorySections();
    initCategoryNavigation();
    initContactForm();

    // Attach any direct WhatsApp trigger buttons
    document.querySelectorAll(".js-wa-btn").forEach(btn => {
      btn.addEventListener("click", (e) => handleWhatsAppClick(e));
    });
  });

})();
