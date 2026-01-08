'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-900 to-blue-900 text-gray-200 pt-12 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-white/10">
          {/* Brand */}
          <div className="space-y-3">
            <Link href="/" className="flex-shrink-0">
            <img
              src="/logooo.png"
              alt="SSS Dental Oliver"
              className="h-14 w-auto max-w-[300px]"
            />
          </Link>
            <p className="text-sm text-gray-300 pl-4 leading-relaxed max-w-xs">
              Providing exceptional dental care to the Oliver community and surrounding areas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#services" className="hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#schedule" className="hover:text-white transition">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="#appointment" className="hover:text-white transition">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-cyan-400" />
                <span>5980 Main Street, Oliver, BC, Canada</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-cyan-400" />
                <a href="tel:+1 250-498-2646" className="hover:text-white transition">
                  +1 (250) 498-2646
                </a>
              </li>
              <li className="flex items-start gap-2 break-all">
                <Mail className="w-4 h-4 mt-0.5 text-cyan-400" />
                <a
                  href="mailto:info@sssdentaloliver.com"
                  className="hover:text-white transition"
                >
                  info@sssdentaloliver.com
                </a>
              </li>
            </ul>
          </div>

          {/* Office Hours & Social */}
          <div className="space-y-3">
            <div>
              <h3 className="text-sm font-semibold mb-2">Office Hours</h3>
              <p className="text-sm">Mon – Thu: 8:30 AM – 4:30 PM</p>
              <p className="text-sm">Friday: Special Appointments</p>
              <p className="text-sm">Sat – Sun: Closed</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-2">Follow Us</h3>
              <div className="flex items-center gap-3">
                <Link
                  href="#"
                  aria-label="Facebook"
                  className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center text-gray-200 hover:text-white hover:border-white transition"
                >
                  <Facebook className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  aria-label="Instagram"
                  className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center text-gray-200 hover:text-white hover:border-white transition"
                >
                  <Instagram className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  aria-label="Twitter"
                  className="h-8 w-8 rounded-full border border-white/20 flex items-center justify-center text-gray-200 hover:text-white hover:border-white transition"
                >
                  <Twitter className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-4 text-center text-xs text-gray-400">
          © 2026 SSS Dental Oliver. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
