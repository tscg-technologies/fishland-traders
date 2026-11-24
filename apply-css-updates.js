const fs = require('fs');

let css = fs.readFileSync('css/style.css', 'utf8');

// 1. Update hero slider wrap and slide styles for Image-Only Banners
const heroWrapOld = /\.hero-slider-wrap\s*\{[\s\S]*?height:\s*clamp\(520px,\s*78vh,\s*720px\);[\s\S]*?\}/;
const heroWrapNew = `.hero-slider-wrap {
  position: relative;
  width: 100%;
  height: clamp(340px, 45vw, 560px);
  background: radial-gradient(circle at center, #102a3a 0%, #07121c 100%);
  overflow: hidden;
}`;
css = css.replace(heroWrapOld, heroWrapNew);

// Make hero-slide-bg object-fit: contain to ensure full banner graphic is displayed without clipping
const heroBgOld = /\.hero-slide-bg\s*\{[\s\S]*?object-fit:\s*cover;[\s\S]*?transition:\s*transform\s*6s\s*ease-out;\s*\}/;
const heroBgNew = `.hero-slide-bg {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  display: block;
  margin: 0 auto;
}`;
css = css.replace(heroBgOld, heroBgNew);

// Hero slide center alignment
css = css.replace(
  /\.hero-slide\.active\s*\{[\s\S]*?visibility:\s*visible;[\s\S]*?z-index:\s*1;\s*\}/,
  `.hero-slide.active {
  opacity: 1;
  visibility: visible;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}`
);

// 2. Update Floating WhatsApp widget styling
const floatingWaOld = /\/\* 13\. FLOATING WHATSAPP BUTTON[\s\S]*?\.floating-wa-btn svg\s*\{[\s\S]*?height:\s*34px;[\s\S]*?\}/;
const floatingWaNew = `/* 13. FLOATING WHATSAPP WIDGET (CREATIVE, PROFESSIONAL & PULSING) */
.floating-wa-widget {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9999;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.22));
  transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1);
}

.floating-wa-widget:hover {
  transform: translateY(-4px) scale(1.03);
}

.floating-wa-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #ffffff;
  color: var(--color-navy-950);
  border-radius: var(--radius-full);
  font-family: var(--font-heading);
  font-size: 0.875rem;
  font-weight: 700;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(37, 211, 102, 0.3);
  transition: all 0.25s ease;
  white-space: nowrap;
}

.floating-wa-widget:hover .floating-wa-pill {
  border-color: #25D366;
  box-shadow: 0 6px 22px rgba(37, 211, 102, 0.25);
}

.wa-pulse-dot {
  width: 9px;
  height: 9px;
  background-color: #25D366;
  border-radius: 50%;
  position: relative;
  display: inline-block;
  box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
  animation: wa-pulse 1.8s infinite;
}

@keyframes wa-pulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 8px rgba(37, 211, 102, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
}

.floating-wa-icon {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2ae06e 0%, #20b857 100%);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(37, 211, 102, 0.45);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  flex-shrink: 0;
  position: relative;
}

.floating-wa-widget:hover .floating-wa-icon {
  box-shadow: 0 12px 30px rgba(37, 211, 102, 0.65);
  transform: rotate(6deg) scale(1.05);
}

.floating-wa-icon svg {
  width: 30px;
  height: 30px;
  fill: currentColor;
}`;
css = css.replace(floatingWaOld, floatingWaNew);

