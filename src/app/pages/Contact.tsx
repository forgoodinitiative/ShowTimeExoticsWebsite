import { useState } from "react";
import { useLocation } from "react-router";
import { Mail, Phone, Instagram, MapPin, CalendarIcon } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { format } from "date-fns";
import { Calendar } from "../components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover";

export default function Contact() {
  const location = useLocation();
  const selectedCar = location.state?.selectedCar || "";

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [calendarOpen, setCalendarOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    carInterest: selectedCar,
    shootDate: "",
    shootLocation: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.send(
        "service_va5og2d",
        "template_lwobf3r",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          projectType: formData.projectType,
          carInterest: formData.carInterest,
          shootDate: formData.shootDate,
          shootLocation: formData.shootLocation,
          message: formData.message,
        },
        "NwFD_cV4pjkswRfvm"
      );

      toast.success("Inquiry sent successfully! We'll get back to you within 24 hours.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        carInterest: "",
        shootDate: "",
        shootLocation: "",
        message: "",
      });
      setSelectedDate(undefined);
    } catch (error) {
      toast.error("Something went wrong. Please try again or contact us directly.");
      console.error("EmailJS error:", error);
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl mb-6 tracking-tight">Get in Touch</h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Ready to elevate your next project? Fill out the form below and we'll get back to you with a custom quote.
          </p>
        </div>
      </section>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl mb-6 tracking-tight">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="text-gray-400 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <a
                      href="mailto:showtimexotics@gmail.com"
                      className="hover:text-gray-300 transition-colors"
                    >
                      showtimexotics@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-gray-400 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <a
                      href="tel:778-536-7429"
                      className="hover:text-gray-300 transition-colors"
                    >
                      778-536-7429
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="text-gray-400 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Location</p>
                    <p>Vancouver, BC</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Instagram className="text-gray-400 mt-1" size={20} />
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Instagram</p>
                    <a
                      href="https://www.instagram.com/showtimexotics"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-300 transition-colors"
                    >
                      @ShowtimExotics
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
                    >
                      <option value="">Select...</option>
                      <option value="photoshoot">Photoshoot</option>
                      <option value="video">Video Production</option>
                      <option value="music-video">Music Video</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="event">Event Display</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="carInterest" className="block text-sm mb-2">
                    Vehicle of Interest
                  </label>
                  <input
                    type="text"
                    id="carInterest"
                    name="carInterest"
                    value={formData.carInterest}
                    onChange={handleChange}
                    placeholder="e.g., Ferrari F8 Tributo, or leave blank for general inquiry"
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-2">
                      Preferred Shoot Date
                    </label>
                    <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                      <PopoverTrigger asChild>
                        <button
                          type="button"
                          className="w-full bg-white/5 border border-white/10 px-4 py-3 text-left flex items-center justify-between hover:border-white/30 transition-colors focus:outline-none focus:border-white/30"
                        >
                          <span className={selectedDate ? "text-white" : "text-gray-500"}>
                            {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                          </span>
                          <CalendarIcon size={16} className="text-gray-400" />
                        </button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 border border-white/20 shadow-xl" align="start">
                        <div className="dark">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={(date) => {
                              setSelectedDate(date);
                              setFormData((prev) => ({
                                ...prev,
                                shootDate: date ? format(date, "yyyy-MM-dd") : "",
                              }));
                              setCalendarOpen(false);
                            }}
                            disabled={{ before: new Date() }}
                            initialFocus
                          />
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <label htmlFor="shootLocation" className="block text-sm mb-2">
                      Shoot Location
                    </label>
                    <input
                      type="text"
                      id="shootLocation"
                      name="shootLocation"
                      value={formData.shootLocation}
                      onChange={handleChange}
                      placeholder="City or address"
                      className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:outline-none focus:border-white/30 transition-colors resize-none"
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="agree"
                    required
                    className="mt-1"
                  />
                  <label htmlFor="agree" className="text-sm text-gray-400">
                    I understand that ShowtimExotics provides vehicles for static photoshoots
                    only (no driving) and agree to the rental terms and conditions.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-white text-black px-8 py-4 uppercase text-sm tracking-wider hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSending ? "Sending..." : "Submit Inquiry"}
                </button>

                <p className="text-sm text-gray-400 text-center">
                  We typically respond within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
