(() => {
  const body = document.body;
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  const updateNavToggleLabel = (open = body.classList.contains('nav-open')) => {
    const label = navToggle?.querySelector('.sr-only');
    if (!label) return;
    const key = open ? 'common.nav.close' : 'common.nav.open';
    label.textContent = window.InfansI18n?.t(key) ?? (open ? 'Close navigation' : 'Open navigation');
  };

  const closeMenu = (returnFocus = false) => {
    body.classList.remove('nav-open');
    if (navToggle) {
      navToggle.setAttribute('aria-expanded', 'false');
      updateNavToggleLabel(false);
      if (returnFocus) navToggle.focus();
    }
  };

  navToggle?.addEventListener('click', () => {
    const open = !body.classList.contains('nav-open');
    body.classList.toggle('nav-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    updateNavToggleLabel(open);
  });

  navLinks?.addEventListener('click', (event) => {
    if (event.target.closest('a, button[data-language]')) closeMenu();
  });

  window.addEventListener('infans:languagechange', () => updateNavToggleLabel());

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && body.classList.contains('nav-open')) closeMenu(true);
  });

  const revealTargets = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -4% 0px' });
    revealTargets.forEach((target) => revealObserver.observe(target));
  } else {
    revealTargets.forEach((target) => target.classList.add('is-visible'));
  }

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(pointer: fine)');
  const parallaxTarget = document.querySelector('[data-parallax]');
  const hero = document.querySelector('.hero');

  if (hero && parallaxTarget && finePointer.matches && !reducedMotion.matches) {
    hero.addEventListener('pointermove', (event) => {
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      parallaxTarget.style.transform = `translate3d(${x * 12}px, ${y * 9}px, 0)`;
    });
    hero.addEventListener('pointerleave', () => {
      parallaxTarget.style.transform = '';
    });
  }

  const canvas = document.getElementById('spirit-canvas');
  if (!canvas || reducedMotion.matches) return;

  const context = canvas.getContext('2d');
  if (!context) return;

  let particles = [];
  let frameId = 0;
  let width = 0;
  let height = 0;
  let ratio = 1;

  const createParticles = () => {
    const count = window.innerWidth < 760 ? 18 : 38;
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.45,
      speed: Math.random() * 0.18 + 0.05,
      drift: (Math.random() - 0.5) * 0.12,
      alpha: Math.random() * 0.42 + 0.12,
      gold: Math.random() > 0.34
    }));
  };

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    width = rect.width;
    height = rect.height;
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    createParticles();
  };

  const draw = () => {
    context.clearRect(0, 0, width, height);
    particles.forEach((particle) => {
      particle.y -= particle.speed;
      particle.x += particle.drift;
      if (particle.y < -8) {
        particle.y = height + 8;
        particle.x = Math.random() * width;
      }
      if (particle.x < -8) particle.x = width + 8;
      if (particle.x > width + 8) particle.x = -8;
      context.beginPath();
      context.fillStyle = particle.gold
        ? `rgba(212, 189, 123, ${particle.alpha})`
        : `rgba(126, 177, 155, ${particle.alpha})`;
      context.shadowBlur = particle.radius * 7;
      context.shadowColor = context.fillStyle;
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fill();
    });
    context.shadowBlur = 0;
    frameId = window.requestAnimationFrame(draw);
  };

  if ('ResizeObserver' in window) {
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
  } else {
    window.addEventListener('resize', resize, { passive: true });
  }
  resize();
  draw();

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      window.cancelAnimationFrame(frameId);
    } else {
      window.cancelAnimationFrame(frameId);
      draw();
    }
  });
})();
