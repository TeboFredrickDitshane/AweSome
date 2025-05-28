// Global variables
let typingInterval
let currentTypingSpeed = 80
let isTypingAnimationRunning = false
let gtag // Declare gtag variable

// Application state
const AppState = {
  habits: [],
  completionStats: {
    streak: 7,
    completionRate: 85,
  },
  settings: {
    notifications: true,
    darkMode: false,
  },
}

// DOM Content Loaded Event Listener
document.addEventListener("DOMContentLoaded", () => {
  initializeApp()
})

/**
 * Initialize the application
 */
function initializeApp() {
  showLoadingScreen()

  // Initialize all components
  setTimeout(() => {
    initMobileMenu()
    initTypingAnimation()
    initTabNavigation()
    initFormValidation()
    initHabitTracking()
    initModalHandlers()
    initSmoothScrolling()
    initKeyboardNavigation()
    loadUserPreferences()

    hideLoadingScreen()
    showWelcomeToast()
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
 * Mobile Menu Functionality
 */
function initMobileMenu() {
  const mobileToggle = document.getElementById("mobileToggle")
  const navMenu = document.getElementById("navMenu")
  const demoMobileToggle = document.getElementById("demoMobileToggle")
  const demoNavMenu = document.getElementById("demoNavMenu")

  // Main navigation mobile menu
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active")
      updateMobileToggleIcon(this, navMenu.classList.contains("active"))
    })

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
      if (
        !navMenu.contains(event.target) &&
        !mobileToggle.contains(event.target) &&
        navMenu.classList.contains("active")
      ) {
        navMenu.classList.remove("active")
        updateMobileToggleIcon(mobileToggle, false)
      }
    })

    // Close menu when clicking on a link
    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active")
        updateMobileToggleIcon(mobileToggle, false)
      })
    })
  }

  // Demo mobile menu
  if (demoMobileToggle && demoNavMenu) {
    demoMobileToggle.addEventListener("click", function () {
      demoNavMenu.classList.toggle("active")
      updateDemoMobileToggleIcon(this, demoNavMenu.classList.contains("active"))
    })
  }
}

function updateMobileToggleIcon(toggle, isActive) {
  const icon = toggle.querySelector("i")
  if (icon) {
    if (isActive) {
      icon.classList.remove("fa-bars")
      icon.classList.add("fa-times")
    } else {
      icon.classList.remove("fa-times")
      icon.classList.add("fa-bars")
    }
  }
}

function updateDemoMobileToggleIcon(toggle, isActive) {
  const icon = toggle.querySelector("i")
  if (icon) {
    if (isActive) {
      icon.classList.remove("fa-bars")
      icon.classList.add("fa-times")
      toggle.innerHTML = '<i class="fas fa-times"></i> Close Demo Menu'
    } else {
      icon.classList.remove("fa-times")
      icon.classList.add("fa-bars")
      toggle.innerHTML = '<i class="fas fa-bars"></i> Toggle Demo Menu'
    }
  }
}

/**
 * Typing Animation
 */
function initTypingAnimation() {
  startTypingAnimation()
}

function startTypingAnimation() {
  const typingElement = document.getElementById("typingText")
  if (!typingElement || isTypingAnimationRunning) return

  const messages = [
    "Welcome to AweSome - Your Wellness Journey Starts Here!",
    "Track Your Daily Habits with Ease",
    "Achieve Your Health and Fitness Goals",
    "Join Thousands of Wellness Enthusiasts",
    "Transform Your Life, One Habit at a Time",
  ]

  let messageIndex = 0
  let charIndex = 0
  isTypingAnimationRunning = true

  // Clear existing content
  typingElement.textContent = ""
  if (typingInterval) clearInterval(typingInterval)

  function typeNextCharacter() {
    const currentMessage = messages[messageIndex]

    if (charIndex < currentMessage.length) {
      typingElement.textContent += currentMessage.charAt(charIndex)
      charIndex++
    } else {
      // Message complete, wait then start next message
      setTimeout(() => {
        // Clear text with backspace effect
        const backspaceInterval = setInterval(() => {
          if (typingElement.textContent.length > 0) {
            typingElement.textContent = typingElement.textContent.slice(0, -1)
          } else {
            clearInterval(backspaceInterval)
            messageIndex = (messageIndex + 1) % messages.length
            charIndex = 0
            setTimeout(() => {
              typingInterval = setInterval(typeNextCharacter, currentTypingSpeed)
            }, 300)
          }
        }, 30)
        clearInterval(typingInterval)
      }, 2000)
      return
    }
  }

  typingInterval = setInterval(typeNextCharacter, currentTypingSpeed)
}

