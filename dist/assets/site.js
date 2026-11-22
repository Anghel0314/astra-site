class SiteHeader extends HTMLElement {
  connectedCallback() {
    const page = document.body.dataset.page || "";
    const active = (name) => page === name ? ' aria-current="page"' : "";
    this.innerHTML = `
      <header class="site-header">
        <a class="brand" href="/" aria-label="Astra home"><img class="brand-mark" src="/assets/favicon.svg" alt="" aria-hidden="true" width="32" height="32"><span>Astra</span></a>
        <button class="menu-button" type="button" aria-label="Open navigation" aria-expanded="false"><span></span><span></span></button>
        <nav class="site-nav" aria-label="Main navigation">
          <a href="/#paths">Paths</a><a href="/#personal">Today</a>
          <a href="/#compass">Compass</a>
          <a href="/support/"${active("support")}>Support</a>
          <a class="button button-small" href="/#download">Get Astra</a>
        </nav>
      </header>`;

    const button = this.querySelector(".menu-button");
    button.addEventListener("click", () => {
      const open = this.classList.toggle("menu-open");
      button.setAttribute("aria-expanded", String(open));
      button.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    });
    this.querySelectorAll("nav a").forEach((link) => link.addEventListener("click", () => {
      this.classList.remove("menu-open");
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "Open navigation");
    }));
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="footer shell">
        <div class="footer-brand"><a class="brand" href="/"><img class="brand-mark" src="/assets/favicon.svg" alt="" aria-hidden="true" width="32" height="32"><span>Astra</span></a><p>Your pattern. Your path. Your next move.</p></div>
        <div class="footer-links">
          <div><h3>Product</h3><a href="/#paths">Paths</a><a href="/#personal">Today</a><a href="/#outlook">Outlook &amp; Compass</a><a href="/#plus">Astra Plus</a><a href="/#download">Get Astra</a></div>
          <div><h3>Resources</h3><a href="/support/">Support</a></div>
          <div><h3>Legal</h3><a href="/privacy/">Privacy Policy</a><a href="/terms/">Terms of Use</a></div>
        </div>
        <p class="copyright">© 2026 Astra. All rights reserved.</p>
      </footer>`;
  }
}

customElements.define("site-header", SiteHeader);
customElements.define("site-footer", SiteFooter);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll("[data-reveal]").forEach((element) => revealObserver.observe(element));

const pathDescriptions = {
  "Clarity": "Name the real decision, separate facts from guesses and define a useful result.",
  "Communication": "Prepare a conversation, listen for the need and make one clear request.",
  "Priorities": "Choose one priority, use a spare hour and make a stop list.",
  "Boundaries": "Draw a workable line, say no with care and notice the cost of saying yes.",
  "Leadership": "Delegate with context, give specific feedback and make a decision visible.",
  "Learning": "Run a small experiment, extract a lesson and ask for a concrete example.",
  "Negotiation": "Prepare your ideal and minimum outcomes, find a trade and check the agreement.",
  "Follow-through": "Make the next step smaller, plan around friction and close a loose end."
};
document.querySelectorAll("[data-path]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-path]").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    document.getElementById("path-name").textContent = button.dataset.path;
    document.getElementById("path-copy").textContent = pathDescriptions[button.dataset.path];
  });
});
