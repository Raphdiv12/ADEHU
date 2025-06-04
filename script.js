 document.addEventListener('DOMContentLoaded', function() {
            // Loader Animation
            const loader = document.querySelector('.loader');
            window.addEventListener('load', function() {
                setTimeout(function() {
                    loader.classList.add('hidden');
                }, 800);
            });

            // Navigation Menu Toggle
            const menuToggle = document.querySelector('.menu-toggle');
            const navLinks = document.querySelector('.nav-links');
            
            menuToggle.addEventListener('click', function() {
                navLinks.classList.toggle('active');
            });

            // Close menu when clicking outside
            document.addEventListener('click', function(e) {
                if (!e.target.closest('.nav') && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            });

            // Header scroll effect
            const header = document.querySelector('.header');
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            // Scroll Reveal Animation
            const sections = document.querySelectorAll('.section');
            
            const revealSection = function(entries, observer) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            };
            
            const sectionObserver = new IntersectionObserver(revealSection, {
                root: null,
                threshold: 0.15
            });
            
            sections.forEach(section => {
                sectionObserver.observe(section);
                section.classList.remove('visible');
            });

            // Portfolio Filtering
            const filterButtons = document.querySelectorAll('.portfolio-filter');
            const portfolioItems = document.querySelectorAll('.portfolio-item');
            
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    const filterValue = this.getAttribute('data-filter');
                    
                    portfolioItems.forEach(item => {
                        const itemCategory = item.getAttribute('data-category');
                        
                        if (filterValue === 'all' || filterValue === itemCategory) {
                            item.style.display = 'block';
                            setTimeout(() => {
                                item.style.opacity = '1';
                                item.style.transform = 'scale(1)';
                            }, 10);
                        } else {
                            item.style.opacity = '0';
                            item.style.transform = 'scale(0.8)';
                            setTimeout(() => {
                                item.style.display = 'none';
                            }, 300);
                        }
                    });
                });
            });

            // Collection Slider
            const sliderTrack = document.querySelector('.collection-track');
            const slides = document.querySelectorAll('.collection-item');
            const prevBtn = document.querySelector('.prev-btn');
            const nextBtn = document.querySelector('.next-btn');
            
            let slideWidth = slides[0].offsetWidth + 20; // Width + margin
            let slideIndex = 0;
            const slidesPerView = window.innerWidth < 768 ? 1 : window.innerWidth < 992 ? 2 : 3;
            const totalSlides = slides.length;
            
            // Update slide width on window resize
            window.addEventListener('resize', function() {
                slideWidth = slides[0].offsetWidth + 20;
                updateSliderPosition();
            });
            
            // Set initial track width
            sliderTrack.style.width = `${slideWidth * totalSlides}px`;
            
            // Previous button click
            prevBtn.addEventListener('click', function() {
                if (slideIndex > 0) {
                    slideIndex--;
                    updateSliderPosition();
                }
            });
            
            // Next button click
            nextBtn.addEventListener('click', function() {
                if (slideIndex < totalSlides - slidesPerView) {
                    slideIndex++;
                    updateSliderPosition();
                }
            });
            
            function updateSliderPosition() {
                sliderTrack.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
            }

            // Kinetic Typography
            const kineticText = document.querySelectorAll('.kinetic-text');
            
            if (kineticText.length > 0) {
                document.addEventListener('mousemove', function(e) {
                    const mouseX = e.clientX / window.innerWidth - 0.5;
                    const mouseY = e.clientY / window.innerHeight - 0.5;
                    
                    kineticText.forEach((letter, index) => {
                        const factor = index * 0.1;
                        letter.style.transform = `translate(${mouseX * 20 * factor}px, ${mouseY * 20 * factor}px)`;
                    });
                });
            }

            // Form Submission
            const contactForm = document.getElementById('contact-form');
            
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    const name = document.getElementById('name').value;
                    const email = document.getElementById('email').value;
                    const subject = document.getElementById('subject').value;
                    const message = document.getElementById('message').value;
                    
                    // Simple validation
                    if (!name || !email || !message) {
                        alert('Please fill in all required fields.');
                        return;
                    }
                    
                    // Simulate form submission
                    const submitBtn = contactForm.querySelector('button[type="submit"]');
                    submitBtn.disabled = true;
                    submitBtn.textContent = 'Sending...';
                    
                    setTimeout(function() {
                        alert('Thank you for your message! We will get back to you soon.');
                        contactForm.reset();
                        submitBtn.disabled = false;
                        submitBtn.textContent = 'Send Message';
                    }, 1500);
                });
            }

            // Blur Up Image Loading
            const blurImages = document.querySelectorAll('.blur-load');
            
            blurImages.forEach(container => {
                const img = container.querySelector('.full-image');
                
                function loaded() {
                    container.classList.add('loaded');
                }
                
                if (img.complete) {
                    loaded();
                } else {
                    img.addEventListener('load', loaded);
                }
            });
            
            // Hero Section Animation
            const heroTextContainer = document.querySelector('.hero-text-container');
            if (heroTextContainer) {
                // Add entrance animation
                setTimeout(() => {
                    heroTextContainer.style.opacity = '1';
                    heroTextContainer.style.transform = 'translateY(0)';
                }, 300);
            }

            // Parallax effect for hero background
            const heroBg = document.querySelector('.hero-bg');
            if (heroBg) {
                window.addEventListener('scroll', function() {
                    const scrollPosition = window.scrollY;
                    heroBg.style.transform = `translateY(${scrollPosition * 0.4}px)`;
                });
            }
        });