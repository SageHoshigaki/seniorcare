import { motion } from "framer-motion";

const topImages = [
  {
    title: "Critical Response",
    src: "/gallery/helipad.png",
    wide: false,
  },
  {
    title: "Clinical Care",
    src: "/gallery/img1.jpg",
    wide: true,
  },
  {
    title: "Transport Ready",
    src: "/gallery/img3.png",
    wide: false,
  },
  {
    title: "Patient First",
    src: "/gallery/pet.png",
    wide: true,
  },
];

const bottomImages = [
  {
    title: "24/7 Operations",
    src: "/gallery/ceo.png",
    wide: true,
  },
  {
    title: "Advanced Support",
    src: "/gallery/ice.png",
    wide: false,
  },
  {
    title: "Long Distance",
    src: "/gallery/private.png",
    wide: true,
  },
  {
    title: "Professional Care",
    src: "/gallery/sunset.png",
    wide: false,
  },
];

function GalleryCard({ item, tall = false }) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.012 }}
      transition={{ type: "spring", stiffness: 160, damping: 24 }}
      className={[
        "group relative shrink-0 overflow-hidden rounded-[1.75rem] bg-neutral-900 shadow-2xl",
        tall ? "h-[380px] md:h-[500px]" : "h-[330px] md:h-[430px]",
        item.wide ? "w-[620px] md:w-[880px]" : "w-[420px] md:w-[560px]",
      ].join(" ")}
    >
      <img
        src={item.src}
        alt={item.title}
        className="h-full w-full object-cover opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

      <div className="absolute left-7 top-7 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-black backdrop-blur">
        SeniorCare
      </div>

      <div className="absolute bottom-7 left-7 right-7">
        <p className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          {item.title}
        </p>
      </div>
    </motion.div>
  );
}

function MarqueeRow({ images, direction = "left", duration = 95, tall = false }) {
  const repeatedImages = [...images, ...images, ...images];

  return (
    <div className="relative flex w-full overflow-hidden">
      <motion.div
        className="flex gap-10 will-change-transform"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {repeatedImages.map((item, index) => (
          <GalleryCard key={`${item.title}-${index}`} item={item} tall={tall} />
        ))}
      </motion.div>
    </div>
  );
}

export default function SlidingGallery() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black py-28 text-white">
      <div className="mx-auto mb-20 max-w-7xl px-6 lg:px-12">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#f5a11a]">
          Field Ready / Always Moving
        </p>

        <h2 className="max-w-5xl text-[52px] font-black leading-[0.92] tracking-tight md:text-[92px]">
          Emergency medical service with presence, precision, and care.
        </h2>
      </div>

      <div className="space-y-10">
        <MarqueeRow images={topImages} direction="left" duration={105} tall />
        <MarqueeRow images={bottomImages} direction="right" duration={115} tall />
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-56 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-56 bg-gradient-to-l from-black to-transparent" />
    </section>
  );
}