// Bubble Harness website. Small progressive enhancements; the page works without JS.
(() => {
  const REPO = "huslayer826/bubble-harness";

  // Sticky nav gets a background once the page scrolls.
  const nav = document.getElementById("nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Copy-to-clipboard command buttons.
  for (const button of document.querySelectorAll("[data-copy]")) {
    button.addEventListener("click", async () => {
      const label = button.querySelector("[data-copy-label]");
      try {
        await navigator.clipboard.writeText(button.dataset.copy);
        button.classList.add("copied");
        if (label) label.textContent = "Copied";
      } catch {
        if (label) label.textContent = "Press ⌘C";
        const range = document.createRange();
        range.selectNodeContents(button.querySelector("code"));
        getSelection().removeAllRanges();
        getSelection().addRange(range);
      }
      setTimeout(() => {
        button.classList.remove("copied");
        if (label) label.textContent = "Copy";
      }, 1800);
    });
  }

  // Reveal sections as they scroll into view.
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries)
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    reveals.forEach((el) => io.observe(el));
  } else reveals.forEach((el) => el.classList.add("in"));

  // Live release info and star count from GitHub (falls back to the static HTML).
  const fmtCount = (n) => (n >= 1000 ? (n / 1000).toFixed(n >= 10000 ? 0 : 1) + "k" : String(n));
  fetch(`https://api.github.com/repos/${REPO}/releases/latest`)
    .then((r) => (r.ok ? r.json() : Promise.reject()))
    .then((release) => {
      if (release.tag_name)
        document.querySelectorAll("[data-version]").forEach((el) => (el.textContent = release.tag_name));
      const dmg = (release.assets || []).find((a) => a.name.endsWith(".dmg"));
      if (dmg) {
        const mb = Math.round(dmg.size / 1e6) + " MB";
        document.querySelectorAll("[data-size]").forEach((el) => (el.textContent = mb));
        document.querySelectorAll("[data-download]").forEach((el) => (el.href = dmg.browser_download_url));
      }
    })
    .catch(() => {});
  fetch(`https://api.github.com/repos/${REPO}`)
    .then((r) => (r.ok ? r.json() : Promise.reject()))
    .then((repo) => {
      const el = document.querySelector("[data-stars]");
      // Only show the count once it's big enough to help rather than hurt.
      if (el && typeof repo.stargazers_count === "number" && repo.stargazers_count >= 50) el.textContent = fmtCount(repo.stargazers_count);
    })
    .catch(() => {});
})();
