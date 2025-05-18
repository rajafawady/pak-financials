"use client";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { useState, useEffect } from "react";
import { 
  Building, 
  Ban, 
  ShieldCheck, 
  FileCheck, 
  Smartphone, 
  ClipboardCheck, 
  ChevronRight,
  ChevronLeft,
  LockKeyhole,
  Layers,
  FileText,
  PieChart,
  Clock,
  CheckCircle2,
  Wallet,
  Video,
  CreditCard
} from "lucide-react";

export default function OpenStockAccountPage() {
  const t = useTranslations("howToOpenStockAccount");
  const locale = useLocale();
  const [isRTL, setIsRTL] = useState(false);
    const [activeSection, setActiveSection] = useState("stock");
  
  // Detect RTL languages
  useEffect(() => {
    const rtlLanguages = ["ar", "fa", "he", "ur"];
    setIsRTL(rtlLanguages.includes(locale));
  }, [locale]);

  // Dynamic direction based on locale
  const directionClass = isRTL ? "rtl" : "ltr";
  const ChevronIcon = isRTL ? ChevronLeft : ChevronRight;

  return (
    <div className={`min-h-screen bg-gradient-to-b from-blue-50 to-slate-50 ${directionClass}`} dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 800 800">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-indigo-500"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <circle cx="400" cy="400" r="200" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-700" />
            <circle cx="400" cy="400" r="300" fill="none" stroke="currentColor" strokeWidth="1" className="text-indigo-500" />
          </svg>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 tracking-tight">
              {t("heading")}
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-blue-700 mb-8">
              {t("introduction")}
            </p>
          </div>
        </div>
      </section>


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => setActiveSection("stock")}
            className={`flex items-center px-6 py-3 rounded-full shadow-md transition-all ${
              activeSection === "stock" 
                ? "bg-blue-600 text-white" 
                : "bg-white text-blue-700 hover:bg-blue-50"
            }`}
          >
            <PieChart size={20} className={`${isRTL ? 'ml-2' : 'mr-2'}`} />
            {t("tabs.stock")}
          </button>
          <button 
            onClick={() => setActiveSection("jazzcash")}
            className={`flex items-center px-6 py-3 rounded-full shadow-md transition-all ${
              activeSection === "jazzcash" 
                ? "bg-red-600 text-white" 
                : "bg-white text-red-700 hover:bg-red-50"
            }`}
          >
            <Wallet size={20} className={`${isRTL ? 'ml-2' : 'mr-2'}`} />
            {t("tabs.jazzcash")}
          </button>
          <button 
            onClick={() => setActiveSection("easypaisa")}
            className={`flex items-center px-6 py-3 rounded-full shadow-md transition-all ${
              activeSection === "easypaisa" 
                ? "bg-green-600 text-white" 
                : "bg-white text-green-700 hover:bg-green-50"
            }`}
          >
            <CreditCard size={20} className={`${isRTL ? 'ml-2' : 'mr-2'}`} />
            {t("tabs.easypaisa")}
          </button>
        </div>
      </div>

      {/* Historical Context */}
      {activeSection === "stock" && (
        <>
            {/* Stock Market Introduction */}
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3 flex justify-center">
            <div className="w-64 h-64 rounded-full bg-white bg-opacity-10 flex items-center justify-center p-4 border border-white border-opacity-20">
              <svg viewBox="0 0 100 100" className="w-full h-full text-blue-200">
                <rect x="20" y="50" width="10" height="30" fill="currentColor" opacity="0.5">
                  <animate attributeName="height" from="30" to="50" dur="1s" repeatCount="indefinite" />
                  <animate attributeName="y" from="50" to="30" dur="1s" repeatCount="indefinite" />
                </rect>
                <rect x="40" y="40" width="10" height="40" fill="currentColor" opacity="0.7">
                  <animate attributeName="height" from="40" to="60" dur="1.3s" repeatCount="indefinite" />
                  <animate attributeName="y" from="40" to="20" dur="1.3s" repeatCount="indefinite" />
                </rect>
                <rect x="60" y="30" width="10" height="50" fill="currentColor" opacity="0.9">
                  <animate attributeName="height" from="50" to="70" dur="0.8s" repeatCount="indefinite" />
                  <animate attributeName="y" from="30" to="10" dur="0.8s" repeatCount="indefinite" />
                </rect>
                <rect x="80" y="50" width="10" height="30" fill="currentColor" opacity="0.6">
                  <animate attributeName="height" from="30" to="40" dur="1.5s" repeatCount="indefinite" />
                  <animate attributeName="y" from="50" to="40" dur="1.5s" repeatCount="indefinite" />
                </rect>
                <path d="M 20 70 L 30 70 L 40 60 L 50 60 L 60 50 L 70 50 L 80 60 L 90 60" 
                  fill="none" stroke="white" strokeWidth="1" opacity="0.8" />
              </svg>
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
              {t("stockMarket.heading")}
            </h2>
            <p className="text-lg text-blue-100 leading-relaxed">
              {t("stockMarket.introduction")}
            </p>
          </div>
        </div>
      </div>
    </section>

        {/* History Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto mt-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <Clock size={24} className="text-blue-700" />
            </div>
            <h2 className="text-2xl font-bold text-blue-900">
              {t("history")}
            </h2>
          </div>
          <div className="bg-blue-50 rounded-lg p-6 shadow-lg border-l-4 border-blue-600">
            <p className="text-gray-700">
              {t("history")}
            </p>
          </div>
        </div>
      </section>

      {/* Institutions Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t("institutions.heading")}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Central Depository Company */}
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20 transform transition hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <LockKeyhole size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">{t("institutions.institution1.name")}</h3>
              </div>
              <p className="text-white text-opacity-90">
                {t("institutions.institution1.description")}
              </p>
            </div>
            
            {/* National Clearing Company */}
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20 transform transition hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
                  <ShieldCheck size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">{t("institutions.institution2.name")}</h3>
              </div>
              <p className="text-white text-opacity-90">
                {t("institutions.institution2.description")}
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center max-w-3xl mx-auto">
            <p className="text-lg text-white text-opacity-90">
              {t("institutions.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Account Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">
              {t("accountTypes.heading")}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sub Account */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 shadow-lg transform transition-transform hover:scale-105">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <FileText size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center text-blue-800 mb-4">
                {t("accountTypes.subAccount.heading")}
              </h3>
              <p className="text-gray-700 text-center">
                {t("accountTypes.subAccount.description")}
              </p>
            </div>
            
            {/* Investor Account */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 shadow-lg transform transition-transform hover:scale-105">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <PieChart size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center text-blue-800 mb-4">
                {t("accountTypes.investorAccount.heading")}
              </h3>
              <p className="text-gray-700 text-center">
                {t("accountTypes.investorAccount.description")}
              </p>
            </div>
          </div>
          
          <div className="mt-10 bg-blue-50 rounded-lg p-6 shadow-md">
            <p className="text-gray-700">
              {t("accountTypes.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Online Brokerage */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-900">
              {t("onlineBrokerage.heading")}
            </h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-indigo-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 -mt-10 -mr-10 opacity-10">
              <svg viewBox="0 0 100 100" className="w-full h-full text-blue-600">
                <path d="M50,5 L95,50 L50,95 L5,50 Z" fill="currentColor" />
              </svg>
            </div>
            
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
                <Layers size={120} className="text-indigo-500 opacity-80" />
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  {t("onlineBrokerage.title")}
                </h3>
                <p className="text-gray-700">
                  {t("onlineBrokerage.description")}
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                    <CheckCircle2 size={20} className="text-blue-600 mr-2" />
                    <span className="text-sm text-blue-700">{t("onlineBrokerage.benefits.directCustody")}</span>
                  </div>
                  <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                    <CheckCircle2 size={20} className="text-blue-600 mr-2" />
                    <span className="text-sm text-blue-700">{t("onlineBrokerage.benefits.onlineTradingTerminal")}</span>
                  </div>
                  <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
                    <CheckCircle2 size={20} className="text-blue-600 mr-2" />
                    <span className="text-sm text-blue-700">{t("onlineBrokerage.benefits.enhancedSecurity")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Licensed Broker */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-900">
              {t("licensedBroker.heading")}
            </h2>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-8 text-white">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
                <Building size={100} className="text-white" />
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h3 className="text-2xl font-semibold mb-4">
                  {t("licensedBroker.companyName")}
                </h3>
                <p className="text-white text-opacity-90">
                  {t("licensedBroker.description")}
                </p>
                <div className="mt-6 inline-block bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold">
                  <a href='https://sfel.pk/' target="_blank" rel="noopener noreferrer">
                    {t("licensedBroker.licensedByPakistanStockExchange")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps to Open Trading Account */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">
              {t("steps.heading")}
            </h2>
          </div>
          
          {/* Step 1 */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                1
              </div>
              <h3 className="text-2xl font-bold text-blue-800">
                {t("steps.step1.heading")}
              </h3>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 ml-8">
              <p className="text-lg text-blue-800 mb-6 font-medium">
                {t("steps.step1.description")}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-700 mb-4">{t("steps.step1.fieldsTitle")}</h4>
                  <ul className="space-y-3">
                    {Array.from({ length: 7 }, (_, i) => i + 1).map((num) => (
                      <li key={`field-${num}`} className="flex items-start">
                        <span className={`flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-2'}`}>
                          <ChevronIcon size={20} className="text-blue-600" />
                        </span>
                        <span className="text-gray-700">
                          {t(`steps.step1.fields.${num - 1}`)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-700 mb-4">{t("steps.step1.processTitle")}</h4>
                  <div className="space-y-4">
                    <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                      <Smartphone size={24} className="text-blue-600 mr-3" />
                      <p className="text-gray-700">{t("steps.step1.process.0")}</p>
                    </div>
                    <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                      <ClipboardCheck size={24} className="text-blue-600 mr-3" />
                      <p className="text-gray-700">{t("steps.step1.process.1")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                2
              </div>
              <h3 className="text-2xl font-bold text-blue-800">
                {t("steps.step2.heading")}
              </h3>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 ml-8">
              <p className="text-lg text-blue-800 mb-6 font-medium">
                {t("steps.step2.description")}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-700 mb-4">{t("steps.step2.fieldsTitle")}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {Array.from({ length: 15 }, (_, i) => i + 1).map((num) => (
                      <div key={`field2-${num}`} className="flex items-start">
                        <span className={`flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-2'}`}>
                          <ChevronIcon size={18} className="text-blue-600" />
                        </span>
                        <span className="text-gray-700 text-sm">
                          {t(`steps.step2.fields.${num - 1}`)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-blue-700 mb-4">{t("steps.step2.processTitle")}</h4>
                  <div className="space-y-4">
                    <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                      <FileCheck size={24} className="text-blue-600 mr-3" />
                      <p className="text-gray-700">{t("steps.step2.process.0")}</p>
                    </div>
                    <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                      <Ban size={24} className="text-blue-600 mr-3" />
                      <p className="text-gray-700">{t("steps.step2.process.1")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Completion */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white text-center">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto flex items-center justify-center mb-4">
              <CheckCircle2 size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t("steps.completionTitle")}</h3>
            <p className="text-lg max-w-2xl mx-auto">
              {t("steps.completion")}
            </p>
          </div>
        </div>
      </section>
      </>
      )}

{activeSection === "jazzcash" && (
  <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white ">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <div className="w-24 h-24 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-6">
          <Wallet size={48} className="text-red-600" />
        </div>
        <h2 className="text-3xl font-bold text-red-800 mb-4">
          {t("jazzcash.heading")}
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          {t("jazzcash.introduction")}
        </p>
      </div>

      <div className="bg-gradient-to-br from-red-50 to-rose-100 rounded-2xl p-8 shadow-xl">
        <div className="aspect-w-16 aspect-h-9 mb-8">
          <div className="w-full h-0 pb-[56.25%] relative rounded-xl overflow-hidden shadow-lg">
            <video 
              className="absolute inset-0 w-full h-full object-fit" 
              controls 
              poster="/jazzcash-thumbnail.png"
            >
              <source src="/jazzcash-tutorial.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold text-red-700 mb-4 flex items-center">
              <span className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white mr-3">1</span>
              {t("jazzcash.features.heading")}
            </h3>
            <ul className="space-y-3">
              {t.raw("jazzcash.features.list").map((feature: string, index: number) => (
                <li key={`jazzcash-feature-${index}`} className="flex items-start">
                  <span className={`flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-2'}`}>
                    <ChevronIcon size={20} className="text-red-600" />
                  </span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold text-red-700 mb-4 flex items-center">
              <span className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white mr-3">2</span>
              {t("jazzcash.requirements.heading")}
            </h3>
            <ul className="space-y-3">
              {t.raw("jazzcash.requirements.list").map((requirement: string, index: number) => (
                <li key={`jazzcash-req-${index}`} className="flex items-start">
                  <span className={`flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-2'}`}>
                    <ChevronIcon size={20} className="text-red-600" />
                  </span>
                  <span className="text-gray-700">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-semibold text-red-700 mb-4 flex items-center">
            <Video size={24} className="text-red-600 mr-3" />
            {t("jazzcash.videoGuide.heading")}
          </h3>
          <p className="text-gray-700 mb-4">
            {t("jazzcash.videoGuide.description")}
          </p>
          <div className="bg-red-50 p-4 rounded-lg">
            <p className="text-red-700 font-medium">{t("jazzcash.videoGuide.note.heading")}</p>
            <p className="text-gray-700">{t("jazzcash.videoGuide.note.text")}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)}

{activeSection === "easypaisa" && (
  <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <div className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
          <CreditCard size={48} className="text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-green-800 mb-4">
          {t("easypaisa.heading")}
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          {t("easypaisa.introduction")}
        </p>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 shadow-xl">
        <div className="aspect-w-16 aspect-h-9 mb-8">
          <div className="w-full h-0 pb-[56.25%] relative rounded-xl overflow-hidden shadow-lg">
            <video 
              className="absolute inset-0 w-full h-full object-fit" 
              controls 
              poster="/easypaisa-thumbnail.png"
            >
              <source src="/easypaisa-tutorial.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
              <span className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white mr-3">1</span>
              {t("easypaisa.features.heading")}
            </h3>
            <ul className="space-y-3">
              {t.raw("easypaisa.features.list").map((feature: string, index: number) => (
                <li key={`easypaisa-feature-${index}`} className="flex items-start">
                  <span className={`flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-2'}`}>
                    <ChevronIcon size={20} className="text-green-600" />
                  </span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
              <span className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white mr-3">2</span>
              {t("easypaisa.requirements.heading")}
            </h3>
            <ul className="space-y-3">
              {t.raw("easypaisa.requirements.list").map((requirement: string, index: number) => (
                <li key={`easypaisa-req-${index}`} className="flex items-start">
                  <span className={`flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-2'}`}>
                    <ChevronIcon size={20} className="text-green-600" />
                  </span>
                  <span className="text-gray-700">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
            <Video size={24} className="text-green-600 mr-3" />
            {t("easypaisa.videoGuide.heading")}
          </h3>
          <p className="text-gray-700 mb-4">
            {t("easypaisa.videoGuide.description")}
          </p>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-green-700 font-medium">{t("easypaisa.videoGuide.note.heading")}</p>
            <p className="text-gray-700">{t("easypaisa.videoGuide.note.text")}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)}

    </div>
  );
}