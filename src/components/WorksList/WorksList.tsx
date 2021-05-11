import React from 'react';
import Work from '../Work';
import { IWork } from '../Work/Work';
import STYLES from './WorksList.scss';

const getClassName = (className: string) => STYLES[className] || 'UNKNOWN';

export interface IWorksListProps {
  works: IWork[];
}

function WorksList(props: IWorksListProps): JSX.Element {
  return (
    <section className={getClassName('WorksList')}>
      {props.works?.map((work: IWork) => (
        <Work work={work} key={work.id} />
      ))}
    </section>
  );
}

export default WorksList;
