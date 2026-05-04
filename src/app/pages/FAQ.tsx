import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "What does 'static rental' mean?",
      answer:
        "Static rental means the vehicles are provided as props for photoshoots, video production, and displays only. The vehicles are not driven during the rental period. They remain stationary at your shoot location.",
    },
    {
      question: "How does pricing work?",
      answer:
        "Pricing is based on several factors including the vehicle selected, shoot duration, location, and specific project requirements. We offer hourly rates and custom packages. Contact us with your project details for a personalized quote.",
    },
    {
      question: "Do you deliver the vehicles to our location?",
      answer:
        "Yes! We provide delivery and pickup services throughout Vancouver and surrounding areas. Delivery fees vary based on distance from our Vancouver base. We'll transport the vehicle to your shoot location and return at the agreed time.",
    },
    {
      question: "How far in advance should I book?",
      answer:
        "We recommend booking at least 1-2 weeks in advance, especially for popular vehicles or during peak season. However, we can sometimes accommodate last-minute requests based on availability. Contact us as early as possible to secure your preferred vehicle and date.",
    },
    {
      question: "What types of projects do you support?",
      answer:
        "We work with photographers, videographers, content creators, music video productions, real estate marketing, corporate events, product launches, weddings, and more. If you need a luxury vehicle as a prop or display piece, we can help.",
    },
    {
      question: "Are the vehicles insured?",
      answer:
        "Yes, all our vehicles are comprehensively insured. However, clients are responsible for any damage that occurs during the rental period. We recommend having your own production insurance as well.",
    },
    {
      question: "Can we touch or sit in the vehicles?",
      answer:
        "Yes, for photoshoots, models and talent can sit in the vehicles and interact with them for content purposes. We'll provide guidelines to ensure the vehicles remain in pristine condition. No eating, drinking, or smoking is allowed.",
    },
    {
      question: "What if we need the vehicle for multiple days?",
      answer:
        "We offer multi-day rentals! Extended rentals can often be arranged at discounted rates. Contact us with your project timeline and we'll create a custom package that works for your schedule and budget.",
    },
    {
      question: "Do you provide a handler/attendant with the vehicle?",
      answer:
        "For certain high-value vehicles or longer shoots, we may provide an attendant to stay with the vehicle. This will be discussed during the booking process based on your specific needs.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Cancellations made 7+ days before the shoot date receive a full refund. Cancellations made 3-6 days before receive a 50% refund. Cancellations within 48 hours are non-refundable. Weather-related rescheduling is handled on a case-by-case basis.",
    },
    {
      question: "Can we film the vehicle in motion?",
      answer:
        "No, our vehicles are for static use only. If you need driving shots or moving footage, we can refer you to other services that specialize in that type of rental.",
    },
    {
      question: "What happens if it rains on our shoot day?",
      answer:
        "For outdoor shoots, we monitor weather closely. If heavy rain is forecasted, we can discuss rescheduling options or moving to a covered location. Our vehicles should not be exposed to harsh weather conditions for extended periods.",
    },
    {
      question: "Do you have specific requirements for shoot locations?",
      answer:
        "We require safe, accessible locations where our transport vehicle can deliver and pick up the car. The surface should be clean and suitable for a luxury vehicle. We'll discuss location details during booking to ensure everything is appropriate.",
    },
    {
      question: "How do I book a specific vehicle?",
      answer:
        "Browse our inventory, then contact us through the inquiry form or call/email directly. Let us know which vehicle you're interested in, your shoot date, location, and project details. We'll check availability and provide a quote.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl mb-6 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Everything you need to know about renting luxury vehicles for your photoshoots and events.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/5 border border-white/10 px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Policies Section */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-8 tracking-tight">Rental Policies</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl mb-3">General Terms</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>All vehicles are for static display and photoshoot purposes only - no driving</li>
                <li>Minimum rental period is 2 hours</li>
                <li>Client must be 21+ years old with valid government-issued ID</li>
                <li>Deposit required at time of booking (typically 50% of total rental fee)</li>
                <li>Final payment due 48 hours before shoot date</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl mb-3">Vehicle Care & Responsibility</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>Client is responsible for any damage to the vehicle during rental period</li>
                <li>No smoking, eating, or drinking inside vehicles</li>
                <li>Vehicles must remain on approved surfaces (no dirt, gravel, or rough terrain)</li>
                <li>Any cosmetic damage must be reported immediately</li>
                <li>Client must ensure vehicles are not exposed to extreme weather conditions</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl mb-3">Delivery & Setup</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>Delivery and pickup times will be coordinated in advance</li>
                <li>Client must ensure location is accessible for transport vehicle</li>
                <li>Delivery fees calculated based on distance from Vancouver base</li>
                <li>Setup and positioning assistance can be provided upon request</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl mb-3">Cancellations & Rescheduling</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>7+ days notice: Full refund of deposit</li>
                <li>3-6 days notice: 50% refund of deposit</li>
                <li>Less than 48 hours: No refund</li>
                <li>Weather-related rescheduling available with 24 hours notice</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl mb-3">Insurance & Liability</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>All vehicles are insured by Showtime Exotics</li>
                <li>Clients are strongly encouraged to carry production/event insurance</li>
                <li>Client assumes liability for damage occurring during rental period</li>
                <li>Security deposit may be required for certain high-value vehicles</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-4 tracking-tight">
            Still have questions?
          </h2>
          <p className="text-gray-400 mb-8">
            Our team is here to help. Get in touch and we'll answer any questions you have.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-black px-8 py-4 uppercase text-sm tracking-wider hover:bg-gray-200 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
