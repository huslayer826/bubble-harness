// Background fizz: a few slow bubbles drifting up.
const fizz = document.querySelector(".fizz");
const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
if (fizz && !calm) {
  for (let i = 0; i < 18; i++) {
    const b = document.createElement("i");
    const size = 6 + Math.random() * 38;
    b.style.width = b.style.height = `${size}px`;
    b.style.left = `${Math.random() * 100}%`;
    b.style.animationDuration = `${18 + Math.random() * 22}s`;
    b.style.animationDelay = `${-Math.random() * 40}s`;
    fizz.appendChild(b);
  }
}

// Click a provider bubble to pop it. It grows back.
document.querySelectorAll(".orb").forEach((orb) => {
  orb.addEventListener("click", () => {
    if (orb.classList.contains("pop") || calm) return;
    const r = orb.getBoundingClientRect();
    const host = orb.parentElement.getBoundingClientRect();
    for (let i = 0; i < 10; i++) {
      const s = document.createElement("span");
      const a = (i / 10) * Math.PI * 2;
      const d = r.width * 0.7;
      s.className = "burst";
      s.style.left = `${r.left - host.left + r.width / 2 - 3}px`;
      s.style.top = `${r.top - host.top + r.height / 2 - 3}px`;
      s.style.setProperty("--bx", `${Math.cos(a) * d}px`);
      s.style.setProperty("--by", `${Math.sin(a) * d}px`);
      orb.parentElement.appendChild(s);
      setTimeout(() => s.remove(), 500);
    }
    orb.classList.add("pop");
    setTimeout(() => {
      orb.classList.remove("pop");
      orb.classList.add("regrow");
      setTimeout(() => orb.classList.remove("regrow"), 700);
    }, 1400);
  });
});

// Copy login commands.
document.querySelectorAll(".copy").forEach((btn) => {
  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
      btn.textContent = "Copied";
      btn.classList.add("done");
      setTimeout(() => { btn.textContent = "Copy"; btn.classList.remove("done"); }, 1400);
    } catch {}
  });
});

// Live GitHub star count. Fails quietly if the API is unreachable or rate-limited.
const starEl = document.querySelector("[data-stars]");
if (starEl) {
  fetch("https://api.github.com/repos/huslayer826/bubble-harness")
    .then((r) => (r.ok ? r.json() : null))
    .then((repo) => {
      const n = repo?.stargazers_count;
      if (typeof n === "number" && n > 0) {
        starEl.textContent = n >= 1000 ? `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k` : String(n);
      }
    })
    .catch(() => {});
}
