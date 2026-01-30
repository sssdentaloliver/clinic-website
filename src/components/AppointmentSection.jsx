'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Calendar } from 'lucide-react';

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

  const akituOneLink = "https://sssdentaloliver.akituone.cloud/online-booking/sss-dental-oliver"; // Replace with actual booking link

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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" text-center mb-10">
          <h2 className="text-4xl  sm:text-5xl font-bold text-blue-600 mb-3">
            Book Your Dental Appointment in Oliver, BC
          </h2>
          <p className="text-base sm:text-lg md:text-2xl text-gray-600">
            Schedule your visit with SSS Dental Oliver today and take the first step toward a healthier, more confident smile.
          </p>
        </div>

        {/* Akitu One Booking Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative w-full max-w-4xl mx-auto">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-blue-400 to-pink-200 rounded-3xl blur-xl opacity-20"></div>
            
            {/* Glass Container */}
            <div className="relative bg-white/40 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-white/50">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
                
                {/* Left Section - Text */}
                <div className="flex-1 space-y-2 text-center md:text-left">
                  <div className="inline-block">
                    <Calendar className="w-7 h-7 text-blue-500 mb-2 mx-auto md:mx-0" />
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 ">
                    Book on Akitu One App:
                  </h3>
                  <p className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-red-700 to-red-400 text-transparent bg-clip-text">
                    Canada's favourite dental software
                  </p>
                  
                  <p className="text-gray-600 text-sm">
                    Schedule your appointment easily through our modern booking system
                  </p>
                </div>

                {/* Right Section - QR & Button */}
                <div className="flex-shrink-0 w-full md:w-auto">
                  {/* Glass Card for QR */}
                  <div className="bg-gradient-to-br from-gray-100/60 to-gray-200/40 backdrop-blur-lg rounded-2xl p-5 shadow-lg border border-white/60 max-w-xs mx-auto">
                    <div className="text-center space-y-3">
                      
                      
                      {/* Button */}
                      <a
                        href={akituOneLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full"
                      >
                        <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2.5 px-5 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm">
                          Click To Book
                        </button>
                      </a>
                      
                      <div className="text-gray-600 font-medium text-sm">OR</div>
                      
                      {/* QR Code Container */}
                      <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-inner">
                        <img 
                          src="qr.png" 
                          alt="QR Code for Akitu One"
                          className="w-40 h-40 mx-auto"
                        />
                      </div>
                      
                      <p className="text-xs text-gray-500">Scan to book instantly</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>

        {/* Divider with text */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          <span className="text-sm font-medium text-gray-500">Or fill out the form below</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
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
              We'll try to contact you within 24 hours to confirm your appointment.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}