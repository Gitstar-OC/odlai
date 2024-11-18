import { docs, meta } from "@/.source";
import { createMDXSource } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";
import { icons } from "lucide-react";
import { createElement } from "react";
import * as FaIcons from "react-icons/fa";
import * as FaIcons6 from "react-icons/fa6";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as DiIcons from "react-icons/di";
import * as FiIcons from "react-icons/fi";
import * as SiIcons from "react-icons/si";

const allIcons = {
  ...FaIcons,
  ...FaIcons6,
  ...AiIcons,
  ...BiIcons,
  ...DiIcons,
  ...FiIcons,
  ...SiIcons,
};

export const source = loader({
  baseUrl: "/docs",
  source: createMDXSource(docs, meta),
  icon(icon) {
    if (!icon) return undefined;
    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
    if (icon in allIcons)
      return createElement(allIcons[icon as keyof typeof allIcons]);
    return undefined;
  },
});
