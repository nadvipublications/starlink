(function () {
  "use strict";

  const WHATSAPP_NUMBER = "971527266343";
  const QUOTE_EMAIL = "star06@eim.ae";

  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  document.querySelectorAll("[data-year]").forEach((item) => {
    item.textContent = new Date().getFullYear();
  });

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".carousel").forEach((carousel) => {
      carousel.removeAttribute("data-bs-ride");
      carousel.setAttribute("data-bs-interval", "false");
    });
  }

  if (!window.bootstrap) {
    document.querySelectorAll("[data-bs-toggle='modal']").forEach((button) => {
      button.addEventListener("click", () => {
        const target = document.querySelector(button.dataset.bsTarget);
        if (!target) return;
        target.classList.add("show");
        target.style.display = "block";
        target.removeAttribute("aria-hidden");
        target.setAttribute("aria-modal", "true");
      });
    });

    document.querySelectorAll("[data-bs-dismiss='modal']").forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.closest(".modal");
        if (!target) return;
        target.classList.remove("show");
        target.style.display = "none";
        target.setAttribute("aria-hidden", "true");
        target.removeAttribute("aria-modal");
      });
    });
  }

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  const filterButtons = document.querySelectorAll("[data-filter]");
  const portfolioItems = document.querySelectorAll("[data-category]");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      portfolioItems.forEach((item) => {
        const shouldShow = filter === "all" || item.dataset.category === filter;
        item.classList.toggle("d-none", !shouldShow);
      });
    });
  });

  const quoteForms = document.querySelectorAll(".quote-form");
  quoteForms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const messageLines = [
        "Name: " + (formData.get("name") || ""),
        "Company: " + (formData.get("company") || ""),
        "Phone: " + (formData.get("phone") || ""),
        "Email: " + (formData.get("email") || ""),
        "Service: " + (formData.get("service") || ""),
        "Project Details: " + (formData.get("details") || ""),
      ];
      const message = messageLines.join("\n");
      const submitMethod = event.submitter?.value || "whatsapp";
      const url =
        submitMethod === "email"
          ? "mailto:" +
            QUOTE_EMAIL +
            "?subject=" +
            encodeURIComponent("Quote Request - Star Links Advertising") +
            "&body=" +
            encodeURIComponent(message)
          : "https://wa.me/" +
            WHATSAPP_NUMBER +
            "?text=" +
            encodeURIComponent(message);
      window.open(url, "_blank", "noopener,noreferrer");
      form.reset();
    });
  });
})();
