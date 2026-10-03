// ==========================================================================
// Template Asociație Studențească - Scripturi Interactive & Umane
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------------------------------
     1. Meniu Mobil Responsive
     ------------------------------------------------------------------------ */
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('active');
      mobileToggle.classList.toggle('active');
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Închide meniul la click în afara lui
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target) && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ------------------------------------------------------------------------
     2. Animație Contoare Cifre Cheie (Pagina Acasă)
     ------------------------------------------------------------------------ */
  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length > 0) {
    let animated = false;

    const animateCounters = () => {
      statNumbers.forEach(stat => {
        const target = +stat.getAttribute('data-target');
        const duration = 1500;
        const startTime = performance.now();

        const updateCount = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          const currentVal = Math.floor(ease * target);

          stat.textContent = currentVal.toLocaleString('ro-RO');

          if (progress < 1) {
            requestAnimationFrame(updateCount);
          } else {
            stat.textContent = target.toLocaleString('ro-RO');
          }
        };

        requestAnimationFrame(updateCount);
      });
    };

    // Rulează contoarele când secțiunea devine vizibilă
    const statsContainer = document.querySelector('.stats-container');
    if (statsContainer) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !animated) {
            animateCounters();
            animated = true;
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });

      observer.observe(statsContainer);
    }
  }

  /* ------------------------------------------------------------------------
     3. Filtrare Proiecte (Pagina Proiecte & Evenimente)
     ------------------------------------------------------------------------ */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => {
          b.style.background = '#ffffff';
          b.style.color = 'var(--text-main)';
        });
        btn.style.background = 'var(--brand-primary)';
        btn.style.color = '#ffffff';

        const category = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
          const cardCat = card.getAttribute('data-category');
          if (category === 'all' || cardCat === category) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  /* ------------------------------------------------------------------------
     4. Acordeon Întrebări Frecvente (FAQ pe Pagina Contact)
     ------------------------------------------------------------------------ */
  const faqItems = document.querySelectorAll('.faq-item');
  if (faqItems.length > 0) {
    faqItems.forEach(item => {
      item.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        // Închide celelalte întrebări deschise
        faqItems.forEach(i => i.classList.remove('open'));
        if (!isOpen) {
          item.classList.add('open');
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     5. Trimitere Formular Recrutare Voluntari (Pagina Contact)
     ------------------------------------------------------------------------ */
  const recruitForm = document.getElementById('contactRecruitForm');
  const submitBtn = document.getElementById('submitFormBtn');
  const alertBox = document.getElementById('formSuccessAlert');

  if (recruitForm && submitBtn && alertBox) {
    recruitForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const originalHtml = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Se trimite...</span>`;

      // Simulare procesare formular
      setTimeout(() => {
        const studentName = document.getElementById('fullName').value;
        const deptSelect = document.getElementById('departmentChoice');
        const deptText = deptSelect.options[deptSelect.selectedIndex].text;

        alertBox.className = 'form-feedback success';
        alertBox.innerHTML = `
          🎉 <strong>Mulțumim, ${studentName}!</strong> Înscrierea ta pentru echipa de <em>${deptText}</em> a fost trimisă cu succes.<br>
          Un coleg de la Resurse Umane te va contacta pe WhatsApp în curând pentru pasul următor.
        `;

        recruitForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalHtml;

        setTimeout(() => {
          alertBox.style.display = 'none';
        }, 9000);
      }, 700);
    });
  }

});
