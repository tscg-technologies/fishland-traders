const fs = require('fs');

let s = fs.readFileSync('js/script.js', 'utf8');

const oldFormRegex = /\/\* 7\. WHOLESALE QUOTE FORM \*\/[\s\S]*?form\.reset\(\);\s*\}\);[\s\S]*?\}/;

const newFormCode = `/* 7. WHOLESALE QUOTE FORM & QUICK TOPIC PILLS */
  function initContactForm() {
    // Quick inquiry topic pills
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
      const qty = (document.getElementById("form-qty")?.value || "").trim();
      const notes = (document.getElementById("form-notes")?.value || "").trim();

      const text = 
\`Hello Fish Land Traders,
*Wholesale Enquiry from Website:*
- *Client / Business:* \${name}
- *Contact Phone:* \${phone}
- *Seafood Varieties:* \${items || 'Daily Fresh Catch'}
- *Estimated Quantity:* \${qty || 'Standard Wholesale Supply'}
- *Special Notes:* \${notes || 'Please share current availability and price quote.'}

Thank you!\`;

      const cleanPhone = CONFIG.whatsappNumber.replace(/[^0-9]/g, "");
      const url = \`https://wa.me/\${cleanPhone}?text=\${encodeURIComponent(text)}\`;
      window.open(url, "_blank", "noopener,noreferrer");
      showToast("Opening WhatsApp to send your quote request...");
      form.reset();
      pills.forEach(p => p.classList.remove("active"));
    });
  }`;

s = s.replace(oldFormRegex, newFormCode);
fs.writeFileSync('js/script.js', s, 'utf8');
console.log('Contact form logic in js/script.js updated!');
