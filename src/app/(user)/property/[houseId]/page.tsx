import HeroSection from "@/components/HeroSection";
import Preloader from "@/components/Preloader";
import { client } from "@/lib/sanity.client";
import PreviewSuspense from "@/components/PreviewSuspense";
import React, { cache, useState } from "react";
import FooterSection from "@/components/FooterSection";
import { urlFor } from "@/lib/utils";
import DetailSection from "@/components/DetailSection";
import ContactSection from "@/components/ContactSection";

// Enable NextJS to cache and dedupe queries

const clientFetch = cache(client.fetch.bind(client));

const SingleProduct = async ({ params }: { params: { houseId: string } }) => {
  const slug = params.houseId;
  const bioQuery = '*[_type == "bio" ]';

  const biodata = await clientFetch(bioQuery);
  const propertyQuery = `*[_type == "property" && slug.current == $slug]`;
  const propertyData = await clientFetch(propertyQuery, { slug });

  return (
    <>
      <PreviewSuspense fallback={<Preloader />}>
        <HeroSection data={biodata[0]} />
        <DetailSection propertyData={propertyData} data={biodata[0]} />
        <ContactSection data={biodata[0]} />
        <FooterSection />
      </PreviewSuspense>
    </>
  );
};

export default SingleProduct;
