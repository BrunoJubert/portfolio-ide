class CookieManager {
  constructor() {
    this.bannerDisplayed = false;
  }

  init() {
    if (!sessionStorage.getItem("cookieBannerDisplayed")) {
      this.showCookieBanner();
    }
  }

  showCookieBanner() {
    const banner = document.createElement("div");
    banner.className = "cookie-banner";
    banner.innerHTML = `
      <span class="close-btn">&times;</span>
      <p>Ce site n'utilise aucun cookie pour collecter vos données personnelles. 
      Seuls des cookies tiers essentiels au fonctionnement du site peuvent être présents. 
      Aucune information vous concernant n'est collectée ou stockée.</p>
      <button id="cookie-understand">J'ai compris</button>
    `;
    document.body.appendChild(banner);

    setTimeout(() => {
      banner.classList.add("visible");
    }, 5);

    document
      .getElementById("cookie-understand")
      .addEventListener("click", () => this.acknowledgeCookies());

    document
      .querySelector(".close-btn")
      .addEventListener("click", () => this.closeBanner());
  }

  acknowledgeCookies() {
    sessionStorage.setItem("cookieBannerDisplayed", "true");
    this.closeBanner();
  }

  closeBanner() {
    const banner = document.querySelector(".cookie-banner");
    banner.classList.remove("visible");
    setTimeout(() => {
      banner.style.display = "none";
    }, 250); 
  }
}

export default CookieManager;
