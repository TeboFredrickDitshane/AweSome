// AweSome Fitness Website JavaScript

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize all components
  initNavigation()
  initHeroAnimations()
  initWorkoutFilters()
  initBlogSection()
  initForms()
  initScrollAnimations()
  initCounters()
  initMobileOptimizations()
})

// Navigation functionality
function initNavigation() {
  const navbar = document.querySelector(".navbar")
  const navLinks = document.querySelectorAll(".nav-link")

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })

  // Smooth scrolling for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href")
      if (href.startsWith("#")) {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          const offsetTop = target.offsetTop - 80
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          })
        }
      }
    })
  })

  // Active navigation highlighting
  window.addEventListener("scroll", updateActiveNavigation)
}

function updateActiveNavigation() {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")

  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100
    const sectionHeight = section.clientHeight
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
}

// Hero section animations
function initHeroAnimations() {
  // Animate hero content on load
  const heroContent = document.querySelector(".hero-content")
  const heroWidget = document.querySelector(".hero-widget")

  if (heroContent) {
    heroContent.classList.add("fade-in-up")
  }

  if (heroWidget) {
    setTimeout(() => {
      heroWidget.classList.add("fade-in-up")
    }, 300)
  }

  // Progress bar animations in hero widget
  const progressBars = document.querySelectorAll(".hero-widget .progress-bar")
  progressBars.forEach((bar, index) => {
    setTimeout(
      () => {
        const width = bar.style.width
        bar.style.width = "0%"
        setTimeout(() => {
          bar.style.width = width
          bar.style.transition = "width 1s ease-in-out"
        }, 100)
      },
      500 + index * 200,
    )
  })
}

// Workout filtering system
function initWorkoutFilters() {
  const workoutData = [
    {
      id: 1,
      title: "HIIT Fat Burner",
      duration: "25 min",
      calories: "300-400 cal",
      level: "intermediate",
      category: "hiit",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      description: "High-intensity interval training to torch calories and boost metabolism.",
    },
    {
      id: 2,
      title: "Morning Yoga Flow",
      duration: "30 min",
      calories: "150-200 cal",
      level: "beginner",
      category: "yoga",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=250&fit=crop",
      description: "Gentle yoga flow to start your day with energy and mindfulness.",
    },
    {
      id: 3,
      title: "Strength Builder Pro",
      duration: "45 min",
      calories: "350-450 cal",
      level: "advanced",
      category: "strength",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=250&fit=crop",
      description: "Advanced strength training for serious muscle building.",
    },
    {
      id: 4,
      title: "Beginner Full Body",
      duration: "20 min",
      calories: "200-250 cal",
      level: "beginner",
      category: "strength",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      description: "Perfect introduction to strength training for beginners.",
    },
    {
      id: 5,
      title: "Power HIIT",
      duration: "15 min",
      calories: "250-300 cal",
      level: "advanced",
      category: "hiit",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=250&fit=crop",
      description: "Intense 15-minute HIIT session for maximum results.",
    },
    {
      id: 6,
      title: "Evening Yoga",
      duration: "25 min",
      calories: "120-150 cal",
      level: "beginner",
      category: "yoga",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=250&fit=crop",
      description: "Relaxing yoga session to unwind after a busy day.",
    },
  ]

  const workoutGrid = document.getElementById("workoutGrid")
  const filterButtons = document.querySelectorAll(".workout-filters .btn")

  // Render workouts
  function renderWorkouts(workouts) {
    workoutGrid.innerHTML = ""
    workouts.forEach((workout) => {
      const workoutCard = createWorkoutCard(workout)
      workoutGrid.appendChild(workoutCard)
    })

    // Add animation to cards
    const cards = workoutGrid.querySelectorAll(".workout-card")
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("fade-in-up")
      }, index * 100)
    })
  }

  // Create workout card element
  function createWorkoutCard(workout) {
    const col = document.createElement("div")
    col.className = "col-md-6 col-lg-4"

    const difficultyClass = `difficulty-${workout.level}`

    col.innerHTML = `
            <div class="workout-card card h-100 border-0 shadow-sm">
                <div class="position-relative">
                    <img src="${workout.image}" class="card-img-top" alt="${workout.title}">
                    <span class="badge ${difficultyClass} workout-badge">${workout.level.charAt(0).toUpperCase() + workout.level.slice(1)}</span>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${workout.title}</h5>
                    <p class="card-text text-muted">${workout.description}</p>
                    <div class="d-flex justify-content-between text-muted mb-3">
                        <small><i class="fas fa-clock me-1"></i>${workout.duration}</small>
                        <small><i class="fas fa-fire me-1"></i>${workout.calories}</small>
                    </div>
                    <div class="d-flex gap-2">
                        <button class="btn btn-primary flex-fill">Start Workout</button>
                        <button class="btn btn-outline-primary">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        `

    return col
  }

  // Filter functionality
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      this.classList.add("active")

      const filter = this.getAttribute("data-filter")
      let filteredWorkouts = workoutData

      if (filter !== "all") {
        filteredWorkouts = workoutData.filter((workout) => workout.level === filter || workout.category === filter)
      }

      renderWorkouts(filteredWorkouts)
    })
  })

  // Initial render
  renderWorkouts(workoutData)
}

