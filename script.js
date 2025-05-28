/**
 * AweSome Wellness Platform
 * Main JavaScript file for interactive functionality
 * 
 * This file contains all the JavaScript functionality for the AweSome Wellness platform,
 * including animations, interactive elements, form validation, and more.
 */

// Wait for the DOM to be fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initMobileMenu();
    initTypingAnimation();
    initTabNavigation();
    initFormValidation();
    initHabitTracking();
    initSmoothScrolling();
    initCharts();
    initAuthTabs();
});

/**
 * Mobile Menu Functionality
 * Handles the responsive mobile menu toggle
 */
function initMobileMenu() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Change icon based on menu state
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                if (navMenu.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navMenu.contains(event.target) && !mobileToggle.contains(event.target) && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }
}

/**
 * Typing Animation
 * Creates a typewriter effect for the welcome message on the homepage
 */
function initTypingAnimation() {
    const typingElement = document.getElementById('typingText');
    
    if (typingElement) {
        const welcomeText = "Welcome to AweSome";
        let i = 0;
        const typingSpeed = 100; // milliseconds per character
        
        function typeWriter() {
            if (i < welcomeText.length) {
                typingElement.textContent += welcomeText.charAt(i);
                i++;
                setTimeout(typeWriter, typingSpeed);
            }
        }
        
        // Start the typing animation
        typeWriter();
    }
}

/**
 * Tab Navigation
 * Handles tab switching for workouts and wellness pages
 */
function initTabNavigation() {
    // Workout tabs
    initTabs('workout-tabs', 'tab-btn', 'workoutsGrid', 'workout-card', 'data-level');
    
    // Wellness tabs
    initTabs('wellness-tabs', 'tab-btn', 'wellnessGrid', 'wellness-card', 'data-category');
    
    // Auth tabs (login/signup)
    initAuthTabs();
}

/**
 * Initialize tab functionality for a specific tab group
 */
function initTabs(tabsContainerClass, tabBtnClass, gridId, itemClass, dataAttribute) {
    const tabsContainer = document.querySelector(`.${tabsContainerClass}`);
    
    if (tabsContainer) {
        const tabButtons = tabsContainer.querySelectorAll(`.${tabBtnClass}`);
        const grid = document.getElementById(gridId);
        
        if (grid && tabButtons.length > 0) {
            tabButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons
                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    const filter = this.getAttribute('data-tab');
                    const items = grid.querySelectorAll(`.${itemClass}`);
                    
                    items.forEach(item => {
                        if (filter === 'all') {
                            item.style.display = 'block';
                        } else {
                            if (item.getAttribute(dataAttribute) === filter) {
                                item.style.display = 'block';
                            } else {
                                item.style.display = 'none';
                            }
                        }
                    });
                });
            });
        }
    }
}

/**
 * Auth Tabs
 * Handles switching between login and signup forms
 */
function initAuthTabs() {
    const authTabs = document.querySelectorAll('.auth-tab');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    if (authTabs.length > 0 && loginForm && signupForm) {
        authTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs
                authTabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                this.classList.add('active');
                
                const tabType = this.getAttribute('data-tab');
                
                if (tabType === 'login') {
                    loginForm.classList.add('active');
                    signupForm.classList.remove('active');
                } else if (tabType === 'signup') {
                    signupForm.classList.add('active');
                    loginForm.classList.remove('active');
                }
            });
        });
    }
}

/**
 * Form Validation
 * Validates contact and authentication forms
 */
