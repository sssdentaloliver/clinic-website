'use client';

import { Clock, CheckCircle, XCircle } from 'lucide-react';

export default function OperatingHoursSection() {
  const schedule = [
    { day: 'Monday', hours: '8:30 AM - 4:30 PM', isOpen: true },
    { day: 'Tuesday', hours: '8:30 AM - 4:30 PM', isOpen: true },
    { day: 'Wednesday', hours: '8:30 AM - 4:30 PM', isOpen: true },
    { day: 'Thursday', hours: '8:30 AM - 4:30 PM', isOpen: true },
    { day: 'Friday', hours: 'Special Appointments Only', isOpen: true, special: true },
    { day: 'Saturday', hours: 'Closed', isOpen: false },
    { day: 'Sunday', hours: 'Closed', isOpen: false },
  ];

  return (
    <section id="schedule" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Operating Hours
          </h2>
          <p className="text-lg text-gray-600">
            We're here to serve you throughout the week
          </p>
        </div>

        {/* Hours Card */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 px-8 py-6">
            <div className="flex items-center justify-center text-white">
              <Clock className="w-7 h-7 mr-3" />
              <h3 className="text-2xl font-bold">Weekly Schedule</h3>
            </div>
          </div>

          {/* Schedule List */}
          <div className="divide-y divide-gray-200">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between px-6 sm:px-8 py-5 hover:bg-gray-50 transition-colors"
              >
                {/* Day with Icon */}
                <div className="flex items-center space-x-3">
                  {item.isOpen ? (
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                  <span className="text-lg font-medium text-gray-900">
                    {item.day}
                  </span>
                </div>

                {/* Hours */}
                <span
                  className={`text-base sm:text-lg font-semibold ${
                    item.isOpen
                      ? item.special
                        ? 'text-blue-600'
                        : 'text-blue-600'
                      : 'text-gray-400'
                  }`}
                >
                  {item.hours}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            For emergency appointments or special requests, please call us directly
          </p>
        </div>
      </div>
    </section>
  );
}