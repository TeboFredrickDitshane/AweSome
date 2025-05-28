/**
 * AweSome Wellness Platform - Enhanced JavaScript
 * Comprehensive functionality for wellness platform
 */

// Global variables and state
let typingInterval
const currentTypingSpeed = 80
const isTypingAnimationRunning = false
const currentStoryIndex = 0
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
    window.gtag = window.gtag || []
    window.gtag.push(arguments)
  })

// DOM Content Loaded Event Listener
document.addEventListener("DOMContentLoaded", () => {
  initializeApp()
})

/**
 * Initialize the application
 */
function initializeApp() {
  initMobileMenu()
  initTypingAnimation()
  initScrollAnimations()
  initWorkoutFilters()
  initWellnessTabs()
  initHabitTracker()
  initContactForm()
  initProgressCircles()
  initSmoothScrolling()
  initTooltips()
  initLazyLoading()
}

// Mobile Menu Toggle
function initMobileMenu() {
  const hamburger = document.querySelector(".hamburger")
  const navMenu = document.querySelector(".nav-menu")

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navMenu.classList.toggle("active")
    })

    // Close menu when clicking on a link
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
      })
    })
  }
}

// Typing Animation
function initTypingAnimation() {
  const typingText = document.getElementById("typingText")
  if (!typingText) return

  const messages = ["Welcome to AweSome", "Your Wellness Journey", "Transform Your Life", "Build Healthy Habits"]

  let messageIndex = 0
  let charIndex = 0
  let isDeleting = false

  function typeMessage() {
    const currentMessage = messages[messageIndex]

    if (isDeleting) {
      typingText.textContent = currentMessage.substring(0, charIndex - 1)
      charIndex--
    } else {
      typingText.textContent = currentMessage.substring(0, charIndex + 1)
      charIndex++
    }

    let typeSpeed = isDeleting ? 50 : 100

    if (!isDeleting && charIndex === currentMessage.length) {
      typeSpeed = 2000
      isDeleting = true
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false
      messageIndex = (messageIndex + 1) % messages.length
      typeSpeed = 500
    }

    setTimeout(typeMessage, typeSpeed)
  }

  typeMessage()
}

// Scroll Animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated")
      }
    })
  }, observerOptions)

  // Observe elements for animation
  document
    .querySelectorAll(
      ".feature-card, .workout-card, .wellness-card, .stat-card, .habit-item, .post-card, .group-card, .story-card, .team-member, .faq-item, .tip-card",
    )
    .forEach((el) => {
      el.classList.add("animate-on-scroll")
      observer.observe(el)
    })
}

// Workout Filters
function initWorkoutFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn")
  const workoutCards = document.querySelectorAll(".workout-card")

  if (filterButtons.length === 0) return

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-category")

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      this.classList.add("active")

      // Filter workout cards
      workoutCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category")

        if (category === "all" || cardCategory === category) {
          card.style.display = "block"
          card.style.animation = "slideInUp 0.5s ease"
        } else {
          card.style.display = "none"
        }
      })
    })
  })
}

// Wellness Tabs
function initWellnessTabs() {
  const tabButtons = document.querySelectorAll(".tab-btn")
  const tabContents = document.querySelectorAll(".tab-content")

  if (tabButtons.length === 0) return

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetTab = this.getAttribute("data-tab")

      // Update active button
      tabButtons.forEach((btn) => btn.classList.remove("active"))
      this.classList.add("active")

      // Show/hide tab content
      tabContents.forEach((content) => {
        content.classList.remove("active")
        if (content.id === targetTab) {
          content.classList.add("active")
        }
      })
    })
  })
}

