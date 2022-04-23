import Image from 'next/image';
import { Fragment } from 'react';

import PlaceDetailItem from '../../components/places/PlaceDetailsItem';

const PlaceDetails = (props) => {
  return (
    <PlaceDetailItem
      title="First place"
      image="https://media.istockphoto.com/photos/rome-sunset-over-tiber-and-st-peters-basilica-vatican-italy-picture-id508540910?b=1&k=20&m=508540910&s=170667a&w=0&h=XFeYRw-ajbO3DUf-gVPlpkASVUk9eR2u7VBZKKUDDc8="
      address="SomeAddress 5, 2323,"
      description="first place"
    />
  );
};

export default PlaceDetails;
