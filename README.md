<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README - AweSome Wellness Project</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css">
    <style>
        .readme-container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 2rem;
            background: var(--white);
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            border-radius: 12px;
            margin-top: 2rem;
            margin-bottom: 2rem;
        }
        
        .readme-header {
            text-align: center;
            margin-bottom: 3rem;
            padding-bottom: 2rem;
            border-bottom: 2px solid var(--border-color);
        }
        
        .readme-header h1 {
            color: var(--primary-color);
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }
        
        .readme-header .subtitle {
            font-size: 1.2rem;
            color: var(--text-light);
            margin-bottom: 2rem;
        }
        
        .badges {
            display: flex;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;
        }
        
        .badge {
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 500;
        }
        
        .badge-html { background: #e34c26; color: white; }
        .badge-css { background: #1572b6; color: white; }
        .badge-js { background: #f7df1e; color: black; }
        .badge-responsive { background: #28a745; color: white; }
        
        .toc {
            background: var(--background-light);
            padding: 2rem;
            border-radius: 8px;
            margin: 2rem 0;
        }
        
        .toc h3 {
            color: var(--primary-color);
            margin-bottom: 1rem;
        }
        
        .toc ul {
            list-style: none;
            padding-left: 0;
        }
        
        .toc li {
            margin-bottom: 0.5rem;
        }
        
        .toc a {
            color: var(--text-dark);
            text-decoration: none;
            padding: 0.25rem 0;
            display: block;
            transition: color 0.3s ease;
        }
        
        .toc a:hover {
            color: var(--primary-color);
        }
        
        .section {
            margin: 3rem 0;
            padding: 2rem 0;
            border-bottom: 1px solid var(--border-color);
        }
        
        .section:last-child {
            border-bottom: none;
        }
        
        .section h2 {
            color: var(--primary-color);
            font-size: 2rem;
            margin-bottom: 1.5rem;
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        
        .section h3 {
            color: var(--secondary-color);
            font-size: 1.5rem;
            margin: 2rem 0 1rem 0;
        }
        
        .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            margin: 2rem 0;
        }
        
        .feature-item {
            background: var(--background-light);
            padding: 1.5rem;
            border-radius: 8px;
            border-left: 4px solid var(--primary-color);
        }
        
        .feature-item h4 {
            color: var(--primary-color);
            margin-bottom: 0.5rem;
        }
        
        .tech-stack {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            margin: 2rem 0;
        }
        
        .tech-item {
            background: var(--white);
            border: 2px solid var(--border-color);
            padding: 1.5rem;
            border-radius: 8px;
            text-align: center;
            transition: all 0.3s ease;
        }
        
        .tech-item:hover {
            border-color: var(--primary-color);
            transform: translateY(-2px);
        }
        
        .tech-icon {
            font-size: 2rem;
            margin-bottom: 1rem;
        }
        
        .html-icon { color: #e34c26; }
        .css-icon { color: #1572b6; }
        .js-icon { color: #f7df1e; }
        .fa-icon { color: #339af0; }
        
        .file-structure {
            background: #f8f9fa;
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 1.5rem;
            font-family: 'Courier New', monospace;
            overflow-x: auto;
        }
        
        .file-structure .folder {
            color: var(--primary-color);
            font-weight: 600;
        }
        
        .file-structure .file {
            color: var(--text-dark);
        }
        
        .file-structure .comment {
            color: var(--text-light);
            font-style: italic;
        }
        
        .code-block {
            background: #f8f9fa;
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 1.5rem;
            margin: 1rem 0;
            overflow-x: auto;
        }
        
        .code-block code {
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
            line-height: 1.5;
        }
        
        .setup-steps {
            counter-reset: step-counter;
        }
        
        .setup-step {
            counter-increment: step-counter;
            background: var(--background-light);
            padding: 1.5rem;
            border-radius: 8px;
            margin: 1rem 0;
            position: relative;
            padding-left: 4rem;
        }
        
        .setup-step::before {
            content: counter(step-counter);
            position: absolute;
            left: 1rem;
            top: 1.5rem;
            background: var(--primary-color);
            color: white;
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
        }
        
        .page-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            margin: 2rem 0;
        }
        
        .page-card {
            background: var(--white);
            border: 2px solid var(--border-color);
            border-radius: 8px;
            padding: 1.5rem;
            transition: all 0.3s ease;
        }
        
        .page-card:hover {
            border-color: var(--primary-color);
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .page-card h4 {
            color: var(--primary-color);
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .compatibility-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 1rem;
            margin: 2rem 0;
        }
        
        .browser-item {
            text-align: center;
            padding: 1rem;
            background: var(--background-light);
            border-radius: 8px;
        }
        
        .browser-icon {
            font-size: 2rem;
            margin-bottom: 0.5rem;
        }
        
        .chrome-icon { color: #4285f4; }
        .firefox-icon { color: #ff9500; }
        .safari-icon { color: #006cff; }
        .edge-icon { color: #0078d4; }
        
        .contact-info {
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            padding: 2rem;
            border-radius: 8px;
            text-align: center;
            margin: 2rem 0;
        }
        
        .contact-info h3 {
            color: white;
            margin-bottom: 1rem;
        }
        
        .contact-details {
            display: flex;
            justify-content: center;
            gap: 2rem;
            flex-wrap: wrap;
        }
        
        .contact-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .demo-buttons {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin: 2rem 0;
            flex-wrap: wrap;
        }
        
        .btn-demo {
            padding: 12px 24px;
            border: none;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 500;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .btn-primary-demo {
            background-color: var(--primary-color);
            color: white;
        }
        
        .btn-secondary-demo {
            background-color: var(--secondary-color);
            color: white;
        }
        
        .btn-demo:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
        
        @media (max-width: 768px) {
            .readme-container {
                margin: 1rem;
                padding: 1rem;
            }
            
            .readme-header h1 {
                font-size: 2rem;
            }
            
            .badges {
                justify-content: center;
            }
            
            .contact-details {
                flex-direction: column;
                align-items: center;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="container">
            <div class="nav-brand">
                <a href="index.html" class="logo">AweSome</a>
            </div>
            <nav class="nav-menu" id="navMenu">
                <a href="index.html" class="nav-link">Home</a>
                <a href="workouts.html" class="nav-link">Workouts</a>
                <a href="wellness.html" class="nav-link">Wellness</a>
                <a href="tracking.html" class="nav-link">Tracking</a>
                <a href="about.html" class="nav-link">About</a>
                <a href="contact.html" class="nav-link">Contact</a>
            </nav>
            <div class="nav-actions">
                <a href="login.html" class="btn btn-login">Login</a>
                <a href="login.html" class="btn btn-signup">Sign Up</a>
                <button class="mobile-toggle" id="mobileToggle">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <main style="margin-top: 70px; padding: 2rem 0; background-color: var(--background-light);">
        <div class="container">
            <div class="readme-container">
                <!-- Header Section -->
                <div class="readme-header">
                    <h1><i class="fas fa-heart"></i> AweSome - Wellness Journey & Habit Tracking</h1>
                    <p class="subtitle">A comprehensive wellness platform built with HTML5, CSS3, and JavaScript</p>
                    <div class="badges">
                        <span class="badge badge-html">HTML5</span>
                        <span class="badge badge-css">CSS3</span>
                        <span class="badge badge-js">JavaScript</span>
                        <span class="badge badge-responsive">Responsive</span>
                    </div>
                    <div class="demo-buttons">
                        <a href="index.html" class="btn-demo btn-primary-demo">
                            <i class="fas fa-play"></i> Live Demo
                        </a>
                        <a href="#setup" class="btn-demo btn-secondary-demo">
                            <i class="fas fa-download"></i> Get Started
                        </a>
                    </div>
                </div>

                <!-- Table of Contents -->
                <div class="toc">
                    <h3><i class="fas fa-list"></i> Table of Contents</h3>
                    <ul>
                        <li><a href="#features">🌟 Features</a></li>
                        <li><a href="#demo">🚀 Live Demo</a></li>
                        <li><a href="#structure">📁 Project Structure</a></li>
                        <li><a href="#design">🎨 Design Features</a></li>
                        <li><a href="#technologies">🛠️ Technologies Used</a></li>
                        <li><a href="#responsive">📱 Responsive Design</a></li>
                        <li><a href="#setup">🔧 Setup Instructions</a></li>
                        <li><a href="#pages">📄 Page Descriptions</a></li>
                        <li><a href="#interactive">🎯 Interactive Features</a></li>
                        <li><a href="#compatibility">🌐 Browser Compatibility</a></li>
                        <li><a href="#customization">🎨 Customization</a></li>
                        <li><a href="#contact">📞 Contact Information</a></li>
                    </ul>
                </div>

                <!-- Features Section -->
                <section id="features" class="section">
                    <h2><i class="fas fa-star"></i> Features</h2>
                    
                    <h3>Core Functionality</h3>
                    <div class="feature-grid">
                        <div class="feature-item">
                            <h4><i class="fas fa-chart-line"></i> Habit Tracking</h4>
                            <p>Interactive dashboard for monitoring daily habits and progress with visual charts and statistics.</p>
                        </div>
                        <div class="feature-item">
                            <h4><i class="fas fa-dumbbell"></i> Workout Routines</h4>
                            <p>Comprehensive library of exercises for all fitness levels with detailed instructions and filtering.</p>
                        </div>
                        <div class="feature-item">
                            <h4><i class="fas fa-heart"></i> Wellness Advice</h4>
                            <p>Expert guidance on nutrition, mental health, and sleep with categorized content.</p>
                        </div>
                        <div class="feature-item">
                            <h4><i class="fas fa-mobile-alt"></i> Responsive Design</h4>
                            <p>Optimized for desktop, tablet, and mobile devices with consistent user experience.</p>
                        </div>
                    </div>

                    <h3>Interactive Elements</h3>
                    <div class="feature-grid">
                        <div class="feature-item">
                            <h4><i class="fas fa-keyboard"></i> Typing Animation</h4>
                            <p>Dynamic welcome message with typewriter effect on the homepage.</p>
                        </div>
                        <div class="feature-item">
                            <h4><i class="fas fa-tabs"></i> Tab Navigation</h4>
                            <p>Organized content filtering for workouts and wellness advice.</p>
                        </div>
                        <div class="feature-item">
                            <h4><i class="fas fa-bars"></i> Mobile Menu</h4>
                            <p>Collapsible navigation system optimized for mobile devices.</p>
                        </div>
                        <div class="feature-item">
                            <h4><i class="fas fa-envelope"></i> Contact Forms</h4>
                            <p>Functional contact and authentication forms with validation.</p>
                        </div>
                    </div>
                </section>

                <!-- Demo Section -->
                <section id="demo" class="section">
                    <h2><i class="fas fa-rocket"></i> Live Demo</h2>
                    <p>Experience the full functionality of AweSome by exploring our interactive demo. Open <code>index.html</code> in your web browser to view the website locally.</p>
                    <div class="demo-buttons">
                        <a href="index.html" class="btn-demo btn-primary-demo">
                            <i class="fas fa-home"></i> Homepage
                        </a>
                        <a href="workouts.html" class="btn-demo btn-secondary-demo">
                            <i class="fas fa-dumbbell"></i> Workouts
                        </a>
                        <a href="wellness.html" class="btn-demo btn-secondary-demo">
                            <i class="fas fa-leaf"></i> Wellness
                        </a>
                        <a href="tracking.html" class="btn-demo btn-secondary-demo">
                            <i class="fas fa-chart-bar"></i> Tracking
                        </a>
                    </div>
                </section>

                <!-- Project Structure -->
                <section id="structure" class="section">
                    <h2><i class="fas fa-folder"></i> Project Structure</h2>
                    <div class="file-structure">
<pre><code><span class="folder">awesome-wellness/</span>
├── <span class="file">index.html</span>          <span class="comment"># Homepage with hero section and features</span>
├── <span class="file">workouts.html</span>       <span class="comment"># Workout routines and fitness programs</span>
├── <span class="file">wellness.html</span>       <span class="comment"># Wellness advice and tips</span>
├── <span class="file">tracking.html</span>       <span class="comment"># Habit tracking dashboard</span>
├── <span class="file">about.html</span>          <span class="comment"># Company story and team information</span>
├── <span class="file">contact.html</span>        <span class="comment"># Contact form and company details</span>
├── <span class="file">login.html</span>          <span class="comment"># Login and sign-up forms</span>
├── <span class="file">styles.css</span>          <span class="comment"># Main stylesheet with responsive design</span>
├── <span class="file">script.js</span>           <span class="comment"># JavaScript for interactivity</span>
├── <span class="file">readme.html</span>         <span class="comment"># This documentation page</span>
└── <span class="file">README.md</span>           <span class="comment"># Markdown documentation</span></code></pre>
                    </div>
                </section>

                <!-- Design Features -->
                <section id="design" class="section">
                    <h2><i class="fas fa-palette"></i> Design Features</h2>
                    
                    <h3>Color Scheme</h3>
                    <div style="display: flex; gap: 1rem; margin: 1rem 0; flex-wrap: wrap;">
                        <div style="background: #0A2463; color: white; padding: 1rem; border-radius: 8px; text-align: center; min-width: 150px;">
                            <strong>Primary</strong><br>#0A2463
                        </div>
                        <div style="background: #3E92CC; color: white; padding: 1rem; border-radius: 8px; text-align: center; min-width: 150px;">
                            <strong>Secondary</strong><br>#3E92CC
                        </div>
                        <div style="background: #ffffff; color: #333; border: 2px solid #e1e5e9; padding: 1rem; border-radius: 8px; text-align: center; min-width: 150px;">
                            <strong>Background</strong><br>#FFFFFF
                        </div>
                    </div>

                    <h3>Typography</h3>
                    <div class="feature-item">
                        <h4>Font Family</h4>
                        <p><strong>Inter</strong> (Google Fonts) - Modern, clean, and highly readable across all devices</p>
                    </div>

                    <h3>Layout Principles</h3>
                    <div class="feature-grid">
                        <div class="feature-item">
                            <h4>CSS Grid & Flexbox</h4>
                            <p>Modern layout techniques for responsive, flexible designs</p>
                        </div>
                        <div class="feature-item">
                            <h4>Mobile-First</h4>
                            <p>Progressive enhancement approach starting with mobile optimization</p>
                        </div>
                        <div class="feature-item">
                            <h4>Consistent Spacing</h4>
                            <p>Systematic spacing scale for visual rhythm and hierarchy</p>
                        </div>
                        <div class="feature-item">
                            <h4>Accessibility</h4>
                            <p>WCAG compliant with proper semantic markup and ARIA labels</p>
                        </div>
                    </div>
                </section>

                <!-- Technologies -->
                <section id="technologies" class="section">
                    <h2><i class="fas fa-tools"></i> Technologies Used</h2>
                    <div class="tech-stack">
                        <div class="tech-item">
                            <div class="tech-icon html-icon">
                                <i class="fab fa-html5"></i>
                            </div>
                            <h4>HTML5</h4>
                            <p>Semantic markup with proper accessibility and SEO optimization</p>
                        </div>
                        <div class="tech-item">
                            <div class="tech-icon css-icon">
                                <i class="fab fa-css3-alt"></i>
                            </div>
                            <h4>CSS3</h4>
                            <p>Modern styling with Grid, Flexbox, animations, and custom properties</p>
                        </div>
                        <div class="tech-item">
                            <div class="tech-icon js-icon">
                                <i class="fab fa-js-square"></i>
                            </div>
                            <h4>JavaScript</h4>
                            <p>Interactive features, form handling, and dynamic content</p>
                        </div>
                        <div class="tech-item">
                            <div class="tech-icon fa-icon">
                                <i class="fas fa-icons"></i>
                            </div>
                            <h4>Font Awesome</h4>
                            <p>Comprehensive icon library for visual elements and UI enhancement</p>
                        </div>
                    </div>
                </section>

                <!-- Responsive Design -->
                <section id="responsive" class="section">
                    <h2><i class="fas fa-mobile-alt"></i> Responsive Design</h2>
                    <div class="feature-grid">
                        <div class="feature-item">
                            <h4><i class="fas fa-desktop"></i> Desktop</h4>
                            <p><strong>1200px and above</strong><br>Full layout with sidebar navigation and multi-column grids</p>
                        </div>
                        <div class="feature-item">
                            <h4><i class="fas fa-tablet-alt"></i> Tablet</h4>
                            <p><strong>768px - 1199px</strong><br>Adapted layouts with responsive grids and touch-friendly interfaces</p>
                        </div>
                        <div class="feature-item">
                            <h4><i class="fas fa-mobile"></i> Mobile</h4>
                            <p><strong>Below 768px</strong><br>Single-column layouts with collapsible navigation and optimized touch targets</p>
                        </div>
                    </div>
                </section>

                <!-- Setup Instructions -->
                <section id="setup" class="section">
                    <h2><i class="fas fa-cog"></i> Setup Instructions</h2>
                    <div class="setup-steps">
                        <div class="setup-step">
                            <h4>Download or Clone</h4>
                            <p>Download the project files or clone the repository to your local machine.</p>
                        </div>
                        <div class="setup-step">
                            <h4>Open in Browser</h4>
                            <p>Open <code>index.html</code> in your preferred web browser to view the website.</p>
                        </div>
                        <div class="setup-step">
                            <h4>Navigate and Explore</h4>
                            <p>Use the navigation menu to explore different pages and test all interactive features.</p>
                        </div>
                        <div class="setup-step">
                            <h4>Test Responsiveness</h4>
                            <p>Resize your browser window or use developer tools to test responsive design.</p>
                        </div>
                    </div>

                    <h3>Local Development Server (Optional)</h3>
                    <div class="code-block">
<code># Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000</code>
                    </div>
                </section>

                <!-- Page Descriptions -->
                <section id="pages" class="section">
                    <h2><i class="fas fa-file-alt"></i> Page Descriptions</h2>
                    <div class="page-grid">
                        <div class="page-card">
                            <h4><i class="fas fa-home"></i> Homepage</h4>
                            <p><strong>index.html</strong></p>
                            <ul>
                                <li>Hero section with typing animation</li>
                                <li>Feature highlights</li>
                                <li>Company story</li>
                                <li>User testimonials</li>
                                <li>Call-to-action sections</li>
                            </ul>
                        </div>
                        <div class="page-card">
                            <h4><i class="fas fa-dumbbell"></i> Workouts</h4>
                            <p><strong>workouts.html</strong></p>
                            <ul>
                                <li>Filterable workout library</li>
                                <li>Difficulty level categorization</li>
                                <li>Featured 30-day challenge</li>
                                <li>Workout details and statistics</li>
                            </ul>
                        </div>
                        <div class="page-card">
                            <h4><i class="fas fa-leaf"></i> Wellness</h4>
                            <p><strong>wellness.html</strong></p>
                            <ul>
                                <li>Categorized wellness advice</li>
                                <li>Expert tips and guides</li>
                                <li>Featured articles</li>
                                <li>Daily wellness tips</li>
                            </ul>
                        </div>
                        <div class="page-card">
                            <h4><i class="fas fa-chart-bar"></i> Tracking</h4>
                            <p><strong>tracking.html</strong></p>
                            <ul>
                                <li>Interactive habit dashboard</li>
                                <li>Progress statistics</li>
                                <li>Visual progress charts</li>
                                <li>Habit management interface</li>
                            </ul>
                        </div>
                        <div class="page-card">
                            <h4><i class="fas fa-info-circle"></i> About</h4>
                            <p><strong>about.html</strong></p>
                            <ul>
                                <li>Company mission and vision</li>
                                <li>Team member profiles</li>
                                <li>Core values</li>
                                <li>Company statistics</li>
                            </ul>
                        </div>
                        <div class="page-card">
                            <h4><i class="fas fa-envelope"></i> Contact</h4>
                            <p><strong>contact.html</strong></p>
                            <ul>
                                <li>Contact information</li>
                                <li>Interactive contact form</li>
                                <li>FAQ section</li>
                                <li>Social media links</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <!-- Interactive Features -->
                <section id="interactive" class="section">
                    <h2><i class="fas fa-mouse-pointer"></i> Key Interactive Features</h2>
                    <div class="feature-grid">
                        <div class="feature-item">
                            <h4><i class="fas fa-keyboard"></i> Typing Animation</h4>
                            <p>Homepage welcome message with typewriter effect that creates an engaging first impression.</p>
                            <div class="code-block">
<code>const welcomeText = "Welcome to AweSome";
// Animated character by character</code>
                            </div>
                        </div>
                        <div class="feature-item">
                            <h4><i class="fas fa-tabs"></i> Tab Navigation</h4>
                            <p>Smooth content filtering for workouts and wellness advice with animated transitions.</p>
                        </div>
                        <div class="feature-item">
                            <h4><i class="fas fa-bars"></i> Mobile Menu</h4>
                            <p>Responsive navigation toggle with smooth slide animations for mobile devices.</p>
                        </div>
                        <div class="feature-item">
                            <h4><i class="fas fa-check-circle"></i> Form Validation</h4>
                            <p>Client-side form validation with user feedback and error handling for better UX.</p>
                        </div>
                    </div>
                </section>

                <!-- Browser Compatibility -->
                <section id="compatibility" class="section">
                    <h2><i class="fas fa-globe"></i> Browser Compatibility</h2>
                    <div class="compatibility-grid">
                        <div class="browser-item">
                            <div class="browser-icon chrome-icon">
                                <i class="fab fa-chrome"></i>
                            </div>
                            <h4>Chrome</h4>
                            <p>90+</p>
                        </div>
                        <div class="browser-item">
                            <div class="browser-icon firefox-icon">
                                <i class="fab fa-firefox"></i>
                            </div>
                            <h4>Firefox</h4>
                            <p>88+</p>
                        </div>
                        <div class="browser-item">
                            <div class="browser-icon safari-icon">
                                <i class="fab fa-safari"></i>
                            </div>
                            <h4>Safari</h4>
                            <p>14+</p>
                        </div>
                        <div class="browser-item">
                            <div class="browser-icon edge-icon">
                                <i class="fab fa-edge"></i>
                            </div>
                            <h4>Edge</h4>
                            <p>90+</p>
                        </div>
                    </div>
                </section>

                <!-- Customization -->
                <section id="customization" class="section">
                    <h2><i class="fas fa-paint-brush"></i> Customization</h2>
                    
                    <h3>Colors</h3>
                    <p>Update CSS custom properties in <code>styles.css</code>:</p>
                    <div class="code-block">
<code>:root {
    --primary-color: #0A2463;
    --secondary-color: #3E92CC;
    /* Modify these values to change the color scheme */
}</code>
                    </div>

                    <h3>Content</h3>
                    <div class="feature-grid">
                        <div class="feature-item">
                            <h4>Text Content</h4>
                            <p>Edit HTML files to update text content, headings, and descriptions throughout the site.</p>
                        </div>
                        <div class="feature-item">
                            <h4>Images</h4>
                            <p>Replace placeholder images with actual photos while maintaining aspect ratios.</p>
                        </div>
                        <div class="feature-item">
                            <h4>Contact Information</h4>
                            <p>Update contact details in footer and contact page to reflect your information.</p>
                        </div>
                        <div class="feature-item">
                            <h4>Styling</h4>
                            <p>Adjust spacing, fonts, and layouts in CSS while maintaining responsive principles.</p>
                        </div>
                    </div>
                </section>

                <!-- Contact Information -->
                <section id="contact" class="section">
                    <h2><i class="fas fa-phone"></i> Contact Information</h2>
                    <div class="contact-info">
                        <h3>Get in Touch</h3>
                        <div class="contact-details">
                            <div class="contact-item">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>Block 8, Gaborone, Botswana</span>
                            </div>
                            <div class="contact-item">
                                <i class="fas fa-phone"></i>
                                <span>+267 76819115</span>
                            </div>
                            <div class="contact-item">
                                <i class="fas fa-envelope"></i>
                                <span>dferdrick10@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Footer -->
                <div style="text-align: center; margin-top: 3rem; padding-top: 2rem; border-top: 2px solid var(--border-color);">
                    <p style="color: var(--text-light); margin-bottom: 1rem;">
                        <strong>Built with ❤️ for wellness enthusiasts everywhere</strong>
                    </p>
                    <p style="color: var(--primary-color); font-weight: 600;">
                        AweSome - Your partner in wellness and habit tracking since 2025
                    </p>
                </div>
            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>AweSome</h3>
                    <p>Your partner in wellness and habit tracking since 2025.</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="workouts.html">Workouts</a></li>
                        <li><a href="wellness.html">Wellness</a></li>
                        <li><a href="tracking.html">Tracking</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Contact Us</h4>
                    <address>
                        <p>Block 8, Gaborone</p>
                        <p>Phone: +267 76819115</p>
                        <p>Email: dferdrick10@gmail.com</p>
                    </address>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 AweSome. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
