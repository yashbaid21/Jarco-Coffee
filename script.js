const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Toast Notification
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.style.opacity = 1;
  setTimeout(() => { toast.style.opacity = 0; }, 3000);
}

// Order Form
document.getElementById("orderForm").addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("name").value;
  const coffee = document.getElementById("coffee").value;
  showToast(`Thank you ${name}! Your ${coffee} is confirmed.`);
  this.reset();
});

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  showToast("Thank you! Your message has been sent.");
  this.reset();
});

// Toast function
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => document.body.removeChild(toast), 300);
    }, 5000); // display for 5 seconds
}

// Handle Order Form Submission
const orderForm = document.getElementById('orderForm');

orderForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value || 'No Name';
    const coffee = document.getElementById('coffee').value || 'Not Selected';
    const size = document.getElementById('size').value || 'Not Selected';
    const sugar = document.getElementById('sugar').value || 'Not Selected';
    const milk = document.getElementById('milk').value || 'No Preference';
    const instructions = document.getElementById('instructions').value || 'None';

    // Show toast
    showToast(message);

    // Reset form
    orderForm.reset();
});

// ---------- TOAST FUNCTION ----------
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

// ---------- ORDER FORM ----------
orderForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('orderName').value;
  const coffee = document.getElementById('orderCoffee').value;
  const size = document.getElementById('orderSize').value;
  const sugar = document.getElementById('orderSugar').value;
  const milk = document.getElementById('orderMilk').value || 'No Milk';

  const orderDetails = `Order Confirmed! ☕
Name: ${name}
Coffee: ${coffee}
Size: ${size}
Sugar: ${sugar}
Milk: ${milk}`;

  showToast(orderDetails);
  orderForm.reset();
});

// ---------- CONTACT FORM ----------
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const contactName = document.getElementById('contactName').value;
  showToast(`Thank you, ${contactName}! Your message has been sent.`);
  contactForm.reset();
});

// ---------- AOS INIT ----------
AOS.init();

// Contact Image Slider
const slides = document.querySelectorAll('.contact-slider .slide');
const prevBtn = document.querySelector('.contact-slider .prev');
const nextBtn = document.querySelector('.contact-slider .next');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
  showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
  showSlide(currentSlide);
});

// Auto slide every 5 seconds (optional)
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000);
