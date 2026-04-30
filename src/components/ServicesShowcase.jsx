import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  Settings,
  Plane,
  HeartPulse,
  Activity,
  Droplets,
  Heart,
  CircleDot,
  ShieldCheck,
  MapPin,
  ArrowRight,
  Hand,
} from "lucide-react";

const services = [
  {
    id: "critical-care",
    number: "01",
    title: "Critical Care",
    subtitle: "24/7 high-acuity response when every second matters.",
    meta: "ACLS • LVAD • Impella",
    icon: Clock,
    accent: "CRITICAL",
    eyebrow: "01 / CRITICAL CARE",
    headline: "24/7 Critical Care On Demand",
    body:
      "Modern ambulances and highly trained paramedics are always available to provide rapid clinical response and high-acuity patient transport.",
    bullets: [
      "Fast response availability",
      "Clinical excellence and outstanding customer service",
    ],
    stats: [
      { icon: Clock, label: "Live Response", value: "24/7" },
      {
        icon: MapPin,
        label: "Coverage Area",
        value: "NYC • Brooklyn • Long Island",
      },
    ],
    capabilities: [
      {
        title: "ACLS",
        subtitle: "Advanced Cardiac Life Support",
        body:
          "Our teams are ACLS certified and equipped to manage life-threatening cardiac emergencies with precision and speed.",
        icon: HeartPulse,
      },
      {
        title: "Cardiac Monitoring",
        subtitle: "Continuous rhythm observation",
        body:
          "Advanced cardiac monitoring supports high-acuity patients during urgent response and transport.",
        icon: Activity,
      },
      {
        title: "Blood Pressure Monitoring",
        subtitle: "Non-invasive & invasive support",
        body:
          "Equipped for blood pressure monitoring needs across complex critical-care transport scenarios.",
        icon: Activity,
      },
      {
        title: "IABP",
        subtitle: "Intra-aortic balloon pump",
        body:
          "Specialized transport support for patients requiring advanced mechanical circulatory assistance.",
        icon: CircleDot,
      },
      {
        title: "ATS",
        subtitle: "Ambulance Transfusion Service",
        body:
          "Critical-care capability for advanced transfusion support during specialized medical transport.",
        icon: Droplets,
      },
      {
        title: "LVAD",
        subtitle: "Left Ventricular Assist Device",
        body:
          "Transport support for patients with ventricular assist devices and advanced cardiac-care needs.",
        icon: Heart,
      },
      {
        title: "Impella",
        subtitle: "Advanced circulatory support",
        body:
          "Specialized capability for complex cardiovascular transport and high-acuity patient movement.",
        icon: CircleDot,
      },
    ],
  },
  {
    id: "als-bls",
    number: "02",
    title: "Advanced & Basic Life Support",
    subtitle: "Certified EMT and paramedic care delivered with advanced standards.",
    meta: "BLS • ALS • Monitoring",
    icon: Settings,
    accent: "SUPPORT",
    eyebrow: "02 / ALS & BLS",
    headline: "Advanced & Basic Life Support",
    body:
      "Our EMTs and paramedics provide dependable pre-hospital and inter-facility care with modern equipment and disciplined clinical standards.",
    bullets: [
      "Certified EMT and paramedic teams",
      "Reliable transport and patient support",
    ],
    stats: [
      { icon: ShieldCheck, label: "Clinical Standard", value: "NYS Certified" },
      { icon: Clock, label: "Availability", value: "24/7" },
    ],
    capabilities: [
      {
        title: "BLS Transport",
        subtitle: "Basic Life Support",
        body:
          "Safe, professional transport for patients requiring basic medical support and monitoring.",
        icon: ShieldCheck,
      },
      {
        title: "ALS Transport",
        subtitle: "Advanced Life Support",
        body:
          "Paramedic-level care for patients requiring advanced pre-hospital or inter-facility intervention.",
        icon: HeartPulse,
      },
      {
        title: "Monitoring",
        subtitle: "Patient observation",
        body:
          "Care teams monitor patient condition throughout transport with professional attention and readiness.",
        icon: Activity,
      },
    ],
  },
  {
    id: "long-distance",
    number: "03",
    title: "Long Distance Medical Transport",
    subtitle: "Coordinated medical transport across distance with comfort and care.",
    meta: "State-to-state • Door-to-door • Airport",
    icon: Plane,
    accent: "TRANSPORT",
    eyebrow: "03 / LONG DISTANCE TRANSPORT",
    headline: "Long Distance Medical Transport",
    body:
      "We coordinate safe, comfortable medical transport for patients and families navigating complex travel needs.",
    bullets: [
      "Door-to-door medical coordination",
      "State-to-state and long-distance support",
    ],
    stats: [
      { icon: MapPin, label: "Coverage", value: "State-to-State" },
      { icon: Heart, label: "Care Model", value: "Family-Level" },
    ],
    capabilities: [
      {
        title: "Long Distance",
        subtitle: "Extended medical transport",
        body:
          "Professional coordination for patients requiring transport across longer routes.",
        icon: MapPin,
      },
      {
        title: "Airport Service",
        subtitle: "Medical travel support",
        body:
          "Coordinated medical transport for airport transfers and travel-related care needs.",
        icon: Plane,
      },
      {
        title: "Door-to-Door",
        subtitle: "Complete trip support",
        body:
          "A smoother experience from pickup to destination with patient comfort at the center.",
        icon: Heart,
      },
    ],
  },
];

