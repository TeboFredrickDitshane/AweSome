// AweSome Fitness Website JavaScript - Multi-Page Enhanced

// Global variables
let currentPage = ""
const isLoading = false

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Detect current page
  detectCurrentPage()

  // Initialize all components
  initNavigation()
  initPageSpecificFeatures()
  initGlobalFeatures()
  initScrollAnimations()
  initMobileOptimizations()
  initAccessibility()

  // Add page transition effect
  document.body.classList.add("page-transition")
  setTimeout(() => {
    document.body.classList.add("loaded")
  }, 100)
})

// Detect current page based on URL
function detectCurrentPage() {
  const path = window.location.pathname
  const filename = path.split("/").pop() || "index.html"

  if (filename === "index.html" || filename === "") {
    currentPage = "home"
  } else {
    currentPage = filename.replace(".html", "")
  }

  console.log("Current page:", currentPage)
}

// Enhanced navigation functionality
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

  // Set active navigation link
  setActiveNavLink()

  // Handle navigation clicks
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href")

      // If it's a hash link on the same page
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
      // If it's a page navigation, add loading effect
      else if (href.endsWith(".html")) {
        this.classList.add("loading")
        setTimeout(() => {
          this.classList.remove("loading")
        }, 1000)
      }
    })
  })
}

// Set active navigation link based on current page
function setActiveNavLink() {
  const navLinks = document.querySelectorAll(".nav-link")

  navLinks.forEach((link) => {
    link.classList.remove("active")
    const href = link.getAttribute("href")

    if (
      (currentPage === "home" && (href === "index.html" || href === "#home")) ||
      (currentPage === "workouts" && href === "workouts.html") ||
      (currentPage === "nutrition" && href === "nutrition.html") ||
      (currentPage === "wellness" && href === "wellness.html") ||
      (currentPage === "blog" && href === "blog.html")
    ) {
      link.classList.add("active")
    }
  })
}

// Initialize page-specific features
function initPageSpecificFeatures() {
  switch (currentPage) {
    case "home":
      initHomePage()
      break
    case "workouts":
      initWorkoutsPage()
      break
    case "nutrition":
      initNutritionPage()
      break
    case "wellness":
      initWellnessPage()
      break
    case "blog":
      initBlogPage()
      break
  }
}

// Home page specific functionality
function initHomePage() {
  initHeroAnimations()
  initCounters()
  initWorkoutFilters()
  initBlogSection()
}

// Workouts page specific functionality
function initWorkoutsPage() {
  initWorkoutFilters()
  initWorkoutStats()
  initWorkoutPrograms()
}

// Nutrition page specific functionality
function initNutritionPage() {
  initRecipeFilters()
  initMealPlanning()
  initNutritionTips()
}

// Wellness page specific functionality
function initWellnessPage() {
  initStressChecker()
  initBreathingExercise()
  initWellnessPrograms()

  function initWellnessPrograms() {
    // Placeholder for wellness programs initialization
  }
}

// Blog page specific functionality
function initBlogPage() {
  initBlogSearch()
  initBlogFilters()
  initFeaturedArticle()

  function initBlogFilters() {
    // Placeholder for blog filters initialization
  }

  function initFeaturedArticle() {
    // Placeholder for featured article initialization
  }
}

