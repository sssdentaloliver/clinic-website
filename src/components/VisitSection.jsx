'use client';

import { MapPin, Phone, Mail } from 'lucide-react';

export default function VisitSection() {
  return (
    <section id="visit" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Visit Us
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Find us in the heart of Oliver, BC
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-base text-gray-600">
            SSS Dental Oliver is a modern dental clinic located in Oliver,
            providing quality dental care including root canal treatment,
            cosmetic dentistry, teeth whitening, and preventive oral healthcare.
            Our clinic serves patients from Oliver and nearby areas.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Map */}
          <div className="w-full h-72 sm:h-80 md:h-96 overflow-hidden rounded-2xl shadow-lg border border-gray-200">
            <iframe
              title="Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2608.100475172534!2d-119.5519282!3d49.179680000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5482ea377f04d29b%3A0x90cb41c4ec1fe425!2sDr.%20Daniel%20H.P.%20Ng%20Dental%20Office!5e0!3m2!1sen!2sin!4v1767782232083!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-4 sm:space-y-5">
            {/* Address */}
            <div className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white px-5 py-4 sm:px-6 sm:py-5 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Address</p>
                <p className="text-sm sm:text-base text-gray-600">
                  5980 Main Street, Oliver, BC, Canada
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white px-5 py-4 sm:px-6 sm:py-5 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Phone</p>
                <a
                  href="tel:+1 250-498-2646"
                  className="text-sm sm:text-base text-blue-600 hover:underline"
                >
                  +1 (250) 498-2646
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white px-5 py-4 sm:px-6 sm:py-5 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">Email</p>
                <a
                  href="mailto:info@sssdentaloliver.com"
                  className="text-sm sm:text-base text-blue-600 hover:underline break-all"
                >
                  info@sssdentaloliver.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
