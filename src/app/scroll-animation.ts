declare const lottie: {
  loadAnimation: (params: {
    container: Element;
    renderer: string;
    loop: boolean;
    autoplay: boolean;
    path: string;
  }) => {
    addEventListener: (event: string, cb: () => void) => void;
    goToAndStop: (frame: number, isFrame: boolean) => void;
    isLoaded: boolean;
    totalFrames: number;
  };
};

export function initScrollAnimation() {
  const wrapper = document.querySelector(".fold-animaction") as HTMLElement;
  const container = document.querySelector(
    ".fold-animation__container"
  ) as HTMLElement;
  const texts = document.querySelectorAll(
    ".home-fold__text"
  ) as NodeListOf<HTMLElement>;
  const numTexts = texts.length;
  if (!wrapper || !container) return;

  // Don't override container positioning — let CSS sticky handle it
  container.style.overflow = "hidden";

  texts.forEach(function (t, i) {
    if (i === 0) {
      t.style.opacity = "1";
      t.style.transform = "translateY(0)";
    } else {
      t.style.opacity = "0";
    }
  });

  const title = document.querySelector(".home-fold__title") as HTMLElement;
  if (title) {
    title.style.opacity = "1";
    title.style.transform = "translateY(0)";
    title.style.transition = "none";
  }

  interface LottieAnim {
    isLoaded: boolean;
    totalFrames: number;
    goToAndStop: (frame: number, isFrame: boolean) => void;
  }
  const anims: LottieAnim[] = [];
  document
    .querySelectorAll('[data-animation-type="lottie"]')
    .forEach(function (el) {
      const src = el.getAttribute("data-src");
      if (!src) return;
      el.querySelectorAll("svg").forEach((s) => s.remove());
      (el as HTMLElement).style.cssText =
        "width:100%;height:100%;position:absolute;top:0;left:0;";
      const a = lottie.loadAnimation({
        container: el,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: src,
      });
      a.addEventListener("DOMLoaded", function () {
        a.goToAndStop(0, true);
      });
      anims.push(a);
    });

  function onScroll() {
    const rect = wrapper.getBoundingClientRect();
    const wH = wrapper.offsetHeight;
    // Progress based on how far the wrapper top has scrolled past viewport top
    const scrollIn = -rect.top;
    const range = wH - window.innerHeight;
    if (range <= 0) return;
    const progress = Math.max(0, Math.min(1, scrollIn / range));

    // Update Lottie frame
    anims.forEach(function (a) {
      if (a.isLoaded)
        a.goToAndStop(Math.round(progress * (a.totalFrames - 1)), true);
    });

    // Title fade
    if (title) {
      if (progress < 0.04) {
        title.style.opacity = "1";
        title.style.transform = "translateY(0)";
      } else if (progress < 0.07) {
        const p = (progress - 0.04) / 0.03;
        title.style.opacity = String(1 - p);
        title.style.transform = "translateY(" + -30 * p + "px)";
      } else {
        title.style.opacity = "0";
      }
    }

    // Text sequence
    if (numTexts > 0) {
      const seg = 0.85 / numTexts;
      texts.forEach(function (t, i) {
        const fi = 0.05 + i * seg,
          fe = fi + 0.06;
        const fo = fi + seg - 0.06,
          foe = fi + seg;
        let op = 0,
          y = 40;
        if (progress >= fi && progress <= fe) {
          const p = (progress - fi) / (fe - fi);
          op = p;
          y = 40 * (1 - p);
        } else if (progress > fe && progress < fo) {
          op = 1;
          y = 0;
        } else if (progress >= fo && progress <= foe && i < numTexts - 1) {
          const p = (progress - fo) / (foe - fo);
          op = 1 - p;
          y = -30 * p;
        } else if (progress > fe && i === numTexts - 1) {
          op = 1;
          y = 0;
        }
        t.style.opacity = String(op);
        t.style.transform = "translateY(" + y + "px)";
      });
    }
  }

  // Use rAF to batch scroll updates — prevents jank on mobile
  let ticking = false;
  function requestScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => {
        onScroll();
        ticking = false;
      });
    }
  }

  window.addEventListener("scroll", requestScroll, { passive: true });
  window.addEventListener("resize", requestScroll);
  onScroll();
}
