import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import {apiConnector} from '@/services/apiConnector.js';
import { mailpoint } from "@/services/operations/Auth";


const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await apiConnector("POST", mailpoint.SENDMAIL_API,formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  } catch (err) {
    alert("Something went wrong. Please try again.");
  }

  setIsSubmitting(false);
  setTimeout(() => setIsSubmitted(false), 5000);
};


  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'shivamkumarmain2@gmail.com',
      link: 'mailto:shivamkumarmain2@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9899794119',
      link: 'tel:+919899794119'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'New Delhi, India',
      link: '#'
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-[#0d1117] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="text-blue-600">Touch</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <h3 className="text-2xl font-bold mb-8">Let's Connect</h3>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, i) => (
                  <a
                    key={i}
                    href={info.link}
                    className="flex items-center p-4 bg-[#161b22] rounded-xl shadow-md hover:shadow-lg transition transform hover:scale-105 group"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">{info.title}</h4>
                      <p className="text-gray-400">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="bg-blue-600 rounded-2xl p-8 text-white shadow-xl">
                <h4 className="text-xl font-bold mb-4">Ready to start a project?</h4>
                <p className="mb-6 opacity-90">
                  I'm available for freelance work, internships, and full-time opportunities. Let's discuss how we can work together.
                </p>
                <div className="flex space-x-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm opacity-80">Response Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm opacity-80">Commitment</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">∞</div>
                    <div className="text-sm opacity-80">Creativity</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="bg-[#161b22] rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-600/10 border border-green-700 rounded-lg flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    <span className="text-green-300">Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 bg-[#0d1117] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-600 transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 bg-[#0d1117] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-600 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="What's this about?"
                      className="w-full px-4 py-3 bg-[#0d1117] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-600 transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      required
                      placeholder="Tell me about your project or just say hello!"
                      className="w-full px-4 py-3 bg-[#0d1117] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-600 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 disabled:opacity-50 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