function restartTypingAnimation() {
  isTypingAnimationRunning = false
  if (typingInterval) clearInterval(typingInterval)

  setTimeout(() => {
    startTypingAnimation()
  }, 100)
}

function changeTypingSpeed() {
  const speeds = [40, 80, 120, 160]
  const currentIndex = speeds.indexOf(currentTypingSpeed)
  currentTypingSpeed = speeds[(currentIndex + 1) % speeds.length]

  showToast(`Typing speed changed to ${currentTypingSpeed}ms`, "info")
  restartTypingAnimation()
}

/**
 * Tab Navigation
 */
function initTabNavigation() {
  const tabButtons = document.querySelectorAll(".tab-btn")
  const tabContents = document.querySelectorAll(".tab-content")

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetTab = this.getAttribute("data-tab")

      // Remove active class from all buttons and contents
      tabButtons.forEach((btn) => btn.classList.remove("active"))
      tabContents.forEach((content) => content.classList.remove("active"))

      // Add active class to clicked button
      this.classList.add("active")

      // Show corresponding content
      const targetContent = document.querySelector(`[data-content="${targetTab}"]`)
      if (targetContent) {
        targetContent.classList.add("active")

        // Announce tab change for screen readers
        announceToScreenReader(`${targetTab} tab selected`)
      }
    })

    // Keyboard navigation for tabs
    button.addEventListener("keydown", function (event) {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault()
        const currentIndex = Array.from(tabButtons).indexOf(this)
        const nextIndex =
          event.key === "ArrowRight"
            ? (currentIndex + 1) % tabButtons.length
            : (currentIndex - 1 + tabButtons.length) % tabButtons.length

        tabButtons[nextIndex].focus()
        tabButtons[nextIndex].click()
      }
    })
  })
}

/**
 * Form Validation
 */
function initFormValidation() {
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    // Real-time validation
    const inputs = contactForm.querySelectorAll("input, textarea, select")
    inputs.forEach((input) => {
      input.addEventListener("blur", function () {
        validateField(this)
      })

      input.addEventListener("input", function () {
        if (this.classList.contains("invalid")) {
          validateField(this)
        }
      })
    })

    // Form submission
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault()

      if (validateForm(this)) {
        submitForm(this)
      }
    })

    // Form reset
    contactForm.addEventListener("reset", function () {
      setTimeout(() => {
        clearFormValidation(this)
      }, 0)
    })
  }
}

function validateField(field) {
  const value = field.value.trim()
  const fieldType = field.type
  const isRequired = field.hasAttribute("required")

  let isValid = true
  let errorMessage = ""

  // Required field validation
  if (isRequired && !value) {
    isValid = false
    errorMessage = "This field is required"
  }

  // Email validation
  else if (fieldType === "email" && value && !isValidEmail(value)) {
    isValid = false
    errorMessage = "Please enter a valid email address"
  }

  // Phone validation
  else if (fieldType === "tel" && value && !isValidPhone(value)) {
    isValid = false
    errorMessage = "Please enter a valid phone number"
  }

  // Update field appearance
  if (isValid) {
    removeFieldError(field)
  } else {
    showFieldError(field, errorMessage)
  }

  return isValid
}

function validateForm(form) {
  const fields = form.querySelectorAll("input[required], textarea[required], select[required]")
  let isFormValid = true

  // Clear existing messages
  form.querySelectorAll(".error-message, .success-message").forEach((msg) => msg.remove())

  fields.forEach((field) => {
    if (!validateField(field)) {
      isFormValid = false
    }
  })

  return isFormValid
}

