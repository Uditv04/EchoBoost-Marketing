import React from 'react';

const Landing = () => {
  return (
    <>
      <section
        className="bg-cover bg-center py-16"
        style={{ backgroundImage: "url('/Images/pa.png')", opacity: 1 }}
      >
        <div className="home-content text-center">
          <h1 className="text-5xl sm:text-4xl text-white">
            Welcome to EchoBoost Marketing
          </h1>
          <p className="text-xl sm:text-lg mb-5 text-white">
            Your Partner in Digital Success
          </p>
          <a href="/services">
            <button className="bg-transparent border border-transparent text-white px-4 py-2 rounded shadow-[0_0_10px_rgba(12,118,228,0.7)] focus:outline-none focus:ring-2 focus:ring-blue-500">
              Discover Our Services
            </button>
          </a>
        </div>
      </section>

      {/* Services Overview Section */}
      <div className="bg-gradient-to-r from-black via-blue-800 to-purple-900 text-white">
        <section id="services" className="services-overview py-16 px-5 text-center">
          <h2 className="text-5xl sm:text-4xl mb-10 text-white">Our Expertise</h2>
          <div className="services-list flex flex-wrap justify-around text-white">
            <div className="service-item p-5 m-3 w-full sm:w-1/2 md:w-1/3 rounded-lg shadow-[0_0_10px_rgba(12,118,228,0.9)]">
              <h3 className="text-2xl mb-3">Digital Marketing</h3>
              <p>
                Enhance your online presence and drive targeted traffic with our expert digital marketing strategies.
              </p>
            </div>
            <div className="service-item p-5 m-3 w-full sm:w-1/2 md:w-1/3 rounded-lg shadow-[0_0_10px_rgba(12,118,228,0.9)]">
              <h3 className="text-2xl mb-3">SEO & Content Marketing</h3>
              <p>
                Boost your search engine rankings and attract more customers with tailored SEO and content strategies.
              </p>
            </div>
            <div className="service-item p-5 m-3 w-full sm:w-1/2 md:w-1/3 rounded-lg shadow-[0_0_10px_rgba(12,118,228,0.9)]">
              <h3 className="text-2xl mb-3">Social Media Management</h3>
              <p>
                Engage your audience and grow your brand on social media with our effective management solutions.
              </p>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="about-us py-8 px-5 text-center">
          <h2 className="text-4xl sm:text-3xl mb-10">About EchoBoost Marketing</h2>
          <p className="max-w-[800px] my-0 mx-auto text-lg sm:text-base">
            At EchoBoost Marketing, we are committed to helping businesses achieve their marketing goals. With a team
            of experienced professionals, we provide customized strategies that drive results and ensure long-term
            success.
          </p>
        </section>

        {/* Client Testimonials Section */}
        <section className="testimonials py-16 px-5 text-center">
          <h2 className="text-4xl sm:text-3xl mb-5">What Our Clients Say</h2>
          <div className="testimonial-list flex flex-wrap justify-around">
            <div className="testimonial-item p-5 m-3 w-full sm:w-1/2 md:w-2/5 rounded-lg shadow-[0_0_10px_rgba(12,118,228,0.7)]">
              <p className="mb-3 text-lg sm:text-base">
                "EchoBoost transformed our digital presence. Their expertise in SEO and content marketing is unmatched."
              </p>
              <span className="text-base">- Jane Doe, CEO of XYZ Corp</span>
            </div>
            <div className="testimonial-item p-5 m-3 w-full sm:w-1/2 md:w-2/5 rounded-lg shadow-[0_0_10px_rgba(12,118,228,0.7)]">
              <p className="mb-3 text-lg sm:text-base">
                "Thanks to EchoBoost, our social media engagement has skyrocketed. Highly recommend their services!"
              </p>
              <span className="text-base">- John Smith, Marketing Director at ABC Ltd</span>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="cta py-16 px-5 text-center">
          <h2 className="mb-5 text-3xl sm:text-2xl">Ready to Grow Your Business?</h2>
          <p className="text-xl sm:text-lg mb-8">
            Contact us today to discuss how we can help you achieve your marketing goals. Our team is ready to provide
            you with the best solutions tailored to your needs.
          </p>
          <a
            href="/contact"
            className="bg-transparent border border-transparent text-white px-4 py-2 rounded shadow-[0_0_10px_rgba(12,118,228,0.7)] focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <button>Get in Touch</button>
          </a>
        </section>
      </div>
    </>
  );
};

export default Landing;
