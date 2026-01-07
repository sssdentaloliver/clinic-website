'use client';

import { ClipboardList, Wrench, HeartPulse, Shield, Sparkles, Users } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: ClipboardList,
      title: 'Comprehensive Evaluation',
      description: 'Thorough dental examinations to assess your oral health and create personalized treatment plans.',
    },
    {
      icon: Wrench,
      title: 'Restorative Dentistry',
      description: "Expert fillings, crowns, and bridges to restore your teeth's function and appearance.",
    },
    {
      icon: HeartPulse,
      title: 'Rehabilitative Dentistry',
      description: 'Comprehensive rehabilitation services to restore full mouth function and aesthetics.',
    },
    {
      icon: Shield,
      title: 'Health Maintenance',
      description: 'Regular cleanings and preventive care to keep your smile healthy and bright.',
    },
    {
      icon: Sparkles,
      title: 'Esthetic Dentistry',
      description: 'Cosmetic procedures including whitening, veneers, and bonding for your perfect smile.',
    },
    {
      icon: Users,
      title: 'Family Dentistry',
      description: 'Comprehensive dental care for patients of all ages, from children to seniors.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive dental care tailored to your unique needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}