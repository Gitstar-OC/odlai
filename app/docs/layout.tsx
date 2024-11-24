import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import GridPattern  from "@/components/grid-pattern"
import {cn} from "@/lib/utils"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tree={source.pageTree} {...baseOptions}>
      <span
        className="absolute inset-0 z-[-1] h-[64rem] max-h-screen overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(49.63% 57.02% at 58.99% -7.2%, hsl(var(--primary)/0.1) 39.4%, transparent 100%)",
        }}
      >
          <GridPattern
            squares={[
              [4, 4],
              [5, 1],
              [8, 2],
              [5, 3],
              [5, 5],
              [10, 10],
              [12, 15],
              [15, 10],
              [10, 15],
              [15, 10],
              [10, 15],
              [15, 10],
            ]}
            className={cn(
              "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
              "inset-x-[10%] inset-y-[-80%] h-[200%] skew-y-12"
            )}
          />
      </span>

      {children}
    </DocsLayout>
  );
}
