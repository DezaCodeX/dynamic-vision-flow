import {
  ArrowUpRight,
  BarChart3,
  BedDouble,
  Camera,
  Coffee,
  CreditCard,
  Gauge,
  Home,
  Image as ImageIcon,
  MapPinned,
  MessageSquareText,
  Settings,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

const navSections = [
  ["Dashboard", Home],
  ["Reservations", CalendarIcon],
  ["Rooms", BedDouble],
  ["Dining", Coffee],
  ["Gallery / Media", Camera],
  ["Guest Reviews", Star],
  ["Website Content", FileTextIcon],
  ["Settings", Settings],
] as const;

const stats = [
  { label: "Total Bookings", value: "1,284", delta: "+12.4%" },
  { label: "Occupancy", value: "86%", delta: "+4.2%" },
  { label: "Revenue", value: "₹8.4L", delta: "+8.7%" },
  { label: "Available Rooms", value: "18", delta: "-3 this week" },
  { label: "Guest Reviews", value: "94", delta: "+11 new" },
  { label: "Website Views", value: "24.8K", delta: "+22.1%" },
] as const;

const recentActivity = [
  ["New booking", "Mr. Sharma reserved a Deluxe Room for 3 nights", "2h ago"],
  ["Check-in", "Family from Bengaluru checked into the Suite", "4h ago"],
  ["Dining update", "Cloud 9 menu refreshed for the weekend", "Today"],
  ["Review published", "Guest review from Vellore posted to the site", "1d ago"],
] as const;

const roomBreakdown = [
  { title: "Room Types", value: "8 categories" },
  { title: "Room Details", value: "Full inventory" },
  { title: "Pricing", value: "Dynamic rates" },
  { title: "Availability", value: "Live sync" },
  { title: "Images", value: "118 assets" },
] as const;

const contentModules = [
  { title: "Home", detail: "Hero, offers, promos" },
  { title: "About Us", detail: "Brand story and facilities" },
  { title: "Rooms", detail: "Room highlights and rates" },
  { title: "Dining", detail: "Restaurant experiences" },
  { title: "Contact", detail: "Location and support" },
] as const;

const sectionRows = [
  { label: "Reservations", items: ["All Reservations", "Upcoming", "Checked-in", "Completed / Cancelled"] },
  { label: "Dining", items: ["Vrindavan", "Cloud 9", "Clinq"] },
  { label: "Gallery / Media", items: ["All Images", "Upload Image", "Add Image URL", "Categories", "Delete / Replace"] },
  { label: "Guest Reviews", items: ["All Reviews", "Published", "Pending"] },
  { label: "Settings", items: ["Hotel Information", "Contact Details", "Social Links", "Admin Settings"] },
] as const;

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </svg>
  );
}

function FileTextIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M7 3h7l5 5v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </svg>
  );
}

