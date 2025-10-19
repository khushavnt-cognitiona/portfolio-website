/**
 * Main JavaScript file for the portfolio website
 */

// DOM Elements
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

// Mobile menu toggle functionality
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', 
      menuToggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
    );
  });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (navMenu && navMenu.classList.contains('active') && 
      !e.target.closest('.navbar') && !e.target.closest('.menu-toggle')) {
    navMenu.classList.remove('active');
    if (menuToggle) {
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  }
});

// Skill progress animation with counter
const animateProgressBars = () => {
  const progressBars = document.querySelectorAll('.progress-bar');
  
  progressBars.forEach(bar => {
    const targetWidth = bar.getAttribute('data-width');
    bar.style.width = '0%';
    
    setTimeout(() => {
      bar.style.width = targetWidth + '%';
      
      // Add counter animation if percentage element exists
      const percentageElement = bar.parentElement.querySelector('.progress-percentage');
      if (percentageElement) {
        animateCounter(0, parseInt(targetWidth), percentageElement);
      }
    }, 200);
  });
};

// Counter animation function
function animateCounter(start, end, element, duration = 1000) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = Math.floor(progress * (end - start) + start);
    element.textContent = `${value}%`;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// Animate progress bars when they come into view
const handleIntersection = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateProgressBars();
      observer.unobserve(entry.target);
    }
  });
};

// Set up Intersection Observer for skills section
document.addEventListener('DOMContentLoaded', () => {
  const skillsSection = document.querySelector('.skills-section');
  
  if (skillsSection) {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1
    });
    
    observer.observe(skillsSection);
  } else {
    // If skills section exists on page load, animate immediately
    const progressBars = document.querySelectorAll('.progress-bar');
    if (progressBars.length > 0) {
      animateProgressBars();
    }
  }
  
  // Add active class to current page in navigation
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || 
        (currentPage === '' && href === 'index.html') || 
        (currentPage === '/' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
  
  // Enhanced form validation for contact form with real-time feedback
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    // Add input event listeners for real-time validation
    const formInputs = contactForm.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
      input.addEventListener('input', function() {
        validateInput(this);
      });
      
      input.addEventListener('blur', function() {
        validateInput(this, true);
      });
    });
    
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Enhanced form validation
      let valid = true;
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      const formStatus = document.getElementById('form-status');
      
      // Reset previous error states
      [name, email, message].forEach(field => {
        field.classList.remove('error');
      });
      
      // Validate all fields with visual feedback
      if (!validateInput(name, true)) valid = false;
      if (!validateInput(email, true)) valid = false;
      if (!validateInput(message, true)) valid = false;
      
      if (valid) {
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Submit';
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        }
        
        // In a real application, you would send the form data to a server here
        formStatus.innerHTML = '<div class="success-message"><i class="fas fa-check-circle"></i> Message sent successfully!</div>';
        formStatus.className = 'success-message';
        contactForm.reset();
        
        // Reset button state
        if (submitBtn) {
          setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
          }, 1000);
        }
        
        // Hide success message after 3 seconds
        setTimeout(() => {
          formStatus.textContent = '';
          formStatus.className = '';
        }, 3000);
      } else {
        formStatus.textContent = 'Please fill all required fields correctly.';
        formStatus.className = 'error-message';
      }
    });
  }
  
  // Input validation function
  function validateInput(input, showMessage = false) {
    let isValid = true;
    const errorElement = input.nextElementSibling?.classList.contains('error-text') 
      ? input.nextElementSibling 
      : null;
    
    // Remove existing error message if any
    if (errorElement) {
      errorElement.remove();
    }
    
    // Validate based on input type
    if (input.value.trim() === '') {
      isValid = false;
      input.classList.add('error');
      if (showMessage) {
        const errorMsg = document.createElement('div');
        errorMsg.className = 'error-text text-danger small mt-1';
        errorMsg.textContent = `${input.placeholder || 'This field'} is required`;
        input.parentNode.insertBefore(errorMsg, input.nextSibling);
      }
    } else if (input.type === 'email' && !isValidEmail(input.value)) {
      isValid = false;
      input.classList.add('error');
      if (showMessage) {
        const errorMsg = document.createElement('div');
        errorMsg.className = 'error-text text-danger small mt-1';
        errorMsg.textContent = 'Please enter a valid email address';
        input.parentNode.insertBefore(errorMsg, input.nextSibling);
      }
    } else {
      input.classList.remove('error');
    }
    
    return isValid;
  }
  
  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});

// Theme toggle functionality (light/dark mode) with animation
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  // Check for saved theme preference or respect OS preference
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
    document.body.classList.add('dark-theme');
    themeToggle.checked = true;
  }
  
  themeToggle.addEventListener('change', function() {
    // Add transition class for smooth theme change
    document.body.classList.add('theme-transition');
    
    if (this.checked) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
    
    // Remove transition class after animation completes
    setTimeout(() => {
      document.body.classList.remove('theme-transition');
    }, 500);
  });
}

// Animate elements on scroll
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  if (animatedElements.length > 0) {
    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          scrollObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => {
      scrollObserver.observe(element);
    });
  }
});

// Lazy loading for images
if ('loading' in HTMLImageElement.prototype) {
  // Browser supports native lazy loading
  const lazyImages = document.querySelectorAll('img[data-src]');
  lazyImages.forEach(img => {
    img.src = img.dataset.src;
    img.classList.add('loaded');
  });
} else {
  // Fallback for browsers that don't support native lazy loading
  document.addEventListener('DOMContentLoaded', () => {
    const lazyImageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.add('loaded');
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(image => {
      lazyImageObserver.observe(image);
    });
  });
}