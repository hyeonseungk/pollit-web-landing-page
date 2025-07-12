// User Agent Detection
function detectOS() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }

  return "Unknown";
}

// Store URLs (replace with actual app store URLs)
const storeUrls = {
  iOS: "https://apps.apple.com/app/pollit/id123456789", // Replace with actual App Store URL
  Android: "https://play.google.com/store/apps/details?id=com.pollit.app", // Replace with actual Play Store URL
};

// Download button click handler
function handleDownload() {
  const os = detectOS();
  const url = storeUrls[os] || storeUrls.Android; // Default to Android if OS not detected

  // Track download click (for analytics)
  if (typeof gtag !== "undefined") {
    gtag("event", "download_click", {
      event_category: "app_download",
      event_label: os,
      value: 1,
    });
  }

  // Open app store
  window.open(url, "_blank");
}

// Specific store button handlers
function handleAppleDownload() {
  const url = storeUrls.iOS;

  if (typeof gtag !== "undefined") {
    gtag("event", "download_click", {
      event_category: "app_download",
      event_label: "iOS",
      value: 1,
    });
  }

  window.open(url, "_blank");
}

function handleGoogleDownload() {
  const url = storeUrls.Android;

  if (typeof gtag !== "undefined") {
    gtag("event", "download_click", {
      event_category: "app_download",
      event_label: "Android",
      value: 1,
    });
  }

  window.open(url, "_blank");
}

// Scroll Animation Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");
    }
  });
}, observerOptions);

// Smooth scrolling for anchor links
function smoothScroll(target) {
  document.querySelector(target).scrollIntoView({
    behavior: "smooth",
  });
}

// Lazy loading for images
function lazyLoadImages() {
  const images = document.querySelectorAll("img[data-src]");
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        img.classList.add("loaded");
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

// Parallax effect for hero section
function initParallax() {
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector(".hero");
    if (hero) {
      const rate = scrolled * -0.5;
      hero.style.transform = `translateY(${rate}px)`;
    }
  });
}

// Counter animation for statistics
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number");

  counters.forEach((counter) => {
    const target = parseInt(counter.textContent);
    const increment = target / 100;
    let current = 0;

    const updateCounter = () => {
      if (current < target) {
        current += increment;
        counter.textContent =
          Math.ceil(current) + (counter.textContent.includes("%") ? "%" : "");
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent =
          target + (counter.textContent.includes("%") ? "%" : "");
      }
    };

    // Start animation when element is visible
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updateCounter();
          counterObserver.unobserve(entry.target);
        }
      });
    });

    counterObserver.observe(counter);
  });
}

// Form validation (if needed for future contact form)
function validateForm(form) {
  const inputs = form.querySelectorAll("input[required], textarea[required]");
  let isValid = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      isValid = false;
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  });

  return isValid;
}

// Initialize all features when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Add loading class to body
  document.body.classList.add("loading");

  // Set up download button event listeners
  const downloadButtons = document.querySelectorAll('[id^="downloadBtn"]');
  downloadButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      handleDownload();
    });
  });

  // Set up store-specific button event listeners
  const appleButtons = document.querySelectorAll('[id^="appleBtn"]');
  appleButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      handleAppleDownload();
    });
  });

  const googleButtons = document.querySelectorAll('[id^="googleBtn"]');
  googleButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      handleGoogleDownload();
    });
  });

  // Initialize scroll animations
  const animatedElements = document.querySelectorAll(
    ".value-card, .review-card, .question-card"
  );
  animatedElements.forEach((el) => observer.observe(el));

  // Initialize lazy loading
  lazyLoadImages();

  // Initialize parallax effect (optional, can be disabled for performance)
  // initParallax();

  // Initialize counter animations
  animateCounters();

  // Show preferred store button based on OS
  const os = detectOS();
  const storeButtons = document.querySelectorAll(".store-buttons");

  storeButtons.forEach((container) => {
    const appleBtn = container.querySelector(".store-btn.apple");
    const googleBtn = container.querySelector(".store-btn.google");

    if (os === "iOS") {
      appleBtn.style.order = "1";
      googleBtn.style.order = "2";
      appleBtn.style.transform = "scale(1.1)";
    } else if (os === "Android") {
      googleBtn.style.order = "1";
      appleBtn.style.order = "2";
      googleBtn.style.transform = "scale(1.1)";
    }
  });

  // Remove loading class after initial animations
  setTimeout(() => {
    document.body.classList.remove("loading");
  }, 100);
});

// Handle window resize
window.addEventListener(
  "resize",
  debounce(() => {
    // Recalculate layouts if needed
    console.log("Window resized");
  }, 250)
);

// Debounce utility function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Performance monitoring
function trackPerformance() {
  if ("performance" in window) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType("navigation")[0];
        const loadTime = perfData.loadEventEnd - perfData.loadEventStart;

        if (typeof gtag !== "undefined") {
          gtag("event", "page_load_time", {
            event_category: "performance",
            event_label: "load_time",
            value: Math.round(loadTime),
          });
        }
      }, 0);
    });
  }
}

// Initialize performance tracking
trackPerformance();

// Export functions for testing or external use
window.PollitLanding = {
  detectOS,
  handleDownload,
  handleAppleDownload,
  handleGoogleDownload,
};
