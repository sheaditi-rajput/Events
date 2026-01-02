// Mobile navigation toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
if (toggle && nav) toggle.addEventListener('click', () => nav.classList.toggle('open'));

// Smooth nav active switch + scroll
document.querySelectorAll('.site-nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      document.querySelectorAll('.site-nav a').forEach(a => a.classList.remove('active'));
      link.classList.add('active');
      nav.classList.remove('open');
    }
  });
});

// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();

// Frontend booking storage and share links
const PAYMENT_LINK_URL = 'https://razorpay.com/payment-link/your-link-here'; // TODO: paste your payment link
const businessPhone = '9717747917';
const businessEmail = 'khushalpratap655@gmail.com';

const form = document.getElementById('booking-form');
const confirmBox = document.getElementById('confirm');
const payLink = document.getElementById('pay-link');
const shareWhatsAppBtn = document.getElementById('share-whatsapp');
const shareEmailBtn = document.getElementById('share-email');

// Initialize pay link
if (payLink) {
  payLink.href = PAYMENT_LINK_URL;
}

function formatBooking(details) {
  return [
    `New Booking - Aditi Events`,
    `Name: ${details.name}`,
    `Email: ${details.email}`,
    `Phone: ${details.phone}`,
    `Event: ${details.eventType}`,
    `Date & Time: ${details.datetime}`,
    `Location: ${details.location}`,
    `Amount (INR): ${details.amount || '—'}`,
    `Requests: ${details.requests || '—'}`
  ].join('\n');
}

function saveBooking(details) {
  const existing = JSON.parse(localStorage.getItem('aditi_bookings') || '[]');
  existing.push({ ...details, createdAt: new Date().toISOString() });
  localStorage.setItem('aditi_bookings', JSON.stringify(existing));
}

form?.addEventListener('submit', (e) => {
  e.preventDefault();

  const details = {
    name: document.getElementById('name').value.trim(),
    email: document.getElementById('email').value.trim(),
    phone: document.getElementById('phone').value.trim(),
    eventType: document.getElementById('eventType').value,
    datetime: document.getElementById('datetime').value,
    location: document.getElementById('location').value.trim(),
    requests: document.getElementById('requests').value.trim(),
    amount: document.getElementById('amount').value.trim()
  };

  // Basic validation
  if (!details.name || !details.email || !details.phone || !details.eventType || !details.datetime || !details.location) {
    alert('Please fill all required fields.');
    return;
  }

  saveBooking(details);

  const message = formatBooking(details)
    .replace(/\n/g, '<br/>');

  confirmBox.classList.remove('hidden');
  confirmBox.innerHTML = `
    <strong>Booking saved (locally):</strong><br/>
    ${message}<br/><br/>
    <a class="btn accent" href="${PAYMENT_LINK_URL}" target="_blank" rel="noopener">Pay now</a>
  `;

  // Optionally scroll to confirmation
  confirmBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Share via WhatsApp
shareWhatsAppBtn?.addEventListener('click', () => {
  const bookings = JSON.parse(localStorage.getItem('aditi_bookings') || '[]');
  const latest = bookings[bookings.length - 1];
  if (!latest) return alert('No booking found. Please submit the form first.');

  const text = encodeURIComponent(formatBooking(latest));
  // Direct chat link (user will choose contact inside WhatsApp)
  const url = `https://wa.me/${businessPhone}?text=${text}`;
  window.open(url, '_blank', 'noopener');
});

// Share via Email
shareEmailBtn?.addEventListener('click', () => {
  const bookings = JSON.parse(localStorage.getItem('aditi_bookings') || '[]');
  const latest = bookings[bookings.length - 1];
  if (!latest) return alert('No booking found. Please submit the form first.');

  const subject = encodeURIComponent('New Booking - Aditi Events');
  const body = encodeURIComponent(formatBooking(latest));
  const mailto = `mailto:${businessEmail}?subject=${subject}&body=${body}`;
  window.location.href = mailto;
});
