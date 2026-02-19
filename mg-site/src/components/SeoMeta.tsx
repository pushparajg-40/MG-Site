import { Helmet } from "react-helmet";
import { useMeta } from "../hooks/useMeta";
import type { JSX } from "react";

const SeoMeta = (): JSX.Element => {
  const { title, description, keywords } = useMeta();

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

export default SeoMeta;
