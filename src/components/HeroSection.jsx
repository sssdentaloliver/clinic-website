'use client';

import { Calendar, Phone, MapPin, Clock, PhoneCall } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        //poster="/hero-poster.jpg" // Optional: add a poster image as fallback
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        {/* Fallback gradient if video doesn't load */}
      </video>

      {/* Gradient Overlay for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-blue-900/80 via-blue-700/40 to-teal-600/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-3xl">
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white block">Your Smile,</span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-teal-400 block">
              Our Priority
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-white text-lg sm:text-xl  leading-relaxed">
            Comprehensive dental care for the whole family in Oliver, BC.
          </p>
          <p className="text-white text-lg sm:text-xl mb-10 leading-relaxed">
            Experience excellence in dentistry with Dr. Daniel Ng and <br />Dr. Sukhwinder Singh.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#appointment"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-full hover:from-teal-600 hover:to-cyan-600 transition-all shadow-lg hover:shadow-xl"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment
            </a>
            <a
              href="tel:+1 250-498-2646"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-900 transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </a>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Location Card */}
            <div className="bg-blue-800/40 backdrop-blur-sm border border-blue-600/30 rounded-2xl p-6 hover:bg-blue-800/50 transition-all">
              <MapPin className="w-8 h-8 text-teal-400 mb-3" />
              <h3 className="text-white font-semibold text-lg mb-2">Location</h3>
              <p className="text-blue-100 text-sm">
                5980 Main Street, Oliver, BC, Canada
              </p>
            </div>

            {/* Hours Card */}
            <div className="bg-blue-800/40 backdrop-blur-sm border border-blue-600/30 rounded-2xl p-6 hover:bg-blue-800/50 transition-all">
              <Clock className="w-8 h-8 text-teal-400 mb-3" />
              <h3 className="text-white font-semibold text-lg mb-2">Hours</h3>
              <p className="text-blue-100 text-sm">
                Mon-Thu: 8:30 AM - 4:30 PM
                Friday: Special Appointments
              </p>
            </div>

            {/* Contact Card */}
            <div className="bg-blue-800/40 backdrop-blur-sm border border-blue-600/30 rounded-2xl p-6 hover:bg-blue-800/50 transition-all sm:col-span-2 lg:col-span-1">
              <PhoneCall className="w-8 h-8 text-teal-400 mb-3" />
              <h3 className="text-white font-semibold text-lg mb-2">Contact</h3>
              <p className="text-blue-100 text-sm">
                +1 (250) 498-2646
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Wavy Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}