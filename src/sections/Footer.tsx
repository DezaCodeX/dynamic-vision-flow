import { Facebook, Instagram, MapPin, Phone } from "lucide-react";
import logo from "@/assets/pns logo.png";

const navigation = [
  ["Home", "/"],
  ["About Us", "/about-us"],
  ["Rooms", "/rooms"],
  ["Dining", "/dining"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
] as const;

export function Footer({ onBook }: { onBook: () => void }) {
  return (
    <footer
      className="site-footer border-t border-[#B98A50]/30 bg-[#CFDCDF] text-[#293863]"
      style={{
        backgroundColor: "#293863",
      }}
    >
      {/* Main footer */}
      <div className="mx-auto max-w-[1400px] px-6 py-5 sm:px-8 lg:px-12 lg:py-6">
        <div
          className="
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
            lg:grid-cols-[1.15fr_0.65fr_1fr_0.9fr]
            lg:items-start
            lg:gap-10
          "
        >
          {/* BRAND */}
          <div className="flex flex-col items-start">
            <a
              href="/"
              aria-label="Hotel PNS Nakshatra home"
              className="inline-flex items-center"
            >
              <img
                src={logo}
                alt="Hotel PNS Nakshatra"
                className="h-9 w-auto object-contain"
              />
            </a>

            <button
              onClick={onBook}
              className="
                luxury-button
                luxury-button-hover
                mt-2.5
                px-4
                py-1.5
                text-[0.68rem]
              "
            >
              Book your stay
            </button>
          </div>

          {/* EXPLORE */}
          <div>
            <p className="eyebrow text-[#D99A5B]">
              Explore
            </p>

            <nav
              className="
                mt-2
                grid
                grid-cols-2
                gap-x-5
                gap-y-1
                text-[0.8rem]
                leading-[1.25]
                text-[#F3F0E8]/90
              "
            >
              {navigation.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="
                    transition-colors
                    duration-200
                    hover:text-[#D99A5B]
                  "
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* REACH OUT */}
          <div>
            <p className="eyebrow text-[#D99A5B]">
              Reach out
            </p>

            <address
              className="
                mt-2
                grid
                gap-1
                text-[0.8rem]
                leading-[1.3]
                text-[#F3F0E8]/90
                not-italic
              "
            >
              <span>
                No. 171, Arcot Main Road,
                <br />
                Rangapuram,
                <br />
                Vellore - 632009,
                <br />
                Tamil Nadu, India.
              </span>

              <a
                href="https://maps.app.goo.gl/MhVVYxgfvEiwWW6d8"
                target="_blank"
                rel="noreferrer"
                className="
                  mt-0.5
                  inline-flex
                  items-center
                  gap-1.5
                  text-[#D99A5B]
                  transition-colors
                  hover:text-[#F3F0E8]
                "
              >
                <MapPin className="size-3.5 shrink-0" />
                Get directions
              </a>

              <a
                href="tel:+914162266111"
                className="transition-colors hover:text-[#D99A5B]"
              >
                0416 2266111 / 0416 2266222
              </a>

              <a
                href="tel:+917598498603"
                className="transition-colors hover:text-[#D99A5B]"
              >
                Room reservations: +91 75984 98603
              </a>

              <a
                href="mailto:fo@hotelpnsnakshatra.com"
                className="transition-colors hover:text-[#D99A5B]"
              >
                fo@hotelpnsnakshatra.com
              </a>
            </address>
          </div>

          {/* DINING CONTACTS */}
          <div>
            <p className="eyebrow text-[#D99A5B]">
              Dining contacts
            </p>

            <div
              className="
                mt-2
                grid
                gap-1
                text-[0.8rem]
                leading-[1.3]
                text-[#F3F0E8]/90
              "
            >
              <a
                href="tel:+917598498605"
                className="transition-colors hover:text-[#D99A5B]"
              >
                CLINQ - Bar: +91 75984 98605
              </a>

              <a
                href="tel:+917598498603"
                className="transition-colors hover:text-[#D99A5B]"
              >
                Vrindavan: +91 75984 98603
              </a>

              <a
                href="tel:+917598498602"
                className="transition-colors hover:text-[#D99A5B]"
              >
                Cloud 9: +91 75984 98602
              </a>
            </div>

            {/* SOCIAL ICONS */}
            <div className="mt-2.5 flex items-center gap-3 text-[#D99A5B]">
              <a
                href="https://www.facebook.com/pnsnakshatra"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="transition-colors hover:text-[#F3F0E8]"
              >
                <Facebook className="size-[17px]" />
              </a>

              <a
                href="https://www.instagram.com/hotelpnsnakshatra"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="transition-colors hover:text-[#F3F0E8]"
              >
                <Instagram className="size-[17px]" />
              </a>

              <a
                href="tel:+917598498603"
                aria-label="Call reservations"
                className="transition-colors hover:text-[#F3F0E8]"
              >
                <Phone className="size-[17px]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#D99A5B]/20">
        <div
          className="
            mx-auto
            flex
            max-w-[1400px]
            flex-col
            gap-2
            px-6
            py-2
            text-[0.58rem]
            uppercase
            tracking-[0.12em]
            text-[#F3F0E8]/65
            sm:px-8
            lg:flex-row
            lg:items-center
            lg:justify-between
            lg:px-12
          "
        >
          <span className="whitespace-nowrap">
            © {new Date().getFullYear()} Hotel PNS Nakshatra
          </span>

          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <a
              href="/privacy-policy"
              className="transition-colors hover:text-[#D99A5B]"
            >
              Privacy policy
            </a>

            <a
              href="/terms-and-conditions"
              className="transition-colors hover:text-[#D99A5B]"
            >
              Terms and conditions
            </a>

            <a
              href="/refund-cancellation-policy"
              className="transition-colors hover:text-[#D99A5B]"
            >
              Refund &amp; cancellation policy
            </a>
          </div>

          <span className="whitespace-nowrap">
            Powered by PNS Nakshatra
          </span>
        </div>
      </div>
    </footer>
  );
}