// 3. Append Clean Contact Page Styles and Enhanced Media Queries
const extraStyles = `
/* ========================================================
   CLEAN & SIMPLE CONTACT PAGE STYLES
   ======================================================== */
.contact-header-section {
  background: linear-gradient(135deg, var(--color-navy-950) 0%, var(--color-navy-900) 60%, var(--color-navy-850) 100%);
  color: #ffffff;
  padding: clamp(2.5rem, 5vw, 4rem) 0 clamp(2rem, 4vw, 3rem);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.section-kicker-pill {
  display: inline-block;
  padding: 0.35rem 1rem;
  background: rgba(13, 148, 136, 0.15);
  color: var(--color-teal-400);
  border: 1px solid rgba(13, 148, 136, 0.3);
  border-radius: var(--radius-full);
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.85rem;
}

.contact-page-title {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 0.75rem;
}

.contact-page-desc {
  font-size: clamp(0.95rem, 1.2vw, 1.1rem);
  color: rgba(255, 255, 255, 0.8);
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.6;
}

.contact-cards-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  margin-bottom: 2.5rem;
}

.contact-feature-card {
  background: #ffffff;
  border: 1px solid var(--color-slate-200);
  border-radius: 16px;
  padding: 1.5rem 1.25rem;
  display: flex;
  flex-direction: column;
  transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
  text-decoration: none;
  box-shadow: 0 4px 14px rgba(11, 25, 38, 0.04);
}

.contact-feature-card.is-link:hover {
  transform: translateY(-4px);
  border-color: var(--color-teal-500);
  box-shadow: 0 12px 28px rgba(11, 25, 38, 0.09);
}

.feature-card-icon {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  flex-shrink: 0;
}

.feature-card-icon.wa {
  background: rgba(37, 211, 102, 0.12);
  color: #25D366;
}

.feature-card-icon.phone {
  background: rgba(13, 148, 136, 0.12);
  color: var(--color-teal-600);
}

.feature-card-icon.hours {
  background: rgba(245, 158, 11, 0.12);
  color: #D97706;
}

.feature-card-icon.location {
  background: rgba(59, 130, 246, 0.12);
  color: #2563EB;
}

.feature-label {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-slate-400);
  letter-spacing: 0.05em;
  margin-bottom: 0.25rem;
}

.feature-title {
  font-family: var(--font-heading);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--color-navy-900);
  margin-bottom: 0.35rem;
}

.feature-value {
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-navy-950);
  margin-bottom: 0.5rem;
}

.feature-action-link {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--color-teal-600);
  margin-top: auto;
}

.feature-subtext {
  font-size: 0.825rem;
  color: var(--color-slate-500);
  margin-top: auto;
}

/* Clean Form Card */
.clean-form-container {
  max-width: 840px;
  margin: 0 auto 3rem;
}

.clean-form-card {
  background: #ffffff;
  border: 1px solid var(--color-slate-200);
  border-radius: 20px;
  padding: clamp(1.75rem, 4vw, 2.75rem);
  box-shadow: 0 8px 30px rgba(11, 25, 38, 0.06);
}

.clean-form-title {
  font-family: var(--font-heading);
  font-size: clamp(1.4rem, 2.4vw, 1.85rem);
  font-weight: 800;
  color: var(--color-navy-900);
  margin-bottom: 0.5rem;
}

.clean-form-subtitle {
  font-size: 0.925rem;
  color: var(--color-slate-500);
  max-width: 600px;
  margin: 0 auto 1.5rem;
  line-height: 1.5;
}

.quick-inquiry-pills-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0.75rem 1rem;
  background: var(--color-slate-50);
  border-radius: 12px;
  border: 1px solid var(--color-slate-200);
}

.pills-hint {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--color-slate-500);
}

.quick-topic-pill {
  background: #ffffff;
  border: 1px solid var(--color-slate-300);
  color: var(--color-slate-700);
  padding: 0.35rem 0.85rem;
  border-radius: var(--radius-full);
  font-size: 0.825rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.quick-topic-pill:hover,
.quick-topic-pill.active {
  background: var(--color-teal-600);
  color: #ffffff;
  border-color: var(--color-teal-600);
}

.form-row-2col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.clean-submit-btn {
  width: 100%;
  padding: 0.95rem 1.5rem;
  font-size: 1.05rem;
  font-weight: 700;
  border-radius: 12px;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  box-shadow: 0 4px 16px rgba(37, 211, 102, 0.3);
}

.clean-submit-btn:hover {
  box-shadow: 0 8px 24px rgba(37, 211, 102, 0.45);
  transform: translateY(-2px);
}

/* ========================================================
   COMPREHENSIVE RESPONSIVENESS (ALL DEVICES)
   ======================================================== */
@media (max-width: 1024px) {
  .contact-cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 992px) {
  .hero-slider-wrap {
    height: clamp(260px, 42vw, 420px);
  }
}

@media (max-width: 640px) {
  .hero-slider-wrap {
    height: clamp(210px, 52vw, 320px) !important;
  }
  .carousel-nav-btn {
    display: flex !important;
    width: 36px;
    height: 36px;
    background-color: rgba(7, 18, 28, 0.82);
  }
  .carousel-nav-prev { left: 8px; }
  .carousel-nav-next { right: 8px; }
  .carousel-indicators-bar {
    bottom: 10px;
    gap: 6px;
  }
  .carousel-indicator-dot {
    width: 8px;
    height: 8px;
  }
  .carousel-indicator-dot.active {
    width: 22px;
  }
  .floating-wa-widget {
    bottom: 18px;
    right: 18px;
    gap: 0;
  }
  .floating-wa-pill {
    display: none;
  }
  .floating-wa-icon {
    width: 52px;
    height: 52px;
  }
  .floating-wa-icon svg {
    width: 28px;
    height: 28px;
  }
  .contact-cards-grid {
    grid-template-columns: 1fr;
    gap: 0.85rem;
  }
  .form-row-2col {
    grid-template-columns: 1fr;
    gap: 0;
  }
  .clean-form-card {
    padding: 1.25rem;
    border-radius: 16px;
  }
  .quick-inquiry-pills-bar {
    overflow-x: auto;
    flex-wrap: nowrap;
    padding: 0.5rem;
    scrollbar-width: none;
  }
  .quick-inquiry-pills-bar::-webkit-scrollbar {
    display: none;
  }
  .quick-topic-pill {
    flex-shrink: 0;
  }
  .form-input-field,
  .form-select-field,
  .form-textarea-field {
    font-size: 16px !important; /* Prevents auto-zoom on iOS mobile */
  }
}
`;

css += extraStyles;

fs.writeFileSync('css/style.css', css, 'utf8');
console.log('css/style.css updated successfully!');
