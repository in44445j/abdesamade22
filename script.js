window.onload = () => {
  setTimeout(() => {
    const intro = document.querySelector('.intro-overlay');
    if (intro) intro.classList.add('hide-intro');
    const fab = document.querySelector('.support-fab-container');
    if(fab) fab.style.display = "block";
  }, 1800);
};

document.addEventListener('DOMContentLoaded', function() {
  const fabBtn = document.getElementById('support-fab');
  const popup = document.getElementById('support-popup');
  const closeBtn = document.getElementById('support-close');
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

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.product-card').forEach((card, i) => {
    card.addEventListener('click', function(e) {
      if (e.target.classList.contains('btn')) return;
      window.location.href = 'product.html?id=' + (i + 1);
    });
  });
});
