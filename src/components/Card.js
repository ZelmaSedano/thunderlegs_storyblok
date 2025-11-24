// NOTES: images are received as URL strings, not objects, so you have to add a conditional

import { storyblokEditable } from "@storyblok/react";
import './Card.css'

const Card = ({ blok }) => {
    // NOTE: the image couldn't be imported because it was a string instead of an object with a fileName property

    // handle both image formats that Storyblok might return:
    // format 1: string (direct URL like "//a.storyblok.com/...")
    // format 2: object (with filename property like {filename: "//a.storyblok.com/..."})

    // ternary operator:
    // if the blok.image is a string (direct URL from storyblok)
    const imageUrl = typeof blok.image === 'string'
        // if true: 
            // add 'https:' prefix to make it a full URL
        ? 'https:' + blok.image

        // if false: (if blok.image IS NOT A STRING)
            // the ?. is option chaining - safely check for nested properties
        : blok.image?.filename 
            // if true (if blok.image exists AND has a filename property)
            // add 'https:' prefix to filename 
            ? 'https:' + blok.image.filename

            // if false (no usable image data): set imageUrl to null
            : null;

    return (
        <div {...storyblokEditable(blok)} 
            className="card" 
            style={{ backgroundColor: blok.background_color }}
        >
            <h3 className='card-title'>{blok.title}</h3>
            {imageUrl && (
            <img 
                src={imageUrl} 
                alt={blok.title || 'Card image'} 
                className="card-image"
            />
            )}
            <div className='card-content'>{blok.content}</div>
        </div>
    );
};

export default Card;