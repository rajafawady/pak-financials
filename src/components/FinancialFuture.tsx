import { FC, JSX, useState, useEffect } from 'react';
import { PhoneCall, Search, MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

interface FeatureCard {
  title: string;
  description: string;
  imageSrc: string;
  icon?: JSX.Element;
}

const FinancialLiteracySection: FC = () => {
  const t = useTranslations('FinancialFuture');
  const locale = useLocale();
  const [isRTL, setIsRTL] = useState(false);
  
  // Detect RTL languages
  useEffect(() => {
    setIsRTL(locale === 'ur');
  }, [locale]);

  const features: FeatureCard[] = [
    {
      title: t('features.0.title'),
      description: t('features.0.description'),
      imageSrc: "/digital.jpg",
      icon: <MessageCircle className="w-6 h-6 text-indigo-500" />
    },
    {
      title: t('features.1.title'),
      description: t('features.1.description'),
      imageSrc: "/guide.jpg",
      icon: <Search className="w-6 h-6 text-indigo-500" />
    },
    {
      title: t('features.2.title'),
      description: t('features.2.description'),
      imageSrc: "growth.jpg",
      icon: <PhoneCall className="w-6 h-6 text-indigo-500" />
    }
  ];
  return (
    <section className={`w-full bg-gray-50 px-4 md:py-20 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('header.titlePart1')} 
            <span className="relative">
              <span className="relative z-10"> {t('header.titleHighlight')}</span>
              <div className="absolute bottom-1 left-2 w-full h-3 bg-yellow-400/60 -z-0"></div>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-yellow-300 opacity-50 -z-10"></span>
            </span>
            <br />
            {t('header.titlePart2')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('header.description')}
          </p>        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative"
            >
              <div className="relative h-48 md:h-64">
                <img
                  src={feature.imageSrc}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 pb-16"> {/* Added padding bottom to ensure space for absolute icon */}
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                {feature.icon && (
                  <div className={`absolute bottom-4 ${isRTL ? 'right-4' : 'right-4'}`}>
                    {feature.icon}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinancialLiteracySection;