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
    <section className="flex min-h-screen w-full flex-col bg-white">
      {/* TOP SECTION */}
      <div className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-12 px-6 pt-24 pb-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
        {/* LEFT COLUMN — TEXT */}
        <div className="space-y-7">
          <h1 className="text-[54px] font-bold leading-[0.98] tracking-tight text-neutral-900 md:text-[72px] lg:text-[84px]">
            <span className="underline decoration-[3px] underline-offset-4">
              SeniorCare
            </span>{" "}
            An EMS Agency That Cares.
            <span className="ml-2 inline-block align-middle rounded-sm bg-red-500 px-1 py-[1px] text-[14px] leading-none text-white">
              2
            </span>
          </h1>

          <p className="text-sm uppercase tracking-wide text-neutral-500">
            
          </p>
        </div>

        {/* RIGHT COLUMN — IMAGE */}
        <div className="flex w-full items-center justify-center lg:justify-end">
          <div className="flex w-full max-w-[430px] items-center justify-center">
            <img
              src="/gallery/CAAS.png"
              alt="CAAS Accredited Badge"
              className="h-[390px] w-full rounded-md object-contain"
            />
          </div>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="border-t border-neutral-200 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-12">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <h2 className="text-[64px] font-bold leading-none text-neutral-900">
                <AnimatedNumber value={metric.value} suffix={metric.suffix} />
              </h2>

              <p className="mt-4 max-w-xs text-sm font-black uppercase tracking-wide text-[#174f25]">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}