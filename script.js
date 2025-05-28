/**
 * AweSome Wellness Platform - Enhanced JavaScript
 * Comprehensive functionality for wellness platform
 */

// Global variables and state
let typingInterval
const currentTypingSpeed = 80
const isTypingAnimationRunning = false
let currentStoryIndex = 0
let storyInterval

// Application state
const AppState = {
  currentSection: "home",
  isMenuOpen: false,
  activeFilters: {
    programs: "all",
    nutrition: "meal-plans",
  },
  user: {
    preferences: {},
    progress: {},
  },
}

// Declare gtag variable
const gtag =
  window.gtag ||
  (() => {
    ;(window.gtag = window.gtag || []).push(arguments)
  })

// DOM Content Loaded Event Listener
document.addEventListener("DOMContentLoaded", () => {
  initializeApp()
})

/**
 * Initialize the application
 */
function initializeApp() {
  showLoadingScreen()

  // Initialize all components with delay for smooth loading
  setTimeout(() => {
    initNavigation()
    initHeroSection()
    initQuickAccess()
    initProgramFilters()
    initNutritionTabs()
    initSuccessStories()
    initNewsletterForm()
    initModals()
    initScrollEffects()
    initKeyboardNavigation()
    initAnalytics()

    hideLoadingScreen()
    showWelcomeMessage()
  }, 1500)
}

/**
 * Loading Screen Management
 */
function showLoadingScreen() {
  const loadingScreen = document.getElementById("loadingScreen")
  if (loadingScreen) {
    loadingScreen.style.display = "flex"
  }
}

function hideLoadingScreen() {
  const loadingScreen = document.getElementById("loadingScreen")
  if (loadingScreen) {
    loadingScreen.classList.add("hidden")
    setTimeout(() => {
      loadingScreen.style.display = "none"
    }, 500)
  }
}

/**
 * Navigation System
 */
function initNavigation() {
  const mobileToggle = document.getElementById("mobileToggle")
  const navMenu = document.getElementById("navMenu")
  const navLinks = document.querySelectorAll(".nav-link")
  const header = document.getElementById("mainHeader")

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      toggleMobileMenu()
    })

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
      if (!navMenu.contains(event.target) && !mobileToggle.contains(event.target) && AppState.isMenuOpen) {
        closeMobileMenu()
      }
    })
  }

  // Navigation link handling
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const targetSection = link.getAttribute("href").substring(1)
      navigateToSection(targetSection)
      closeMobileMenu()
    })
  })

  // Header scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })

  // Update active nav link on scroll
  window.addEventListener("scroll", updateActiveNavLink)
}

function toggleMobileMenu() {
  const mobileToggle = document.getElementById("mobileToggle")
  const navMenu = document.getElementById("navMenu")

  AppState.isMenuOpen = !AppState.isMenuOpen

  mobileToggle.classList.toggle("active")
  navMenu.classList.toggle("active")

  // Prevent body scroll when menu is open
  document.body.style.overflow = AppState.isMenuOpen ? "hidden" : ""
}

function closeMobileMenu() {
  const mobileToggle = document.getElementById("mobileToggle")
  const navMenu = document.getElementById("navMenu")

  AppState.isMenuOpen = false
  mobileToggle.classList.remove("active")
  navMenu.classList.remove("active")
  document.body.style.overflow = ""
}

function navigateToSection(sectionId) {
  const targetElement = document.getElementById(sectionId)
  if (targetElement) {
    const headerHeight = document.querySelector(".main-header").offsetHeight
    const targetPosition = targetElement.offsetTop - headerHeight - 20

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    })

    AppState.currentSection = sectionId
    updateActiveNavLink()

    // Track navigation
    trackEvent("navigation", "section_view", sectionId)
  }
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")
  const headerHeight = document.querySelector(".main-header").offsetHeight

  let currentSection = ""

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - headerHeight - 100
    const sectionBottom = sectionTop + section.offsetHeight

    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      currentSection = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active")
    }
  })
}

/**
 * Hero Section
 */
function initHeroSection() {
  initTypingAnimation()
  initHeroStats()
  initHeroButtons()
}

