import { urlFor } from '@/lib/utils';
import React from 'react';



export default function ImageGrid({data }: any) {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-light title text-center mb-6 py-8">Exclusive Homes Tailored to Your Life</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {data.map((item:any, index:any) => (
          <div key={index}>
            <img
              className="object-cover object-center w-full h-60 max-w-full "
              src={urlFor(item.asset).url()}
              alt={`gallery-photo-${index}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
