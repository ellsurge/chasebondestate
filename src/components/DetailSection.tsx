"use client";
import { urlFor } from "@/lib/utils";
import React, { useState } from "react";

const DetailSection = ({ propertyData, data }: any) => {
  const [selectedImage, setSelectedImage] = useState(null); // State to store the image to be displayed full-screen

  const openFullScreen = (image: any) => {
    setSelectedImage(image); // Set the clicked image as selected
  };

  const closeFullScreen = () => {
    setSelectedImage(null); // Close the full-screen view
  };
  return (
    <div className="w-full container px-4 flex flex-col md:flex-row gap-6 mb-10">
      <div className="flex flex-col items-start max-w-3xl md:w-1/2 w-full relative group">
        <h1 className="text-xl">{propertyData?.[0]?.title}</h1>
        <img
          src={urlFor(propertyData?.[0]?.mainImage)?.url()}
          className="h-[400px] w-full overflow-hidden aspect-square"
          alt={propertyData?.[0]?.title}
        />
        {propertyData?.[0]?.label && (
          <div className="absolute left-3 top-8">
            <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-normal tracking-wide text-dark uppercase bg-light  rounded-full sans">
              {propertyData?.[0]?.label}
            </p>
          </div>
        )}
        <div className="flex mt-4 gap-3 md:space-x-2 flex-wrap">
          {propertyData?.[0]?.images &&
            propertyData?.[0]?.images?.map((image: any, index: any) => (
              <>
                {/* {urlFor(image?.asset)?.url()} */}
                {/* {urlFor(image.asset).url()} */}
                <img
                  key={index}
                  src={urlFor(image?.asset)?.url()}
                  className="h-20 w-20 cursor-pointer object-cover"
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => openFullScreen(urlFor(image?.asset)?.url())}
                />
              </>
            ))}
        </div>
      </div>
      {propertyData?.[0]?.label.toLowerCase() !== "land" && (
        <div className="flex flex-col gap-6 w-full md:w-1/3">
          <h2>{propertyData?.[0]?.title}</h2>
          {propertyData?.[0]?.bedrooms && (
            <span className="">{propertyData?.[0]?.bedrooms} Bedrooms</span>
          )}
          {propertyData?.[0]?.bathrooms && (
            <span className="">{propertyData?.[0]?.bathrooms} Bathrooms</span>
          )}
          <p
            className="text-xs text-gray truncate sans"
            title={propertyData?.[0]?.description}
          >
            {propertyData?.[0]?.description}
          </p>
        </div>
      )}
      {propertyData?.[0]?.label.toLowerCase() === "land" && (
        <div className="flex flex-col gap-6 w-full md:w-1/3">
          <h2>{propertyData?.[0]?.title}</h2>
          <div className="gap-3">
            <h1>This Land is for Sale </h1>
            <p>Please Contact Us for more information:</p>
            <div className="flex items-center gap-2">
              <a
                href={`tel:+${data?.phone}`}
                className="text-xs text-gray truncate sans mt-3"
                title={data?.phone}
              >
                {data?.phone}
              </a>
              <a
                href={`tel:+${data?.phone2}`}
                className="text-xs text-gray truncate sans mt-3"
                title={data?.phone2}
              >
                {data?.phone2}
              </a>
              <a
                href={`tel:+${data?.phone3}`}
                className="text-xs text-gray truncate sans mt-3"
                title={data?.phone3}
              >
                {data?.phone3}
              </a>
            </div>
          </div>
        </div>
      )}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={closeFullScreen}
        >
          <img
            src={selectedImage}
            className="max-w-full max-h-full"
            alt="Full screen"
          />
          <button
            onClick={closeFullScreen}
            className="absolute top-5 right-5 text-white text-2xl"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default DetailSection;
