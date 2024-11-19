import { type ReactNode } from "react";
import { Banner } from "fumadocs-ui/components/banner";
import Link from "next/link";
import { FaGithubAlt } from "react-icons/fa6";

export default function Preview(): ReactNode {
  return (
    <div className="flex flex-col gap-4">
      <Banner
        className="z-0"
        id="hello-world"
        variant="rainbow"
        // changeLayout={false}
      >
        <Link
          href="https://github.com/OpenDeepLearningAI/OpenDeepLearning"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          ⭐ Loving ODL? Leave a star! <FaGithubAlt className="ml-2 text-lg" />
        </Link>
      </Banner>
    </div>
  );
}