function initFormValidation() {
    // Contact form validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            let isValid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    highlightInvalidField(field);
                } else {
                    removeInvalidHighlight(field);
                }
            });
            
            // Email validation
            const emailField = contactForm.querySelector('input[type="email"]');
            if (emailField && !validateEmail(emailField.value)) {
                isValid = false;
                highlightInvalidField(emailField);
            }
            
            if (isValid) {
                // Simulate form submission
                showFormSuccess(contactForm, 'Thank you! Your message has been sent successfully.');
            }
        });
    }
    
    // Login form validation
    const loginForm = document.querySelector('#loginForm form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            let isValid = true;
            const emailField = loginForm.querySelector('input[type="email"]');
            const passwordField = loginForm.querySelector('input[type="password"]');
            
            if (!validateEmail(emailField.value)) {
                isValid = false;
                highlightInvalidField(emailField);
            } else {
                removeInvalidHighlight(emailField);
            }
            
            if (!passwordField.value.trim()) {
                isValid = false;
                highlightInvalidField(passwordField);
            } else {
                removeInvalidHighlight(passwordField);
            }
            
            if (isValid) {
                // Simulate login
                showFormSuccess(loginForm, 'Login successful! Redirecting...');
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 2000);
            }
        });
    }
    
    // Sign up form validation
    const signupForm = document.querySelector('#signupForm form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            let isValid = true;
            const requiredFields = signupForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    highlightInvalidField(field);
                } else {
                    removeInvalidHighlight(field);
                }
            });
            
            // Email validation
            const emailField = signupForm.querySelector('input[type="email"]');
            if (emailField && !validateEmail(emailField.value)) {
                isValid = false;
                highlightInvalidField(emailField);
            }
            
            // Password validation
            const passwordField = signupForm.querySelector('input[name="password"]');
            const confirmPasswordField = signupForm.querySelector('input[name="confirmPassword"]');
            
            if (passwordField && passwordField.value.length < 8) {
                isValid = false;
                highlightInvalidField(passwordField);
                showFieldError(passwordField, 'Password must be at least 8 characters long');
            } else {
                removeInvalidHighlight(passwordField);
            }
            
            if (passwordField && confirmPasswordField && passwordField.value !== confirmPasswordField.value) {
                isValid = false;
                highlightInvalidField(confirmPasswordField);
                showFieldError(confirmPasswordField, 'Passwords do not match');
            }
            
            if (isValid) {
                // Simulate signup
                showFormSuccess(signupForm, 'Account created successfully! Redirecting...');
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 2000);
            }
        });
    }
}

/**
 * Validate email format
 */
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

/**
 * Highlight invalid form field
 */
function highlightInvalidField(field) {
    field.classList.add('invalid');
    field.style.borderColor = '#dc3545';
    
    // Add error message if it doesn't exist
    let errorMessage = field.nextElementSibling;
    if (!errorMessage || !errorMessage.classList.contains('error-message')) {
        errorMessage = document.createElement('span');
        errorMessage.classList.add('error-message');
        errorMessage.style.color = '#dc3545';
        errorMessage.style.fontSize = '0.8rem';
        errorMessage.style.display = 'block';
        errorMessage.style.marginTop = '0.25rem';
        errorMessage.textContent = 'This field is required';
        field.parentNode.insertBefore(errorMessage, field.nextSibling);
    }
}

/**
 * Remove invalid highlight from form field
 */
function removeInvalidHighlight(field) {
    field.classList.remove('invalid');
    field.style.borderColor = '';
    
    // Remove error message if it exists
    const errorMessage = field.nextElementSibling;
    if (errorMessage && errorMessage.classList.contains('error-message')) {
        errorMessage.remove();
    }
}

/**
 * Show specific error message for a field
 */
function showFieldError(field, message) {
    let errorMessage = field.nextElementSibling;
    if (errorMessage && errorMessage.classList.contains('error-message')) {
        errorMessage.textContent = message;
    } else {
        errorMessage = document.createElement('span');
        errorMessage.classList.add('error-message');
        errorMessage.style.color = '#dc3545';
        errorMessage.style.fontSize = '0.8rem';
        errorMessage.style.display = 'block';
        errorMessage.style.marginTop = '0.25rem';
        errorMessage.textContent = message;
        field.parentNode.insertBefore(errorMessage, field.nextSibling);
    }
}

/**
 * Show success message after form submission
 */
function showFormSuccess(form, message) {
    // Create success message element
    const successMessage = document.createElement('div');
    successMessage.classList.add('success-message');
    successMessage.style.backgroundColor = '#d4edda';
    successMessage.style.color = '#155724';
    successMessage.style.padding = '1rem';
    successMessage.style.borderRadius = '0.25rem';
    successMessage.style.marginTop = '1rem';
    successMessage.style.textAlign = 'center';
    successMessage.textContent = message;
    
    // Add success message to form
    form.appendChild(successMessage);
    
    // Reset form
    form.reset();
}

/**
 * Habit Tracking Functionality
 * Handles habit tracking interactions on the tracking page
 */
