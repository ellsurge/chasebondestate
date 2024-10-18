import { urlFor } from '@/lib/utils';
import React from 'react';

export type Product = {
  mainImage: any;
  title: string;
  price: number;
  bedrooms: number;
    description: string;
    label: string;
};

interface ProductSectionProps {
  data: Product[];
}

const ProductSection = ({ data }: ProductSectionProps) => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-light text-dark title sm:text-4xl">
            Property Listings
          </h2>
          {/* <p className="mt-4 text-sm font-light leading-7 text-gray">
            Whether you’re looking for a modern city apartment or a quiet suburban retreat, our curated selection of properties offers something for everyone. 
          </p> */}
        </div>

        <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
          {data.map((item, index) => (
            <div className="relative group" key={index}>
              <div className="overflow-hidden aspect-square">
                <img
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  src={urlFor(item.mainImage).url()}
                  alt={item.title}
                />
              </div>
                  {item.label && <div className="absolute left-3 top-3">
                      <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-normal tracking-wide text-dark uppercase bg-light  rounded-full sans">{item.label }</p>
                  </div>}
              <div className="mt-4 space-y-1">
                <h3 className="md:text-2xl text-base title font-light text-dark">
                  <a href="#" title={item.title}>
                    {item.title}
                    <span className="absolute inset-0" aria-hidden="true"></span>
                  </a>
                </h3>
                <p className="text-sm font-normal gap-4 sans text-green flex divide-x">
                  <span>₦ {item.price}</span>
                  {item.bedrooms &&<span className='pl-4'>{item.bedrooms} Bedrooms</span>}
                </p>
                <p className="text-xs text-gray truncate sans" title={item.description}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Centered View All Button */}
        <div className="flex justify-center mt-8">
          <button
            type="button"
            className="text-white bg-gradient-to-br from-dark to-green hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
