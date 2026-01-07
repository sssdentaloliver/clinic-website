"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textClasses = scrolled
    ? "text-white/90 hover:text-blue-200"
    : "text-gray-900 hover:text-blue-600";

  const logoTextClass = scrolled ? "text-white" : "text-gray-900";

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled ? "bg-black/70 shadow-lg" : "bg-white/80 shadow-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}

          <Link href="/" className="flex-shrink-0">
            <img
              src="/logo.png"
              alt="SSS Dental Oliver"
              className="h-14 w-auto max-w-[300px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#services"
              className={`${textClasses} font-medium transition-colors`}
            >
              Services
            </Link>
            <Link
              href="#about"
              className={`${textClasses} font-medium transition-colors`}
            >
              About Us
            </Link>
            <Link
              href="#schedule"
              className={`${textClasses} font-medium transition-colors`}
            >
              Schedule
            </Link>
            <Link
              href="#testimonials"
              className={`${textClasses} font-medium transition-colors`}
            >
              Testimonials
            </Link>
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (window.openInsuranceModal) window.openInsuranceModal();
              }}
              className={`${textClasses} font-medium transition-colors`}
            >
              Insurance Info
            </Link>

            <Link
              href="#appointment"
              className={`px-6 py-2.5 rounded-lg font-medium transition-colors ${
                scrolled
                  ? "bg-blue-600 text-white hover:bg-blue-500"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? "text-white/90 hover:bg-white/10"
                : "text-gray-900 hover:bg-gray-200"
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className={`md:hidden py-4 border-t transition-colors ${
              scrolled
                ? "border-white/10 bg-black/70"
                : "border-gray-200 bg-white/90"
            }`}
          >
            <div className="flex flex-col space-y-4">
              <Link
                href="#services"
                className={`${textClasses} font-medium transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#about"
                className={`${textClasses} font-medium transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="#schedule"
                className={`${textClasses} font-medium transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Schedule
              </Link>
              <Link
                href="#testimonials"
                className={`${textClasses} font-medium transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (window.openInsuranceModal) window.openInsuranceModal();
                }}
                className={`${textClasses} font-medium transition-colors`}
              >
                Insurance Info
              </Link>

              <Link
                href="#appointment"
                className={`px-6 py-2.5 rounded-lg font-medium transition-colors text-center ${
                  scrolled
                    ? "bg-blue-600 text-white hover:bg-blue-500"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
