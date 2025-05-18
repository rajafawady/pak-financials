"use client";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { useState, useEffect } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  ChevronDown,
  ChevronUp
} from "lucide-react";

export default function ContactUsPage() {
  const t = useTranslations("ContactUsPage");
  const locale = useLocale();
  const [isRTL, setIsRTL] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Detect RTL languages
  useEffect(() => {
    setIsRTL(locale === 'ur');
  }, [locale]);

  const directionClass = isRTL ? 'rtl' : 'ltr';
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would typically be an API call to your backend
    // For now, we'll just simulate success
    setTimeout(() => {
      setFormStatus('success');
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Contact Information */}
            <div className="md:w-1/3">
              <div className="bg-indigo-50 p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-indigo-800">{t('contactInfo.title')}</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mt-1">
                      <Mail className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-indigo-800">{t('contactInfo.email')}</h3>
                      <p className="text-gray-700">{t('contactInfo.emailValue')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1">
                      <Phone className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-indigo-800">{t('contactInfo.phone')}</h3>
                      <p className="text-gray-700">{t('contactInfo.phoneValue')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1">
                      <MapPin className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-indigo-800">{t('contactInfo.address')}</h3>
                      <p className="text-gray-700">{t('contactInfo.addressValue')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-6 text-indigo-800">{t('formSection.title')}</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('formSection.nameLabel')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder={t('formSection.namePlaceholder')}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('formSection.emailLabel')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder={t('formSection.emailPlaceholder')}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('formSection.subjectLabel')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder={t('formSection.subjectPlaceholder')}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('formSection.messageLabel')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder={t('formSection.messagePlaceholder')}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    {t('formSection.submitButton')}
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </div>
                
                {formStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
                    {t('formSection.successMessage')}
                  </div>
                )}
                
                {formStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                    {t('formSection.errorMessage')}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-indigo-800">{t('faqTitle')}</h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {/* FAQ Item 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(0)}
              >
                <span className="text-lg font-medium text-indigo-800">
                  {t('faqs.faq1.question')}
                </span>
                {openFaq === 0 ? (
                  <ChevronUp className="h-5 w-5 text-indigo-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-indigo-600" />
                )}
              </button>
              {openFaq === 0 && (
                <div className="px-6 py-4 border-t border-gray-200">
                  <p className="text-gray-700">{t('faqs.faq1.answer')}</p>
                </div>
              )}
            </div>
            
            {/* FAQ Item 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(1)}
              >
                <span className="text-lg font-medium text-indigo-800">
                  {t('faqs.faq2.question')}
                </span>
                {openFaq === 1 ? (
                  <ChevronUp className="h-5 w-5 text-indigo-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-indigo-600" />
                )}
              </button>
              {openFaq === 1 && (
                <div className="px-6 py-4 border-t border-gray-200">
                  <p className="text-gray-700">{t('faqs.faq2.answer')}</p>
                </div>
              )}
            </div>
            
            {/* FAQ Item 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(2)}
              >
                <span className="text-lg font-medium text-indigo-800">
                  {t('faqs.faq3.question')}
                </span>
                {openFaq === 2 ? (
                  <ChevronUp className="h-5 w-5 text-indigo-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-indigo-600" />
                )}
              </button>
              {openFaq === 2 && (
                <div className="px-6 py-4 border-t border-gray-200">
                  <p className="text-gray-700">{t('faqs.faq3.answer')}</p>
                </div>
              )}
            </div>
            
            {/* FAQ Item 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(3)}
              >
                <span className="text-lg font-medium text-indigo-800">
                  {t('faqs.faq4.question')}
                </span>
                {openFaq === 3 ? (
                  <ChevronUp className="h-5 w-5 text-indigo-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-indigo-600" />
                )}
              </button>
              {openFaq === 3 && (
                <div className="px-6 py-4 border-t border-gray-200">
                  <p className="text-gray-700">{t('faqs.faq4.answer')}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
