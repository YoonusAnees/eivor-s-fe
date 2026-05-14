import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const Footer = () => {
  const socialIcons = [
    {
      name: "Instagram",
      path: "#",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      name: "Tiktok",
      path: "#",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      path: "#",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9L21 4.5Z" />
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
          <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
          <path d="M9.5 13a3.5 3.5 0 0 0 5 0" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-black/5 bg-[#f8f8f8] px-6 py-16 md:px-10 lg:px-20">
      
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.05),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        
        {/* TOP SECTION */}
        <div className="grid gap-14 border-b border-black/5 pb-14 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          
          {/* BRAND */}
          <div className="flex flex-col">
            
            {/* LOGO */}
            <Link
              to="/"
              className="mb-6 flex items-center gap-4"
            >
              <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
                <img
                  src="/siteicon.PNG"
                  alt="Eivor"
                  className="h-full w-full object-contain p-2"
                />
              </div>

              <div>
                <h2 className="text-2xl font-black tracking-tight text-black">
                  Eivor.s
                </h2>

                <p className="mt-1 text-xs uppercase tracking-[0.35em] text-gray-400">
                  Luxury Wear
                </p>
              </div>
            </Link>

            <p className="max-w-sm text-sm leading-7 text-gray-500">
              Redefining modern luxury with timeless silhouettes, premium
              fabrics, and elevated minimalist aesthetics.
            </p>

            {/* SOCIALS */}
            <div className="mt-7 flex items-center gap-3">
              {socialIcons.map((icon) => (
                <a
                  key={icon.name}
                  href={icon.path}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:text-black hover:shadow-lg"
                >
                  {icon.svg}
                </a>
              ))}
            </div>
          </div>

          {/* COLLECTION */}
          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-black">
              Collection
            </h4>

            <ul className="space-y-4">
              {[
                "All Products",
                "New Arrivals",
                "Featured",
                "Sale Collection",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/products"
                    className="text-sm text-gray-500 transition hover:text-black"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-black">
              Company
            </h4>

            <ul className="space-y-4">
              {[
                "Our Story",
                "Contact Us",
                "Privacy Policy",
                "Terms & Conditions",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="text-sm text-gray-500 transition hover:text-black"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="flex flex-col">
            <h4 className="mb-6 text-xs font-bold uppercase tracking-[0.35em] text-black">
              Newsletter
            </h4>

            <p className="mb-5 text-sm leading-7 text-gray-500">
              Subscribe for early access, exclusive drops and limited offers.
            </p>

            <div className="rounded-2xl border border-black/10 bg-white p-2 shadow-sm">
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="h-12 w-full bg-transparent px-3 text-sm outline-none placeholder:text-gray-400"
                />

                <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-black text-white transition hover:bg-neutral-800">
                  <Mail size={17} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-center md:flex-row md:text-left">
          
          <p className="text-[11px] uppercase tracking-[0.28em] text-gray-400">
            © 2026 Eivor. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] uppercase tracking-[0.28em] text-gray-400">
            <Link to="/privacy" className="transition hover:text-black">
              Privacy
            </Link>

            <Link to="/terms" className="transition hover:text-black">
              Terms
            </Link>

            <Link to="/contact" className="transition hover:text-black">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;