// Habit Tracker
function initHabitTracker() {
  const incrementBtns = document.querySelectorAll(".btn-increment")
  const decrementBtns = document.querySelectorAll(".btn-decrement")
  const completeBtns = document.querySelectorAll(".btn-complete")

  // Increment buttons
  incrementBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const habitItem = this.closest(".habit-item")
      const progressCircle = habitItem.querySelector(".progress-circle")
      const progressText = progressCircle.querySelector("span")

      // Simple increment logic (you can make this more sophisticated)
      if (progressText.textContent.includes("/")) {
        const [current, total] = progressText.textContent.split("/").map(Number)
        if (current < total) {
          const newCurrent = current + 1
          progressText.textContent = `${newCurrent}/${total}`
          updateProgressCircle(progressCircle, (newCurrent / total) * 100)
        }
      }
    })
  })

  // Decrement buttons
  decrementBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const habitItem = this.closest(".habit-item")
      const progressCircle = habitItem.querySelector(".progress-circle")
      const progressText = progressCircle.querySelector("span")

      if (progressText.textContent.includes("/")) {
        const [current, total] = progressText.textContent.split("/").map(Number)
        if (current > 0) {
          const newCurrent = current - 1
          progressText.textContent = `${newCurrent}/${total}`
          updateProgressCircle(progressCircle, (newCurrent / total) * 100)
        }
      }
    })
  })

  // Complete buttons
  completeBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      if (this.classList.contains("completed")) return

      const habitItem = this.closest(".habit-item")
      const progressCircle = habitItem.querySelector(".progress-circle")
      const progressText = progressCircle.querySelector("span")

      progressText.textContent = "✓"
      updateProgressCircle(progressCircle, 100)
      this.classList.add("completed")
      this.textContent = "Completed"

      // Add celebration effect
      this.style.animation = "pulse 0.5s ease"
    })
  })
}

// Update Progress Circle
function updateProgressCircle(circle, percentage) {
  const degrees = (percentage / 100) * 360
  circle.style.background = `conic-gradient(#3b82f6 ${degrees}deg, #e5e7eb ${degrees}deg)`
}

// Initialize Progress Circles
function initProgressCircles() {
  document.querySelectorAll(".progress-circle").forEach((circle) => {
    const progress = circle.getAttribute("data-progress")
    if (progress) {
      updateProgressCircle(circle, Number.parseInt(progress))
    }
  })
}

// Contact Form
function initContactForm() {
  const contactForm = document.getElementById("contactForm")

  if (!contactForm) return

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault()

    // Get form data
    const formData = new FormData(this)
    const data = Object.fromEntries(formData)

    // Validate form
    if (validateContactForm(data)) {
      // Simulate form submission
      submitContactForm(data)
    }
  })
}

function validateContactForm(data) {
  let isValid = true
  const errors = []

  // Clear previous errors
  document.querySelectorAll(".error-message").forEach((error) => error.remove())

  // Validate required fields
  if (!data.name.trim()) {
    showFieldError("name", "Name is required")
    isValid = false
  }

  if (!data.email.trim()) {
    showFieldError("email", "Email is required")
    isValid = false
  } else if (!isValidEmail(data.email)) {
    showFieldError("email", "Please enter a valid email address")
    isValid = false
  }

  if (!data.subject) {
    showFieldError("subject", "Please select a subject")
    isValid = false
  }

  if (!data.message.trim()) {
    showFieldError("message", "Message is required")
    isValid = false
  }

  return isValid
}