function initHabitTracking() {
    const habitsList = document.getElementById('habitsList');
    const addHabitBtn = document.getElementById('addHabitBtn');
    
    if (habitsList) {
        // Handle habit check buttons
        const habitCheckButtons = habitsList.querySelectorAll('.habit-check');
        habitCheckButtons.forEach(button => {
            button.addEventListener('click', function() {
                const isCompleted = this.getAttribute('data-completed') === 'true';
                const habitItem = this.closest('.habit-item');
                const progressBar = habitItem.querySelector('.progress-fill');
                const progressText = habitItem.querySelector('.progress-text');
                
                if (isCompleted) {
                    // Uncomplete habit
                    this.setAttribute('data-completed', 'false');
                    this.classList.remove('completed');
                    this.innerHTML = '<i class="fas fa-plus"></i>';
                    
                    // Update progress bar (example: decrease by 25%)
                    const currentWidth = parseInt(progressBar.style.width) || 0;
                    const newWidth = Math.max(0, currentWidth - 25);
                    progressBar.style.width = newWidth + '%';
                    
                    // Update progress text
                    if (progressText.textContent.includes('/')) {
                        const parts = progressText.textContent.split('/');
                        const current = parseInt(parts[0]) - 1;
                        const total = parseInt(parts[1]);
                        progressText.textContent = `${current}/${total}`;
                    } else {
                        progressText.textContent = '0/1';
                    }
                } else {
                    // Complete habit
                    this.setAttribute('data-completed', 'true');
                    this.classList.add('completed');
                    this.innerHTML = '<i class="fas fa-check"></i>';
                    
                    // Update progress bar (example: increase by 25%)
                    const currentWidth = parseInt(progressBar.style.width) || 0;
                    const newWidth = Math.min(100, currentWidth + 25);
                    progressBar.style.width = newWidth + '%';
                    
                    // Update progress text
                    if (progressText.textContent.includes('/')) {
                        const parts = progressText.textContent.split('/');
                        const current = parseInt(parts[0]) + 1;
                        const total = parseInt(parts[1]);
                        progressText.textContent = current >= total ? 'Completed' : `${current}/${total}`;
                    } else {
                        progressText.textContent = 'Completed';
                    }
                }
            });
        });
    }
    
    // Add new habit functionality
    if (addHabitBtn && habitsList) {
        addHabitBtn.addEventListener('click', function() {
            // Create modal for adding new habit
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.style.position = 'fixed';
            modal.style.top = '0';
            modal.style.left = '0';
            modal.style.width = '100%';
            modal.style.height = '100%';
            modal.style.backgroundColor = 'rgba(0,0,0,0.5)';
            modal.style.display = 'flex';
            modal.style.alignItems = 'center';
            modal.style.justifyContent = 'center';
            modal.style.zIndex = '1000';
            
            const modalContent = document.createElement('div');
            modalContent.classList.add('modal-content');
            modalContent.style.backgroundColor = 'white';
            modalContent.style.padding = '2rem';
            modalContent.style.borderRadius = '8px';
            modalContent.style.width = '90%';
            modalContent.style.maxWidth = '500px';
            
            modalContent.innerHTML = `
                <h3 style="margin-bottom: 1.5rem;">Add New Habit</h3>
                <form id="addHabitForm">
                    <div style="margin-bottom: 1rem;">
                        <label for="habitName" style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Habit Name</label>
                        <input type="text" id="habitName" style="width: 100%; padding: 0.75rem; border: 2px solid #e1e5e9; border-radius: 6px;" required>
                    </div>
                    <div style="margin-bottom: 1rem;">
                        <label for="habitDescription" style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Description</label>
                        <input type="text" id="habitDescription" style="width: 100%; padding: 0.75rem; border: 2px solid #e1e5e9; border-radius: 6px;">
                    </div>
                    <div style="margin-bottom: 1rem;">
                        <label for="habitIcon" style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Icon</label>
                        <select id="habitIcon" style="width: 100%; padding: 0.75rem; border: 2px solid #e1e5e9; border-radius: 6px;">
                            <option value="tint">Water (tint)</option>
                            <option value="running">Exercise (running)</option>
                            <option value="book">Reading (book)</option>
                            <option value="bed">Sleep (bed)</option>
                            <option value="apple-alt">Nutrition (apple)</option>
                            <option value="brain">Meditation (brain)</option>
                        </select>
                    </div>
                    <div style="margin-bottom: 1.5rem;">
                        <label for="habitTarget" style="display: block; margin-bottom: 0.5rem; font-weight: 500;">Daily Target</label>
                        <input type="number" id="habitTarget" min="1" value="1" style="width: 100%; padding: 0.75rem; border: 2px solid #e1e5e9; border-radius: 6px;">
                    </div>
                    <div style="display: flex; gap: 1rem; justify-content: flex-end;">
                        <button type="button" id="cancelHabit" style="padding: 0.75rem 1.5rem; border: 2px solid #e1e5e9; background: white; border-radius: 6px; cursor: pointer;">Cancel</button>
                        <button type="submit" style="padding: 0.75rem 1.5rem; background: #0A2463; color: white; border: none; border-radius: 6px; cursor: pointer;">Add Habit</button>
                    </div>
                </form>
            `;
            
            modal.appendChild(modalContent);
            document.body.appendChild(modal);
            
            // Handle form submission
            const addHabitForm = document.getElementById('addHabitForm');
            addHabitForm.addEventListener('submit', function(event) {
                event.preventDefault();
                
                const habitName = document.getElementById('habitName').value;
                const habitDescription = document.getElementById('habitDescription').value || 'New habit tracking';
                const habitIcon = document.getElementById('habitIcon').value;
                const habitTarget = document.getElementById('habitTarget').value || 1;
                
                // Create new habit item
                const newHabit = document.createElement('div');
                newHabit.classList.add('habit-item');
                newHabit.innerHTML = `
                    <div class="habit-info">
                        <div class="habit-icon">
                            <i class="fas fa-${habitIcon}"></i>
                        </div>
                        <div class="habit-details">
                            <h4>${habitName}</h4>
                            <p>${habitDescription}</p>
                        </div>
                    </div>
                    <div class="habit-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 0%"></div>
                        </div>
                        <span class="progress-text">0/${habitTarget}</span>
                    </div>
                    <button class="habit-check" data-completed="false">
                        <i class="fas fa-plus"></i>
                    </button>
                `;
                
                // Add event listener to new habit check button
                const checkButton = newHabit.querySelector('.habit-check');
                checkButton.addEventListener('click', function() {
                    const isCompleted = this.getAttribute('data-completed') === 'true';
                    const habitItem = this.closest('.habit-item');
                    const progressBar = habitItem.querySelector('.progress-fill');
                    const progressText = habitItem.querySelector('.progress-text');
                    
                    if (isCompleted) {
                        // Uncomplete habit
                        this.setAttribute('data-completed', 'false');
                        this.classList.remove('completed');
                        this.innerHTML = '<i class="fas fa-plus"></i>';
                        
                        // Update progress bar
                        progressBar.style.width = '0%';
                        
                        // Update progress text
                        progressText.textContent = `0/${habitTarget}`;
                    } else {
                        // Complete habit
                        this.setAttribute('data-completed', 'true');
                        this.classList.add('completed');
                        this.innerHTML = '<i class="fas fa-check"></i>';
                        
                        // Update progress bar
                        progressBar.style.width = '100%';
                        
                        // Update progress text
                        progressText.textContent = 'Completed';
                    }
                });
                
                // Add new habit to list
                habitsList.appendChild(newHabit);
                
                // Close modal
                document.body.removeChild(modal);
            });
            
            // Handle cancel button
            const cancelButton = document.getElementById('cancelHabit');
            cancelButton.addEventListener('click', function() {
                document.body.removeChild(modal);
            });
            
            // Close modal when clicking outside
            modal.addEventListener('click', function(event) {
                if (event.target === modal) {
                    document.body.removeChild(modal);
                }
            });
        });
    }
}

/**
 * Smooth Scrolling
 * Enables smooth scrolling for anchor links
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Get header height for offset
                const header = document.querySelector('.header');
                const headerHeight = header ? header.offsetHeight : 0;
                
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight - 20,
                    behavior: 'smooth'
                });
                
                // Update URL without scrolling
                history.pushState(null, null, targetId);
            }
        });
    });
}

/**
 * Charts and Visualizations
 * Initializes charts on the tracking page
 */
function initCharts() {
    // This is a simple implementation
    // In a real application, you might use a library like Chart.js
    
    const chartBars = document.querySelectorAll('.chart-bar .bar');
    
    if (chartBars.length > 0) {
        // Animate chart bars on load
        chartBars.forEach((bar, index) => {
            setTimeout(() => {
                const height = bar.style.height;
                bar.style.height = '0';
                
                setTimeout(() => {
                    bar.style.transition = 'height 1s ease';
                    bar.style.height = height;
                }, 100);
            }, index * 100);
        });
    }
}

/**
 * Active Navigation Link
 * Highlights the current page in the navigation menu
 */
(function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        
        if (currentPage === linkHref || 
            (currentPage === '' && linkHref === 'index.html') ||
            (currentPage === '/' && linkHref === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
})();
