import { storyblokEditable } from "@storyblok/react";

// is the blok where the actual content comes from?
const Teaser = ({ blok }) => {
  return (
    <h2 style={{ textAlign: "center" }} {...storyblokEditable(blok)}>
      {blok.headline}
    </h2>
  );
};

export default Teaser;
