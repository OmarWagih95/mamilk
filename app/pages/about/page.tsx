'use client';

import { pagePadding } from '@/app/styles';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { fadeIn } from '@/app/variants/fadIn';

const AboutPage = () => {
  return (
    <div className={`min-h-screen h-auto ${pagePadding} gap-4 pt-32 pb-16 md:pb-4 h-auto text-start flex  max-md:flex-col items-start bg-primaryLight`}>
      <motion.div
        variants={fadeIn({ direction: 'up', delay: 0.1 })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        className="relative flex flex-col items-start"
      >
        <p className="text-2xl font-semibold text-primary">
          Hello and thank you for visiting Mamilk! 
        </p>

        <p className="uppercase leading-tight text-lg text-primary py-2 md:py-2">
          As a mom who's been in your shoes, I know how hard it can be to find clothing that's both fashionable and breastfeeding-friendly. But Mamilk has got you covered. 
        </p>

        <p className="uppercase leading-tight text-lg text-primary py-2 md:py-2">
          In Mamilk, we believe that breastfeeding is a beautiful and powerful experience that deserves to be celebrated. That's why we're dedicated to creating clothing that's not only functional but also fashionable and comfortable. 
        </p>

        <p className="uppercase leading-tight text-lg text-primary py-2 md:py-2">
          Our goal is to help you feel like the best version of yourself, both during and after pregnancy.
        </p>

        <p className="uppercase leading-tight text-lg text-primary py-2 md:py-2">
          Mamilk is your companion during the early motherhood journey, from maternity to breastfeeding.
        </p>

        <p className="uppercase leading-tight text-lg text-primary py-2 md:py-2">
          Thank you for being part of our journey!
        </p>


      </motion.div>
    <video controls className='w-full md:w-1/4' width={500} height={600} src='/vedios/about.mp4'></video>

    </div>
  );
};

export default AboutPage;