function initTypingAnimation() {
  const typingElement = document.getElementById("typingText")
  if (!typingElement) return

  const messages = [
    "Your Health Journey Starts Here",
    "Available 24/7 - Even When Gyms Are Closed",
    "Trusted by 10,000+ Busy Professionals",
    "Transform Your Life, One Habit at a Time",
  ]

  let messageIndex = 0
  let charIndex = 0
  let isDeleting = false

  function typeText() {
    const currentMessage = messages[messageIndex]

    if (isDeleting) {
      typingElement.textContent = currentMessage.substring(0, charIndex - 1)
      charIndex--
    } else {
      typingElement.textContent = currentMessage.substring(0, charIndex + 1)
      charIndex++
    }

    let typeSpeed = isDeleting ? 50 : currentTypingSpeed

    if (!isDeleting && charIndex === currentMessage.length) {
      typeSpeed = 2000 // Pause at end
      isDeleting = true
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false
      messageIndex = (messageIndex + 1) % messages.length
      typeSpeed = 500 // Pause before next message
    }

    setTimeout(typeText, typeSpeed)
  }

  typeText()
}

function initHeroStats() {
  const statNumbers = document.querySelectorAll(".stat-number[data-count]")

  const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target)
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  statNumbers.forEach((stat) => observer.observe(stat))
}

function animateCounter(element) {
  const target = Number.parseInt(element.getAttribute("data-count"))
  const duration = 2000
  const startTime = performance.now()

  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)

    const current = Math.floor(progress * target)
    element.textContent = current.toLocaleString()

    if (progress < 1) {
      requestAnimationFrame(updateCounter)
    }
  }

  requestAnimationFrame(updateCounter)
}

function initHeroButtons() {
  const startJourneyBtn = document.getElementById("startJourneyBtn")
  const watchVideoBtn = document.getElementById("watchVideoBtn")

  if (startJourneyBtn) {
    startJourneyBtn.addEventListener("click", () => {
      navigateToSection("programs")
      trackEvent("cta_click", "hero", "start_journey")
    })
  }

  if (watchVideoBtn) {
    watchVideoBtn.addEventListener("click", () => {
      openVideoModal()
      trackEvent("cta_click", "hero", "watch_video")
    })
  }
}

/**
 * Quick Access Section
 */
function initQuickAccess() {
  const accessCards = document.querySelectorAll(".access-card")

  accessCards.forEach((card) => {
    card.addEventListener("click", () => {
      const section = card.getAttribute("data-section")
      if (section) {
        navigateToSection(section)
        trackEvent("quick_access", "card_click", section)
      }
    })

    // Add hover effect with slight delay
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-8px)"
    })

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)"
    })
  })
}

/**
 * Program Filters
 */
function initProgramFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn")
  const programCards = document.querySelectorAll(".program-card")

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter")

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      button.classList.add("active")

      // Filter programs
      filterPrograms(filter, programCards)

      // Update state
      AppState.activeFilters.programs = filter

      // Track filter usage
      trackEvent("filter", "programs", filter)
    })
  })

  // Initialize program card interactions
  programCards.forEach((card) => {
    const startBtn = card.querySelector(".btn-primary")
    const previewBtn = card.querySelector(".btn-outline")

    if (startBtn) {
      startBtn.addEventListener("click", () => {
        const programName = card.querySelector("h3").textContent
        showToast(`Starting "${programName}" program!`, "success")
        trackEvent("program_start", "engagement", programName)
      })
    }

    if (previewBtn) {
      previewBtn.addEventListener("click", () => {
        const programName = card.querySelector("h3").textContent
        showToast(`Opening preview for "${programName}"`, "info")
        trackEvent("program_preview", "engagement", programName)
      })
    }
  })
}

function filterPrograms(filter, cards) {
  cards.forEach((card) => {
    const level = card.getAttribute("data-level")
    const duration = Number.parseInt(card.getAttribute("data-duration"))

    let shouldShow = false

    switch (filter) {
      case "all":
        shouldShow = true
        break
      case "quick":
        shouldShow = duration <= 20
        break
      default:
        shouldShow = level === filter
    }

    if (shouldShow) {
      card.style.display = "block"
      card.style.animation = "fadeIn 0.3s ease"
    } else {
      card.style.display = "none"
    }
  })
}

/**
 * Nutrition Tabs
 */
function initNutritionTabs() {
  const tabButtons = document.querySelectorAll(".nutrition-tabs .tab-btn")
  const tabContents = document.querySelectorAll(".nutrition-section .tab-content")

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetTab = button.getAttribute("data-tab")

      // Update active button
      tabButtons.forEach((btn) => btn.classList.remove("active"))
      button.classList.add("active")

      // Show corresponding content
      tabContents.forEach((content) => {
        content.classList.remove("active")
        if (content.getAttribute("data-content") === targetTab) {
          content.classList.add("active")
        }
      })

      // Update state
      AppState.activeFilters.nutrition = targetTab

      // Track tab usage
      trackEvent("tab_switch", "nutrition", targetTab)
    })
  })

  // Initialize meal plan interactions
  initMealPlanCards()
}

