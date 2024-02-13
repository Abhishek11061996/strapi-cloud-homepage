import Link from "next/link";

interface FeaturesProps {
  data: {
    heading: string;
    description: string;
    feature: Feature[];
  };
}

interface Feature {
  id: string;
  title: string;
  description: string;
  showLink: boolean;
  newTab: boolean;
  url: string;
  text: string;
}

function Feature({ title, description, showLink, newTab, url, text }: Feature) {
  return (
    <div className="flex flex-col items-center p-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-8 h-8 dark:text-violet-400"
      >
        <path
          fillRule="evenodd"
          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
          clipRule="evenodd"
        ></path>
      </svg>

      <h6 className="my-3 text-m font-semibold">{title}</h6>
      <div className="space-y-1 leading-tight my-6 max-w-xs"> {/* Updated max-w-xs to limit width */}
        <p className="text-sm">{description}</p> {/* Updated text size to reduce width */}
      </div>
      {showLink && url && text && (
        <div>
          <Link
            href={url}
            target={newTab ? "_blank" : "_self"}
            className="inline-block px-4 py-2 mt-4 text-sm font-semibold text-white transition duration-200 ease-in-out bg-violet-500 rounded-lg hover:bg-violet-600"
          >
            {text}
          </Link>
        </div>
      )}
    </div>
  );
}

export default function Features({ data }: FeaturesProps) {
  return (
    <section className="dark:bg-black dark:text-gray-100 m:py-12 lg:py-24">
      <div className="container mx-auto py-4 space-y-2 text-center max-w-xl">
        <h5 className="border border-gray-300 bg-gray-100 px-6 py-2 rounded-lg inline-block">
          <span className="text-xl font-bold text-orange-500">{data.heading}</span>
        </h5>
        <h3 className="text-3xl font-bold dark:text-violet-400">{data.description}</h3>
      </div>
      <div className="container mx-auto my-6 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.feature.map((feature: Feature, index: number) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}

