import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import './Page.css'

const Page = ({ blok }) => (
  <main {...storyblokEditable(blok)} className='page'>
    {blok.body
      ? blok.body.map((blok) => (
          <StoryblokComponent blok={blok} key={blok._uid} />
        ))
      : null}
  </main>
);

export default Page;