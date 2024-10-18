import React from 'react';

export const InsentiveSection = () => {
  return (
    <div className="bg-light">
      <div className="max-w-7xl mx-auto py-12 sm:px-8 sm:py-16 lg:px-4">
        <div className="max-w-2xl mx-auto px-4 grid grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-3">
          {/* Free Shipping */}
          <div className="text-center sm:flex sm:text-left lg:block lg:text-center">
            <div className="sm:flex-shrink-0">
              <div className="flow-root">
                <img
                  className="w-20 h-20 mx-auto"
                  src="/icons/growth.png"
                  alt="Growth Icon" // Added descriptive alt text
                />
              </div>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
              <h3 className="text-2xl font-light text-gray-900 title text-dark">High growth potential</h3>
              <p className="mt-2 text-xs text-dark sans ">
              Invest in areas poised for rapid appreciation, where your property can increase in value and provide lucrative returns in the years to come.
              </p>
            </div>
          </div>

          {/* 24/7 Customer Support */}
          <div className="text-center sm:flex sm:text-left lg:block lg:text-center">
            <div className="sm:flex-shrink-0">
              <div className="flow-root">
                <img
                  className="w-20 h-20 mx-auto"
                  src="/icons/location.png"
                  alt="Customer Support Icon" // Added descriptive alt text
                />
              </div>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
              <h3 className="text-2xl font-light text-gray-900 title text-dark">Prime locations</h3>
              <p className="mt-2 text-xs text-dark sans ">
                Discover properties situated in sought-after neighborhoods, offering convenience, accessibility, and an enhanced lifestyle that makes every day extraordinary.
              </p>
            </div>
          </div>

          {/* Fast Shopping Cart */}
          <div className="text-center sm:flex sm:text-left lg:block lg:text-center">
            <div className="sm:flex-shrink-0">
              <div className="flow-root">
                <img
                  className="w-20 h-20 mx-auto"
                  src="/icons/design.png"
                  alt="Fast Shopping Cart Icon" // Added descriptive alt text
                />
              </div>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
              <h3 className="text-2xl font-light text-gray-900 title text-dark">Modern designs</h3>
              <p className="mt-2 text-xs text-dark sans  italic">
                Stylish spaces with contemporary finishes that elevate your living experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
