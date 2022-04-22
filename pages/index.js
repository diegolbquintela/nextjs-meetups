import MeetUpList from '../components/meetups/MeetupList';

const DUMMY_POSTS = [
  {
    id: 'm1',
    title: 'First meetup',
    image: '',
    address: 'SomeAddress 5, 2323,',
    description: 'first meetup',
  },
  {
    id: 'm2',
    title: 'First meetup',
    image: '',
    address: 'SomeAddress 5, 2323,',
    description: 'first meetup',
  },
];

const HomePage = () => {
  return <MeetUpList meetups={DUMMY_POSTS} />;
};

export default HomePage;
