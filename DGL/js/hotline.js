(function () {
  var btn = document.querySelector('.hotline-float');
  if (!btn) return;
  window.addEventListener('scroll', function () {
    var dist = document.documentElement.scrollHeight - window.scrollY - window.innerHeight;
    btn.classList.toggle('near-footer', dist < 120);
  }, { passive: true });
})();
