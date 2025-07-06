// carousel-sc image carousel
document.addEventListener('DOMContentLoaded', () => {
  const coverImages = [
    'assets/library-carousel/neat-login-page_homePage.png',
    'assets/library-carousel/neat-login-page_mockCatalog.png',
    'assets/library-carousel/neat-login-page_newLoginForm.png'
  ];

  let currentIndex = 0;

  const mainImage = document.getElementById('mainImage');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const radios = document.querySelectorAll('.radio-input input[type="radio"]');
  
  function updateImage(index) {
    currentIndex = index;
    
    // current image fades-out
    mainImage.classList.add('fade-out');

    // wait for fade-out to finish before changing src
    setTimeout(() => {
      mainImage.src = coverImages[currentIndex];
      mainImage.classList.remove('fade-out');
    }, 300);

    // update radio buttons
    radios.forEach((radio, i) => {
      radio.checked = (i === currentIndex);
    });
  }

  prevBtn.addEventListener('click', () => {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) newIndex = coverImages.length - 1;
    updateImage(newIndex);
  });

  nextBtn.addEventListener('click', () => {
    let newIndex = currentIndex + 1;
    if (newIndex >= coverImages.length) newIndex = 0;
    updateImage(newIndex);
  });

  // clicking a radio button changes the image
  radios.forEach((radio, i) => {
    radio.addEventListener('click', () => {
      updateImage(i);
    });
  });

  // initial sync
  updateImage(currentIndex);

   // Scrollspy Progress Bar
    function updateScrollProgress() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;
      
      document.querySelector('.scrollspy-progress-bar').style.width = scrollPercent + '%';
    }

    window.addEventListener('scroll', updateScrollProgress);

    // Section Navigation
    const sectionNav = document.getElementById('section-nav');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.section-nav a');

    function updateSectionNav() {
      const scrollPosition = window.scrollY + 200;
      
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach(link => link.classList.remove('active'));
          document.querySelector(`.section-nav a[href="#${sectionId}"]`).classList.add('active');
        }
      });
    }

    // Show/hide section navigation on scroll
    function toggleSectionNav() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 300) {
        sectionNav.classList.add('show');
      } else {
        sectionNav.classList.remove('show');
      }
    }

    window.addEventListener('scroll', () => {
      updateSectionNav();
      toggleSectionNav();
    });

    // Smooth scrolling for section navigation
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });
});