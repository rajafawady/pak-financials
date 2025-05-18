'use client';
import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Head from 'next/head';
import { FaChartLine, FaMoneyBillWave, FaHandHoldingUsd, FaUniversity, 
         FaExclamationTriangle, FaLightbulb, FaQuestionCircle,
         FaFileContract, FaBalanceScale, FaHandshake, FaBook } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function StockMarketInvestment() {
  const t = useTranslations('FinancialLiteracy.stockMarketInvestment');
  const locale = useLocale();
  const isRTL = locale === 'ar' || locale === 'ur';

  interface SectionHeadingProps {
    children: React.ReactNode;
    icon: React.ReactNode;
  }

  const SectionHeading = ({ children, icon }: SectionHeadingProps) => (
    <motion.h2 
      initial={{ opacity: 0, x: isRTL ? 50 : -50 }} 
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex items-center text-2xl md:text-3xl font-bold text-indigo-800 mb-6 pb-2 border-b-2 border-indigo-500 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}
    >
      <span className={`${isRTL ? 'ml-3' : 'mr-3'} text-indigo-600`}>{icon}</span>
      {children}
    </motion.h2>
  );

interface PointsListProps {
    points: string[];
    className?: string;
}

const PointsList: React.FC<PointsListProps> = ({ points, className = "" }) => (
    <ul className={`space-y-3 ${className} ${isRTL ? 'text-right' : 'text-left'}`}>
        {points.map((point, idx) => (
            <motion.li
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className={`flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} items-start`}
            >
                <span className="font-medium text-gray-800">{point}</span>
            </motion.li>
        ))}
    </ul>
);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className={`min-h-screen w-full text-red bg-gradient-to-b from-blue-50 to-indigo-50 py-10 ${isRTL ? 'rtl' : 'ltr'}`}>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content="Learn about stock market investment" />
      </Head>

      <div className="container mx-auto px-4 max-w-5xl">
        {/* Hero section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12"
        >
        <div className="relative w-full">
            <div className="bg-indigo-600 flex items-start justify-center relative min-h-[10rem] md:min-h-[14rem]">
                <div className="absolute inset-0 bg-pattern opacity-20"></div>
                <div className="absolute left-0 right-0 bottom-0 h-20 bg-gradient-to-t from-indigo-700 to-transparent"></div>
                <svg className="absolute bottom-0 left-0 right-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ffffff" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,202.7C384,203,480,181,576,170.7C672,160,768,160,864,181.3C960,203,1056,245,1152,234.7C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                <div className="flex flex-col items-center text-white py-4 z-10 w-full">
                    <FaChartLine className="text-5xl mb-2" />
                    <h1 className="text-2xl md:text-4xl font-bold text-center">{t('title')}</h1>
                </div>
            </div>
        </div>
          
          <div className="p-8">
            <SectionHeading icon={<FaLightbulb />}>{t('introduction.heading')}</SectionHeading>
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <PointsList points={[t('introduction.points.point1'), t('introduction.points.point2'), t('introduction.points.point3')]} />
            </div>
          </div>
        </motion.div>




        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* What are Shares */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <SectionHeading icon={<FaFileContract />}>{t('whatAreShares.heading')}</SectionHeading>
            <p className={`mb-4 text-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}>{t('whatAreShares.description')}</p>
            <PointsList points={[t('whatAreShares.points.point1'), t('whatAreShares.points.point2')]} />

            {/* Visual for shares concept */}
            <div className="mt-6 flex justify-center">
              <div className="w-full max-w-xs h-40 bg-blue-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                    100%
                  </div>
                </div>
                <div className="absolute inset-0 flex">
                  <div className="w-1/4 h-full bg-green-400 opacity-80 flex items-center justify-center text-white font-bold">25%</div>
                  <div className="w-1/4 h-full bg-yellow-400 opacity-80 flex items-center justify-center text-white font-bold">25%</div>
                  <div className="w-1/4 h-full bg-red-400 opacity-80 flex items-center justify-center text-white font-bold">25%</div>
                  <div className="w-1/4 h-full bg-purple-400 opacity-80 flex items-center justify-center text-white font-bold">25%</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* What is the Stock Market */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <SectionHeading icon={<FaUniversity />}>{t('whatIsStockMarket.heading')}</SectionHeading>
            <p className={`mb-4 text-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}>{t('whatIsStockMarket.description')}</p>
            
            {/* Stock market visual */}
            <div className="mt-6 flex justify-center">
              <div className="w-full h-40 bg-gray-100 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 flex flex-col">
                  <div className="h-10 bg-gray-200 border-b border-gray-300 flex items-center justify-between px-4 text-sm font-semibold">
                    <span>Stock Exchange</span>
                    <span className="text-green-600">+1.2%</span>
                  </div>
                  <div className="flex-1 p-2">
                    <svg viewBox="0 0 100 30" className="w-full h-full">
                      <path d="M0,30 L5,28 L10,25 L15,26 L20,20 L25,18 L30,15 L35,17 L40,13 L45,15 L50,10 L55,12 L60,7 L65,9 L70,5 L75,8 L80,3 L85,6 L90,2 L95,4 L100,1" 
                            fill="none" stroke="#4F46E5" strokeWidth="0.5"></path>
                      <path d="M0,30 L5,28 L10,25 L15,26 L20,20 L25,18 L30,15 L35,17 L40,13 L45,15 L50,10 L55,12 L60,7 L65,9 L70,5 L75,8 L80,3 L85,6 L90,2 L95,4 L100,1" 
                            fill="url(#gradient)" fillOpacity="0.2" stroke="none"></path>
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.8"/>
                          <stop offset="100%" stopColor="#4F46E5" stopOpacity="0"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Benefits and Risks */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <SectionHeading icon={<FaBalanceScale />}>{t('investmentBenefitsRisks.heading')}</SectionHeading>
            
            <div className="mb-6">
              <h3 className={`text-xl font-semibold text-green-600 mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('investmentBenefitsRisks.benefits.heading')}
              </h3>
              <PointsList points={[t('investmentBenefitsRisks.benefits.points.point1'), t('investmentBenefitsRisks.benefits.points.point2'), t('investmentBenefitsRisks.benefits.points.point3')]} />
            </div>
            
            <div>
              <h3 className={`text-xl font-semibold text-red-600 mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('investmentBenefitsRisks.risks.heading')}
              </h3>
              <PointsList points={[t('investmentBenefitsRisks.risks.points.point1'), t('investmentBenefitsRisks.risks.points.point2')]} />
            </div>
    
            {/* Visual representation of benefits vs risks */}
            <div className="mt-6 flex justify-center">
              <div className="w-full h-24 bg-gray-100 rounded-lg flex overflow-hidden">
                <div className="w-2/3 bg-green-100 flex items-center justify-center">
                  <div className="text-center">
                    <FaHandHoldingUsd className="mx-auto text-green-600 text-xl" />
                    <span className="text-medium font-medium text-green-800">{t('investmentBenefitsRisks.benefits.heading')}</span>
                  </div>
                </div>
                <div className="w-1/3 bg-red-100 flex items-center justify-center">
                  <div className="text-center">
                    <FaExclamationTriangle className="mx-auto text-red-600 text-xl" />
                    <span className="text-sm font-medium text-red-800">{t('investmentBenefitsRisks.risks.heading')}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Islamic Investment */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <SectionHeading icon={<FaHandshake />}>{t('islamicInvestment.heading')}</SectionHeading>
            <p className={`mb-4 text-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}>{t('islamicInvestment.description')}</p>
            
            <div className="mb-6">
              <PointsList points={[t('islamicInvestment.avoid.point1'), t('islamicInvestment.avoid.point2'), t('islamicInvestment.avoid.point3')]} className="text-red-700" />
            </div>
            
            <div>
              <h3 className={`text-lg font-semibold mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('islamicInvestment.alternatives.heading')}
              </h3>
              <p className={`${isRTL ? 'text-right' : 'text-left'} text-blue-700`}>
                {t('islamicInvestment.alternatives.point1')}
              </p>
            </div>
            
            {/* Islamic finance visual */}
            <div className="mt-6 flex justify-center">
              <div className="w-40 h-40 rounded-full bg-green-50 border-4 border-green-500 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-green-600 font-bold text-lg">{t('islamicInvestment.shariah')}</div>
                  <div className="text-green-600 font-bold text-lg">{t('islamicInvestment.compliance')}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Long-Term Investment Strategy */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible" 
          className="bg-white rounded-xl shadow-lg p-6 mt-8 hover:shadow-xl transition-shadow"
        >
          <SectionHeading icon={<FaLightbulb />}>{t('longTermInvestmentStrategy.heading')}</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className={`text-xl font-semibold text-blue-700 mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('longTermInvestmentStrategy.goodCompanies.heading')}
              </h3>
              <ul className={`space-y-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                {[
                    t('longTermInvestmentStrategy.goodCompanies.companies.company1'),
                    t('longTermInvestmentStrategy.goodCompanies.companies.company2'),
                    t('longTermInvestmentStrategy.goodCompanies.companies.company3'),
                ].map((company, idx) => (
                    <motion.li
                        key={idx}
                        variants={itemVariants}
                        className={`flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} items-center`}
                    >
                        <span className={`w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-2'}`}></span>
                        <span>{company}</span>
                    </motion.li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className={`text-xl font-semibold text-orange-700 mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                {t('longTermInvestmentStrategy.avoidRiskyInvestments.heading')}
              </h3>
              <PointsList points={[t('longTermInvestmentStrategy.avoidRiskyInvestments.points.point1'), t('longTermInvestmentStrategy.avoidRiskyInvestments.points.point2'), t('longTermInvestmentStrategy.avoidRiskyInvestments.points.point3')]} />
            </div>
          </div>
          
          {/* Growth chart visual */}
          <div className="mt-8 flex justify-center">
            <div className="w-full max-w-md h-40 bg-gray-50 rounded-lg p-4 relative">
              <div className="absolute top-2 left-2 text-xs font-bold text-gray-500">Long-term Investment Growth</div>
              <svg viewBox="0 0 100 50" className="w-full h-full">
                {/* Grid lines */}
                <line x1="0" y1="50" x2="100" y2="50" stroke="#e5e7eb" strokeWidth="0.5" />
                <line x1="0" y1="37.5" x2="100" y2="37.5" stroke="#e5e7eb" strokeWidth="0.5" />
                <line x1="0" y1="25" x2="100" y2="25" stroke="#e5e7eb" strokeWidth="0.5" />
                <line x1="0" y1="12.5" x2="100" y2="12.5" stroke="#e5e7eb" strokeWidth="0.5" />
                <line x1="0" y1="0" x2="100" y2="0" stroke="#e5e7eb" strokeWidth="0.5" />
                
                {/* Growth lines */}
                <path d="M0,50 L10,48 L20,45 L30,42 L40,38 L50,33 L60,27 L70,20 L80,12 L90,5 L100,0" 
                      fill="none" stroke="#4F46E5" strokeWidth="2"></path>
                <path d="M0,50 L10,48 L20,45 L30,42 L40,38 L50,33 L60,27 L70,20 L80,12 L90,5 L100,0" 
                      fill="url(#blue-gradient)" fillOpacity="0.2" stroke="none"></path>
                
                {/* Market volatility line */}
                <path d="M0,45 L5,42 L10,46 L15,43 L20,47 L25,44 L30,48 L35,45 L40,49 L45,46 L50,39 L55,42 L60,38 L65,36 L70,30 L75,33 L80,25 L85,20 L90,15 L95,10 L100,5" 
                      fill="none" stroke="#EF4444" strokeWidth="1" strokeDasharray="2,2"></path>
                
                <defs>
                  <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.5"/>
                    <stop offset="100%" stopColor="#4F46E5" stopOpacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
              
              <div className="absolute bottom-2 right-2 flex space-x-4 text-xs">
                <div className="flex items-center">
                  <span className="w-3 h-1 bg-indigo-600 mr-1"></span>
                  <span>Long-term</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-1 bg-red-500 mr-1 border-b border-dashed"></span>
                  <span>Market volatility</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* How to Invest */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-xl shadow-lg p-6 mt-8 hover:shadow-xl transition-shadow"
        >
          <SectionHeading icon={<FaMoneyBillWave />}>{t('howToInvestInPakistan.heading')}</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className={`text-xl font-semibold text-purple-700 mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('howToInvestInPakistan.brokerInvestment.heading')}
              </h3>
              <PointsList
            points={[
              t('howToInvestInPakistan.brokerInvestment.points.point1'),
              t('howToInvestInPakistan.brokerInvestment.points.point2'),
            ]}
              />
              
              <div className="mt-6">
            <h4 className={`text-lg font-semibold mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t('brokerAndCDCAccount.knownBrokers.heading')}
            </h4>
            <ul className={`grid grid-cols-2 gap-2 ${isRTL ? 'text-right' : 'text-left'}`}>
              {['broker1', 'broker2', 'broker3', 'broker4'].map((key) => (
                <motion.li
                  key={key}
                  variants={itemVariants}
                  className="bg-purple-50 rounded p-2 text-purple-800"
                >
                  {t(`brokerAndCDCAccount.knownBrokers.brokers.${key}`)}
                </motion.li>
              ))}
            </ul>
              </div>
            </div>
            
            <div>
              <h3 className={`text-xl font-semibold text-blue-700 mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('howToInvestInPakistan.mutualFunds.heading')}
              </h3>
              <p className={`text-gray-700 mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('howToInvestInPakistan.mutualFunds.description')}
              </p>
              
              <h3 className={`text-xl font-semibold text-blue-700 mb-3 ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('brokerAndCDCAccount.heading')}
              </h3>
              <PointsList
            points={[
              t('brokerAndCDCAccount.points.point1'),
              t('brokerAndCDCAccount.points.point2'),
              t('brokerAndCDCAccount.points.point3'),
              t('brokerAndCDCAccount.points.point4'),
              t('brokerAndCDCAccount.points.point5'),
            ]}
              />
            </div>
          </div>
          
        </motion.div>
        {/* Investment Process Flowchart Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="rounded-xl shadow-lg p-8 mt-10 mb-8 hover:shadow-xl transition-shadow bg-white"
        >
          <SectionHeading icon={<FaChartLine />}>
            {t('investmentProcess.heading')}
          </SectionHeading>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center relative">
              <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center mb-2 shadow-lg border-4 border-blue-400">
            <span className="text-blue-700 text-2xl font-bold">1</span>
              </div>
              <h4 className="font-semibold text-blue-800 mb-2">{t('investmentProcess.fundTransfer.heading')}</h4>
              <PointsList
            points={[
              t('investmentProcess.fundTransfer.points.point1'),
              t('investmentProcess.fundTransfer.points.point2'),
            ]}
            className="mt-2 text-center"
              />
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center relative">
              <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center mb-2 shadow-lg border-4 border-blue-400">
            <span className="text-blue-700 text-2xl font-bold">2</span>
              </div>
              <h4 className="font-semibold text-blue-800 mb-2">{t('investmentProcess.buyingShares.heading')}</h4>
              <PointsList
            points={[
              t('investmentProcess.buyingShares.points.point1'),
              t('investmentProcess.buyingShares.points.point2'),
              t('investmentProcess.buyingShares.points.point3'),
              t('investmentProcess.buyingShares.points.point4'),
            ]}
            className="mt-2 text-center"
              />
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center mb-2 shadow-lg border-4 border-blue-400">
            <span className="text-blue-700 text-2xl font-bold">3</span>
              </div>
              <h4 className="font-semibold text-blue-800 mb-2">{t('investmentProcess.orderConfirmation.heading')}</h4>
              <PointsList
            points={[
              t('investmentProcess.orderConfirmation.points.point1'),
              t('investmentProcess.orderConfirmation.points.point2'),
            ]}
            className="mt-2 text-center"
              />
            </div>
          </div>
        </motion.div>

        {/* Common Questions */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-xl shadow-lg p-6 mt-8 hover:shadow-xl transition-shadow"
        >
          <SectionHeading icon={<FaQuestionCircle />}>{t('commonQuestions.heading')}</SectionHeading>
          
          <div className="space-y-6">
            {['commonQuestions.questions.question1', 'commonQuestions.questions.question2', 'commonQuestions.questions.question3', 'commonQuestions.questions.question4'].map((key,idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="border-b border-gray-200 pb-4 last:border-b-0"
              >
                <h3 className={`text-lg font-semibold text-indigo-700 mb-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t(`${key}.question`)}
                </h3>
                <p className={`text-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t(`${key}.answer`)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fraud Awareness */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-xl shadow-lg p-6 mt-8 hover:shadow-xl transition-shadow border-l-4 border-red-500"
        >
          <SectionHeading icon={<FaExclamationTriangle className="text-red-500" />}>
            {t('fraudAwareness.heading')}
          </SectionHeading>
          
          <div className="bg-red-50 rounded-lg p-4">
            <PointsList
              points={[
                t('fraudAwareness.points.point1'),
                t('fraudAwareness.points.point2'),
                t('fraudAwareness.points.point3'),
                t('fraudAwareness.points.point4'),
              ]}
              className="text-red-800"
            />
          </div>
        </motion.div>

        {/* Pros and Cons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-xl shadow-lg p-6 mt-8 hover:shadow-xl transition-shadow"
        >
          <SectionHeading icon={<FaBalanceScale />}>{t('investmentProsCons.heading')}</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className={`text-xl font-semibold text-green-700 mb-3 text-center`}>
                {t('investmentProsCons.pros.heading')}
              </h3>
              <PointsList
                points={[
                  t('investmentProsCons.pros.points.point1'),
                  t('investmentProsCons.pros.points.point2'),
                  t('investmentProsCons.pros.points.point3'),
                ]}
                className="text-green-800"
              />
            </div>
            
            <div className="bg-red-50 rounded-lg p-4">
              <h3 className={`text-xl font-semibold text-red-700 mb-3 text-center`}>
                {t('investmentProsCons.cons.heading')}
              </h3>
              <PointsList
                points={[
                  t('investmentProsCons.cons.points.point1'),
                  t('investmentProsCons.cons.points.point2'),
                  t('investmentProsCons.cons.points.point3'),
                ]}
                className="text-red-800"
              />
            </div>
          </div>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-indigo-100 rounded-xl shadow-lg p-6 mt-8 hover:shadow-xl transition-shadow"
        >
          <SectionHeading icon={<FaBook />}>{t('successPrinciples.heading')}</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {['point1', 'point2', 'point3', 'point4', 'point5'].map((key, idx) => (
              <motion.div 
                key={key}
                variants={itemVariants}
                className="bg-white rounded-lg p-4 shadow text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-full bg-indigo-200 flex items-center justify-center mb-3">
                  <span className="text-indigo-700 text-lg font-bold">{idx + 1}</span>
                </div>
                <p className="text-gray-800 font-medium">
                  {t(`successPrinciples.points.${key}`)}
                </p>
              </motion.div>
            ))}
            </div>
        </motion.div>

        {/* Resources */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-xl shadow-lg p-6 mt-8 mb-8 hover:shadow-xl transition-shadow"
        >
          <SectionHeading icon={<FaBook />}>{t('resources.heading')}</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Hardcoded resource links instead of using t('resources.links') */}
            <motion.a
              variants={itemVariants}
              href="https://www.psx.com.pk/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-50 hover:bg-blue-100 rounded-lg p-4 flex flex-col items-center text-center transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center mb-3">
                <FaUniversity className="text-blue-700" />
              </div>
              <p className="text-blue-800 font-medium">
                {t('resources.links.link1.title')}
              </p>
            </motion.a>
            <motion.a
              variants={itemVariants}
              href="https://www.secp.gov.pk/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-50 hover:bg-blue-100 rounded-lg p-4 flex flex-col items-center text-center transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center mb-3">
                <FaUniversity className="text-blue-700" />
              </div>
              <p className="text-blue-800 font-medium">
                {t('resources.links.link2.title')}
              </p>
            </motion.a>
            <motion.a
              variants={itemVariants}
              href="https://www.meezanbank.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-50 hover:bg-blue-100 rounded-lg p-4 flex flex-col items-center text-center transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center mb-3">
                <FaUniversity className="text-blue-700" />
              </div>
              <p className="text-blue-800 font-medium">
                {t('resources.links.link3.title')}
              </p>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}