function showFieldError(fieldName, message) {
  const field = document.getElementById(fieldName)
  const errorElement = document.createElement("span")
  errorElement.className = "error-message"
  errorElement.style.color = "#ef4444"
  errorElement.style.fontSize = "0.875rem"
  errorElement.style.marginTop = "0.25rem"
  errorElement.style.display = "block"
  errorElement.textContent = message

  field.parentNode.appendChild(errorElement)
  field.style.borderColor = "#ef4444"
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function submitContactForm(data) {
  const submitBtn = document.querySelector('#contactForm button[type="submit"]')
  const originalText = submitBtn.textContent

  // Show loading state
  submitBtn.textContent = "Sending..."
  submitBtn.disabled = true
  submitBtn.classList.add("loading")

  // Simulate API call
  setTimeout(() => {
    // Reset button
    submitBtn.textContent = originalText
    submitBtn.disabled = false
    submitBtn.classList.remove("loading")

    // Show success message
    showSuccessMessage("Thank you! Your message has been sent successfully. We'll get back to you soon!")

    // Reset form
    document.getElementById("contactForm").reset()

    // Clear any error styling
    document.querySelectorAll("input, select, textarea").forEach((field) => {
      field.style.borderColor = "#e5e7eb"
    })
  }, 2000)
}

function showSuccessMessage(message) {
  const successDiv = document.createElement("div")
  successDiv.className = "success-message"
  successDiv.style.cssText = `
        background: #d1fae5;
        color: #065f46;
        padding: 1rem;
        border-radius: 8px;
        margin-top: 1rem;
        border: 1px solid #a7f3d0;
    `
  successDiv.textContent = message

  const form = document.getElementById("contactForm")
  form.appendChild(successDiv)

  // Remove success message after 5 seconds
  setTimeout(() => {
    successDiv.remove()
  }, 5000)
}

// Smooth Scrolling
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))

      if (target) {
        const headerHeight = document.querySelector(".navbar").offsetHeight
        const targetPosition = target.offsetTop - headerHeight - 20

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })
}

// Interactive Button Effects
document.addEventListener("click", (e) => {
  if (e.target.matches(".btn-primary, .btn-secondary, .btn-login, .btn-signup")) {
    createRippleEffect(e)
  }
})

function createRippleEffect(e) {
  const button = e.target
  const ripple = document.createElement("span")
  const rect = button.getBoundingClientRect()
  const size = Math.max(rect.width, rect.height)
  const x = e.clientX - rect.left - size / 2
  const y = e.clientY - rect.top - size / 2

  ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    `

  // Add ripple animation if not exists
  if (!document.querySelector("#ripple-styles")) {
    const style = document.createElement("style")
    style.id = "ripple-styles"
    style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `
    document.head.appendChild(style)
  }

  button.style.position = "relative"
  button.style.overflow = "hidden"
  button.appendChild(ripple)

  setTimeout(() => {
    ripple.remove()
  }, 600)
}

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)"
    navbar.style.backdropFilter = "blur(20px)"
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)"
    navbar.style.backdropFilter = "blur(10px)"
  }
})

// Add loading animation to page transitions
window.addEventListener("beforeunload", () => {
  document.body.style.opacity = "0.8"
  document.body.style.transition = "opacity 0.3s ease"
})

// Initialize tooltips for interactive elements
function initTooltips() {
  const tooltipElements = document.querySelectorAll("[data-tooltip]")

  tooltipElements.forEach((element) => {
    element.addEventListener("mouseenter", function () {
      const tooltip = document.createElement("div")
      tooltip.className = "tooltip"
      tooltip.textContent = this.getAttribute("data-tooltip")
      tooltip.style.cssText = `
                position: absolute;
                background: #333;
                color: white;
                padding: 0.5rem;
                border-radius: 4px;
                font-size: 0.875rem;
                z-index: 1000;
                pointer-events: none;
                opacity: 0;
                transition: opacity 0.3s ease;
            `

      document.body.appendChild(tooltip)

      const rect = this.getBoundingClientRect()
      tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + "px"
      tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + "px"

      setTimeout(() => (tooltip.style.opacity = "1"), 10)

      this.addEventListener(
        "mouseleave",
        () => {
          tooltip.remove()
        },
        { once: true },
      )
    })
  })
}

// Performance optimization: Lazy load images
function initLazyLoading() {
  const images = document.querySelectorAll("img[data-src]")

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.classList.remove("lazy")
        observer.unobserve(img)
      }
    })
  })

  images.forEach((img) => imageObserver.observe(img))
}

// Add page visibility API for performance
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    // Pause animations when page is not visible
    document.querySelectorAll(".floating-card").forEach((card) => {
      card.style.animationPlayState = "paused"
    })
  } else {
    // Resume animations when page becomes visible
    document.querySelectorAll(".floating-card").forEach((card) => {
      card.style.animationPlayState = "running"
    })
  }
})

console.log("AweSome Wellness Platform initialized successfully! 🎉")
