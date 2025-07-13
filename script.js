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
  iOS: "https://apps.apple.com/kr/app/pollit-%ED%8F%B4%EC%9E%87-%EA%B0%80%EC%B9%98%EA%B4%80-%EB%B0%8F-%EC%84%B1%ED%96%A5-%EA%B8%B0%EB%B0%98-%EC%86%8C%EA%B0%9C%ED%8C%85%EC%95%B1/id6478050884", // Replace with actual App Store URL
  Android: "https://play.google.com/store/apps/details?id=com.pollitapp", // Replace with actual Play Store URL
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
      // appleBtn.style.transform = "scale(1.1)"; // 제거: 크기 차이 없애기
    } else if (os === "Android") {
      googleBtn.style.order = "1";
      appleBtn.style.order = "2";
      // googleBtn.style.transform = "scale(1.1)"; // 제거: 크기 차이 없애기
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
  initAnalyticsTracking,
};

// Google Analytics 클릭 이벤트 추적
function initAnalyticsTracking() {
  // Hero 섹션 App Store 버튼
  const heroAppleBtn = document.getElementById("appleBtn");
  if (heroAppleBtn) {
    heroAppleBtn.addEventListener("click", function (e) {
      if (typeof gtag !== "undefined") {
        gtag("event", "app_download_click", {
          event_category: "App Download",
          event_label: "Hero App Store",
          app_platform: "iOS",
          button_location: "hero_section",
          custom_parameter_1: "hero_app_store",
        });
      }
    });
  }

  // Hero 섹션 Play Store 버튼
  const heroGoogleBtn = document.getElementById("googleBtn");
  if (heroGoogleBtn) {
    heroGoogleBtn.addEventListener("click", function (e) {
      if (typeof gtag !== "undefined") {
        gtag("event", "app_download_click", {
          event_category: "App Download",
          event_label: "Hero Play Store",
          app_platform: "Android",
          button_location: "hero_section",
          custom_parameter_1: "hero_play_store",
        });
      }
    });
  }

  // CTA 섹션 App Store 버튼
  const ctaAppleBtn = document.getElementById("appleBtn2");
  if (ctaAppleBtn) {
    ctaAppleBtn.addEventListener("click", function (e) {
      if (typeof gtag !== "undefined") {
        gtag("event", "app_download_click", {
          event_category: "App Download",
          event_label: "CTA App Store",
          app_platform: "iOS",
          button_location: "cta_section",
          custom_parameter_1: "cta_app_store",
        });
      }
    });
  }

  // CTA 섹션 Play Store 버튼
  const ctaGoogleBtn = document.getElementById("googleBtn2");
  if (ctaGoogleBtn) {
    ctaGoogleBtn.addEventListener("click", function (e) {
      if (typeof gtag !== "undefined") {
        gtag("event", "app_download_click", {
          event_category: "App Download",
          event_label: "CTA Play Store",
          app_platform: "Android",
          button_location: "cta_section",
          custom_parameter_1: "cta_play_store",
        });
      }
    });
  }

  // Instagram 링크 클릭 추적
  const instagramLink = document.querySelector(".social-link.instagram");
  if (instagramLink) {
    instagramLink.addEventListener("click", function (e) {
      if (typeof gtag !== "undefined") {
        gtag("event", "social_media_click", {
          event_category: "Social Media",
          event_label: "Instagram",
          social_platform: "Instagram",
          custom_parameter_1: "instagram_footer",
        });
      }
    });
  }
}

// 페이지 로드 시 추적 초기화
document.addEventListener("DOMContentLoaded", function () {
  if (typeof initAnalyticsTracking === "function") {
    initAnalyticsTracking();
  }
});

// WebP 지원 감지
function supportsWebP() {
  const canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL("image/webp").indexOf("data:image/webp") === 0;
}

// WebP 지원 여부에 따라 CSS 클래스 추가
function initWebPSupport() {
  if (supportsWebP()) {
    document.documentElement.classList.add("webp");
  } else {
    document.documentElement.classList.add("no-webp");
  }
}

// 앱 다운로드 버튼 클릭 트래킹
function trackAppDownload(platform, location) {
  gtag("event", "app_download_click", {
    platform: platform,
    location: location,
    app_name: "pollit",
    event_category: "engagement",
    event_label: platform + "_" + location,
  });
}

// Instagram 링크 클릭 트래킹
function trackInstagramClick(location) {
  gtag("event", "instagram_click", {
    location: location,
    social_platform: "instagram",
    event_category: "social_engagement",
    event_label: "instagram_" + location,
  });
}

// 페이지 로드 시 초기화
document.addEventListener("DOMContentLoaded", function () {
  // WebP 지원 초기화
  initWebPSupport();

  // 앱 다운로드 버튼 이벤트 리스너
  const downloadButtons = [
    { id: "appleBtn", platform: "ios", location: "hero" },
    { id: "googleBtn", platform: "android", location: "hero" },
    { id: "appleBtn2", platform: "ios", location: "footer" },
    { id: "googleBtn2", platform: "android", location: "footer" },
  ];

  downloadButtons.forEach((button) => {
    const element = document.getElementById(button.id);
    if (element) {
      element.addEventListener("click", function (e) {
        trackAppDownload(button.platform, button.location);
      });
    }
  });

  // Instagram 링크 이벤트 리스너
  const instagramLinks = document.querySelectorAll(
    'a[href*="instagram.com/pollit.official"]'
  );
  instagramLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const location = this.closest(".footer")
        ? "footer"
        : this.closest(".helpful-links")
        ? "404_page"
        : "main";
      trackInstagramClick(location);
    });
  });
});
