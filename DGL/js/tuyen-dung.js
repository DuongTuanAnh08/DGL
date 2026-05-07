// Apply Modal
const modalOverlay = document.getElementById('modalOverlay');
const modalClose   = document.getElementById('modalClose');
const modalFormArea = document.getElementById('modalFormArea');
const modalSuccess  = document.getElementById('modalSuccess');
const contactForm   = document.getElementById('contactForm');
const submitBtn     = document.getElementById('submitBtn');
const positionSelect = document.getElementById('positionSelect');

function openModal(jobTitle) {
  modalFormArea.classList.remove('hide');
  modalSuccess.classList.remove('show');
  submitBtn.disabled = false;
  submitBtn.classList.remove('loading');
  submitBtn.textContent = 'Gửi hồ sơ ứng tuyển';
  if (jobTitle) positionSelect.value = jobTitle;
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.open-modal-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    openModal(btn.dataset.job || '');
  });
});
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// Form validation
function validate() {
  let ok = true;
  const nameEl  = document.getElementById('name');
  const phoneEl = document.getElementById('phone');
  const emailEl = document.getElementById('email');

  const setErr = (grpId, cond) => {
    document.getElementById(grpId).classList.toggle('has-error', cond);
    if (cond) ok = false;
  };
  setErr('grpName',  !nameEl.value.trim());
  setErr('grpPhone', !/^[0-9\s\+\-]{8,15}$/.test(phoneEl.value.trim()));
  setErr('grpEmail', !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value.trim()));
  return ok;
}

// Form submit
submitBtn.addEventListener('click', async () => {
  if (!validate()) return;
  submitBtn.classList.add('loading');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Đang gửi...';
  const data = new FormData(contactForm);
  try {
    const res = await fetch('https://formsubmit.co/ajax/hann86@gmail.com', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: data
    });
    if (res.ok) {
      modalFormArea.classList.add('hide');
      modalSuccess.classList.add('show');
    } else { throw new Error('fail'); }
  } catch {
    contactForm.submit();
  }
});

// Click anywhere on job card → open modal with that position
document.querySelectorAll('.job-card').forEach(card => {
  card.style.cursor = 'pointer';
  card.addEventListener('click', e => {
    if (e.target.closest('.show-hotline-btn')) return;
    const jobTitle = card.querySelector('.job-title')?.textContent.trim() || '';
    openModal(jobTitle);
  });
});

// Hotline popup
(function () {
  function openPopup()  { document.getElementById('hotlinePopup').classList.add('open'); }
  function closePopup() { document.getElementById('hotlinePopup').classList.remove('open'); }
  document.querySelectorAll('.show-hotline-btn').forEach(btn => btn.addEventListener('click', openPopup));
  document.getElementById('hotlineClose').addEventListener('click', closePopup);
  document.getElementById('hotlineOverlay').addEventListener('click', closePopup);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closePopup(); });
})();