// Enhanced workout filtering system
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
      equipment: "No equipment needed",
      instructor: "Sarah Johnson",
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
      equipment: "Yoga mat",
      instructor: "Emma Wilson",
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
      equipment: "Dumbbells, resistance bands",
      instructor: "Mike Chen",
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
      equipment: "Light weights",
      instructor: "Alex Rodriguez",
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
      equipment: "No equipment needed",
      instructor: "David Kim",
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
      equipment: "Yoga mat",
      instructor: "Lisa Park",
    },
    {
      id: 7,
      title: "Cardio Dance Party",
      duration: "35 min",
      calories: "400-500 cal",
      level: "intermediate",
      category: "cardio",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      description: "Fun dance workout that burns calories while you groove.",
      equipment: "No equipment needed",
      instructor: "Maria Garcia",
    },
    {
      id: 8,
      title: "Core Crusher",
      duration: "20 min",
      calories: "200-250 cal",
      level: "intermediate",
      category: "strength",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=250&fit=crop",
      description: "Targeted core workout for a stronger midsection.",
      equipment: "Exercise mat",
      instructor: "Tom Wilson",
    },
  ]

  const workoutGrid = document.getElementById("workoutGrid")
  const filterButtons = document.querySelectorAll(".workout-filters .btn, .filter-buttons .btn")

  if (!workoutGrid) return

  // Render workouts with enhanced cards
  function renderWorkouts(workouts) {
    workoutGrid.innerHTML = ""
    workouts.forEach((workout, index) => {
      const workoutCard = createEnhancedWorkoutCard(workout)
      workoutGrid.appendChild(workoutCard)

      // Staggered animation
      setTimeout(() => {
        workoutCard.querySelector(".enhanced-card").classList.add("fade-in-up")
      }, index * 100)
    })
  }

  // Create enhanced workout card
  function createEnhancedWorkoutCard(workout) {
    const col = document.createElement("div")
    col.className = "col-md-6 col-lg-4 mb-4"

    const difficultyClass = `difficulty-${workout.level}`

    col.innerHTML = `
      <div class="enhanced-card card h-100 border-0 shadow-sm">
        <div class="position-relative">
          <img src="${workout.image}" class="card-img-top" alt="${workout.title}">
          <span class="badge ${difficultyClass} workout-badge">${workout.level.charAt(0).toUpperCase() + workout.level.slice(1)}</span>
        </div>
        <div class="card-body">
          <h5 class="card-title">${workout.title}</h5>
          <p class="card-text text-muted">${workout.description}</p>
          <div class="d-flex justify-content-between text-muted mb-2">
            <small><i class="fas fa-clock me-1"></i>${workout.duration}</small>
            <small><i class="fas fa-fire me-1"></i>${workout.calories}</small>
          </div>
          <div class="d-flex justify-content-between text-muted mb-3">
            <small><i class="fas fa-dumbbell me-1"></i>${workout.equipment}</small>
            <small><i class="fas fa-user me-1"></i>${workout.instructor}</small>
          </div>
          <div class="d-flex gap-2">
            <button class="btn btn-primary flex-fill" onclick="startWorkout(${workout.id})">Start Workout</button>
            <button class="btn btn-outline-primary" onclick="toggleFavorite(${workout.id})" aria-label="Add to favorites">
              <i class="fas fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    `

    return col
  }

  // Enhanced filter functionality
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      this.classList.add("active")

      const filter = this.getAttribute("data-filter")
      let filteredWorkouts = workoutData

      if (filter && filter !== "all") {
        filteredWorkouts = workoutData.filter((workout) => workout.level === filter || workout.category === filter)
      }

      renderWorkouts(filteredWorkouts)
    })
  })

  // Initial render
  renderWorkouts(workoutData)
}

// Recipe filtering system
function initRecipeFilters() {
  const recipeData = [
    {
      id: 1,
      title: "Protein Power Bowl",
      category: "lunch",
      prepTime: "15 min",
      calories: "450 cal",
      difficulty: "easy",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop",
      description: "Nutritious bowl packed with protein and fresh vegetables.",
    },
    {
      id: 2,
      title: "Green Smoothie Boost",
      category: "smoothies",
      prepTime: "5 min",
      calories: "200 cal",
      difficulty: "easy",
      image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&h=250&fit=crop",
      description: "Energizing green smoothie with spinach and fruits.",
    },
    {
      id: 3,
      title: "Overnight Oats",
      category: "breakfast",
      prepTime: "5 min",
      calories: "300 cal",
      difficulty: "easy",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=250&fit=crop",
      description: "Make-ahead breakfast that's ready when you wake up.",
    },
  ]

  const recipeGrid = document.getElementById("recipeGrid")
  const recipeFilters = document.querySelectorAll(".recipe-filters .btn")

  if (!recipeGrid) return

  function renderRecipes(recipes) {
    recipeGrid.innerHTML = ""
    recipes.forEach((recipe, index) => {
      const recipeCard = createRecipeCard(recipe)
      recipeGrid.appendChild(recipeCard)

      setTimeout(() => {
        recipeCard.querySelector(".recipe-card").classList.add("fade-in-up")
      }, index * 100)
    })
  }

  function createRecipeCard(recipe) {
    const col = document.createElement("div")
    col.className = "col-md-6 col-lg-4 mb-4"

    col.innerHTML = `
      <div class="recipe-card card h-100 border-0 shadow-sm">
        <div class="position-relative">
          <img src="${recipe.image}" class="card-img-top" alt="${recipe.title}">
          <span class="badge bg-success recipe-badge">${recipe.difficulty}</span>
        </div>
        <div class="card-body">
          <h5 class="card-title">${recipe.title}</h5>
          <p class="card-text text-muted">${recipe.description}</p>
          <div class="d-flex justify-content-between text-muted mb-3">
            <small><i class="fas fa-clock me-1"></i>${recipe.prepTime}</small>
            <small><i class="fas fa-fire me-1"></i>${recipe.calories}</small>
          </div>
          <div class="d-flex gap-2">
            <button class="btn btn-success flex-fill">View Recipe</button>
            <button class="btn btn-outline-success" aria-label="Save recipe">
              <i class="fas fa-bookmark"></i>
            </button>
          </div>
        </div>
      </div>
    `

    return col
  }

  recipeFilters.forEach((button) => {
    button.addEventListener("click", function () {
      recipeFilters.forEach((btn) => btn.classList.remove("active"))
      this.classList.add("active")

      const filter = this.getAttribute("data-filter")
      let filteredRecipes = recipeData

      if (filter && filter !== "all") {
        filteredRecipes = recipeData.filter((recipe) => recipe.category === filter)
      }

      renderRecipes(filteredRecipes)
    })
  })

  renderRecipes(recipeData)
}