// Blog section functionality
function initBlogSection() {
  const blogData = [
    {
      id: 1,
      title: "10 Quick Workouts for Busy Students",
      excerpt: "Maximize your fitness with these time-efficient exercises perfect for dorm rooms and tight schedules.",
      author: "Dr. Sarah Johnson",
      date: "2025-01-15",
      readTime: "5 min read",
      category: "Fitness",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
    },
    {
      id: 2,
      title: "Nutrition on a Student Budget",
      excerpt: "Eat healthy without breaking the bank. Practical tips for affordable, nutritious meals.",
      author: "Mike Chen",
      date: "2025-01-12",
      readTime: "7 min read",
      category: "Nutrition",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop",
    },
    {
      id: 3,
      title: "Managing Stress During Finals",
      excerpt: "Evidence-based strategies to stay calm and focused during the most stressful time of the semester.",
      author: "Dr. Emma Wilson",
      date: "2025-01-10",
      readTime: "6 min read",
      category: "Wellness",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=250&fit=crop",
    },
  ]

  const blogGrid = document.getElementById("blogGrid")

  function renderBlogPosts() {
    blogGrid.innerHTML = ""
    blogData.forEach((post) => {
      const blogCard = createBlogCard(post)
      blogGrid.appendChild(blogCard)
    })
  }

  function createBlogCard(post) {
    const col = document.createElement("div")
    col.className = "col-md-6 col-lg-4"

    const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })

    col.innerHTML = `
            <article class="blog-card card h-100 border-0 shadow-sm">
                <img src="${post.image}" class="card-img-top" alt="${post.title}">
                <div class="card-body">
                    <span class="badge bg-warning mb-2">${post.category}</span>
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text text-muted">${post.excerpt}</p>
                    <div class="blog-meta d-flex justify-content-between align-items-center">
                        <small class="text-muted">By ${post.author}</small>
                        <small class="text-muted">${post.readTime}</small>
                    </div>
                    <div class="blog-meta mt-2">
                        <small class="text-muted">${formattedDate}</small>
                    </div>
                </div>
                <div class="card-footer bg-transparent border-0">
                    <a href="#" class="btn btn-outline-warning w-100">Read More</a>
                </div>
            </article>
        `

    return col
  }

  renderBlogPosts()
}

