import NewPostForm from '../../components/places/NewPlaceForm';

const NewPostPage = (props) => {
  const addPlaceHandler = () => {};
  return <NewPostForm onAddPlace={addPlaceHandler} />;
};

export default NewPostPage;