function ServiceSelectorCard({ service, active, onClick }) {
  const Icon = service.icon;

  return (
    <motion.button
      type="button"
      onClick={onClick}
      layout
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      className={[
        "group relative min-h-[168px] overflow-hidden rounded-2xl border p-6 text-left shadow-xl transition-colors duration-300",
        active
          ? "border-white/70 bg-[#174f25] text-white shadow-green-950/40"
          : "border-black/5 bg-white text-[#174f25] shadow-black/10",
      ].join(" ")}
    >
      <div
        className={[
          "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300",
          active
            ? "bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_45%)] opacity-100"
            : "",
        ].join(" ")}
      />

      <div className="relative z-10 flex h-full gap-5">
        <div className="flex flex-col items-center gap-4">
          <span
            className={[
              "text-sm font-black tracking-[0.18em]",
              active ? "text-[#f5a11a]" : "text-[#735a16]",
            ].join(" ")}
          >
            {service.number}
          </span>

          <div
            className={[
              "flex h-16 w-16 items-center justify-center rounded-full border",
              active
                ? "border-[#f5a11a] bg-white/10 text-white"
                : "border-[#f5a11a] bg-[#fffaf0] text-[#f5a11a]",
            ].join(" ")}
          >
            <Icon size={32} strokeWidth={2.4} />
          </div>
        </div>

        <div className="pt-8">
          <h3 className="text-xl font-black leading-tight tracking-tight md:text-2xl">
            {service.title}
          </h3>

          <p
            className={[
              "mt-3 max-w-xs text-sm leading-relaxed",
              active ? "text-white/85" : "text-black/70",
            ].join(" ")}
          >
            {service.subtitle}
          </p>

          <p
            className={[
              "mt-4 text-xs font-bold uppercase tracking-[0.16em]",
              active ? "text-[#f5a11a]" : "text-[#174f25]/60",
            ].join(" ")}
          >
            {service.meta}
          </p>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 right-6 h-[3px] overflow-hidden rounded-full bg-black/10">
        <motion.div
          layout
          className="h-full rounded-full bg-[#f5a11a]"
          initial={false}
          animate={{ width: active ? "42%" : "18%" }}
        />
      </div>
    </motion.button>
  );
}

