const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      company: "Principal, Delhi Public School",
      quote:
        '"We were drowning in paperwork. Now parents get SMS alerts for everything, fees are collected on time, and our teachers save 3 hours daily. The system paid for itself in 2 months."',
      initial: "P",
      industry: "Education",
      rating: 5,
    },
    {
      name: "Dr. Rajesh Kumar",
      company: "Owner, Kumar Nursing Home",
      quote:
        '"Patient wait time reduced from 3 hours to 45 minutes. Insurance claims that took 2 weeks now take 2 days. Our revenue increased by 40% in 6 months."',
      initial: "R",
      industry: "Healthcare",
      rating: 5,
    },
    {
      name: "Amit Singh",
      company: "Contractor, Singh Builders",
      quote:
        '"We used to lose 20% of our budget on material wastage. Now we track everything in real-time. Last project was completed 2 weeks early and 15% under budget."',
      initial: "A",
      industry: "Construction",
      rating: 5,
    },
  ];

  const renderStars = () => (
    <div className="flex text-yellow-400 mb-2">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section id="testimonials" className="bg-neutral-900 py-10 text-white sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-5 text-center">
          <div className="mb-2 inline-flex items-center rounded-full border border-blue-500/30 bg-gradient-to-r from-blue-500/20 to-teal-500/20 px-3 py-1.5 text-sm font-medium">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-green-400"></span>
            Client stories
          </div>
          <h2 className="mb-1 text-3xl font-bold">
            What teams say after going live
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-gray-400">
            Schools, clinics, and project teams using Digital Fuzed day to day.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="h-full rounded-2xl border border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900 p-6 sm:p-8"
                >
                  <div className="mb-6 flex items-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-teal-500 shadow-lg">
                      <span className="text-xl font-bold text-white">
                        {testimonial.initial}
                      </span>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.company}</p>
                      <div className="mt-1 inline-flex items-center rounded-full bg-blue-500/20 px-2 py-1 text-xs text-blue-400">
                        {testimonial.industry}
                      </div>
                    </div>
                  </div>
                  <div className="mb-6">{renderStars()}</div>
                  <p className="leading-relaxed text-gray-300">{testimonial.quote}</p>
                </div>
              ))}
            </div>
      </div>
    </section>
  );
};

export default Testimonials;
