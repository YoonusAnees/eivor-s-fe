import React from 'react';
import { Truck, ShieldCheck, RefreshCw, Award } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    { icon: <Truck size={32} strokeWidth={1} />, title: 'Global Delivery', description: 'Premium shipping services to over 100 countries.' },
    { icon: <ShieldCheck size={32} strokeWidth={1} />, title: 'Secure Payment', description: 'Your data is protected by industry-leading security.' },
    { icon: <RefreshCw size={32} strokeWidth={1} />, title: 'Easy Returns', description: 'Simple and hassle-free return policy within 30 days.' },
    { icon: <Award size={32} strokeWidth={1} />, title: 'Ethical Sourcing', description: 'We partner with artisans who share our values.' },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="mb-6 text-charcoal">{feature.icon}</div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-3">{feature.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