function initMealPlanCards() {
  const planCards = document.querySelectorAll(".meal-plan-card")

  planCards.forEach((card) => {
    const button = card.querySelector(".btn")

    if (button) {
      button.addEventListener("click", () => {
        const planName = card.querySelector("h4").textContent
        const planPrice = card.querySelector(".plan-price").textContent

        if (planPrice.includes("Free")) {
          showToast(`Downloading "${planName}" PDF...`, "success")
          trackEvent("download", "meal_plan", planName)
        } else {
          showToast(`Redirecting to checkout for "${planName}"`, "info")
          trackEvent("purchase_intent", "meal_plan", planName)
        }
      })
    }
  })
}

/**
 * Success Stories Carousel
 */
function initSuccessStories() {
  const stories = document.querySelectorAll(".story-card")
  const dots = document.querySelectorAll(".dot")
  const prevBtn = document.getElementById("prevStory")
  const nextBtn = document.getElementById("nextStory")

  if (stories.length === 0) return

  // Auto-rotate stories
  storyInterval = setInterval(() => {
    nextStory()
  }, 5000)

  // Manual navigation
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevStory()
      resetStoryInterval()
    })
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextStory()
      resetStoryInterval()
    })
  }

  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showStory(index)
      resetStoryInterval()
    })
  })

  // Pause on hover
  const carousel = document.getElementById("storiesCarousel")
  if (carousel) {
    carousel.addEventListener("mouseenter", () => {
      clearInterval(storyInterval)
    })

    carousel.addEventListener("mouseleave", () => {
      resetStoryInterval()
    })
  }
}

function showStory(index) {
  const stories = document.querySelectorAll(".story-card")
  const dots = document.querySelectorAll(".dot")

  // Hide all stories
  stories.forEach((story) => story.classList.remove("active"))
  dots.forEach((dot) => dot.classList.remove("active"))

  // Show target story
  if (stories[index]) {
    stories[index].classList.add("active")
    dots[index].classList.add("active")
    currentStoryIndex = index
  }
}

function nextStory() {
  const stories = document.querySelectorAll(".story-card")
  const nextIndex = (currentStoryIndex + 1) % stories.length
  showStory(nextIndex)
}

function prevStory() {
  const stories = document.querySelectorAll(".story-card")
  const prevIndex = (currentStoryIndex - 1 + stories.length) % stories.length
  showStory(prevIndex)
}

function resetStoryInterval() {
  clearInterval(storyInterval)
  storyInterval = setInterval(nextStory, 5000)
}

/**
 * Newsletter Form
 */
function initNewsletterForm() {
  const form = document.getElementById("newsletterForm")

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault()

      const email = document.getElementById("newsletterEmail").value

      if (validateEmail(email)) {
        // Simulate subscription
        showToast("Successfully subscribed to newsletter!", "success")
        form.reset()
        trackEvent("newsletter_signup", "engagement", email)
      } else {
        showToast("Please enter a valid email address", "error")
      }
    })
  }
}

/**
 * Modal Management
 */
function initModals() {
  const videoModal = document.getElementById("videoModal")
  const closeVideoModal = document.getElementById("closeVideoModal")

  if (closeVideoModal) {
    closeVideoModal.addEventListener("click", closeVideoModal)
  }

  if (videoModal) {
    videoModal.addEventListener("click", (e) => {
      if (e.target === videoModal || e.target.classList.contains("modal-overlay")) {
        closeVideoModal()
      }
    })
  }
}

function openVideoModal() {
  const modal = document.getElementById("videoModal")
  const video = document.getElementById("demoVideo")

  if (modal && video) {
    // Set video source (replace with actual video URL)
    video.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"

    modal.classList.add("active")
    document.body.style.overflow = "hidden"
  }
}

function closeVideoModal() {
  const modal = document.getElementById("videoModal")
  const video = document.getElementById("demoVideo")

  if (modal && video) {
    modal.classList.remove("active")
    video.src = "" // Stop video
    document.body.style.overflow = ""
  }
}

/**
 * Scroll Effects
 */
