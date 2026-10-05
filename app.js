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
          if (category === 'all' || (cardCat && cardCat.includes(category))) {
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
     5. Trimitere Formular de Contact (Pagina Contact)
     ------------------------------------------------------------------------ */
  const contactForm = document.getElementById('contactRecruitForm') || document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitFormBtn');
  const alertBox = document.getElementById('formSuccessAlert');

  if (contactForm && submitBtn && alertBox) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const originalHtml = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Se trimite...</span>`;

      // Simulare procesare formular
      setTimeout(() => {
        const senderName = document.getElementById('fullName').value;
        const deptSelect = document.getElementById('departmentChoice');
        const deptText = deptSelect ? deptSelect.options[deptSelect.selectedIndex].text : 'ASMO Oradea';

        alertBox.className = 'form-feedback success';
        alertBox.innerHTML = `
          <strong>Mulțumim, ${senderName}!</strong> Mesajul tău privind <em>${deptText}</em> a fost trimis cu succes către echipa ASMO Oradea.<br>
          Îți vom răspunde în cel mai scurt timp pe email sau telefon!
        `;

        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalHtml;

        setTimeout(() => {
          alertBox.style.display = 'none';
        }, 9000);
      }, 700);
    });
  }

  /* ------------------------------------------------------------------------
     6. Filtrare Tab-uri Echipa ASMO (Pagina Despre Noi)
     ------------------------------------------------------------------------ */
  const teamTabBtns = document.querySelectorAll('.team-tab-btn');
  const teamGroups = document.querySelectorAll('.team-group-section');

  if (teamTabBtns.length > 0 && teamGroups.length > 0) {
    teamTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        teamTabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const targetGroup = btn.getAttribute('data-team-group');
        teamGroups.forEach(group => {
          const groupId = group.getAttribute('data-group-id');
          if (targetGroup === 'all' || groupId === targetGroup) {
            group.style.display = 'block';
          } else {
            group.style.display = 'none';
          }
        });
      });
    });
  }

  /* ------------------------------------------------------------------------
     7. Comutare Tab-uri Comitete & Divizii (Format Split & Interactiv)
     ------------------------------------------------------------------------ */
  // Comitete
  const comiteteTabBtns = document.querySelectorAll('.comitete-tab-btn');
  const comitetePanels = document.querySelectorAll('.comitete-panel');
  const comiteteMiniCards = document.querySelectorAll('.comitete-mini-card');

  function activateComitetTab(comKey) {
    comiteteTabBtns.forEach(btn => {
      const isTarget = btn.getAttribute('data-com-tab') === comKey;
      btn.classList.toggle('active', isTarget);
      btn.setAttribute('aria-selected', isTarget ? 'true' : 'false');
    });

    comitetePanels.forEach(panel => {
      const isTarget = panel.getAttribute('data-com-panel') === comKey;
      panel.classList.toggle('active', isTarget);
    });

    comiteteMiniCards.forEach(card => {
      const isTarget = card.getAttribute('data-com-target') === comKey;
      card.classList.toggle('active-mini', isTarget);
    });
  }

  if (comiteteTabBtns.length > 0 && comitetePanels.length > 0) {
    comiteteTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const comKey = btn.getAttribute('data-com-tab');
        activateComitetTab(comKey);
      });
    });

    if (comiteteMiniCards.length > 0) {
      comiteteMiniCards.forEach(card => {
        card.addEventListener('click', () => {
          const comKey = card.getAttribute('data-com-target');
          activateComitetTab(comKey);
          const anchor = document.getElementById('comiteteShowcase');
          if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      });
    }
  }

  // Divizii
  const ssmbTabBtns = document.querySelectorAll('.ssmb-tab-btn');
  const ssmbPanels = document.querySelectorAll('.ssmb-panel');
  const ssmbMiniCards = document.querySelectorAll('.ssmb-mini-card');

  function activateDivisionTab(divKey) {
    ssmbTabBtns.forEach(btn => {
      const isTarget = btn.getAttribute('data-div-tab') === divKey;
      btn.classList.toggle('active', isTarget);
      btn.setAttribute('aria-selected', isTarget ? 'true' : 'false');
    });

    ssmbPanels.forEach(panel => {
      const isTarget = panel.getAttribute('data-div-panel') === divKey;
      panel.classList.toggle('active', isTarget);
    });

    ssmbMiniCards.forEach(card => {
      const isTarget = card.getAttribute('data-div-target') === divKey;
      card.classList.toggle('active-mini', isTarget);
    });
  }

  if (ssmbTabBtns.length > 0 && ssmbPanels.length > 0) {
    ssmbTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const divKey = btn.getAttribute('data-div-tab');
        activateDivisionTab(divKey);
      });
    });

    if (ssmbMiniCards.length > 0) {
      ssmbMiniCards.forEach(card => {
        card.addEventListener('click', () => {
          const divKey = card.getAttribute('data-div-target');
          activateDivisionTab(divKey);
          
          const showcaseAnchor = document.getElementById('diviziiShowcase');
          if (showcaseAnchor) {
            showcaseAnchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      });
    }
  }

  /* ------------------------------------------------------------------------
     8. Sticky Subnav Active State Tracker (Scroll Spy)
     ------------------------------------------------------------------------ */
  const subnavBtns = document.querySelectorAll('.sticky-subnav-btn');
  const sectionsToTrack = [
    document.getElementById('conducere'),
    document.getElementById('comitete'),
    document.getElementById('divizii')
  ].filter(Boolean);

  if (subnavBtns.length > 0 && sectionsToTrack.length > 0) {
    const updateActiveSubnav = () => {
      let currentSectionId = '';
      const scrollPos = window.scrollY + 160;

      sectionsToTrack.forEach(sec => {
        if (scrollPos >= sec.offsetTop) {
          currentSectionId = sec.getAttribute('id');
        }
      });

      subnavBtns.forEach(btn => {
        const href = btn.getAttribute('href').replace('#', '');
        btn.classList.toggle('active', href === currentSectionId);
      });
    };

    window.addEventListener('scroll', updateActiveSubnav, { passive: true });
    updateActiveSubnav();
  }

  /* ------------------------------------------------------------------------
     8. Micro-Animații Scroll Reveal (Rapide, Neintruzive, Fără Întârziere)
     ------------------------------------------------------------------------ */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if (revealElements.length > 0) {
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealElements.forEach(el => el.classList.add('revealed'));
    } else {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      }, {
        root: null,
        rootMargin: '0px 0px -30px 0px',
        threshold: 0.08
      });

      revealElements.forEach(el => revealObserver.observe(el));
    }
  }

});

