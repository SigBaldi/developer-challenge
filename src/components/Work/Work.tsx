import React from 'react';
import PriceTag from '../PriceTag';
import STYLES from './Work.scss';

const getClassName = (className: string) => STYLES[className] || 'UNKNOWN';
const parseTags = (tags: string[]): string => {
  if (tags.includes('Sold Out')) return 'Sold Out';
  if (tags.includes('Coming soon')) return 'Coming Soon';
  return '';
};

export interface IWork {
  id: number;
  image: string;
  price: number;
  tags: string[];
  title: string;
  url: string;
}

function Work(props: { work: IWork }): JSX.Element {
  const { image, price, tags, title, url } = props.work;
  const finalTag = parseTags(tags);
  return (
    <>
      <a href={url} className={getClassName('Work')}>
        {finalTag ? <pre>{finalTag}</pre> : <p>&nbsp;</p>}
        <img src={image} alt="Artwork" />
        <h3>{title}</h3>
        <PriceTag value={price} />
      </a>
    </>
  );
}

export default Work;
