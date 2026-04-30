// src/components/CoverageMapSection.jsx
import { motion } from "framer-motion";
import { Clock, MapPin, Navigation, Cross } from "lucide-react";

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

const mapboxUser = "mapbox";
const mapboxStyle = "dark-v11";
const mapCenter = "-73.55,40.78,8.45,0,0";
const mapSize = "1280x720@2x";

const mapboxStaticUrl = `https://api.mapbox.com/styles/v1/${mapboxUser}/${mapboxStyle}/static/${mapCenter}/${mapSize}?access_token=${MAPBOX_TOKEN}&attribution=false&logo=false`;

const coveragePoints = [
  { id: "bronx", label: "Bronx", x: "43%", y: "37%", delay: 0 },
  { id: "manhattan", label: "Manhattan", x: "45%", y: "47%", delay: 0.15 },
  { id: "brooklyn", label: "Brooklyn", x: "49%", y: "60%", delay: 0.3 },
  { id: "queens", label: "Queens", x: "55%", y: "53%", delay: 0.45 },
  { id: "staten-island", label: "Staten Island", x: "42%", y: "72%", delay: 0.6 },
  { id: "nassau-west", label: "Nassau", x: "64%", y: "51%", delay: 0.75 },
  { id: "nassau-east", label: "Nassau East", x: "72%", y: "49%", delay: 0.9 },
  { id: "suffolk-west", label: "Western Suffolk", x: "80%", y: "45%", delay: 1.05 },
  { id: "suffolk-mid", label: "Central Long Island", x: "88%", y: "42%", delay: 1.2 },
  { id: "westchester", label: "Westchester", x: "44%", y: "25%", delay: 1.35 },
  { id: "rockland", label: "Rockland", x: "34%", y: "27%", delay: 1.5 },
  { id: "regional", label: "Regional Access", x: "32%", y: "57%", delay: 1.65 },
  { id: "south-brooklyn", label: "South Brooklyn", x: "51%", y: "66%", delay: 1.8 },
  { id: "jamaica", label: "Jamaica Queens", x: "58%", y: "59%", delay: 1.95 },
];

const coverageStats = [
  {
    icon: Clock,
    label: "Dispatch",
    value: "24/7",
  },
  {
    icon: MapPin,
    label: "Coverage",
    value: "Tri-State",
  },
  {
    icon: Navigation,
    label: "Routes",
    value: "National",
  },
];

function CoverageMarker({ point }) {
  return (
    <motion.div
      className="absolute z-30 -translate-x-1/2 -translate-y-1/2"
      style={{ left: point.x, top: point.y }}
      initial={{ opacity: 0, scale: 0.4 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        delay: point.delay,
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <motion.div
        className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2f8a3e]/50"
        animate={{
          scale: [0.72, 1.9, 0.72],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 3.6,
          delay: point.delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-[#1d5a27] shadow-[0_0_28px_rgba(47,138,62,0.72)]">
        <Cross size={18} className="text-white" strokeWidth={3} />

        <div className="pointer-events-none absolute left-1/2 top-11 min-w-max -translate-x-1/2 rounded-full border border-white/10 bg-black/85 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
          {point.label}
        </div>
      </div>
    </motion.div>
  );
}

function CoverageStat({ stat }) {
  const Icon = stat.icon;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#f5a11a]/50 text-[#f5a11a]">
          <Icon size={22} />
        </div>

        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/45">
            {stat.label}
          </p>
          <p className="mt-1 text-lg font-black text-white">{stat.value}</p>
        </div>
      </div>
    </div>
  );
}

export default function CoverageMapSection() {
  return (
    <section className="relative overflow-hidden bg-black py-16 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_44%,rgba(29,90,39,0.2),transparent_36%),linear-gradient(135deg,#030403,#071108_58%,#020302)]" />

      <div className="absolute bottom-[-4vw] left-0 text-[17vw] font-black leading-none tracking-tighter text-white/[0.03] pointer-events-none select-none">
        COVERAGE
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1900px] px-4 lg:px-8">
        {/* Header */}
        <div className="mb-6 grid grid-cols-1 gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#f5a11a]">
              Coverage Area / Private EMS
            </p>

            <h2 className="mt-6 max-w-5xl text-[44px] font-black leading-[0.92] tracking-tight md:text-[76px]">
              Private EMS coverage that moves beyond New York.
            </h2>
          </div>

          <div className="lg:ml-auto">
            <p className="max-w-3xl text-lg leading-relaxed text-white/68">
              SeniorCare provides private EMS coverage across New York City, the
              tri-state region, and long-distance medical transport routes
              nationwide — built for dependable response when timing matters.
            </p>

            <div className="mt-6 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
              {coverageStats.map((stat) => (
                <CoverageStat key={stat.label} stat={stat} />
              ))}
            </div>
          </div>
        </div>

        {/* Full-width Mapbox static map panel */}
        <div className="relative min-h-[820px] w-full overflow-hidden rounded-[2.25rem] border border-white/10 bg-[#050806] shadow-2xl shadow-black/60">
          {MAPBOX_TOKEN ? (
            <img
              src={mapboxStaticUrl}
              alt="SeniorCare private EMS coverage map across New York City, tri-state region, and long-distance routes"
              className="absolute inset-0 h-full w-full object-cover opacity-95 grayscale contrast-125 brightness-75"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-[#050806] px-6 text-center">
              <p className="max-w-lg text-sm font-bold uppercase tracking-[0.18em] text-white/50">
                Add VITE_MAPBOX_TOKEN to your .env file to load the Mapbox
                coverage map.
              </p>
            </div>
          )}

          {/* Premium overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_52%,rgba(47,138,62,0.18),transparent_32%),linear-gradient(to_bottom,rgba(0,0,0,0.06),rgba(0,0,0,0.44))]" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-black/72 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-black/72 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/80 to-transparent" />

          {/* map title pill */}
          <div className="absolute left-8 top-8 z-40 rounded-full border border-white/10 bg-black/45 px-5 py-3 text-[10px] font-black uppercase tracking-[0.24em] text-white/60 backdrop-blur">
            Private Coverage Visualization
          </div>

          {/* top right legend */}
          <div className="absolute right-8 top-8 z-40 hidden rounded-full border border-white/10 bg-black/45 px-5 py-3 backdrop-blur md:flex md:items-center md:gap-3">
            <span className="h-3 w-3 rounded-full bg-[#2f8a3e] shadow-[0_0_18px_rgba(47,138,62,0.85)]" />
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-white/70">
              Active EMS Coverage
            </p>
          </div>

          {/* Markers */}
          {coveragePoints.map((point) => (
            <CoverageMarker key={point.id} point={point} />
          ))}

          {/* bottom command panel */}
          <div className="absolute bottom-8 left-8 right-8 z-40 flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-black/55 p-6 backdrop-blur-xl md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#f5a11a]">
                Service Region
              </p>
              <p className="mt-2 text-2xl font-black text-white md:text-3xl">
                NYC • Tri-State • National Transport
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {["NYC", "Tri-State", "Long Distance", "National Transport"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white/70"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}