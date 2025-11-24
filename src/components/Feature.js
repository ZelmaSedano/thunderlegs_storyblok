import { storyblokEditable } from "@storyblok/react";
import './Feature.css'

const Feature = ({ blok }) => (
  <div {...storyblokEditable(blok)} 
  className="column feature"
  style={{ backgroundColor: blok.backgroundColor}}
  >
    {blok.name}
  </div>
);

export default Feature;
