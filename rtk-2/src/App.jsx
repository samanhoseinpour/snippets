import AddPosts from './features/posts/AddPosts';
import PostsList from './features/posts/PostsList';

const App = () => {
  return (
    <>
      <h1 className="bg-red-50 text-center font-bold text-orange-600 uppercase py-5">
        redux toolkit second project
      </h1>
      <AddPosts />
      <PostsList />
    </>
  );
};

export default App;
