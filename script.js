/* CSS Variables for consistent theming */
:root {
    --primary: #2ecc71;
    --secondary: #3498db;
    --accent: #e74c3c;
    --dark: #2c3e50;
    --light: #ecf0f1;
    --gray: #95a5a6;
    --light-gray: #f5f7fa;
    --transition: all 0.3s ease;
    --shadow: 0 4px 6px rgba(0,0,0,0.1);
    --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
    --radius: 8px;
}

/* Global Reset and Typography */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--dark);
    background-color: #f9f9f9;
}

h1, h2, h3, h4 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
}

h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.5rem; }

p {
    margin-bottom: 1rem;
    color: #555;
}

a {
    text-decoration: none;
    color: var(--secondary);
    transition: var(--transition);
}

a:hover {
    color: var(--primary);
}

img {
    max-width: 100%;
    height: auto;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}

.btn {
    display: inline-block;
    padding: 12px 28px;
    background-color: var(--primary);
    color: white;
    border-radius: var(--radius);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: var(--transition);
    border: none;
    cursor: pointer;
    font-size: 0.9rem;
}

.btn:hover {
    background-color: #27ae60;
    transform: translateY(-3px);
    box-shadow: var(--shadow);
}

.btn-secondary {
    background-color: var(--secondary);
}

.btn-secondary:hover {
    background-color: #2980b9;
}

.text-center {
    text-align: center;
}

.section {
    padding: 80px 0;
}

.section-title {
    position: relative;
    margin-bottom: 50px;
    text-align: center;
}

.section-title p {
    max-width: 700px;
    margin: 0 auto;
    color: var(--gray);
}

.section-title::after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background-color: var(--primary);
}

/* Header Styles */
header {
    background-color: white;
    box-shadow: var(--shadow);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
}

.logo {
    display: flex;
    align-items: center;
}

.logo h1 {
    font-size: 1.8rem;
    margin: 0;
    color: var(--dark);
}

.logo span {
    color: var(--primary);
}

nav ul {
    display: flex;
    list-style: none;
}

nav ul li {
    margin-left: 25px;
}

nav ul li a {
    font-weight: 600;
    color: var(--dark);
    position: relative;
}

nav ul li a.active, nav ul li a:hover {
    color: var(--primary);
}

nav ul li a.active::after, nav ul li a:hover::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: var(--primary);
}

.mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--dark);
}

/* Hero Section */
.hero {
    background: linear-gradient(rgba(44, 62, 80, 0.8), rgba(44, 62, 80, 0.8)), url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
    background-size: cover;
    background-position: center;
    color: white;
    padding: 120px 0;
    text-align: center;
}