// Form handling
function initForms() {
  // Newsletter form
  const newsletterForm = document.getElementById("newsletterForm")
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault()
      const email = this.querySelector('input[type="email"]').value
      const button = this.querySelector('button[type="submit"]')

      // Show loading state
      const originalText = button.textContent
      button.innerHTML = '<span class="loading"></span> Subscribing...'
      button.disabled = true

      // Simulate API call
      setTimeout(() => {
        button.innerHTML = '<i class="fas fa-check me-2"></i>Subscribed!'
        button.classList.remove("btn-light")
        button.classList.add("btn-success")

        // Reset form
        this.reset()

        // Reset button after 3 seconds
        setTimeout(() => {
          button.textContent = originalText
          button.classList.remove("btn-success")
          button.classList.add("btn-light")
          button.disabled = false
        }, 3000)

        // Show success message
        showNotification("Successfully subscribed to newsletter!", "success")
      }, 2000)
    })
  }

  // Contact form
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()
      const button = this.querySelector('button[type="submit"]')

      // Show loading state
      const originalText = button.innerHTML
      button.innerHTML = '<span class="loading"></span> Sending...'
      button.disabled = true

      // Simulate API call
      setTimeout(() => {
        button.innerHTML = '<i class="fas fa-check me-2"></i>Message Sent!'
        button.classList.remove("btn-primary")
        button.classList.add("btn-success")

        // Reset form
        this.reset()

        // Reset button after 3 seconds
        setTimeout(() => {
          button.innerHTML = originalText
          button.classList.remove("btn-success")
          button.classList.add("btn-primary")
          button.disabled = false
        }, 3000)

        // Show success message
        showNotification("Message sent successfully! We'll get back to you soon.", "success")
      }, 2000)
    })
  }

  // Login form
  const loginForm = document.getElementById("loginForm")
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault()
      const email = this.querySelector("#loginEmail").value
      const password = this.querySelector("#loginPassword").value
      const button = this.querySelector('button[type="submit"]')

      // Show loading state
      const originalText = button.textContent
      button.innerHTML = '<span class="loading"></span> Logging in...'
      button.disabled = true

      // Simulate authentication
      setTimeout(() => {
        if (email && password) {
          button.innerHTML = '<i class="fas fa-check me-2"></i>Welcome!'
          button.classList.remove("btn-primary")
          button.classList.add("btn-success")

          // Close modal and show success
          setTimeout(() => {
            const loginModal = document.getElementById("loginModal")
            const modal = bootstrap.Modal.getInstance(loginModal)
            modal.hide()
            showNotification("Successfully logged in!", "success")

            // Reset form and button
            this.reset()
            button.textContent = originalText
            button.classList.remove("btn-success")
            button.classList.add("btn-primary")
            button.disabled = false
          }, 1500)
        } else {
          button.textContent = originalText
          button.disabled = false
          showNotification("Please fill in all fields", "error")
        }
      }, 1500)
    })
  }
}

// Scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up")
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animateElements = document.querySelectorAll(".feature-card, .nutrition-card, .service-card, .testimonial-card")
  animateElements.forEach((el) => {
    observer.observe(el)
  })
}

// Counter animations
function initCounters() {
  const counters = document.querySelectorAll("[data-count]")

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target)
          counterObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.5 },
  )

  counters.forEach((counter) => {
    counterObserver.observe(counter)
  })
}

function animateCounter(element) {
  const target = Number.parseInt(element.getAttribute("data-count"))
  const duration = 2000
  const step = target / (duration / 16)
  let current = 0

  const timer = setInterval(() => {
    current += step
    if (current >= target) {
      current = target
      clearInterval(timer)
    }

    if (target >= 1000) {
      element.textContent = (current / 1000).toFixed(1) + "K+"
    } else {
      element.textContent = Math.floor(current) + "+"
    }
  }, 16)
}

