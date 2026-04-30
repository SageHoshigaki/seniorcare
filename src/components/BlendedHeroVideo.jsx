import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function BlendedHeroVideo() {
  const videoEl = useRef(null);

  useEffect(() => {
    const video = videoEl.current;

    // Guarantee autoplay on all browsers + iOS
    const ensureAutoplay = () => {
      video.play().catch(() => {
        setTimeout(ensureAutoplay, 200);
      });
    };
    ensureAutoplay();

    // Subtle Awwwards-style zoom animation
    gsap.to(video, {
      scale: 1.06,
      duration: 14,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-white">

      {/* FULLSCREEN VIDEO (kept exactly as previous styles) */}
      <video
        ref={videoEl}
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* BOTTOM WHITE BLEND (same gradient we used earlier) */}
      <div
        className="absolute bottom-0 left-0 w-full h-[40vh]
                   pointer-events-none bg-gradient-to-b
                   from-transparent to-white"
      />
    </section>
  );
}