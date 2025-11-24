import { storyblokEditable } from "@storyblok/react";
import './Feature.css'

const Feature = ({ blok }) => (
  <div {...storyblokEditable(blok)} className="column feature">
    {blok.name}
  </div>
);

export default Feature;
