import { draftMode } from "next/headers";
import PreviewSuspense from "@/components/PreviewSuspense";
import { DocumentsCount } from "@/components/DocumentsCount";
import PreviewDocumentsCount from "@/components/PreviewDocumentsCount";
import { client } from "@/lib/sanity.client";
import { cache } from "react";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductsSection";
import { InsentiveSection } from "@/components/InsentiveSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import MapSection from "@/components/MapSection";
import ImageGrid from "@/components/ImageGrid";

// Enable NextJS to cache and dedupe queries
const clientFetch = cache(client.fetch.bind(client));

export default async function IndexPage() {
  // const { isEnabled } = draftMode();
  // if (isEnabled) {
  //   return (
  //     <PreviewSuspense fallback="Loading...">
  //       <HeroSection />
  //       <ProductSection/>
  //       {/* <PreviewDocumentsCount /> */}
  //     </PreviewSuspense>
  //   );
  // }
const  query = '*[_type == "property" && featured == true]'
const  bioQuery = '*[_type == "bio" ]'
const  imgQuery = '*[_type == "gallery" ]'
  const data = await clientFetch(query);
  const biodata = await clientFetch(bioQuery);
  const imgdata = await clientFetch(imgQuery);
  return (

          <PreviewSuspense fallback="Loading...">
        <HeroSection data={biodata[0]} />
        <ProductSection data={data}/>
        {/* <PreviewDocumentsCount /> */}
      <InsentiveSection />
      <ImageGrid data={ imgdata[0].images} />
      <ContactSection />
      <MapSection center={biodata[0].location} />

      <FooterSection/>
    </PreviewSuspense>

  );
}
