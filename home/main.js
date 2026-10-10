// 未孩游戏官网原型：Steam 门控、摸摸猫、画廊与宣传片
(() => {
  const assets = new URL('./assets/', document.currentScript.src);

  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 顶栏滚动后变成实底
  const bar = document.getElementById('bar');
  const onScroll = () => bar.classList.toggle('solid', scrollY > 40);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // 摸摸猫
  const pet = document.getElementById('pet'), bubble = document.getElementById('pet-bubble');
  const lines = ['喵～', '呼噜呼噜', '再摸一下', '眯眼', '喵！'];
  let pets = 0;
  pet.addEventListener('click', () => {
    pets++;
    bubble.textContent = pets < 3 ? lines[(pets - 1) % lines.length] : `${lines[pets % lines.length]} · 摸了 ${pets} 次`;
    pet.classList.remove('squish'); void pet.offsetWidth; pet.classList.add('squish');
    if (reduce) return;
    const box = pet.getBoundingClientRect(), host = pet.parentElement.getBoundingClientRect();
    for (let i = 0; i < 4; i++) {
      const h = document.createElement('span');
      h.className = 'heart'; h.textContent = ['💗', '💛', '🤍'][i % 3];
      h.style.left = (box.left - host.left + box.width / 2 - 10 + (Math.random() * 40 - 20)) + 'px';
      h.style.top = (box.top - host.top) + 'px';
      h.style.setProperty('--dx', (Math.random() * 60 - 30) + 'px');
      h.style.animationDelay = (i * 0.08) + 's';
      pet.parentElement.appendChild(h);
      setTimeout(() => h.remove(), 1600);
    }
  });

  // 桌面沿用自动画廊；触屏可以直接滑动，减少动态时保持静止。
  const track = document.getElementById('track');
  if (!reduce && matchMedia('(min-width: 641px) and (pointer: fine)').matches) {
    track.classList.add('auto-track');
    [...track.children].forEach(node => {
      const copy = node.cloneNode(true);
      copy.setAttribute('aria-hidden', 'true');
      copy.tabIndex = -1;
      track.appendChild(copy);
    });
  }

  // 首屏字标随鼠标轻微浮动
  const logo = document.getElementById('hero-logo');
  if (!reduce && matchMedia('(pointer:fine)').matches) {
    document.querySelector('.hero').addEventListener('pointermove', e => {
      logo.style.setProperty('--lx', ((e.clientX / innerWidth - .5) * -14).toFixed(1) + 'px');
      logo.style.setProperty('--ly', ((e.clientY / innerHeight - .5) * -8).toFixed(1) + 'px');
    });
  }

  // 查看器：放大图片与播放宣传片（视频只在点击后才下载）
  const viewer = document.getElementById('viewer'), body = document.getElementById('viewer-body');
  let lastFocus;
  const open = node => {
    lastFocus = document.activeElement;
    body.replaceChildren(node);
    viewer.showModal();
    document.body.classList.add('viewer-open');
  };
  document.addEventListener('click', e => {
    const button = e.target.closest('[data-zoom]');
    if (!button) return;
    const image = new Image();
    image.src = new URL(button.dataset.zoom, assets);
    image.alt = button.querySelector('img')?.alt || '';
    open(image);
  });
  document.querySelectorAll('[data-trailer]').forEach(button => button.addEventListener('click', () => {
    const video = document.createElement('video');
    video.src = new URL('trailer.mp4', assets);
    video.poster = new URL('trailer-poster.jpg', assets);
    video.controls = true;
    video.playsInline = true;
    video.preload = 'metadata';
    open(video);
    video.play().catch(() => {});
  }));
  const close = () => viewer.close();
  viewer.addEventListener('close', () => {
    body.querySelector('video')?.pause();
    body.replaceChildren();
    document.body.classList.remove('viewer-open');
    lastFocus?.focus({ preventScroll: true });
  });
  viewer.querySelector('[data-close]').addEventListener('click', close);
  viewer.addEventListener('click', e => { if (e.target === viewer) close(); });
})();
