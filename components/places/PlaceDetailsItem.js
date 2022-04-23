import Image from 'next/image';
import { Fragment } from 'react';

import classes from './PlaceDetailsItem.module.css';

const PlaceDetailItem = (props) => {
  return (
    <section className={classes.detail}>
      <Image
        src={props.image}
        alt={props.title}
        width={600}
        height={300}
        objectFit="fill"
      />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
};

export default PlaceDetailItem;
