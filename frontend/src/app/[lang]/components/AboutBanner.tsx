import Link from "next/link";
import Image from "next/image";
import HighlightedText from "./HighlightedText";
import { getStrapiMedia } from "../utils/api-helpers";
import { renderButtonStyle } from "../utils/render-button-style";

interface Picture {
  data: {
    id: string;
    attributes: {
      url: string;
      name: string;
      alternativeText: string;
    };
  };
}

interface AboutBannerProps {
  details3: string;
  details2: string;
  cooName: string;
  position: string;
  titleAbout: string;
  descriptionAbout: string;
  details1: string;
  picture: any;
  data: {
    detailAbout: string;
    descriptionAbout: string;
    titleAbout: string;
    id: string;
    picture: Picture;
  };
}

export default function AboutBanner({ data }:{data: AboutBannerProps}) {
  // console.log("dataa",data)
  // Ensure imgUrl is correctly populated
  // const imgUrl = getStrapiMedia(data?.picture?.data?.attributes?.url);
  const imgUrl = getStrapiMedia(data?.picture?.data[0]?.attributes?.url);
  
  // Log imgUrl to ensure it's correct
  console.log("imgUrl", data?.picture?.data);


  return (
    <section className="dark:bg-black dark:text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-20 lg:mt-20 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
        
            <Image
              src={imgUrl || ""}
              alt={data?.picture?.data?.attributes?.alternativeText || "Image"}
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 "
              width={716}
              height={524}
            />
        
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-lg lg:max-w-md xl:max-w-lg lg:text-left">
          <HighlightedText
            text={data.titleAbout}
            tag="h6"
            className="uppercase font-semibold text-xl tracking-wide mb-3 text-custom-color border border-gray-300 bg-gray-100 px-6 py-2 rounded-lg inline-block"
          />
          <HighlightedText
            text={data.descriptionAbout}
            tag="h1"
            className="font-bold text-5xl mb-6 text-blue-900"
          />
          <HighlightedText
            text={data.details1}
            tag="p"
            className="tmt-6 mb-4 text-lg sm:mb-5 text-custom-color"
          />
          <HighlightedText
            text={data.details2}
            tag="p"
            className="tmt-6 mb-4 text-lg sm:mb-5 text-custom-color"
          />
          <HighlightedText
            text={data.details3}
            tag="p"
            className="tmt-6 mb-8 text-lg sm:mb-12 text-custom-color"
          />
          <HighlightedText
            text={data.cooName}
            tag="h4"
            className="tmt-6 font-bold text-xl mb-4 text-lg sm:mb-5 text-blue-900"
          />
          <HighlightedText
            text={data.position}
            tag="h5"
            className="tmt-6 mb-8 font-bold text-xl text-lg sm:mb-12 text-blue-900"
          />
        </div>
      </div>
    </section>
  );
}
