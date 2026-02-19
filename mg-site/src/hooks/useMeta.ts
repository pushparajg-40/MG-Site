import { useLocation } from "react-router-dom";
import { SEO_METADATA, type SeoMeta } from "../metaData";

const DEFAULT_SEO: SeoMeta = {
  title: "AI Enterprises Company | Innovate with Mind Graph",
  description:
    "Empower your business with a top AI enterprises company. Mind Graph delivers cutting-edge IT solutions to accelerate your growth. Get started today!",
  keywords: "AI Enterprises company",
};

export const useMeta = () => {
  const location = useLocation();
  const pathname = decodeURIComponent(location?.pathname);
  const seoMeta = SEO_METADATA[pathname] || DEFAULT_SEO;

  return seoMeta || DEFAULT_SEO;
};
