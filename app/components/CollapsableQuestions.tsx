'use client';

import React, { useState } from 'react';
import { Product } from '../interfaces/interfaces';

const CollapsableQuestions = ({product}:{product:Product}) => {
  const [open, setOpen] = useState<number | null>(null);

  const toggleAccordion = (index: number): void => {
    setOpen((prev: number | null) => (prev === index ? null : index));
  };
  return (
    <div id="accordion-collapse" className=' border-t border-primary mt-4'>
      {/* Question 1 */}
      <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          onClick={() => toggleAccordion(1)}
          className="flex items-center justify-between w-full py-2 border-b border-primary font-medium rtl:text-right text-primary gap-3"
          aria-expanded={open === 1}
          aria-controls="accordion-collapse-body-1"
        >
          <span>DIMENSIONS</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 transition-transform duration-200 ${
              open === 1 ? 'rotate-180' : ''
            } shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M1 1l4 4 4-4"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-1"
        className={`${open === 1 ? 'block' : 'hidden'}`}
        aria-labelledby="accordion-collapse-heading-1"
      >
        <div className="p-3 flex flex-col border-b border-primary">
          {product.productDimensions.map((dimension,index)=><h1 key={index} className='text-primary'>{dimension}</h1>)}
        </div>
      </div>

      {/* Question 2 */}
      <h2 id="accordion-collapse-heading-2">
        <button
          type="button"
          onClick={() => toggleAccordion(2)}
          className="flex items-center justify-between w-full border-b border-primary py-2 font-medium rtl:text-right text-primary gap-3"
          aria-expanded={open === 2}
          aria-controls="accordion-collapse-body-2"
        >
          <span>PRODUCT DETAILS</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 transition-transform duration-200 ${
              open === 2 ? 'rotate-180' : ''
            } shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M1 1l4 4 4-4"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-2"
        className={`${open === 2 ? 'block' : 'hidden'}`}
        aria-labelledby="accordion-collapse-heading-2"
      >
        <div className="p-3 border-b border-primary">
        {product.productDetails.map((detail,index)=><h1 key={index} className='text-primary'>{detail}</h1>)}

        </div>
      </div>

      {/* Question 3 */}
      <h2 id="accordion-collapse-heading-3">
        <button
          type="button"
          onClick={() => toggleAccordion(3)}
          className="flex items-start text-start justify-between w-full py-2 border-b border-primary font-medium  text-primary gap-3"
          aria-expanded={open === 3}
          aria-controls="accordion-collapse-body-3"
        >
          <span className=''>PRODUCT CARE</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 transition-transform duration-200 ${
              open === 3 ? 'rotate-180' : ''
            } shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M1 1l4 4 4-4"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-3"
        className={`${open === 3 ? 'block' : 'hidden'}`}
        aria-labelledby="accordion-collapse-heading-3"
      >
        <div className="p-3 border-b border-primary mb-1">
        {product.productCare.map((care,index)=><h1 key={index} className='text-primary'>{care}</h1>)}

        </div>
      </div>
    </div>
  );
};

export default CollapsableQuestions;
