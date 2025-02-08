'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import PromoSection from "@/components/PromoSection";
import FeatureSection from '@/components/FeatureSection';
import ImageShowcase from '@/components/ImageShowcase';
const reviews = [
    {
      id: 1,
      name: "Emily Smith",
      image: "/fawad.jpg", // Replace with actual image path
      rating: 5,
      reviewKey: "reviews.emily",
    },
    {
      id: 2,
      name: "Michael Johnson",
      image: "/fawad.jpg", // Replace with actual image path
      rating: 5,
      reviewKey: "reviews.michael",
    },
  ];


export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 md:px-12">
      {/* Hero Section */}
      <section className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-between mt-10">
        {/* Text Content */}
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            {t('hero.title')}{' '}
            <span className="text-black underline decoration-yellow-500">{t('hero.highlight')}</span>
            <br /> {t('hero.titleEnd')}
          </h2>
          <p className="mt-4 text-gray-600">{t('hero.subtitle')}</p>
          <div className="mt-6 flex flex-col md:flex-row gap-4">
            <Button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
              {t('hero.ctaStart')}
            </Button>
          </div>
        </div>
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 md:mt-0 md:ml-10"
        >
          <Image
            src="/20231005.jpg"
            width={500}
            height={400}
            alt="Woman Smiling"
            className="rounded-lg border-4 border-blue-500"
          />
        </motion.div>
      </section>


      {/* Reviews Section */}
    <section className="w-full max-w-5xl mt-10">
      <div className="flex flex-col gap-6">
        {reviews.map((review, index) => (
        <div key={index} className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-md">
          <Image src={review.image} width={50} height={50} alt={review.name} className="rounded-full" />
          <div>
            <div className='flex items-center justify-between'>
            <h3 className="font-bold text-gray-900">{review.name}</h3>
            <div className="flex">
              {'★★★★★'.split('').map((star, i) => (
                <span key={i} className="text-yellow-500">★</span>
              ))}
            </div>
            </div>
            <p className="text-gray-600 mt-1">{t(review.reviewKey)}</p>
          </div>
        </div>
        ))}
      </div>
    </section>

    <section>
      <ImageShowcase />
    </section>

    <section>
      <FeatureSection />
    </section>



    </div>
  );
}
