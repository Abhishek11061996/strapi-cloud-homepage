import { ReactNode } from "react";
import { getStrapiMedia } from "../utils/api-helpers";
import FormSubmit from "./FormSubmit";
import Image from 'next/image';

interface EmailProps {
  title: ReactNode;
  submitButton: any;
  description: ReactNode;
  emailPlaceholder: string;
  picture: any;
  caption: ReactNode;
  data:{
  id: string;
  __component: string;
  title: string;
  description: string;
  emailPlaceholder: string;
  picture: Picture;
  submitButton: {
    text: string;
  };
}
}

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

export default function Email({ data }: {data: EmailProps }) {
  // console.log("email",data)
  const imgUrl = getStrapiMedia(data?.picture?.data[0]?.attributes?.url);

  // console.log("datapic",data.picture.data)
  return (
    <section className="py-6 bg-cyan-800 dark:bg-black dark:text-gray-50">
      <div className="container mx-auto flex flex-col lg:flex-row lg:items-center justify-center lg:space-x-12">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <Image
            src={imgUrl || ""}
            alt={data?.picture?.data?.attributes?.alternativeText || "none provided"}
            className="object-contain"
            width={388}
            height={388}
          />
        </div>
       
        {/* Text content */}
        <div className="lg:w-2/3">
          <div className="text-center lg:text-left">
            <h6 className="text-xl font-bold mb-5 leading-none bg-cyan-600 px-6 py-2 rounded-lg inline-block text-white">{data.title}</h6>

            <h2 className="text-3xl font-bold mb-5 text-white">{data.description}</h2>
            <p className="text-lg mb-5 text-white">{data.caption}</p>
          </div>
          {/* Form */}
          <FormSubmit placeholder={data.emailPlaceholder} text={data.submitButton.text} />
        </div>
      </div>
    </section>
  );
}