// Mobile optimizations
function initMobileOptimizations() {
  // Touch-friendly interactions
  if ("ontouchstart" in window) {
    document.body.classList.add("touch-device")

    // Add touch feedback to buttons
    const buttons = document.querySelectorAll(".btn")
    buttons.forEach((button) => {
      button.addEventListener("touchstart", function () {
        this.style.transform = "scale(0.95)"
      })

      button.addEventListener("touchend", function () {
        this.style.transform = ""
      })
    })
  }

  // Optimize images for mobile
  const images = document.querySelectorAll("img")
  images.forEach((img) => {
    img.addEventListener("load", function () {
      this.style.opacity = "1"
    })

    // Lazy loading fallback for older browsers
    if ("IntersectionObserver" in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target
            if (img.dataset.src) {
              img.src = img.dataset.src
              img.removeAttribute("data-src")
            }
            imageObserver.unobserve(img)
          }
        })
      })

      if (img.dataset.src) {
        imageObserver.observe(img)
      }
    }
  })

  // Mobile menu enhancements
  const navbarToggler = document.querySelector(".navbar-toggler")
  const navbarCollapse = document.querySelector(".navbar-collapse")

  if (navbarToggler && navbarCollapse) {
    // Close mobile menu when clicking on a link
    const navLinks = navbarCollapse.querySelectorAll(".nav-link")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth < 992) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: false,
          })
          bsCollapse.hide()
        }
      })
    })
  }
}

// Utility functions
function showNotification(message, type = "info") {
  // Create notification element
  const notification = document.createElement("div")
  notification.className = `alert alert-${type === "error" ? "danger" : type} alert-dismissible fade show position-fixed`
  notification.style.cssText = "top: 20px; right: 20px; z-index: 9999; min-width: 300px;"

  notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `

  document.body.appendChild(notification)

  // Auto-remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove()
    }
  }, 5000)
}

// Performance optimizations
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

// Optimized scroll handler
const optimizedScrollHandler = debounce(() => {
  updateActiveNavigation()
}, 10)

window.addEventListener("scroll", optimizedScrollHandler)

// Service Worker registration for PWA capabilities
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("ServiceWorker registration successful")
      })
      .catch((err) => {
        console.log("ServiceWorker registration failed")
      })
  })
}

// Error handling
window.addEventListener("error", (e) => {
  console.error("JavaScript error:", e.error)
  // You could send this to an error tracking service
})

// Analytics tracking (placeholder)
function trackEvent(category, action, label) {
  // Placeholder for analytics tracking
  console.log("Event tracked:", { category, action, label })

  // Example: Google Analytics 4
  // gtag('event', action, {
  //     event_category: category,
  //     event_label: label
  // });
}

// Track button clicks
document.addEventListener("click", (e) => {
  if (e.target.matches(".btn")) {
    const buttonText = e.target.textContent.trim()
    trackEvent("Button", "Click", buttonText)
  }
})

// Accessibility improvements
function initAccessibility() {
  // Skip to main content link
  const skipLink = document.createElement("a")
  skipLink.href = "#main"
  skipLink.textContent = "Skip to main content"
  skipLink.className = "sr-only sr-only-focusable btn btn-primary position-absolute"
  skipLink.style.cssText = "top: 10px; left: 10px; z-index: 10000;"
  document.body.insertBefore(skipLink, document.body.firstChild)

  // Add main landmark
  const mainContent = document.querySelector("#home")
  if (mainContent) {
    mainContent.setAttribute("role", "main")
    mainContent.id = "main"
  }

  // Improve focus management for modals
  const modals = document.querySelectorAll(".modal")
  modals.forEach((modal) => {
    modal.addEventListener("shown.bs.modal", function () {
      const firstInput = this.querySelector("input, button, select, textarea")
      if (firstInput) {
        firstInput.focus()
      }
    })
  })

  // Add ARIA labels to interactive elements
  const buttons = document.querySelectorAll("button:not([aria-label]):not([aria-labelledby])")
  buttons.forEach((button) => {
    if (!button.textContent.trim()) {
      const icon = button.querySelector("i")
      if (icon) {
        const iconClass = icon.className
        if (iconClass.includes("heart")) {
          button.setAttribute("aria-label", "Add to favorites")
        } else if (iconClass.includes("play")) {
          button.setAttribute("aria-label", "Play video")
        }
      }
    }
  })
}

// Initialize accessibility features
initAccessibility()

// Export functions for testing
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    initNavigation,
    initWorkoutFilters,
    initForms,
    showNotification,
    debounce,
  }
}
