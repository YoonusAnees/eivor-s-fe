import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <section className="section-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <SectionTitle title="Get in Touch" subtitle="Contact Us" centered={false} />
            <p className="text-gray-500 leading-relaxed mb-12 max-w-md">
              Whether you have a question about our collection, need assistance with an order, or simply wish to share your experience, our dedicated concierge team is here to assist you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="p-3 bg-neutral-soft rounded-full text-charcoal">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold mb-1">Email Us</h4>
                  <p className="text-sm text-gray-500">concierge@eivor.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="p-3 bg-neutral-soft rounded-full text-charcoal">
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold mb-1">Call Us</h4>
                  <p className="text-sm text-gray-500">+1 (800) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="p-3 bg-neutral-soft rounded-full text-charcoal">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-bold mb-1">Visit Us</h4>
                  <p className="text-sm text-gray-500">742 Fifth Avenue, New York, NY 10151</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-soft p-10 md:p-16">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold">First Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-gray-300 py-2 text-sm outline-none focus:border-black transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold">Last Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-gray-300 py-2 text-sm outline-none focus:border-black transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b border-gray-300 py-2 text-sm outline-none focus:border-black transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold">Message</label>
                <textarea rows="4" className="w-full bg-transparent border-b border-gray-300 py-2 text-sm outline-none focus:border-black transition-colors resize-none"></textarea>
              </div>
              <Button variant="primary" className="w-full h-14">Send Message</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
