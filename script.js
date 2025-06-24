// إخفاء الانترو وإظهار زر الدعم بعد انتهاء الانترو
window.onload = () => {
  setTimeout(() => {
    const intro = document.querySelector('.intro-overlay');
    if (intro) intro.classList.add('hide-intro');
    // إظهار زر الدعم الفني
    const fab = document.querySelector('.support-fab-container');
    if(fab) fab.style.display = "block";
  }, 1800);
};

// زر الدعم الفني (فتح/إغلاق)
document.addEventListener('DOMContentLoaded', function() {
  const fabBtn = document.getElementById('support-fab');
  const popup = document.getElementById('support-popup');
  const closeBtn = document.getElementById('support-close');
  // الزر مخفي في البداية حتى انتهاء الانترو
  const fabContainer = document.querySelector('.support-fab-container');
  if(fabContainer) fabContainer.style.display = "none";
  if(fabBtn && popup && closeBtn){
    fabBtn.onclick = () => {
      popup.style.display = 'flex';
      fabBtn.style.display = 'none';
    };
    closeBtn.onclick = () => {
      popup.style.display = 'none';
      fabBtn.style.display = 'flex';
    };
  }
});

// كود البحث عن المنتجات (يبقى كما هو)
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const value = this.value.toLowerCase();
      document.querySelectorAll('.product-card').forEach(card => {
        let title = card.querySelector('h3').textContent.toLowerCase();
        let desc = card.querySelector('p').textContent.toLowerCase();
        if (title.includes(value) || desc.includes(value)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
});


