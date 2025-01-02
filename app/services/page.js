import Image from 'next/image';

function ServiceItem({ title, description, list, imgSrc }) {
  return (
    <div className="service-item [background:radial-gradient(105%_200%_at_80%_80%,#000_40%,#23e_100%)] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <h2 className="text-xl sm:text-2xl font-semibold text-white text-center">{title}</h2>
      <p className="mt-4 text-sm sm:text-base text-white">{description}</p>
      <ul className="mt-4 list-disc pl-6">
        {list.map((item, index) => (
          <li key={index} className="text-sm sm:text-base text-white">{item}</li>
        ))}
      </ul>
      <Image 
  src={imgSrc} 
  alt={title} 
  width={500} 
  height={155} 
  style={{ objectFit: 'cover' }} 
  className="mt-6 rounded-lg w-full" 
/>

    </div>
  );
}

const Services = () => {
  return (
    <div className="container mx-auto p-6 bg-gradient-to-r from-black via-blue-800 to-purple-900 text-white">
      {/* Services Intro Section */}
      <section className="text-center mb-12">
        <h1 className="text-2xl sm:text-3xl font-bold">Our Services</h1>
        <p className="mt-4 text-sm sm:text-lg">
          At EchoBoost Marketing, we offer a range of specialized services designed to elevate your business and maximize your online presence. Our team of experts is dedicated to delivering tailored solutions to meet your unique needs.
        </p>
      </section>

      {/* Services List */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceItem 
          title="Digital Marketing"
          description="Enhance your online visibility with our comprehensive digital marketing strategies. From SEO to email marketing, we craft solutions that drive results."
          list={["Search Engine Optimization (SEO)", "Pay-Per-Click (PPC) Advertising", "Email Marketing Campaigns", "Content Creation and Marketing"]}
          imgSrc="/images/dm1.png"
        />
        <ServiceItem 
          title="SEO & Content Marketing"
          description="Boost your search engine rankings and attract more traffic with our expert SEO and content marketing services. We help you create content that resonates with your audience and ranks well on search engines."
          list={["Keyword Research and Optimization", "On-Page and Off-Page SEO", "Content Strategy and Development", "Link Building"]}
          imgSrc="/images/seo&cm.png"
        />
        <ServiceItem 
          title="Social Media Management"
          description="Engage with your audience and build your brand presence across social media platforms. Our social media management services ensure your brand stays active and relevant in the digital space."
          list={["Social Media Strategy and Planning", "Content Creation and Scheduling", "Community Management", "Analytics and Reporting"]}
          imgSrc="/images/smm.png"
        />
        <ServiceItem 
          title="Brand Strategy"
          description="Develop a strong and recognizable brand identity with our brand strategy services. We help you define your brand's voice, vision, and values to connect with your target audience effectively."
          list={["Brand Positioning and Messaging", "Market Research and Analysis", "Visual Identity Design", "Brand Guidelines"]}
          imgSrc="/images/brand strategy.png"
        />
        <ServiceItem 
          title="Paid Advertising"
          description="Drive targeted traffic and increase conversions with our paid advertising solutions. We create and manage ad campaigns across various platforms to ensure you get the best return on investment."
          list={["Google Ads Management", "Social Media Advertising", "Display Advertising", "Retargeting Campaigns"]}
          imgSrc="/images/pa.png"
        />
      </section>

      {/* Why Choose Us */}
      <section className="text-center mt-16">
        <h2 className="text-xl sm:text-2xl font-semibold">Why Choose EchoBoost Marketing?</h2>
        <p className="mt-4 text-sm sm:text-lg">We are dedicated to providing exceptional marketing services tailored to your needs. Here’s why our clients choose us:</p>
        <ul className="mt-4 text-left max-w-lg mx-auto space-y-2">
          <li className="text-sm sm:text-base">Experienced Team of Professionals</li>
          <li className="text-sm sm:text-base">Customized Strategies for Your Business</li>
          <li className="text-sm sm:text-base">Data-Driven Approach for Optimal Results</li>
          <li className="text-sm sm:text-base">Commitment to Transparency and Communication</li>
        </ul>
        <Image 
  src="/images/business plan.jpg" 
  alt="Business Plan" 
  width={900} 
  height={300} 
  className="mt-6 mx-auto" 
  style={{ width: '100%', height: 'auto' }}
/>

      </section>

      {/* Call-to-Action */}
      <section className="text-center [background:radial-gradient(105%_200%_at_50%_80%,#000_40%,#43e_100%)] text-white p-12 mt-16">
        <h2 className="text-xl sm:text-3xl font-semibold">Ready to Elevate Your Business?</h2>
        <p className="mt-4 text-sm sm:text-lg">Contact us today to discuss how we can help you achieve your marketing goals. Our team is here to provide you with the best solutions tailored to your needs.</p>
        <a 
          href="/contact" 
          className="mt-6 inline-block bg-transparent border border-transparent text-white px-4 py-2 rounded shadow-[0_0_10px_rgba(12,118,228,0.7)] focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
};

export default Services;
