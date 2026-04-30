import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function BlendedHeroVideo() {
  const videoEl = useRef(null);

  useEffect(() => {
    const video = videoEl.current;

    const ensureAutoplay = () => {
      video.play().catch(() => {
        setTimeout(ensureAutoplay, 200);
      });
    };
    ensureAutoplay();

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
      {/* FULLSCREEN VIDEO */}
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

      {/* FULL VIDEO GREEN COLOR WASH */}
      <div
        className="absolute inset-0 pointer-events-none bg-[#1d5a27]/70 mix-blend-hue"
      />

      {/* GREEN DEPTH / TONE BALANCE */}
      <div
        className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(29,90,39,0.24)_0%,rgba(29,90,39,0.18)_48%,rgba(0,0,0,0.12)_100%)] mix-blend-multiply"
      />

      {/* BOTTOM WHITE BLEND */}
      <div
        className="absolute bottom-0 left-0 w-full h-[40vh]
                   pointer-events-none bg-gradient-to-b
                   from-transparent to-white"
      />
    </section>
  );
}