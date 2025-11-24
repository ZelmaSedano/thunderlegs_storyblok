import { storyblokEditable } from "@storyblok/react";

const Card = ({ blok }) => (
    <div {...storyblokEditable(blok)} className="card" style={{ backgroundColor: blok.background_color }}>
        {blok.image && <img src={blok.image.filename} alt={blok.image.alt} />}
        <h3>{blok.title}</h3>
        <div>{blok.content}</div>
    </div>
);

export default Card;