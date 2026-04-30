import { useEffect, useRef, useState } from "react";

const metrics = [
  {
    value: 192,
    suffix: "",
    label: "AMBULANCES",
  },
  {
    value: 1023,
    suffix: "",
    label: "TRAINED PROFESSIONALS",
  },
  {
    value: 15,
    suffix: "",
    label: "YEARS IN BUSINESS",
  },
  {
    value: 1,
    suffix: "",
    label: "GOAL!",
  },
];

function AnimatedNumber({ value, suffix = "", duration = 3200 }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated) return;

        setHasAnimated(true);

        let startTime = null;

        const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

        const animate = (timestamp) => {
          if (!startTime) startTime = timestamp;

          const progress = Math.min((timestamp - startTime) / duration, 1);
          const easedProgress = easeOutCubic(progress);
          const currentValue = Math.round(easedProgress * value);

          setDisplayValue(currentValue);

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function MetricsSection() {
  return (
    <section className="w-full bg-white">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT COLUMN — TEXT */}
        <div className="space-y-6">
          <h1 className="text-[40px] md:text-[52px] lg:text-[60px] font-bold leading-[1.05] tracking-tight text-neutral-900">
            <span className="underline underline-offset-4 decoration-[3px]">
              SeniorCare
            </span>{" "}
            An EMS Agency That Cares.
            <span className="inline-block ml-2 text-white bg-red-500 rounded-sm text-[14px] px-1 py-[1px] leading-none">
              2
            </span>
          </h1>

          <p className="text-neutral-500 uppercase tracking-wide text-sm">
            Website coming soon
          </p>
        </div>

        {/* RIGHT COLUMN — IMAGE */}
        <div className="w-full flex items-center justify-center">
          <img
            src="./gallery/CAAS.png"
            alt="CAAS Accredited Badge"
            className="w-full h-[360px] object-contain rounded-md"
          />
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="border-t border-neutral-200 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <h2 className="text-[64px] font-bold leading-none text-neutral-900">
                <AnimatedNumber value={metric.value} suffix={metric.suffix} />
              </h2>

              <p className="mt-4 text-[#174f25] text-sm font-black uppercase tracking-wide max-w-xs">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}