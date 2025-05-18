import { Search, Globe, GraduationCap, LoaderPinwheel } from 'lucide-react';
import { FC, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

interface FeatureCardProps {
  title: string;
  titleHighlight: string;
  description: string;
  icon: FC<{ className?: string }>;
}

const FeatureCard: FC<FeatureCardProps> = ({ title, titleHighlight, description, icon: Icon }) => {
  const locale = useLocale();
  const isRTL = locale === 'ur';
  
  return (
    <div className="relative bg-gray-100 rounded-3xl p-8 mb-6 lg:mb-0">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          {title.split(titleHighlight).map((part, index, array) => (
            <div key={index}>
              {part}
              {index < array.length - 1 && (
                <span className="text-indigo-500">{titleHighlight}</span>
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
      <div className={`absolute bottom-8 ${isRTL ? 'right-4' : 'right-4'}`}>
        <button className="bg-gray-200 p-4 rounded-full hover:bg-gray-300 transition-colors">
          <Search className="w-6 h-6 text-indigo-500" />
        </button>
      </div>
    </div>
  );
};

const FeatureSection = () => {
  const t = useTranslations('FeatureSection');
  const locale = useLocale();
  const [isRTL, setIsRTL] = useState(false);
  
  // Detect RTL languages
  useEffect(() => {
    setIsRTL(locale === 'ur');
  }, [locale]);

  const features = [
    {
      title: t('features.0.title'),
      titleHighlight: t('features.0.titleHighlight'),
      description: t('features.0.description'),
      icon: LoaderPinwheel
    },
    {
      title: t('features.1.title'),
      titleHighlight: t('features.1.titleHighlight'),
      description: t('features.1.description'),
      icon: Globe
    },
    {
      title: t('features.2.title'),
      titleHighlight: t('features.2.titleHighlight'),
      description: t('features.2.description'),
      icon: GraduationCap
    }
  ];

  return (
    <div className={`min-h-screen p-6 lg:p-12 ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Header Section */}
      <div className="max-w-5xl mx-auto mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
          {t('header.title')}
        </h1>
        
        <p className="text-gray-600 text-lg lg:text-xl leading-relaxed">
          {t('header.description')}
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