function submitForm(form) {
  // Show loading state
  const submitButton = form.querySelector('button[type="submit"]')
  const originalText = submitButton.innerHTML
  submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'
  submitButton.disabled = true

  // Simulate form submission
  setTimeout(() => {
    showFormSuccess(form, "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.")
    form.reset()
    clearFormValidation(form)

    // Reset button
    submitButton.innerHTML = originalText
    submitButton.disabled = false

    // Show success toast
    showToast("Message sent successfully!", "success")

    // Analytics tracking (if implemented)
    trackEvent("form_submission", "contact_form")
  }, 2000)
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function isValidPhone(phone) {
  const phoneRegex = /^[+]?[\d\s\-$$$$]{10,}$/
  return phoneRegex.test(phone)
}

function showFieldError(field, message) {
  removeFieldError(field)

  field.classList.add("invalid")

  const errorElement = document.createElement("span")
  errorElement.classList.add("error-message")
  errorElement.textContent = message
  errorElement.setAttribute("role", "alert")

  field.parentNode.appendChild(errorElement)
}

function removeFieldError(field) {
  field.classList.remove("invalid")

  const errorMessage = field.parentNode.querySelector(".error-message")
  if (errorMessage) {
    errorMessage.remove()
  }
}

function clearFormValidation(form) {
  form.querySelectorAll(".error-message, .success-message").forEach((msg) => msg.remove())
  form.querySelectorAll(".invalid").forEach((field) => field.classList.remove("invalid"))
}

function showFormSuccess(form, message) {
  const successElement = document.createElement("div")
  successElement.classList.add("success-message")
  successElement.textContent = message
  successElement.setAttribute("role", "alert")

  form.appendChild(successElement)

  // Remove success message after 5 seconds
  setTimeout(() => {
    successElement.remove()
  }, 5000)
}

/**
 * Habit Tracking System
 */
function initHabitTracking() {
  initializeHabitsFromDOM()
  initHabitCheckButtons()
  initAddHabitButton()
  updateDashboardStats()
}

function initializeHabitsFromDOM() {
  const habitItems = document.querySelectorAll(".habit-item")
  AppState.habits = []

  habitItems.forEach((item, index) => {
    const nameElement = item.querySelector(".habit-details h4")
    const descElement = item.querySelector(".habit-details p")
    const checkButton = item.querySelector(".habit-check")

    if (nameElement && checkButton) {
      const habit = {
        id: `habit_${index}`,
        name: nameElement.textContent.trim(),
        description: descElement ? descElement.textContent.trim() : "",
        target: Number.parseInt(checkButton.getAttribute("data-target")) || 1,
        current: Number.parseInt(checkButton.getAttribute("data-current")) || 0,
        completed: checkButton.getAttribute("data-completed") === "true",
        element: item,
      }

      AppState.habits.push(habit)
    }
  })
}

function initHabitCheckButtons() {
  const habitCheckButtons = document.querySelectorAll(".habit-check")

  habitCheckButtons.forEach((button) => {
    // Remove existing listeners
    const newButton = button.cloneNode(true)
    button.parentNode.replaceChild(newButton, button)
  })

  // Add listeners to new buttons
  document.querySelectorAll(".habit-check").forEach((button) => {
    button.addEventListener("click", function () {
      handleHabitToggle(this)
    })
  })
}

function handleHabitToggle(button) {
  const habitItem = button.closest(".habit-item")
  const habitId = getHabitId(habitItem)
  const habit = AppState.habits.find((h) => h.id === habitId)

  if (!habit) return

  const isCompleted = button.getAttribute("data-completed") === "true"
  const target = Number.parseInt(button.getAttribute("data-target")) || 1
  let current = Number.parseInt(button.getAttribute("data-current")) || 0

  if (isCompleted) {
    // Uncomplete habit
    current = Math.max(0, current - 1)
    button.setAttribute("data-completed", "false")
    button.classList.remove("completed")
    button.innerHTML = '<i class="fas fa-plus"></i>'

    showToast(`${habit.name} progress decreased`, "info")
  } else {
    // Complete habit
    current = Math.min(target, current + 1)

    if (current >= target) {
      button.setAttribute("data-completed", "true")
      button.classList.add("completed")
      button.innerHTML = '<i class="fas fa-check"></i>'
      showToast(`🎉 ${habit.name} completed! Great job!`, "success")

      // Achievement animation
      animateHabitCompletion(habitItem)
    } else {
      showToast(`${habit.name} progress updated!`, "success")
    }
  }

  // Update progress
  button.setAttribute("data-current", current)
  updateHabitProgress(habitItem, current, target)

  // Update habit in state
  habit.current = current
  habit.completed = current >= target

  // Update dashboard stats
  updateDashboardStats()

  // Save to localStorage
  saveUserPreferences()
}

function updateHabitProgress(habitItem, current, target) {
  const progressBar = habitItem.querySelector(".progress-fill")
  const progressText = habitItem.querySelector(".progress-text")

  if (progressBar && progressText) {
    const percentage = (current / target) * 100
    progressBar.style.width = `${percentage}%`

    if (current >= target) {
      progressText.textContent = "Completed"
    } else {
      progressText.textContent = `${current}/${target}`
    }
  }
}

function animateHabitCompletion(habitItem) {
  habitItem.style.transform = "scale(1.05)"
  habitItem.style.transition = "transform 0.3s ease"

  setTimeout(() => {
    habitItem.style.transform = "scale(1)"
  }, 300)

  // Add completion effects
  const confetti = document.createElement("div")
  confetti.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        width: 10px;
        height: 10px;
        background: #28a745;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        animation: confettiPop 0.6s ease-out forwards;
        pointer-events: none;
        z-index: 10;
    `

  const style = document.createElement("style")
  style.textContent = `
        @keyframes confettiPop {
            0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
            50% { transform: translate(-50%, -50%) scale(1.5); opacity: 0.8; }
            100% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
        }
    `

  if (!document.querySelector("#confetti-styles")) {
    style.id = "confetti-styles"
    document.head.appendChild(style)
  }

  habitItem.style.position = "relative"
  habitItem.appendChild(confetti)

  setTimeout(() => {
    confetti.remove()
  }, 600)
}

function getHabitId(habitItem) {
  return `habit_${Array.from(habitItem.parentNode.children).indexOf(habitItem)}`
}

function initAddHabitButton() {
  const addHabitBtn = document.getElementById("addHabitBtn")

  if (addHabitBtn) {
    addHabitBtn.addEventListener("click", () => {
      openAddHabitModal()
    })
  }
}

function openAddHabitModal() {
  const modal = document.getElementById("addHabitModal")
  if (modal) {
    modal.classList.add("active")
    document.body.style.overflow = "hidden"

    // Focus first input
    const firstInput = modal.querySelector("input")
    if (firstInput) {
      setTimeout(() => firstInput.focus(), 100)
    }

    announceToScreenReader("Add new habit dialog opened")
  }
}

function closeAddHabitModal() {
  const modal = document.getElementById("addHabitModal")
  if (modal) {
    modal.classList.remove("active")
    document.body.style.overflow = ""

    // Clear form
    const form = modal.querySelector("form")
    if (form) {
      form.reset()
      clearFormValidation(form)
    }

    announceToScreenReader("Add new habit dialog closed")
  }
}

function updateDashboardStats() {
  const totalHabits = AppState.habits.length
  const completedHabits = AppState.habits.filter((h) => h.completed).length
  const completionRate = totalHabits > 0 ? Math.round((completedHabits / totalHabits) * 100) : 0

  // Update completion rate
  const completionRateElement = document.getElementById("completionRate")
  if (completionRateElement) {
    animateNumber(completionRateElement, Number.parseInt(completionRateElement.textContent), completionRate)
  }

  // Update streak (simulated)
  AppState.completionStats.completionRate = completionRate

  if (completionRate === 100 && totalHabits > 0) {
    AppState.completionStats.streak++
    const streakElement = document.getElementById("streakCounter")
    if (streakElement) {
      animateNumber(streakElement, Number.parseInt(streakElement.textContent), AppState.completionStats.streak)
    }
    showToast("🔥 Streak updated! All habits completed today!", "success")
  }
}

function animateNumber(element, from, to) {
  const duration = 1000
  const startTime = performance.now()

  function updateNumber(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)

    const current = Math.round(from + (to - from) * progress)
    element.textContent = current

    if (progress < 1) {
      requestAnimationFrame(updateNumber)
    }
  }

  requestAnimationFrame(updateNumber)
}

/**
 * Modal Management
 */
function initModalHandlers() {
  const addHabitModal = document.getElementById("addHabitModal")
  const addHabitForm = document.getElementById("addHabitForm")
  const modalClose = document.getElementById("modalClose")
  const cancelBtn = document.getElementById("cancelHabit")

  // Close button
  if (modalClose) {
    modalClose.addEventListener("click", closeAddHabitModal)
  }

  // Cancel button
  if (cancelBtn) {
    cancelBtn.addEventListener("click", closeAddHabitModal)
  }

  // Click outside to close
  if (addHabitModal) {
    addHabitModal.addEventListener("click", function (event) {
      if (event.target === this || event.target.classList.contains("modal-overlay")) {
        closeAddHabitModal()
      }
    })
  }

  // Form submission
  if (addHabitForm) {
    addHabitForm.addEventListener("submit", function (event) {
      event.preventDefault()
      handleAddHabitSubmission(this)
    })
  }
}

function handleAddHabitSubmission(form) {
  const formData = new FormData(form)
  const habitData = {
    name: formData.get("habitName") || document.getElementById("habitName").value,
    description:
      formData.get("habitDescription") || document.getElementById("habitDescription").value || "Track this habit daily",
    icon: formData.get("habitIcon") || document.getElementById("habitIcon").value,
    target: Number.parseInt(formData.get("habitTarget") || document.getElementById("habitTarget").value) || 1,
    category: formData.get("habitCategory") || document.getElementById("habitCategory").value || "health",
  }

  // Validate required fields
  if (!habitData.name.trim()) {
    showToast("Please enter a habit name", "error")
    return
  }

  // Create new habit
  createNewHabit(habitData)

  // Close modal
  closeAddHabitModal()

  // Show success message
  showToast(`"${habitData.name}" habit added successfully!`, "success")

  // Track event
  trackEvent("habit_created", "habit_tracking", habitData.category)
}

function createNewHabit(habitData) {
  const habitsList = document.getElementById("habitsList")
  if (!habitsList) return

  // Generate unique ID
  const habitId = `habit_${Date.now()}`

  // Create habit element
  const habitElement = document.createElement("div")
  habitElement.classList.add("habit-item")
  habitElement.innerHTML = `
        <div class="habit-info">
            <div class="habit-icon ${habitData.category}">
                <i class="fas fa-${habitData.icon}"></i>
            </div>
            <div class="habit-details">
                <h4>${habitData.name}</h4>
                <p>${habitData.description}</p>
                <small>Target: ${habitData.target} ${habitData.target === 1 ? "time" : "times"}</small>
            </div>
        </div>
        <div class="habit-progress">
            <div class="progress-bar">
                <div class="progress-fill" style="width: 0%"></div>
            </div>
            <span class="progress-text">0/${habitData.target}</span>
        </div>
        <button class="habit-check" data-completed="false" data-target="${habitData.target}" data-current="0">
            <i class="fas fa-plus"></i>
        </button>
    `

  // Add to DOM
  habitsList.appendChild(habitElement)

  // Add to state
  const newHabit = {
    id: habitId,
    name: habitData.name,
    description: habitData.description,
    target: habitData.target,
    current: 0,
    completed: false,
    category: habitData.category,
    element: habitElement,
  }

  AppState.habits.push(newHabit)

  // Initialize check button
  initHabitCheckButtons()

  // Update stats
  updateDashboardStats()

  // Save to localStorage
  saveUserPreferences()

  // Animate new habit
  habitElement.style.opacity = "0"
  habitElement.style.transform = "translateY(20px)"
  setTimeout(() => {
    habitElement.style.transition = "all 0.3s ease"
    habitElement.style.opacity = "1"
    habitElement.style.transform = "translateY(0)"
  }, 100)
}

/**
 * Toast Notification System
 */
function showToast(message, type = "info", duration = 3000) {
  const toastContainer = document.getElementById("toastContainer") || createToastContainer()

  // Create toast element
  const toast = document.createElement("div")
  toast.classList.add("toast", type)
  toast.textContent = message
  toast.setAttribute("role", "alert")
  toast.setAttribute("aria-live", "polite")

  // Add close functionality
  toast.addEventListener("click", function () {
    removeToast(this)
  })

  // Add to container
  toastContainer.appendChild(toast)

  // Auto remove
  setTimeout(() => {
    removeToast(toast)
  }, duration)

  // Limit number of toasts
  const toasts = toastContainer.querySelectorAll(".toast")
  if (toasts.length > 5) {
    removeToast(toasts[0])
  }
}

function createToastContainer() {
  const container = document.createElement("div")
  container.id = "toastContainer"
  container.classList.add("toast-container")
  document.body.appendChild(container)
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
 * Smooth Scrolling
 */
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        const headerHeight = document.querySelector(".main-header")?.offsetHeight || 0
        const targetPosition = targetElement.offsetTop - headerHeight - 20

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })

        // Update URL
        history.replaceState(null, null, targetId)

        // Focus target for accessibility
        targetElement.focus({ preventScroll: true })
      }
    })
  })
}

/**
 * Keyboard Navigation
 */
function initKeyboardNavigation() {
  document.addEventListener("keydown", (event) => {
    // Close modal with Escape key
    if (event.key === "Escape") {
      const activeModal = document.querySelector(".modal.active")
      if (activeModal) {
        closeAddHabitModal()
      }
    }

    // Quick habit completion with number keys (1-9)
    if (event.key >= "1" && event.key <= "9" && !event.ctrlKey && !event.metaKey) {
      const habitIndex = Number.parseInt(event.key) - 1
      const habitCheckButtons = document.querySelectorAll(".habit-check")

      if (
        habitCheckButtons[habitIndex] &&
        document.activeElement.tagName !== "INPUT" &&
        document.activeElement.tagName !== "TEXTAREA"
      ) {
        event.preventDefault()
        habitCheckButtons[habitIndex].click()
        habitCheckButtons[habitIndex].focus()
      }
    }
  })
}

/**
 * Local Storage & User Preferences
 */
function saveUserPreferences() {
  const preferences = {
    habits: AppState.habits.map((habit) => ({
      id: habit.id,
      name: habit.name,
      description: habit.description,
      target: habit.target,
      current: habit.current,
      completed: habit.completed,
      category: habit.category || "health",
    })),
    stats: AppState.completionStats,
    settings: AppState.settings,
    lastSaved: new Date().toISOString(),
  }

  try {
    localStorage.setItem("aweSomePreferences", JSON.stringify(preferences))
  } catch (error) {
    console.warn("Could not save preferences to localStorage:", error)
  }
}

function loadUserPreferences() {
  try {
    const saved = localStorage.getItem("aweSomePreferences")
    if (saved) {
      const preferences = JSON.parse(saved)

      // Check if data is from today
      const lastSaved = new Date(preferences.lastSaved)
      const today = new Date()
      const isToday = lastSaved.toDateString() === today.toDateString()

      if (isToday && preferences.habits) {
        // Restore habit progress for today
        preferences.habits.forEach((savedHabit) => {
          const habitElement = Array.from(document.querySelectorAll(".habit-item")).find((item) => {
            const nameEl = item.querySelector(".habit-details h4")
            return nameEl && nameEl.textContent.trim() === savedHabit.name
          })

          if (habitElement) {
            const checkButton = habitElement.querySelector(".habit-check")
            if (checkButton) {
              checkButton.setAttribute("data-current", savedHabit.current)
              checkButton.setAttribute("data-completed", savedHabit.completed)

              if (savedHabit.completed) {
                checkButton.classList.add("completed")
                checkButton.innerHTML = '<i class="fas fa-check"></i>'
              }

              updateHabitProgress(habitElement, savedHabit.current, savedHabit.target)
            }
          }
        })

        // Restore stats
        if (preferences.stats) {
          AppState.completionStats = preferences.stats

          const streakElement = document.getElementById("streakCounter")
          if (streakElement) {
            streakElement.textContent = preferences.stats.streak
          }
        }
      }

      // Restore settings
      if (preferences.settings) {
        AppState.settings = { ...AppState.settings, ...preferences.settings }
      }
    }
  } catch (error) {
    console.warn("Could not load preferences from localStorage:", error)
  }
}

/**
 * Analytics & Event Tracking
 */
function trackEvent(eventName, category = "interaction", label = "") {
  // Placeholder for analytics integration
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
}

/**
 * Accessibility Helpers
 */
function announceToScreenReader(message) {
  const announcement = document.createElement("div")
  announcement.setAttribute("aria-live", "polite")
  announcement.setAttribute("aria-atomic", "true")
  announcement.classList.add("sr-only")
  announcement.textContent = message

  document.body.appendChild(announcement)

  setTimeout(() => {
    document.body.removeChild(announcement)
  }, 1000)
}

/**
 * Welcome Toast
 */
function showWelcomeToast() {
  setTimeout(() => {
    showToast("Welcome to AweSome! All interactive features are ready to use. Try adding a new habit!", "success", 5000)
  }, 1000)
}

/**
 * Performance Monitoring
 */
function initPerformanceMonitoring() {
  // Monitor page load performance
  window.addEventListener("load", () => {
    setTimeout(() => {
      const navigation = performance.getEntriesByType("navigation")[0]
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart
        console.log("Page load time:", Math.round(loadTime), "ms")

        // Track slow loads
        if (loadTime > 3000) {
          trackEvent("slow_page_load", "performance", Math.round(loadTime))
        }
      }
    }, 0)
  })
}

// Initialize performance monitoring
initPerformanceMonitoring()

// Export functions for global access (if needed)
window.AweSomeApp = {
  restartTypingAnimation,
  changeTypingSpeed,
  showToast,
  trackEvent,
}