// Stress checker functionality
function initStressChecker() {
  const stressForm = document.getElementById("stressForm")
  const stressResult = document.getElementById("stressResult")

  if (!stressForm) return

  stressForm.addEventListener("submit", function (e) {
    e.preventDefault()

    const formData = new FormData(this)
    let stressScore = 0

    // Calculate stress score based on responses
    for (const [key, value] of formData.entries()) {
      stressScore += Number.parseInt(value)
    }

    const maxScore = 20 // 4 questions × 5 max points
    const stressPercentage = (stressScore / maxScore) * 100

    let stressLevel, advice, color

    if (stressPercentage <= 40) {
      stressLevel = "Low"
      advice = "Great job managing your stress! Keep up the good work with regular exercise and mindfulness."
      color = "success"
    } else if (stressPercentage <= 70) {
      stressLevel = "Moderate"
      advice =
        "Your stress levels are manageable but could use some attention. Try our breathing exercises and consider regular meditation."
      color = "warning"
    } else {
      stressLevel = "High"
      advice =
        "Your stress levels are concerning. Please consider speaking with a counselor and try our stress relief programs immediately."
      color = "danger"
    }

    stressResult.innerHTML = `
      <div class="alert alert-${color}">
        <h5>Your Stress Level: ${stressLevel} (${Math.round(stressPercentage)}%)</h5>
        <p>${advice}</p>
        <button class="btn btn-${color}" onclick="startBreathingExercise()">Try Breathing Exercise</button>
      </div>
    `

    stressResult.style.display = "block"
  })
}

// Breathing exercise functionality
function initBreathingExercise() {
  // This will be called when the breathing exercise is started
}

function startBreathingExercise() {
  const breathingSection = document.getElementById("breathingExercise")
  const breathingCircle = document.querySelector(".breathing-circle")
  const breathingText = document.getElementById("breathingText")
  const breathingButton = document.getElementById("startBreathing")

  if (!breathingSection) return

  breathingSection.scrollIntoView({ behavior: "smooth" })

  let isBreathing = false
  let breathingInterval

  function toggleBreathing() {
    if (!isBreathing) {
      isBreathing = true
      breathingButton.textContent = "Stop Exercise"
      breathingButton.classList.remove("btn-primary")
      breathingButton.classList.add("btn-danger")

      startBreathingCycle()
    } else {
      isBreathing = false
      breathingButton.textContent = "Start Breathing Exercise"
      breathingButton.classList.remove("btn-danger")
      breathingButton.classList.add("btn-primary")
      breathingText.textContent = "Click to start"

      clearInterval(breathingInterval)
      breathingCircle.classList.remove("inhale", "exhale")
    }
  }

  function startBreathingCycle() {
    let phase = "inhale"

    breathingInterval = setInterval(() => {
      if (phase === "inhale") {
        breathingCircle.classList.remove("exhale")
        breathingCircle.classList.add("inhale")
        breathingText.textContent = "Breathe In..."
        phase = "exhale"
      } else {
        breathingCircle.classList.remove("inhale")
        breathingCircle.classList.add("exhale")
        breathingText.textContent = "Breathe Out..."
        phase = "inhale"
      }
    }, 4000)
  }

  if (breathingButton) {
    breathingButton.addEventListener("click", toggleBreathing)
  }
}

