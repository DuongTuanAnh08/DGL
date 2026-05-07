// Counter animation
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const suffix = el.dataset.suffix || '+';
  let start = 0;
  const duration = 1800;
  const step = 16;
  const increment = target / (duration / step);
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      el.textContent = target + suffix;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(start) + suffix;
    }
  }, step);
}

const statsSection = document.getElementById('stats');
let countersDone = false;
const statsIO = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !countersDone) {
    countersDone = true;
    document.querySelectorAll('.stat-number[data-target]').forEach(el => animateCounter(el));
  }
}, { threshold: 0.5 });
statsIO.observe(statsSection);

// Back to top
const backTop = document.getElementById('back-top');
window.addEventListener('scroll', () => {
  backTop.classList.toggle('show', window.scrollY > 400);
}, { passive: true });
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Contact Modal
const modal = document.getElementById('contactModal');
const modalClose = document.getElementById('modalClose');
const submitBtn = document.getElementById('submitBtn');
const contactForm = document.getElementById('contactForm');
const modalSuccess = document.getElementById('modalSuccess');
const modalFormArea = document.querySelector('.modal-form-area');

function openModal() {
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  contactForm.reset();
  modalSuccess.classList.remove('show');
  modalFormArea.classList.remove('hide');
  submitBtn.classList.remove('loading');
  submitBtn.disabled = false;
  document.querySelectorAll('.field-error').forEach(e => e.classList.remove('show'));
  document.querySelectorAll('.form-group input, .form-group textarea').forEach(el => el.classList.remove('error'));
  setTimeout(() => document.getElementById('contactName').focus(), 350);
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('a[href="#cta-banner"], a[href="mailto:contact@dgglobal.vn"], .nav-actions .btn-primary, .drawer-cta, a[data-i18n="ai_demo"]').forEach(btn => {
  btn.addEventListener('click', e => { e.preventDefault(); openModal(); });
});

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
});

// Form validation
function validate() {
  let ok = true;
  const name  = document.getElementById('contactName');
  const phone = document.getElementById('contactPhone');
  const email = document.getElementById('contactEmail');
  const msg   = document.getElementById('contactMessage');

  const setErr = (el, errId, cond) => {
    const errEl = document.getElementById(errId);
    if (cond) { el.classList.add('error'); errEl.classList.add('show'); ok = false; }
    else       { el.classList.remove('error'); errEl.classList.remove('show'); }
  };

  setErr(name,  'errName',    name.value.trim().length < 2);
  setErr(phone, 'errPhone',   !/^[0-9\s\+\-]{8,15}$/.test(phone.value.trim()));
  setErr(email, 'errEmail',   !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()));
  setErr(msg,   'errMessage', msg.value.trim().length < 5);
  return ok;
}

['contactName','contactPhone','contactEmail','contactMessage'].forEach(id => {
  const el = document.getElementById(id);
  const errMap = { contactName:'errName', contactPhone:'errPhone', contactEmail:'errEmail', contactMessage:'errMessage' };
  el.addEventListener('input', () => {
    el.classList.remove('error');
    document.getElementById(errMap[id]).classList.remove('show');
  });
});

// Form submit
submitBtn.addEventListener('click', async () => {
  if (!validate()) return;
  submitBtn.classList.add('loading');
  submitBtn.disabled = true;
  const data = new FormData(contactForm);
  try {
    const res  = await fetch('https://formsubmit.co/ajax/hann86@gmail.com', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: data
    });
    const json = await res.json();
    if (json.success === 'true' || json.success === true || res.ok) {
      modalFormArea.classList.add('hide');
      modalSuccess.classList.add('show');
    } else { throw new Error('Server error'); }
  } catch {
    contactForm.submit();
  }
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) current = s.id; });
  navLinks.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) a.classList.add('active');
  });
}, { passive: true });
