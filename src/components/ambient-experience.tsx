"use client";

import { useEffect } from "react";

export function AmbientExperience() {
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    body.classList.add("experience-ready");

    const onPointerMove = (event: PointerEvent) => {
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
    };

    const onScroll = () => {
      const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = pageHeight > 0 ? window.scrollY / pageHeight : 0;
      root.style.setProperty("--scroll-progress", `${progress}`);
      body.classList.toggle("has-scrolled", window.scrollY > 24);
    };

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10%", threshold: 0.08 },
    );

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((element) => {
      revealObserver.observe(element);
    });

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      body.classList.remove("has-scrolled");
      body.classList.remove("experience-ready");
    };
  }, []);

  return <div className="ambient-pointer" aria-hidden="true" />;
}
