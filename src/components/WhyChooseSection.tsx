import React from 'react';
import Image from 'next/image';

interface StatCardProps {
  number: string;
  title: string;
  subtitle: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, title, subtitle }) => (
  <div className="bg-blue-500 text-white p-6 rounded-xl shadow-lg max-w-[300px]">
    <div className="text-4xl font-bold mb-2">{number}</div>
    <div className="text-lg font-medium">{title}</div>
    <div className="text-lg font-medium">{subtitle}</div>
  </div>
);

const WhyChooseSection = () => {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="max-w-3xl mb-20">
          <div className="relative">
            <h2 className="text-5xl font-bold mb-6">
              Why Choose 
              <div className="relative inline-block">
                <span className="relative z-10 ml-2">Pakfinancials?</span>
                <div className="absolute bottom-1 left-2 w-full h-3 bg-yellow-400/60 -z-0"></div>
              </div>
              <span className="text-yellow-400 text-4xl absolute -right-8 top-0">✧</span>
            </h2>
          </div>
          
          <p className="text-gray-700 text-lg leading-relaxed">
            Enhance your financial understanding with Pakfinancials, where education meets 
            empowerment. Our platform equips you with essential knowledge about financial literacy, 
            particularly focusing on practical applications of microfinance tools like Easypaisa 
            and Jazzcash in Pakistan. Dive into curated resources that offer actionable insights 
            into effectively managing your finances, catering to diverse backgrounds and expertise.
          </p>
        </div>

        {/* Stats Section with Background */}
        <div className="relative mt-20">
          {/* Background Image */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/keyboard-bg.jpg"
              alt="Keyboard background"
              fill
              className="object-cover brightness-95"
              priority
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent"></div>
          </div>

          {/* Stats Cards */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="relative h-full max-w-2xl ml-10 flex flex-col justify-center gap-8">
              {/* First Stat */}
              <div className="transform hover:-translate-y-1 transition-transform">
                <StatCard
                  number="2,500"
                  title="Educators"
                  subtitle="Enhancing Financial Literacy"
                />
              </div>
              
              {/* Second Stat */}
              <div className="transform hover:-translate-y-1 transition-transform ml-20">
                <StatCard
                  number="200+"
                  title="Microfinance Apps"
                  subtitle="Utilized"
                />
              </div>
            </div>
          </div>

          {/* Decorative Bank Icon */}
          <div className="absolute bottom-10 right-10">
            <div className="text-blue-500/20">
              <svg 
                className="w-24 h-24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L2 8h20L12 2zm-7 8v10h2V10H5zm5 0v10h2V10h-2zm5 0v10h2V10h-2zm5 0v10h2V10h-2zM2 22h20v-2H2v2z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;