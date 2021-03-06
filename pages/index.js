import PlaceList from '../components/places/PlaceList';

const DUMMY_POSTS = [
  {
    id: 'm1',
    title: 'First place',
    image:
      'https://media.istockphoto.com/photos/rome-sunset-over-tiber-and-st-peters-basilica-vatican-italy-picture-id508540910?b=1&k=20&m=508540910&s=170667a&w=0&h=XFeYRw-ajbO3DUf-gVPlpkASVUk9eR2u7VBZKKUDDc8=',
    address: 'SomeAddress 5, 2323,',
    description: 'first place',
  },
];

const HomePage = (props) => {
  return <PlaceList places={props.places} />;
};

export async function getStaticProps() {
  // fetch from API and render before component mounts
  // wont be execute in the client side
  // executed during build
  return {
    props: {
      places: DUMMY_POSTS,
    },
  };
}

export default HomePage;
