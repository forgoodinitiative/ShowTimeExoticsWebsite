import { Target, Users, Shield, Award } from "lucide-react";

export default function About() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl mb-6 tracking-tight">About Us</h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Where luxury meets creativity in Vancouver's premier exotic car prop rental service.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-8 tracking-tight">Our Story</h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              Showtime Exotics was founded with a simple yet powerful vision: to provide
              content creators, photographers, videographers, and event planners access to
              the world's most stunning luxury vehicles for their creative projects.
            </p>
            <p>
              Based in Vancouver, BC, we've built a curated collection of exotic and luxury
              vehicles that serve as the perfect props for static photoshoots, music videos,
              real estate marketing, and high-end content creation.
            </p>
            <p>
              Our vehicles aren't just cars—they're pieces of automotive art that elevate
              your creative vision and help tell your story. From Italian supercars to
              British luxury sedans, each vehicle in our fleet has been carefully selected
              for its visual impact and photogenic qualities.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-12 tracking-tight text-center">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 mb-4">
                <Target size={32} />
              </div>
              <h3 className="text-xl mb-2">Static Rentals Only</h3>
              <p className="text-gray-400 text-sm">
                Our vehicles are for photoshoots and static displays—not for driving
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl mb-2">Professional Service</h3>
              <p className="text-gray-400 text-sm">
                Dedicated support for videographers, photographers, and event planners
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-xl mb-2">Fully Insured</h3>
              <p className="text-gray-400 text-sm">
                All vehicles are comprehensively insured for your peace of mind
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 mb-4">
                <Award size={32} />
              </div>
              <h3 className="text-xl mb-2">Premium Fleet</h3>
              <p className="text-gray-400 text-sm">
                Meticulously maintained vehicles from the world's top manufacturers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-8 tracking-tight">Who We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 p-6">
              <h3 className="text-xl mb-2">Content Creators</h3>
              <p className="text-gray-400 text-sm">
                Elevate your social media content, YouTube videos, and digital campaigns with
                stunning automotive backdrops
              </p>
            </div>
            <div className="bg-white/5 p-6">
              <h3 className="text-xl mb-2">Photographers & Videographers</h3>
              <p className="text-gray-400 text-sm">
                Access premium props for music videos, fashion shoots, and commercial projects
              </p>
            </div>
            <div className="bg-white/5 p-6">
              <h3 className="text-xl mb-2">Real Estate Agents</h3>
              <p className="text-gray-400 text-sm">
                Stage luxury properties with exotic vehicles to attract high-end buyers
              </p>
            </div>
            <div className="bg-white/5 p-6">
              <h3 className="text-xl mb-2">Event Planners</h3>
              <p className="text-gray-400 text-sm">
                Create unforgettable displays for corporate events, product launches, and galas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4 tracking-tight">Based in Vancouver</h2>
          <p className="text-gray-400 mb-8">
            Proudly serving Vancouver, BC and the surrounding areas. Delivery available—pricing
            varies by location.
          </p>
          <p className="text-sm text-gray-500">
            Contact us to discuss delivery options for your specific location
          </p>
        </div>
      </section>
    </div>
  );
}
