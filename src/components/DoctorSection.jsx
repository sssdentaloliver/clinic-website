"use client";

import Image from "next/image";

export default function DoctorSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-6">
            About Us
          </h2>
          <p className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto">
            At SSS Dental Oliver, our dental team proudly serves patients across
            Oliver, British Columbia with professional, patient-centered care.
          </p>
        </div>

        {/* Doctor Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Doctor Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl h-[350px] md:h-[400px] lg:h-[500px]">
            <Image
              src="/doctorr.webp"
              alt="Dr. Sukhwinder Singh"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay with Doctor Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/90 to-transparent p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Dr. Sukhwinder Singh
              </h3>
              <p className="text-blue-100 text-lg">General Dentist</p>
            </div>
          </div>

          {/* Doctor Bio */}
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-10 border border-gray-200">
            <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
              Dr. Sukhwinder Singh earned his Bachelor’s Degree in Dentistry in
              2009 and went on to gain extensive international clinical
              experience while practicing from 2010 to 2016. In 2022, Dr. Singh
              relocated to the Okanagan region, where he has been proudly
              serving the local community with compassionate and comprehensive
              dental care. In 2025, he had the honor of continuing Dr. Daniel
              Ng’s long-standing mission and legacy of serving the residents of
              Oliver and surrounding areas by taking over the practice
              operations. Dr. Singh is an active member of the British Columbia
              Dental Association (BCDA) and is committed to ongoing education,
              ensuring his patients benefit from the latest techniques,
              technologies, and best practices in modern dentistry.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
