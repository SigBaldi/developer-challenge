import React from 'react';
import STYLES from './PriceTag.scss';

const getClassName = (className: string) => STYLES[className] || 'UNKNOWN';

function PriceTag(props: { value: number }): JSX.Element {
  const { value } = props;
  return <span className={getClassName('PriceTag')}>€{value}</span>;
}

export default PriceTag;
