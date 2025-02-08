import { Search, Globe, GraduationCap, LoaderPinwheel } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';

interface FeatureCardProps {
  title: string;
  titleHighlight: string;
  description: string;
  icon: FC<{ className?: string }>;
}

const FeatureCard: FC<FeatureCardProps> = ({ title, titleHighlight, description, icon: Icon }) => {
  return (
    <div className="relative bg-gray-100 rounded-3xl p-8 mb-6 lg:mb-0">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          {title.split(titleHighlight).map((part, index, array) => (
            <div key={index}>
              {part}
              {index < array.length - 1 && (
                <span className="text-blue-500">{titleHighlight}</span>
              )}
            </div>
          ))}
        </h2>
        <p className="text-gray-700 text-lg">
          {description}
        </p>
      </div>
      <div className="mt-8">
        <Icon className="w-12 h-12 text-emerald-600" />
      </div>
      <div className="absolute bottom-8 right-4">
        <button className="bg-gray-200 p-4 rounded-full hover:bg-gray-300 transition-colors">
          <Search className="w-6 h-6 text-blue-500" />
        </button>
      </div>
    </div>
  );
};

const FeatureSection = () => {
  const features = [
    {
      title: "Absences can hinder financial progress",
      titleHighlight: "hinder",
      description: "Pakfinancials provides timely resources that minimize disruptions in your financial education journey.",
      icon: LoaderPinwheel
    },
    {
      title: "Streamlined process to integrate microfinance solutions",
      titleHighlight: "integrate",
      description: "Our platform helps you effectively connect with the necessary financial tools and services.",
      icon: Globe
    },
    {
      title: "Continuous support keeps your education thriving in finance",
      titleHighlight: "your education thriving",
      description: "Pakfinancials is dedicated to helping you maintain financial confidence and stability.",
      icon: GraduationCap
    }
  ];

  return (
    <div className="min-h-screen p-6 lg:p-12">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          Financial Future with Pakfinancials
        </h1>
        
        <p className="text-gray-600 text-lg lg:text-xl leading-relaxed">
          Gain essential insights into financial literacy with our platform, 
          empowering you to confidently navigate your financial journey. 
          Discover how microfinance apps like Easypaisa and Jazzcash can 
          facilitate better financial management in Pakistan.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              titleHighlight={feature.titleHighlight}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default FeatureSection;