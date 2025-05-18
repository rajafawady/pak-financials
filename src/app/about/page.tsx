"use client";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Users, 
  Heart, 
  Lightbulb, 
  UserCheck, 
  Globe
} from "lucide-react";

export default function AboutUsPage() {
  const t = useTranslations("AboutUsPage");
  const locale = useLocale();
  const [isRTL, setIsRTL] = useState(false);
  
  // Detect RTL languages
  useEffect(() => {
    setIsRTL(locale === 'ur');
  }, [locale]);

  const directionClass = isRTL ? 'rtl' : 'ltr';

  return (
    <div className={`min-h-screen bg-gray-50 ${directionClass}`}>
      {/* Hero Section */}
      <section className="relative py-20 bg-indigo-800 text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('heroTitle')}</h1>
          <p className="text-xl max-w-3xl mx-auto">{t('heroSubtitle')}</p>
        </div>
        <div className="absolute inset-0 opacity-20 bg-pattern"></div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-indigo-800">{t('ourStoryTitle')}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('ourStoryContent')}
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/story.jpg"
                  alt="Our Story"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-indigo-800">{t('ourVisionTitle')}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('ourVisionContent')}
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/vision.jpg"
                  alt="Our vision"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-indigo-800">{t('ourTeamTitle')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {Array.from({ length: parseInt(t('teamMembers.teamMembersCount')) }, (_, i) => i + 1).map((memberNum) => {
                    const memberKey = `teamMembers.member${memberNum}`;
                    const hasImage = t(`${memberKey}.image`) !== "";
                    console.log(memberKey);
                    return (
                        <div key={memberNum} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="relative h-80 w-full bg-gray-200">
                                {hasImage ? (
                                    <Image
                                        src={t.raw(`${memberKey}.image`)}
                                        alt={t.raw(`${memberKey}.name`)}
                                        fill
                                        style={{ objectFit: "cover" }}
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Users size={64} className="text-gray-400" />
                                    </div>
                                )}
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-1 text-indigo-800">{t.raw(`${memberKey}.name`)}</h3>
                                <p className="text-indigo-600 mb-4">{t.raw(`${memberKey}.position`)}</p>
                                <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: t.raw(`${memberKey}.bio`) }} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-indigo-800">{t('valuesTitle')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Globe className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-indigo-800">{t('values.value1.title')}</h3>
              <p className="text-gray-700 text-center">{t('values.value1.description')}</p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <UserCheck className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-indigo-800">{t('values.value2.title')}</h3>
              <p className="text-gray-700 text-center">{t('values.value2.description')}</p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Lightbulb className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-indigo-800">{t('values.value3.title')}</h3>
              <p className="text-gray-700 text-center">{t('values.value3.description')}</p>
            </div>
            
            {/* Value 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Heart className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-indigo-800">{t('values.value4.title')}</h3>
              <p className="text-gray-700 text-center">{t('values.value4.description')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