export function AdminPanel() {
  return (
    <div className="min-h-screen bg-[var(--color-surface-cool)] text-[var(--color-text-primary)]">
      <div className="flex min-h-screen">
        <aside className="w-[290px] shrink-0 bg-[#051838] text-[var(--color-ivory)]">
          <div className="flex items-center gap-3 border-b border-white/10 px-6 py-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-gold)] bg-[rgba(207,140,85,0.12)] text-lg font-semibold text-[var(--color-gold)]">
              P
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-[var(--color-gold)]">Hotel</div>
              <div className="text-xl font-semibold">PNS Nakshatra</div>
            </div>
          </div>

          <nav className="space-y-1 px-4 py-6">
            {navSections.map(([label, Icon]) => (
              <button
                key={label}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm uppercase tracking-[0.12em] transition-colors ${
                  label === "Dashboard"
                    ? "bg-white/8 text-[var(--color-ivory)]"
                    : "text-[var(--color-ivory)]/75 hover:bg-white/5 hover:text-[var(--color-ivory)]"
                }`}
              >
                <span className="flex items-center gap-3">
                  <Icon className="h-4 w-4" />
                  {label}
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
              </button>
            ))}
          </nav>
        </aside>

        <main className="flex-1 p-6 lg:p-8">
          <header className="mb-8 flex flex-col gap-4 border-b border-[var(--color-border-warm)] pb-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-gold)]">Admin Panel</p>
              <h1 className="mt-2 text-4xl leading-none text-[var(--color-text-primary)]">Dashboard</h1>
            </div>
            <button className="luxury-button luxury-button-hover px-5 py-3 text-xs uppercase tracking-[0.14em]">
              New booking
            </button>
          </header>

          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {stats.map((stat) => (
              <article key={stat.label} className="rounded-2xl border border-[var(--color-border-warm)] bg-white/30 p-5 shadow-[0_18px_45px_-30px_rgba(5,24,56,0.45)] backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.14em] text-[var(--color-text-primary)]/70">{stat.label}</span>
                  <BarChart3 className="h-4 w-4 text-[var(--color-gold)]" />
                </div>
                <div className="mt-6 flex items-end justify-between">
                  <strong className="text-3xl font-semibold tracking-[-0.04em] text-[var(--color-text-primary)]">{stat.value}</strong>
                  <span className="text-sm font-medium text-[var(--color-gold)]">{stat.delta}</span>
                </div>
              </article>
            ))}
          </section>

          <section className="mt-8 grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
            <div className="rounded-2xl border border-[var(--color-border-warm)] bg-white/30 p-5 shadow-[0_18px_45px_-30px_rgba(5,24,56,0.45)]">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">Recent Activity</h2>
                <button className="text-xs uppercase tracking-[0.14em] text-[var(--color-gold)]">View all</button>
              </div>

              <div className="space-y-4">
                {recentActivity.map(([title, detail, time]) => (
                  <div key={title} className="flex items-start gap-3 border-b border-[var(--color-border-warm)] pb-3 last:border-b-0 last:pb-0">
                    <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-navy)] text-[var(--color-ivory)]">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-[var(--color-text-primary)]">{title}</p>
                      <p className="mt-1 text-sm text-[var(--color-text-primary)]/70">{detail}</p>
                    </div>
                    <span className="text-xs uppercase tracking-[0.12em] text-[var(--color-gold)]">{time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--color-border-warm)] bg-[#051838] p-5 text-[var(--color-ivory)] shadow-[0_18px_45px_-28px_rgba(5,24,56,0.75)]">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold">Occupancy</h2>
                <Gauge className="h-5 w-5 text-[var(--color-gold)]" />
              </div>

              <div className="space-y-4">
                {["Deluxe", "Premier", "Suites", "Dining"].map((label, index) => (
                  <div key={label}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span>{label}</span>
                      <span className="text-[var(--color-gold)]">{72 + index * 8}%</span>
                    </div>
                    <div className="h-2.5 rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-[var(--color-gold)]" style={{ width: `${72 + index * 8}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-[var(--color-border-warm)] bg-white/30 p-5 shadow-[0_18px_45px_-30px_rgba(5,24,56,0.45)]">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">Rooms</h2>
                <BedDouble className="h-5 w-5 text-[var(--color-gold)]" />
              </div>
              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {roomBreakdown.map((item) => (
                  <div key={item.title} className="rounded-xl border border-[var(--color-border-warm)] bg-[rgba(255,255,255,0.35)] p-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-gold)]">{item.title}</p>
                    <p className="mt-3 text-base font-medium text-[var(--color-text-primary)]">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--color-border-warm)] bg-white/30 p-5 shadow-[0_18px_45px_-30px_rgba(5,24,56,0.45)]">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">Website Content</h2>
                <FileTextIcon className="h-5 w-5 text-[var(--color-gold)]" />
              </div>
              <div className="space-y-3">
                {contentModules.map((item) => (
                  <div key={item.title} className="flex items-center justify-between rounded-xl border border-[var(--color-border-warm)] bg-[rgba(255,255,255,0.35)] p-3">
                    <div>
                      <p className="font-medium text-[var(--color-text-primary)]">{item.title}</p>
                      <p className="text-xs uppercase tracking-[0.12em] text-[var(--color-text-primary)]/60">{item.detail}</p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-[var(--color-gold)]" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {sectionRows.map((section) => (
              <div key={section.label} className="rounded-2xl border border-[var(--color-border-warm)] bg-white/30 p-5 shadow-[0_18px_45px_-30px_rgba(5,24,56,0.45)]">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{section.label}</h3>
                  <span className="rounded-full bg-[var(--color-gold)]/10 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-[var(--color-gold)]">
                    Active
                  </span>
                </div>
                <ul className="space-y-2 text-sm text-[var(--color-text-primary)]/75">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-center justify-between border-b border-[var(--color-border-warm)] pb-2 last:border-b-0 last:pb-0">
                      <span>{item}</span>
                      <span className="h-2 w-2 rounded-full bg-[var(--color-gold)]" />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
