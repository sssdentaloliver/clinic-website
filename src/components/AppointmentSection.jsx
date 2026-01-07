'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function AppointmentSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    date: '',
    time: '',
    reason: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setMessage('✅ Appointment request sent! We\'ll contact you within 24 hours.');
      setFormData({
        name: '', phone: '', email: '', city: '', date: '', time: '', reason: ''
      });
    } catch (error) {
      setMessage('❌ Something went wrong. Please try again.');
      console.error('EmailJS error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="appointment" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Book Your Appointment
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Take the first step towards a healthier smile
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 px-6 sm:px-8 py-4 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
              <span className="text-white text-xl">📅</span>
            </div>
            <h3 className="text-white text-lg sm:text-xl font-semibold">
              Schedule Your Visit
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="px-4 sm:px-8 py-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Full Name *</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full rounded-lg placeholder-gray-400 text-gray-900 border border-gray-300 px-3 py-2.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Phone Number *</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  required
                  placeholder="+1 (250) XXX-XXXX"
                  className="w-full rounded-lg text-gray-900 placeholder-gray-400 border border-gray-300 px-3 py-2.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Email Address *</label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full rounded-lg text-gray-900 placeholder-gray-400 border border-gray-300 px-3 py-2.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">City</label>
                <input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Oliver, BC"
                  className="w-full rounded-lg text-gray-900 placeholder-gray-400 border border-gray-300 px-3 py-2.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Preferred Date *</label>
                <input
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  type="date"
                  required
                  className="w-full rounded-lg placeholder-gray-400 text-gray-900 border border-gray-300 px-3 py-2.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Preferred Time</label>
                <input
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  type="time"
                  className="w-full rounded-lg text-gray-900 placeholder-gray-400 border border-gray-300 px-3 py-2.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Reason for Visit</label>
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                rows={4}
                placeholder="Please describe your dental needs or concerns..."
                className="w-full rounded-lg text-gray-900 placeholder-gray-400 border border-gray-300 px-3 py-2.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 text-sm sm:text-base font-semibold text-white shadow-md hover:from-blue-700 hover:to-cyan-600 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {loading ? 'Sending...' : 'Submit Appointment Request'}
            </button>

            {message && (
              <div className="text-center py-3 px-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-green-800">{message}</p>
              </div>
            )}

            <p className="text-xs sm:text-sm text-gray-500 text-center">
              We'll contact you within 24 hours to confirm your appointment.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