function initScrollEffects() {
  // Parallax effect for hero section
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const heroBackground = document.querySelector(".hero-background")

    if (heroBackground) {
      heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`
    }
  })

  // Fade in animations for sections
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe sections for fade-in effect
  const sections = document.querySelectorAll("section:not(.hero-section)")
  sections.forEach((section) => {
    section.style.opacity = "0"
    section.style.transform = "translateY(20px)"
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(section)
  })
}

/**
 * Keyboard Navigation
 */
function initKeyboardNavigation() {
  document.addEventListener("keydown", (e) => {
    // Close modals with Escape
    if (e.key === "Escape") {
      closeVideoModal()
      closeMobileMenu()
    }

    // Navigate sections with arrow keys (when not in input)
    if (document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        navigateToNextSection()
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        navigateToPrevSection()
      }
    }
  })
}

function navigateToNextSection() {
  const sections = ["home", "programs", "nutrition", "community", "shop"]
  const currentIndex = sections.indexOf(AppState.currentSection)
  const nextIndex = (currentIndex + 1) % sections.length
  navigateToSection(sections[nextIndex])
}

function navigateToPrevSection() {
  const sections = ["home", "programs", "nutrition", "community", "shop"]
  const currentIndex = sections.indexOf(AppState.currentSection)
  const prevIndex = (currentIndex - 1 + sections.length) % sections.length
  navigateToSection(sections[prevIndex])
}

/**
 * Toast Notification System
 */
function showToast(message, type = "info", duration = 3000) {
  const container = getToastContainer()

  const toast = document.createElement("div")
  toast.classList.add("toast", type)
  toast.textContent = message
  toast.setAttribute("role", "alert")
  toast.setAttribute("aria-live", "polite")

  // Add click to dismiss
  toast.addEventListener("click", () => removeToast(toast))

  container.appendChild(toast)

  // Auto remove
  setTimeout(() => removeToast(toast), duration)

  // Limit number of toasts
  const toasts = container.querySelectorAll(".toast")
  if (toasts.length > 3) {
    removeToast(toasts[0])
  }
}

function getToastContainer() {
  let container = document.getElementById("toastContainer")
  if (!container) {
    container = document.createElement("div")
    container.id = "toastContainer"
    container.classList.add("toast-container")
    document.body.appendChild(container)
  }
  return container
}

function removeToast(toast) {
  if (toast && toast.parentNode) {
    toast.style.animation = "toastSlideOut 0.3s ease forwards"
    setTimeout(() => {
      if (toast.parentNode) {
        toast.remove()
      }
    }, 300)
  }
}

/**
 * Analytics & Event Tracking
 */
function initAnalytics() {
  // Track page load
  trackEvent("page_load", "engagement", "home")

  // Track scroll depth
  let maxScroll = 0
  window.addEventListener("scroll", () => {
    const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)

    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent

      // Track scroll milestones
      if (maxScroll >= 25 && maxScroll < 50) {
        trackEvent("scroll_depth", "engagement", "25%")
      } else if (maxScroll >= 50 && maxScroll < 75) {
        trackEvent("scroll_depth", "engagement", "50%")
      } else if (maxScroll >= 75 && maxScroll < 100) {
        trackEvent("scroll_depth", "engagement", "75%")
      } else if (maxScroll >= 100) {
        trackEvent("scroll_depth", "engagement", "100%")
      }
    }
  })

  // Track time on page
  const startTime = Date.now()
  window.addEventListener("beforeunload", () => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000)
    trackEvent("time_on_page", "engagement", timeSpent)
  })
}

function trackEvent(eventName, category = "interaction", label = "") {
  // Google Analytics 4 tracking (if implemented)
  if (typeof gtag !== "undefined") {
    gtag("event", eventName, {
      event_category: category,
      event_label: label,
      value: 1,
    })
  }

  // Console log for development
  if (window.location.hostname === "localhost") {
    console.log("Event tracked:", { eventName, category, label })
  }

  // Custom analytics endpoint (if implemented)
  // fetch('/api/analytics', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ event: eventName, category, label })
  // });
}

/**
 * Utility Functions
 */
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

function throttle(func, limit) {
  let inThrottle
  return function () {
    const args = arguments
    
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

/**
 * Welcome Message
 */
function showWelcomeMessage() {
  setTimeout(() => {
    showToast("Welcome to AweSome! Your trusted wellness advisor is ready 24/7 🎉", "success", 5000)
  }, 1000)
}

/**
 * Performance Monitoring
 */
function initPerformanceMonitoring() {
  window.addEventListener("load", () => {
    setTimeout(() => {
      const navigation = performance.getEntriesByType("navigation")[0]
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart

        if (loadTime > 3000) {
          trackEvent("slow_page_load", "performance", Math.round(loadTime))
        }
      }
    }, 0)
  })
}

// Initialize performance monitoring
initPerformanceMonitoring()

// Export functions for global access
window.AweSomeApp = {
  navigateToSection,
  showToast,
  trackEvent,
  AppState,
}
