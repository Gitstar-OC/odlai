import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { RootToggle } from "fumadocs-ui/components/layout/root-toggle";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import { FaPython } from "react-icons/fa";
import { TbMathIntegralX } from "react-icons/tb";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions}
      sidebar={{
        banner: (
          <RootToggle
            options={[
              {
                title: "Python for ML",
                icon: (
                  <div
                    className="size-9 shrink-0 rounded-md bg-gradient-to-t from-background/80 p-1.5"
                    style={{
                      backgroundColor: `hsl( 250 100% 80%/.3)`,
                      color: `hsl( 250 100% 80%)`,
                    }}
                  >
                    <FaPython className="size-6" />
                  </div>
                ),
                description: "Python for ML",
                url: "#",
              },
              {
                title: "Maths for ML",
                icon: (
                  <div
                    className="size-9 shrink-0 rounded-md bg-gradient-to-t from-background/80 p-1.5"
                    style={{
                      backgroundColor: `hsl( 250 100% 80%/.3)`,
                      color: `hsl( 250 100% 80%)`,
                    }}
                  >
                    <TbMathIntegralX className="size-6" />
                  </div>
                ),
                description: "Maths for ML",
                url: "/docs",
              },
            ]}
          />
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
