import Link from "next/link";
import HighlightedText from "./HighlightedText";
import { renderButtonStyle } from "../utils/render-button-style";

interface Button {
  id: string;
  url: string;
  text: string;
  type: string;
  newTab: boolean;
}

interface SatisfiedClientProps {
  data: {
    title: string;
    description: string;
    buttonText: string;
    buttonUrl: string;
    buttonType: string;
    buttonNewTab: boolean;
    button: Button;
  };
}

export default function SatisfiedClient({ data }: SatisfiedClientProps) {
  // Check if data is undefined
  if (!data) {
    return null; // or you can return a loading indicator or default content
  }

  const { title, description, buttonText, buttonUrl, buttonType, buttonNewTab } = data;

  return (
    <section className="bg-white py-12 flex justify-center">
      <div className="container flex flex-col justify-center items-center mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-center">
        <div className="flex flex-col justify-center p-6 text-center rounded-lg ">
          <HighlightedText
            text={title}
            tag="h2"
            className="text-xl font-bold text-orange-500 text-center border border-gray-300 bg-gray-100 px-6 py-2 rounded-lg inline-block mx-auto"
          />
          <h3 className="mt-6 mb-8 font-bold text-3xl  sm:mb-12 text-blue-900">{description}</h3>
          {/* Check if buttonUrl is defined before rendering Link */}
          {buttonUrl && (
            <Link href={buttonUrl} passHref>
              <a className={renderButtonStyle(buttonType)} target={buttonNewTab ? "_blank" : "_self"}>
                {buttonText}
              </a>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