.hero.about-hero {
    background-image: linear-gradient(rgba(44, 62, 80, 0.8), rgba(44, 62, 80, 0.8)), url('https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
}

.hero.services-hero {
    background-image: linear-gradient(rgba(44, 62, 80, 0.8), rgba(44, 62, 80, 0.8)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
}

.hero.blog-hero {
    background-image: linear-gradient(rgba(44, 62, 80, 0.8), rgba(44, 62, 80, 0.8)), url('https://images.unsplash.com/photo-1549060279-7e168fce7090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
}

.hero.contact-hero {
    background-image: linear-gradient(rgba(44, 62, 80, 0.8), rgba(44, 62, 80, 0.8)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
}

.hero h2 {
    font-size: 3rem;
    margin-bottom: 20px;
}

.hero p {
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto 30px;
    color: rgba(255,255,255,0.9);
}

.hero-btns {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

/* Features Section */
.features {
    background-color: white;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 40px;
}

.feature-card {
    background-color: var(--light);
    border-radius: var(--radius);
    padding: 30px;
    text-align: center;
    transition: var(--transition);
    opacity: 0;
    transform: translateY(20px);
}

.feature-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow);
}

.feature-icon {
    font-size: 3rem;
    color: var(--primary);
    margin-bottom: 20px;
}

/* Programs Section */
.programs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.program-card {
    background-color: white;
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: var(--transition);
    opacity: 0;
    transform: translateY(20px);
}

.program-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
}

.program-img {
    height: 200px;
    overflow: hidden;
}

.program-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
}

.program-card:hover .program-img img {
    transform: scale(1.1);
}

.program-content {
    padding: 25px;
}

.program-content h3 {
    color: var(--dark);
}

/* Testimonials */
.testimonials {
    background-color: var(--light);
}

.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.testimonial-card {
    background-color: white;
    padding: 30px;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    position: relative;
    opacity: 0;
    transform: translateY(20px);
}

.testimonial-card::before {
    content: """;
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 5rem;
    color: var(--primary);
    opacity: 0.2;
    font-family: Georgia, serif;
}

.testimonial-content {
    margin-bottom: 20px;
    font-style: italic;
    position: relative;
    z-index: 1;
}

.testimonial-author {
    display: flex;
    align-items: center;
}

.author-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 15px;
}

.author-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.author-info h4 {
    margin: 0;
}

.author-info p {
    margin: 0;
    color: var(--gray);
    font-size: 0.9rem;
}

/* Contact Section */
.contact {
    background-color: var(--light);
}

.contact-form {
    background-color: white;
    padding: 40px;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    max-width: 800px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
}

.form-control {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: var(--radius);
    font-size: 1rem;
    transition: var(--transition);
}

.form-control:focus {
    border-color: var(--primary);
    outline: none;
    box-shadow: 0 0 0 3px rgba(46, 204, 113, 0.2);
}

textarea.form-control {
    min-height: 150px;
    resize: vertical;
}

/* Footer */
footer {
    background-color: var(--dark);
    color: white;
    padding: 60px 0 20px;
}

.footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    margin-bottom: 40px;
}

.footer-col h3 {
    color: white;
    position: relative;
    padding-bottom: 15px;
    margin-bottom: 20px;
}

.footer-col h3::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: var(--primary);
}

.footer-links {
    list-style: none;
}

.footer-links li {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
}

.footer-links li i {
    margin-right: 10px;
    width: 20px;
    color: var(--primary);
}

.footer-links a {
    color: var(--gray);
}

.footer-links a:hover {
    color: var(--primary);
    padding-left: 5px;
}

.social-links {
    display: flex;
    gap: 15px;
    margin-top: 20px;
}

.social-links a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: rgba(255,255,255,0.1);
    border-radius: 50%;
    color: white;
    transition: var(--transition);
}

.social-links a:hover {
    background-color: var(--primary);
    transform: translateY(-5px);
}

.copyright {
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid rgba(255,255,255,0.1);
    color: var(--gray);
    font-size: 0.9rem;
}

/* Mobile Navigation */
@media (max-width: 768px) {
    .mobile-menu-btn {
        display: block;
    }
    
    nav {
        position: fixed;
        top: 90px;
        left: -100%;
        width: 80%;
        height: calc(100vh - 90px);
        background-color: white;
        transition: var(--transition);
        box-shadow: var(--shadow);
        z-index: 999;
        padding-top: 20px;
    }
    
    nav.active {
        left: 0;
    }
    
    nav ul {
        flex-direction: column;
        padding: 20px;
    }
    
    nav ul li {
        margin: 0 0 15px 0;
    }
    
    .hero h2 {
        font-size: 2.2rem;
    }
    
    .section {
        padding: 60px 0;
    }
    
    .hero-btns {
        flex-direction: column;
        align-items: center;
    }
}

/* Animation */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.animated {
    animation: fadeIn 0.8s ease forwards;
}

/* About Page Styles */
.about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
}

.about-img img {
    border-radius: var(--radius);
    box-shadow: var(--shadow);
}

.values-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-top: 40px;
}

.value-card {
    background-color: white;
    padding: 30px;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    text-align: center;
    transition: var(--transition);
}

.value-card:hover {
    transform: translateY(-10px);
}

.value-icon {
    font-size: 2.5rem;
    color: var(--primary);
    margin-bottom: 20px;
}

.team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
}

.team-card {
    background-color: white;
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: var(--transition);
}

.team-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
}

.team-img {
    height: 300px;
}

.team-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.team-info {
    padding: 20px;
    text-align: center;
}

.team-info p {
    margin: 5px 0;
    font-size: 0.9rem;
}

/* Services Page Styles */
.services-tabs {
    margin-top: 30px;
}

.tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 30px;
}

.tab-btn {
    padding: 12px 24px;
    background-color: var(--light);
    border: none;
    border-radius: var(--radius);
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
}

.tab-btn.active, .tab-btn:hover {
    background-color: var(--primary);
    color: white;
}

.tab-content {
    display: none;
}

.tab-content.active {
    display: block;
}

.service-detail {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
}

.service-img img {
    border-radius: var(--radius);
    box-shadow: var(--shadow);
}

.service-info ul {
    list-style: none;
    margin: 20px 0;
}

.service-info ul li {
    margin-bottom: 10px;
    display: flex;
    align-items: flex-start;
}

.service-info ul li i {
    color: var(--primary);
    margin-right: 10px;
    margin-top: 5px;
}

.pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 40px;
}

.pricing-card {
    background-color: white;
    padding: 40px 30px;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    text-align: center;
    position: relative;
    transition: var(--transition);
}

.pricing-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
}

.pricing-card.popular {
    border: 2px solid var(--primary);
    transform: scale(1.05);
}

.pricing-card.popular:hover {
    transform: scale(1.05) translateY(-10px);
}

.popular-tag {
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--primary);
    color: white;
    padding: 5px 20px;
    border-radius: 30px;
    font-size: 0.8rem;
    font-weight: 600;
}

.price {
    font-size: 3rem;
    font-weight: 700;
    color: var(--dark);
    margin: 20px 0;
}

.price span {
    font-size: 1rem;
    color: var(--gray);
}

.pricing-card ul {
    list-style: none;
    margin: 30px 0;
    text-align: left;
}

.pricing-card ul li {
    margin-bottom: 15px;
    display: flex;
    align-items: center;
}

.pricing-card ul li i {
    margin-right: 10px;
    width: 20px;
}

.pricing-card ul li i.fa-check {
    color: var(--primary);
}

.pricing-card ul li i.fa-times {
    color: var(--gray);
}

/* Blog Page Styles */
.blog-container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 40px;
}

.featured-post {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-bottom: 50px;
    align-items: center;
}

.post-img {
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow);
}

.post-img img {
    transition: var(--transition);
}

.featured-post:hover .post-img img {
    transform: scale(1.05);
}

.post-category {
    display: inline-block;
    background-color: var(--primary);
    color: white;
    padding: 5px 15px;
    border-radius: 30px;
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 15px;
}

.post-meta {
    display: flex;
    gap: 20px;
    margin: 15px 0;
    font-size: 0.9rem;
    color: var(--gray);
}

.post-meta span {
    display: flex;
    align-items: center;
}

.post-meta i {
    margin-right: 5px;
}

.blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-bottom: 40px;
}

.blog-card {
    background-color: white;
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: var(--transition);
}

.blog-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
}

.blog-card .post-img {
    height: 200px;
}

.blog-card .post-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.blog-card .post-content {
    padding: 25px;
}

.read-more {
    display: inline-flex;
    align-items: center;
    color: var(--primary);
    font-weight: 600;
    margin-top: 15px;
}

.read-more i {
    margin-left: 5px;
    transition: var(--transition);
}

.read-more:hover i {
    transform: translateX(5px);
}

.pagination {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 30px;
}

.page-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--light);
    color: var(--dark);
    font-weight: 600;
    transition: var(--transition);
}

.page-btn.active, .page-btn:hover {
    background-color: var(--primary);
    color: white;
}

.page-btn.next {
    width: auto;
    padding: 0 20px;
    border-radius: 30px;
}

.blog-sidebar {
    position: sticky;
    top: 100px;
}

.sidebar-widget {
    background-color: white;
    padding: 30px;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    margin-bottom: 30px;
}

.search-box {
    display: flex;
}

.search-box input {
    flex: 1;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: var(--radius) 0 0 var(--radius);
    border-right: none;
}

.search-box button {
    background-color: var(--primary);
    color: white;
    border: none;
    padding: 0 20px;
    border-radius: 0 var(--radius) var(--radius) 0;
    cursor: pointer;
}

.categories {
    list-style: none;
}

.categories li {
    margin-bottom: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid #eee;
}

.categories li:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
}

.categories a {
    display: flex;
    justify-content: space-between;
    color: var(--dark);
    font-weight: 500;
}

.categories a:hover {
    color: var(--primary);
}

.categories span {
    background-color: var(--light);
    padding: 2px 10px;
    border-radius: 30px;
    font-size: 0.8rem;
}

.popular-post {
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
    align-items: center;
}

.popular-post:last-child {
    margin-bottom: 0;
}

.popular-post .post-img {
    width: 80px;
    height: 80px;
    border-radius: var(--radius);
    overflow: hidden;
    flex-shrink: 0;
}

.popular-post .post-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.popular-post .post-content h4 {
    font-size: 1rem;
    margin-bottom: 5px;
}

.popular-post .post-content span {
    font-size: 0.8rem;
    color: var(--gray);
}

.subscribe-form input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: var(--radius);
    margin-bottom: 10px;
}

/* Contact Page Styles */
.contact-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
}

.contact-info .section-title {
    text-align: left;
}

.contact-info .section-title::after {
    left: 0;
    transform: none;
}

.info-card {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
    align-items: flex-start;
}

.info-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background-color: rgba(46, 204, 113, 0.1);
    color: var(--primary);
    border-radius: 50%;
    font-size: 1.5rem;
    flex-shrink: 0;
}

.info-content h3 {
    margin-bottom: 10px;
}

.info-content p {
    margin-bottom: 5px;
}

.map {
    margin-top: 30px;
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow);
}

.faq-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 20px;
    margin-top: 40px;
}

.faq-card {
    background-color: white;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    overflow: hidden;
}

.faq-question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    cursor: pointer;
    background-color: var(--light);
}

.faq-question h3 {
    margin: 0;
    font-size: 1.1rem;
}

.faq-question i {
    transition: var(--transition);
}

.faq-card.active .faq-question i {
    transform: rotate(45deg);
}

.faq-answer {
    padding: 0 20px;
    max-height: 0;
    overflow: hidden;
    transition: var(--transition);
}

.faq-card.active .faq-answer {
    padding: 0 20px 20px;
    max-height: 500px;
}

.checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
}

.checkbox input {
    width: 18px;
    height: 18px;
}

/* Responsive Adjustments */
@media (max-width: 992px) {
    .about-grid,
    .service-detail,
    .contact-container {
        grid-template-columns: 1fr;
    }
    
    .blog-container {
        grid-template-columns: 1fr;
    }
    
    .featured-post {
        grid-template-columns: 1fr;
    }
    
    .service-detail {
        gap: 30px;
    }
    
    .contact-info {
        order: 2;
    }
    
    .contact-form {
        order: 1;
    }
}

@media (max-width: 576px) {
    .pricing-grid {
        grid-template-columns: 1fr;
    }
    
    .pricing-card.popular {
        transform: scale(1);
    }
    
    .pricing-card.popular:hover {
        transform: scale(1) translateY(-10px);
    }
}
