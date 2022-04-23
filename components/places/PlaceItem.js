import { useRouter } from 'next/router';
import Image from 'next/image';

import Card from '../ui/Card';
import classes from './PlaceItem.module.css';

function PlaceItem(props) {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push('/' + props.id);
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image
            src={props.image}
            alt={props.title}
            width={500}
            height={100}
            objectFit="contain"
          />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default PlaceItem;
