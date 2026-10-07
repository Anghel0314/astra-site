class SiteHeader extends HTMLElement {
  connectedCallback() {
    const page = document.body.dataset.page || "";
    const active = (name) => page === name ? ' aria-current="page"' : "";
    this.innerHTML = `
      <header class="site-header">
        <a class="brand" href="/" aria-label="Astra home"><img class="brand-mark" src="/assets/favicon.svg" alt="" aria-hidden="true" width="32" height="32"><span>Astra</span></a>
        <button class="menu-button" type="button" aria-label="Open navigation" aria-expanded="false"><span></span><span></span></button>
        <nav class="site-nav" aria-label="Main navigation">
          <a href="/#paths">Paths</a><a href="/#experience">Experience</a>
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
          <div><h3>Product</h3><a href="/#paths">Paths</a><a href="/#experience">Experience</a><a href="/#advisor">Advisor</a><a href="/#download">Get Astra</a></div>
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
  Strategy: "Reflect on priorities, constraints, and the decision behind your next plan.",
  Execution: "Explore how you move from an intention to a concrete action.",
  Creativity: "Make room for different ideas before choosing an approach.",
  Leadership: "Reflect on how you give direction and take responsibility.",
  Independence: "Explore where autonomy helps you work with greater intention.",
  Communication: "Consider how you express an idea and understand another perspective.",
  Adaptability: "Reflect on how you respond when plans or circumstances change.",
  "Risk Orientation": "Explore uncertainty, tradeoffs, and the boundaries around a decision."
};
document.querySelectorAll("[data-path]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-path]").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    document.getElementById("path-name").textContent = button.dataset.path;
    document.getElementById("path-copy").textContent = pathDescriptions[button.dataset.path];
  });
});