// Blog search functionality
function initBlogSearch() {
  const searchInput = document.getElementById("blogSearch")
  const blogGrid = document.getElementById("blogGrid")

  if (!searchInput || !blogGrid) return

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
      tags: ["workout", "student", "fitness", "quick"],
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
      tags: ["nutrition", "budget", "student", "healthy eating"],
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
      tags: ["stress", "finals", "wellness", "mental health"],
    },
  ]

  function renderBlogPosts(posts) {
    blogGrid.innerHTML = ""
    posts.forEach((post, index) => {
      const blogCard = createBlogCard(post)
      blogGrid.appendChild(blogCard)

      setTimeout(() => {
        blogCard.querySelector(".blog-card").classList.add("fade-in-up")
      }, index * 100)
    })
  }

  function createBlogCard(post) {
    const col = document.createElement("div")
    col.className = "col-md-6 col-lg-4 mb-4"

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
          <div class="article-meta">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" 
                 alt="${post.author}" class="author-avatar">
            <div>
              <small class="text-muted d-block">By ${post.author}</small>
              <small class="text-muted">${formattedDate} • ${post.readTime}</small>
            </div>
          </div>
        </div>
        <div class="card-footer bg-transparent border-0">
          <a href="#" class="btn btn-outline-warning w-100">Read More</a>
        </div>
      </article>
    `

    return col
  }

  // Search functionality
  searchInput.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase()
    const filteredPosts = blogData.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm) ||
        post.excerpt.toLowerCase().includes(searchTerm) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchTerm)),
    )

    renderBlogPosts(filteredPosts)
  })

  // Initial render
  renderBlogPosts(blogData)
}

// Global features that work across all pages
function initGlobalFeatures() {
  initForms()
  initNotifications()
  initLocalStorage()
}

// Enhanced form handling
function initForms() {
  // Newsletter form
  const newsletterForms = document.querySelectorAll("#newsletterForm, .newsletter-form")
  newsletterForms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault()
      const email = this.querySelector('input[type="email"]').value
      const button = this.querySelector('button[type="submit"]')

      if (!email) {
        showNotification("Please enter a valid email address", "error")
        return
      }

      // Show loading state
      const originalText = button.textContent
      button.innerHTML = '<span class="loading"></span> Subscribing...'
      button.disabled = true

      // Simulate API call
      setTimeout(() => {
        button.innerHTML = '<i class="fas fa-check me-2"></i>Subscribed!'
        button.classList.remove("btn-light", "btn-primary")
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

        // Save to localStorage
        saveToLocalStorage("newsletter_email", email)
      }, 2000)
    })
  })

  // Contact forms
  const contactForms = document.querySelectorAll("#contactForm, .contact-form")
  contactForms.forEach((form) => {
    form.addEventListener("submit", function (e) {
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
  })
}

// Workout and recipe interaction functions
function startWorkout(workoutId) {
  showNotification(`Starting workout ${workoutId}! Get ready to sweat! 💪`, "success")
  trackEvent("Workout", "Start", `Workout ${workoutId}`)
}

function toggleFavorite(itemId) {
  const favorites = getFromLocalStorage("favorites") || []
  const index = favorites.indexOf(itemId)

  if (index > -1) {
    favorites.splice(index, 1)
    showNotification("Removed from favorites", "info")
  } else {
    favorites.push(itemId)
    showNotification("Added to favorites! ❤️", "success")
  }

  saveToLocalStorage("favorites", favorites)
}

// Local storage utilities
function saveToLocalStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    console.error("Error saving to localStorage:", e)
  }
}

function getFromLocalStorage(key) {
  try {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : null
  } catch (e) {
    console.error("Error reading from localStorage:", e)
    return null
  }
}

function initLocalStorage() {
  // Load user preferences
  const favorites = getFromLocalStorage("favorites") || []
  console.log("Loaded favorites:", favorites)
}

// Enhanced scroll animations
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
  const animateElements = document.querySelectorAll(
    ".feature-card, .nutrition-card, .service-card, .testimonial-card, .enhanced-card, .recipe-card, .blog-card",
  )
  animateElements.forEach((el) => {
    observer.observe(el)
  })
}

// Counter animations for stats
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

// Hero animations for home page
function initHeroAnimations() {
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

// Enhanced mobile optimizations
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

  // Optimize for mobile viewport
  const viewport = document.querySelector('meta[name="viewport"]')
  if (!viewport) {
    const meta = document.createElement("meta")
    meta.name = "viewport"
    meta.content = "width=device-width, initial-scale=1.0, user-scalable=no"
    document.head.appendChild(meta)
  }
}

// Enhanced notification system
function initNotifications() {
  // Create notification container if it doesn't exist
  if (!document.getElementById("notification-container")) {
    const container = document.createElement("div")
    container.id = "notification-container"
    container.style.cssText = "position: fixed; top: 20px; right: 20px; z-index: 9999; max-width: 400px;"
    document.body.appendChild(container)
  }
}

function showNotification(message, type = "info", duration = 5000) {
  const container = document.getElementById("notification-container")
  if (!container) return

  // Create notification element
  const notification = document.createElement("div")
  notification.className = `alert alert-${type === "error" ? "danger" : type} alert-dismissible fade show mb-2`
  notification.style.cssText = "animation: slideInRight 0.3s ease-out;"

  notification.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  `

  container.appendChild(notification)

  // Auto-remove after specified duration
  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.animation = "slideOutRight 0.3s ease-in"
      setTimeout(() => {
        notification.remove()
      }, 300)
    }
  }, duration)
}

