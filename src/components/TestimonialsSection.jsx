'use client';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Karen',
      text: "I really like Dr.Singh. He is caring and considerate. I am a very nervous patient requiring sedatives for dental work. Dr.Singh and his assistants make me as comfortable as possible.....",
    },
    {
      name: 'Paul Bulbeck',
      text: "Doctor Singh, his assistants and his receptionist were great. They couldn't have been more friendly, helpful and accommodating. We would have stayed if we hadn't of moved. We hope......",
    },
    {
      name: 'Rena Armstrong',
      text: "I really can not say enough good things about Doctor Singh and the staff. It’s a very rare thing to have someone care the way Doctor S does. He’s kind and patient and cares about my pain. He had .....",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            What Our Patients Say
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from our valued patients
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 px-6 py-8 sm:px-8 sm:py-10 flex flex-col items-center text-center hover:shadow-lg hover:border-blue-300 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-4 text-blue-500">
                <span className="text-4xl sm:text-5xl leading-none">”</span>
              </div>

              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-yellow-400"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81H7.03a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                “{item.text}”
              </p>

              {/* Divider */}
              <div className="w-16 h-px bg-gray-200 mb-4" />

              {/* Name */}
              <p className="text-sm sm:text-base font-semibold text-gray-900">
                {item.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
