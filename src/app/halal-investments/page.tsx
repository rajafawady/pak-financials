"use client";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft, DollarSign, TrendingUp, Building, Briefcase, Award, Check } from "lucide-react";

export default function HalalInvestmentPage() {
  const t = useTranslations("HalalInvestment");
  const locale = useLocale();
  const [isRTL, setIsRTL] = useState(false);
  
  // Detect RTL languages
  useEffect(() => {
    const rtlLanguages = ["ar", "fa", "he", "ur"];
    setIsRTL(rtlLanguages.includes(locale));
  }, [locale]);

  // Dynamic direction based on locale
  const directionClass = isRTL ? "rtl" : "ltr";
  const ChevronIcon = isRTL ? ChevronLeft : ChevronRight;

  return (
    <div className={`min-h-screen bg-gradient-to-b from-blue-50 to-white ${directionClass}`} dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 800 800">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <circle cx="400" cy="400" r="300" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-6 tracking-tight">
              {t("whatIsHalalInvestment.heading")}
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 mb-8">
              {t("whatIsHalalInvestment.description") || "Ethical investment opportunities aligned with Islamic principles"}
            </p>
          </div>
        </div>
      </section>

      {/* Sources of Halal Investment */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-indigo-700 mb-12">
            {t("halalInvestmentSources.heading")}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Islamic Stock Market */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6 shadow-lg transform transition-transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center">
                  <TrendingUp size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-center text-indigo-800 mb-4">
                {t("halalInvestmentSources.islamicStockMarket.heading")}
              </h3>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start">
                  <span className={`flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-2'}`}>
                    <ChevronIcon size={20} className="text-indigo-600" />
                  </span>
                  <span className="text-gray-700">
                    {t("halalInvestmentSources.islamicStockMarket.points.point1")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className={`flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-2'}`}>
                    <ChevronIcon size={20} className="text-indigo-600" />
                  </span>
                  <span className="text-gray-700">
                    {t("halalInvestmentSources.islamicStockMarket.points.point2")}
                  </span>
                </li>
              </ul>
            </div>
            
            {/* Islamic Mutual Funds */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-xl p-6 shadow-lg transform transition-transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <Building size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-center text-blue-800 mb-4">
                {t("halalInvestmentSources.islamicMutualFunds.heading")}
              </h3>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start">
                  <span className={`flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-2'}`}>
                    <ChevronIcon size={20} className="text-blue-600" />
                  </span>
                  <span className="text-gray-700">
                    {t("halalInvestmentSources.islamicMutualFunds.points.point1")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className={`flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-2'}`}>
                    <ChevronIcon size={20} className="text-blue-600" />
                  </span>
                  <span className="text-gray-700">
                    {t("halalInvestmentSources.islamicMutualFunds.points.point2")}
                  </span>
                </li>
              </ul>
            </div>
            
            {/* Sukuk */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-xl p-6 shadow-lg transform transition-transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                  <DollarSign size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-center text-purple-800 mb-4">
                {t("halalInvestmentSources.sukuk.heading")}
              </h3>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start">
                  <span className={`flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-2'}`}>
                    <ChevronIcon size={20} className="text-purple-600" />
                  </span>
                  <span className="text-gray-700">
                    {t("halalInvestmentSources.sukuk.points.point1")}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className={`flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-2'}`}>
                    <ChevronIcon size={20} className="text-purple-600" />
                  </span>
                  <span className="text-gray-700">
                    {t("halalInvestmentSources.sukuk.points.point2")}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stocks and Bonds Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            {t("stocksAndBonds.heading")}
          </h2>
          
          <div className="relative">
            {/* Decorative Islamic pattern in background */}
            <div className="absolute inset-0 opacity-5">
              <svg viewBox="0 0 800 800" className="w-full h-full">
                <pattern id="islamic-pattern" patternUnits="userSpaceOnUse" width="80" height="80">
                  <path d="M0,40 L40,0 L80,40 L40,80 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
                  <circle cx="40" cy="40" r="20" fill="none" stroke="currentColor" strokeWidth="1"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
              </svg>
            </div>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Stocks */}
              <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-green-500">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-green-100 rounded-full">
                    <TrendingUp size={32} className="text-green-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-4">
                  {t("stocksAndBonds.stocks.heading")}
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Check size={20} className={`text-green-500 flex-shrink-0 ${isRTL ? 'ml-3' : 'mr-3'}`} />
                    <span className="text-gray-600">{t("stocksAndBonds.stocks.points.point1")}</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={20} className={`text-green-500 flex-shrink-0 ${isRTL ? 'ml-3' : 'mr-3'}`} />
                    <span className="text-gray-600">{t("stocksAndBonds.stocks.points.point2")}</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={20} className={`text-green-500 flex-shrink-0 ${isRTL ? 'ml-3' : 'mr-3'}`} />
                    <span className="text-gray-600">{t("stocksAndBonds.stocks.points.point3")}</span>
                  </li>
                </ul>
              </div>
              
              {/* Bonds */}
              <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-red-500">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-red-100 rounded-full">
                    <Briefcase size={32} className="text-red-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-4">
                  {t("stocksAndBonds.bonds.heading")}
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className={`flex-shrink-0 ${isRTL ? 'ml-3' : 'mr-3'}`}>
                      <svg className="w-5 h-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-gray-600">{t("stocksAndBonds.bonds.points.point1")}</span>
                  </li>
                  <li className="flex items-center">
                    <span className={`flex-shrink-0 ${isRTL ? 'ml-3' : 'mr-3'}`}>
                      <svg className="w-5 h-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-gray-600">{t("stocksAndBonds.bonds.points.point2")}</span>
                  </li>
                </ul>
              </div>
              
              {/* Sukuk */}
              <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-indigo-500">
                <div className="flex justify-center mb-6">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Award size={32} className="text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-4">
                  {t("stocksAndBonds.sukuk.heading")}
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Check size={20} className={`text-indigo-500 flex-shrink-0 ${isRTL ? 'ml-3' : 'mr-3'}`} />
                    <span className="text-gray-600">{t("stocksAndBonds.sukuk.points.point1")}</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={20} className={`text-indigo-500 flex-shrink-0 ${isRTL ? 'ml-3' : 'mr-3'}`} />
                    <span className="text-gray-600">{t("stocksAndBonds.sukuk.points.point2")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Start Halal Investment */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-indigo-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-indigo-800 mb-14">
            {t("howToStartHalalInvestment.heading")}
          </h2>
          
          <div className="relative">
            {/* Financial growth illustration */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10">
              <svg viewBox="0 0 200 200" className="w-full h-full" preserveAspectRatio="xMinYMin slice">
                <path fill="currentColor" d="M0,100 L50,50 L100,90 L150,40 L200,80 L200,200 L0,200 Z" className="text-indigo-600" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <div className={`flex flex-col md:flex-row ${isRTL ? 'md:flex-row-reverse' : ''} gap-6`}>
                <div className="flex-1">
                  <div className="bg-white rounded-xl shadow-lg p-6 h-full">
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center">
                        <span className="text-xl font-bold text-white">1</span>
                      </div>
                    </div>
                    <p className="text-center text-lg text-gray-700">
                      {t("howToStartHalalInvestment.steps.point1")}
                    </p>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="bg-white rounded-xl shadow-lg p-6 h-full">
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center">
                        <span className="text-xl font-bold text-white">2</span>
                      </div>
                    </div>
                    <p className="text-center text-lg text-gray-700">
                      {t("howToStartHalalInvestment.steps.point2")}
                    </p>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="bg-white rounded-xl shadow-lg p-6 h-full">
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center">
                        <span className="text-xl font-bold text-white">3</span>
                      </div>
                    </div>
                    <p className="text-center text-lg text-gray-700">
                      {t("howToStartHalalInvestment.steps.point3")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Halal Investment */}
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-800 via-indigo-700 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("benefits.heading")}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20 transform transition hover:scale-105">
              <div className="flex items-start">
                <div className={`flex-shrink-0 ${isRTL ? 'ml-4' : 'mr-4'}`}>
                  <div className="w-12 h-12 bg-indigo-500 bg-opacity-30 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-indigo-200 mb-2">
                    {t("benefits.points.point1")}
                  </h3>
                  <p className="text-white text-opacity-80">
                    Aligning your financial decisions with your spiritual beliefs leads to true satisfaction.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20 transform transition hover:scale-105">
              <div className="flex items-start">
                <div className={`flex-shrink-0 ${isRTL ? 'ml-4' : 'mr-4'}`}>
                  <div className="w-12 h-12 bg-indigo-500 bg-opacity-30 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-indigo-200 mb-2">
                    {t("benefits.points.point2")}
                  </h3>
                  <p className="text-white text-opacity-80">
                    Wealth earned through permissible means brings peace of mind and blessings.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20 transform transition hover:scale-105">
              <div className="flex items-start">
                <div className={`flex-shrink-0 ${isRTL ? 'ml-4' : 'mr-4'}`}>
                  <div className="w-12 h-12 bg-indigo-500 bg-opacity-30 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-indigo-200 mb-2">
                    {t("benefits.points.point3")}
                  </h3>
                  <p className="text-white text-opacity-80">
                    Halal investments avoid industries that may harm society or individuals.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20 transform transition hover:scale-105">
              <div className="flex items-start">
                <div className={`flex-shrink-0 ${isRTL ? 'ml-4' : 'mr-4'}`}>
                  <div className="w-12 h-12 bg-indigo-500 bg-opacity-30 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-indigo-200 mb-2">
                    {t("benefits.points.point4")}
                  </h3>
                  <p className="text-white text-opacity-80">
                    Ethical investment brings rewards beyond financial gains.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t("startInvesting") || "Start Your Halal Investment Journey Today"}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {t("consultFinancialAdvisor") || "Consult with a qualified Islamic financial advisor to explore options that align with your goals and values."}
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            {t("learnMoreButton") || "Learn More"}
          </button>
        </div>
      </section>
    </div>
  );
}