// Enhanced accessibility features
function initAccessibility() {
  // Skip to main content link
  const skipLink = document.createElement("a")
  skipLink.href = "#main"
  skipLink.textContent = "Skip to main content"
  skipLink.className = "sr-only sr-only-focusable btn btn-primary position-absolute"
  skipLink.style.cssText = "top: 10px; left: 10px; z-index: 10000;"
  document.body.insertBefore(skipLink, document.body.firstChild)

  // Add main landmark
  const mainContent = document.querySelector("main, #main, .main-content")
  if (mainContent) {
    mainContent.setAttribute("role", "main")
    if (!mainContent.id) {
      mainContent.id = "main"
    }
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

  // Add ARIA labels to interactive elements without labels
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
        } else if (iconClass.includes("bookmark")) {
          button.setAttribute("aria-label", "Save item")
        }
      }
    }
  })

  // Keyboard navigation improvements
  document.addEventListener("keydown", (e) => {
    // ESC key to close modals
    if (e.key === "Escape") {
      const openModal = document.querySelector(".modal.show")
      if (openModal) {
        const modal = bootstrap.Modal.getInstance(openModal)
        if (modal) modal.hide()
      }
    }
  })
}

// Analytics and tracking
function trackEvent(category, action, label) {
  console.log("Event tracked:", { category, action, label })

  // Save to localStorage for analytics
  const events = getFromLocalStorage("analytics_events") || []
  events.push({
    category,
    action,
    label,
    timestamp: new Date().toISOString(),
    page: currentPage,
  })

  // Keep only last 100 events
  if (events.length > 100) {
    events.splice(0, events.length - 100)
  }

  saveToLocalStorage("analytics_events", events)
}

// Track page views
trackEvent("Page", "View", currentPage)

// Track button clicks
document.addEventListener("click", (e) => {
  if (e.target.matches(".btn")) {
    const buttonText = e.target.textContent.trim()
    trackEvent("Button", "Click", buttonText)
  }
})

// Performance monitoring
function initPerformanceMonitoring() {
  // Monitor page load time
  window.addEventListener("load", () => {
    const loadTime = performance.now()
    console.log(`Page loaded in ${loadTime.toFixed(2)}ms`)
    trackEvent("Performance", "PageLoad", `${loadTime.toFixed(2)}ms`)
  })

  // Monitor errors
  window.addEventListener("error", (e) => {
    console.error("JavaScript error:", e.error)
    trackEvent("Error", "JavaScript", e.message)
  })
}

// Initialize performance monitoring
initPerformanceMonitoring()

// Utility functions
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

// Add CSS animations
const style = document.createElement("style")
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`
document.head.appendChild(style)

// Export functions for testing
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    initNavigation,
    initWorkoutFilters,
    initRecipeFilters,
    initForms,
    showNotification,
    debounce,
    trackEvent,
  }
}
