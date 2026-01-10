'use client';

import Image from 'next/image';

export default function DoctorSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Doctor
          </h2>
          <p className="text-lg text-gray-600">
            Dedicated to excellence in dental care
          </p>
        </div>

        {/* Doctor Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Doctor Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl h-[400px] lg:h-[500px]">
            <Image
              src="/doctor.png"
              alt="Dr. Sukhwinder Singh"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay with Doctor Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/90 to-transparent p-8">
              <h3 className="text-3xl font-bold text-white mb-2">
                Dr. Sukhwinder Singh
              </h3>
              <p className="text-blue-100 text-lg">
                Doctor of Dental Surgery
              </p>
            </div>
          </div>

          {/* Doctor Bio */}
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-10 border border-gray-200">
            <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
              Dr Sukhwinder Singh received his bachelors in Dentistry in 2009. He practiced and gained foreign clinical experience from 2010 to 2016 and started Practicing in Okanagan Region in 2022 and has been serving local community since then. In 2025 he got the opportunity to carry forward Dr Daniel Ng's Mission and long established legacy of serving local community in Oliver and surrounding areas by taking over his practice operations. He is an active member of BCDA (British Columbia Dental Association). He is still actively learning to improve and further polish his skills on ongoing basis to remain upto date and serve his clients to the best of the best.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}