function CapabilityStack({ items }) {
  const [cards, setCards] = useState(items);

  useEffect(() => {
    setCards(items);
  }, [items]);

  const rotateCards = () => {
    setCards((current) => {
      const [first, ...rest] = current;
      return [...rest, first];
    });
  };

  return (
    <div className="relative mx-auto h-[640px] w-full max-w-[760px] overflow-visible">
      {cards.map((item, index) => {
        const Icon = item.icon;
        const isTop = index === 0;
        const visible = index <= 5;

        return (
          <motion.div
            key={`${item.title}-${index}`}
            drag={isTop ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.35}
            onDragEnd={(_, info) => {
              if (Math.abs(info.offset.x) > 90) rotateCards();
            }}
            onClick={() => {
              if (isTop) rotateCards();
            }}
            animate={{
              x: index * 44,
              y: index * 12,
              rotate: index * 2.1,
              scale: 1 - index * 0.035,
              opacity: visible ? 1 : 0,
              zIndex: cards.length - index,
            }}
            transition={{ type: "spring", stiffness: 230, damping: 26 }}
            className={[
              "absolute left-0 top-0 h-[470px] w-[320px] cursor-grab overflow-hidden rounded-[2rem] border p-7 shadow-2xl backdrop-blur-xl active:cursor-grabbing md:w-[385px]",
              isTop
                ? "border-white/60 bg-[#145025]/95 text-white shadow-[#051b0c]/70"
                : "border-white/15 bg-[#123f20]/45 text-white/20",
            ].join(" ")}
            style={{
              transformOrigin: "bottom left",
            }}
          >
            <div
              className={[
                "absolute inset-0 rounded-[2rem]",
                isTop
                  ? "bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.16),transparent_38%)]"
                  : "bg-transparent",
              ].join(" ")}
            />

            <div className="relative z-10 flex items-start justify-between">
              <div
                className={[
                  "flex h-16 w-16 items-center justify-center rounded-full border",
                  isTop
                    ? "border-white/20 bg-white/10 text-white"
                    : "border-white/10 bg-white/[0.03] text-white/25",
                ].join(" ")}
              >
                <Icon size={32} />
              </div>

              <div
                className={[
                  "text-right text-xs uppercase tracking-widest",
                  isTop ? "text-[#f5a11a]" : "text-[#f5a11a]/25",
                ].join(" ")}
              >
                <p>Capability</p>
                <p
                  className={[
                    "mt-2",
                    isTop ? "text-white" : "text-white/25",
                  ].join(" ")}
                >
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(cards.length).padStart(2, "0")}
                </p>
              </div>
            </div>

            <div className="relative z-10 mt-14">
              <h4
                className={[
                  "font-black tracking-tight",
                  isTop ? "text-5xl" : "text-2xl text-white/20",
                ].join(" ")}
              >
                {item.title}
              </h4>

              {isTop && (
                <>
                  <p className="mt-4 text-lg text-[#f5a11a]">
                    {item.subtitle}
                  </p>

                  <p className="mt-6 max-w-[300px] text-sm leading-relaxed text-white/80 md:text-[15px]">
                    {item.body}
                  </p>
                </>
              )}
            </div>

            {isTop && (
              <div className="absolute bottom-8 left-7 right-7 z-10 border-t border-white/10 pt-5">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/45">
                      Available
                    </p>
                    <p className="mt-1 text-xl font-bold">24/7</p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/45">
                      Response
                    </p>
                    <p className="mt-1 text-xl font-bold">&lt; 10 Min</p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/80">
                    <ArrowRight size={24} />
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        );
      })}

      <div className="absolute left-0 right-0 top-[575px] z-[999] flex items-center justify-center gap-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/90">
        <span className="text-[#f5a11a]">‹</span>
        <Hand size={18} />
        <span>Drag to explore capabilities</span>
        <span className="text-[#f5a11a]">›</span>
      </div>
    </div>
  );
}

export default function ServicesShowcase() {
  const [activeId, setActiveId] = useState("critical-care");
  const activeService = services.find((service) => service.id === activeId);

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative z-30 mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 pt-10 pb-10 md:grid-cols-3">
        {services.map((service) => (
          <ServiceSelectorCard
            key={service.id}
            service={service}
            active={activeId === service.id}
            onClick={() => setActiveId(service.id)}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto -mt-20 w-full px-0 pb-0 md:w-[92vw] md:max-w-[1800px]">
        <div className="relative min-h-[720px] overflow-hidden rounded-t-[2rem] border border-white/15 bg-[#174f25] px-6 pb-32 pt-40 text-white shadow-2xl md:px-20 xl:px-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.16),transparent_34%),linear-gradient(135deg,#174f25,#082513_70%)]" />

          <div className="absolute bottom-[-4vw] left-4 text-[15vw] font-black leading-none tracking-tighter text-white/[0.035]">
            {activeService.accent}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -16, filter: "blur(8px)" }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="relative z-10 grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]"
            >
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f5a11a]">
                  {activeService.eyebrow}
                </p>

                <h2 className="mt-8 max-w-2xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
                  {activeService.headline}
                </h2>

                <div className="mt-8 h-[3px] w-16 bg-[#f5a11a]" />

                <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/88">
                  {activeService.body}
                </p>

                <div className="mt-8 space-y-4">
                  {activeService.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="flex gap-4 text-base text-white/90"
                    >
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#f5a11a] text-[#f5a11a]">
                        ✓
                      </span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
                  {activeService.stats.map((stat) => {
                    const Icon = stat.icon;

                    return (
                      <div
                        key={stat.label}
                        className="rounded-2xl border border-white/15 bg-white/[0.045] p-5 backdrop-blur"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#f5a11a]/60 text-[#f5a11a]">
                            <Icon size={24} />
                          </div>

                          <div>
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/55">
                              {stat.label}
                            </p>
                            <p className="mt-1 text-lg font-bold">
                              {stat.value}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <CapabilityStack items={activeService.capabilities} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}