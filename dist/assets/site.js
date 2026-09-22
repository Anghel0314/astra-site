class SiteHeader extends HTMLElement {
  connectedCallback() {
    const page = document.body.dataset.page || "";
    const active = (name) => page === name ? ' aria-current="page"' : "";
    this.innerHTML = `
      <header class="site-header">
        <a class="brand" href="/" aria-label="Astra home"><span class="brand-mark" aria-hidden="true">A</span><span>Astra</span></a>
        <button class="menu-button" type="button" aria-label="Open navigation" aria-expanded="false"><span></span><span></span></button>
        <nav class="site-nav" aria-label="Main navigation">
          <a href="/#experience">Experience</a>
          <a href="/#advisor">Advisor</a>
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
    }));
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="footer shell">
        <div class="footer-brand"><a class="brand" href="/"><span class="brand-mark" aria-hidden="true">A</span><span>Astra</span></a><p>Personal intelligence for your next move.</p></div>
        <div class="footer-links">
          <div><h3>Product</h3><a href="/#experience">Experience</a><a href="/#advisor">Advisor</a><a href="/#download">Get Astra</a></div>
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
