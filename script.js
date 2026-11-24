/**
 * Lê window.SITE_CONFIG (config.js) e preenche a página.
 * Trocar de cliente = trocar config.js. Este arquivo não deve
 * precisar de alterações entre um lava-rápido e outro.
 */
(function () {
  const cfg = window.SITE_CONFIG;
  if (!cfg) {
    console.error("config.js não foi carregado antes de script.js.");
    return;
  }

  const $ = (sel) => document.querySelector(sel);
  const esc = (str) =>
    String(str).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));

  // --- SEO / título -------------------------------------------------
  document.title = cfg.seo?.title || cfg.brand.full;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", cfg.seo?.description || "");

  // --- WhatsApp link --------------------------------------------------
  const waLink = `https://wa.me/${cfg.contact.whatsappNumber}?text=${encodeURIComponent(cfg.contact.whatsappMessage || "")}`;
  ["#nav-cta", "#mobile-cta", "#hero-cta-primary", "#cta-whatsapp"].forEach((sel) => {
    const el = $(sel);
    if (el) el.href = waLink;
  });

  // --- Marca ------------------------------------------------------
  document.querySelectorAll('[data-bind="brand.name"]').forEach((el) => (el.textContent = cfg.brand.name));
  $("#foot-brand").textContent = cfg.brand.name;
  $("#foot-copy").textContent = `© ${cfg.brand.year} ${cfg.brand.full}.`;
  $("#foot-address").textContent = cfg.contact.address;

  // --- Navegação ----------------------------------------------------
  const navLinksHTML = cfg.nav.map((item) => `<a href="${esc(item.href)}">${esc(item.label)}</a>`).join("");
  $("#nav-links").innerHTML = navLinksHTML;
  $("#mobile-links").innerHTML = navLinksHTML;
  $("#foot-links").innerHTML = cfg.nav
    .filter((item) => item.href !== "#unidade")
    .map((item) => `<a href="${esc(item.href)}">${esc(item.label)}</a>`)
    .join("") + `<a href="#unidade">Unidade</a>`;

  // Fecha o menu mobile ao clicar em um link
  $("#mobile-links").addEventListener("click", (e) => {
    if (e.target.tagName === "A") closeMenu();
  });

  // --- Hero -----------------------------------------------------------
  $("#hero-eyebrow").textContent = cfg.hero.eyebrow;
  $("#hero-title").textContent = cfg.hero.title;
  $("#hero-lead").textContent = cfg.hero.lead;

  // Se houver foto de hero configurada, substitui o desenho vetorial
  if (cfg.images?.heroPhoto) {
    $("#hero-art").innerHTML = `<img src="${esc(cfg.images.heroPhoto)}" alt="${esc(cfg.brand.full)}">`;
  }

  // --- Estatísticas ------------------------------------------------
  $("#stats").innerHTML = cfg.stats
    .map(
      (s) => `
      <div class="stat">
        <div class="num">${esc(s.value)}</div>
        <div class="label">${esc(s.label)}</div>
      </div>`
    )
    .join("");

  // --- Serviços --------------------------------------------------
  $("#services-list").innerHTML = cfg.services
    .map(
      (s) => `
      <div class="service-row">
        <div>
          <div class="service-name">${esc(s.name)}</div>
          <div class="service-desc">${esc(s.desc)}</div>
        </div>
        <div class="service-price">${esc(s.price)}</div>
      </div>`
    )
    .join("");

  // --- Planos -----------------------------------------------------
  $("#plans-grid").innerHTML = cfg.plans
    .map((p) => {
      const tag = p.featured ? `<span class="ticket-tag">${esc(p.tag || "Mais escolhido")}</span>` : "";
      const btnClass = p.featured ? "btn-primary" : "btn-ghost";
      const features = p.features.map((f) => `<li>${esc(f)}</li>`).join("");
      return `
      <div class="ticket${p.featured ? " featured" : ""}">
        ${tag}
        <h3>${esc(p.name)}</h3>
        <div class="price">R$ ${esc(p.price)}<span> /mês</span></div>
        <div class="perf"></div>
        <ul>${features}</ul>
        <a href="${waLink}" class="btn ${btnClass}">Assinar o ${esc(p.name)}</a>
      </div>`;
    })
    .join("");

  // --- Como funciona ------------------------------------------------
  $("#steps-list").innerHTML = cfg.steps
    .map(
      (s, i) => `
      <div class="step">
        <div class="num">${i + 1}</div>
        <h3>${esc(s.title)}</h3>
        <p>${esc(s.desc)}</p>
      </div>`
    )
    .join("");

  // --- Depoimentos --------------------------------------------------
  $("#testimonials-list").innerHTML = cfg.testimonials
    .map(
      (t) => `
      <div class="quote-row">
        <div class="quote-text">"${esc(t.text)}"</div>
        <div class="quote-who"><strong>${esc(t.name)}</strong>${esc(t.detail)}</div>
      </div>`
    )
    .join("");

  // --- Contato / unidade ----------------------------------------------
  $("#contact-info").innerHTML = `
    <div class="info-item"><div class="k">Endereço</div><div>${esc(cfg.contact.address)}</div></div>
    <div class="info-item"><div class="k">Horário</div><div>${esc(cfg.contact.hours)}</div></div>
    <div class="info-item"><div class="k">Telefone</div><div>${esc(cfg.contact.phoneDisplay)}</div></div>
    <div class="info-item"><div class="k">Pátio</div><div>${esc(cfg.contact.capacity)}</div></div>
  `;

  // --- Menu mobile -----------------------------------------------------
  const burger = $("#burgerBtn");
  const panel = $("#mobilePanel");
  function closeMenu() {
    panel.classList.remove("open");
    burger.textContent = "☰";
    burger.setAttribute("aria-expanded", "false");
  }
  function toggleMenu() {
    const open = panel.classList.toggle("open");
    burger.textContent = open ? "✕" : "☰";
    burger.setAttribute("aria-expanded", String(open));
  }
  burger.addEventListener("click", toggleMenu);
})();
