import { useSelector } from 'react-redux';
import { AllPosts } from './postsSlice';
import PostAuthor from './PostAuthor';

const PostsList = () => {
  const posts = useSelector(AllPosts);

  const renderedPosts = posts.map((post) => (
    <div className="shadow-lg w-80 py-12 mx-auto" key={post.id}>
      <article className="p-4">
        <h3 className="text-center font-semibold">{post.title}</h3>
        <p className="text-center text-[12px] text-gray-400">
          <PostAuthor userId={post.userId} />
        </p>
        <p className="mt-2">{post.content}</p>
      </article>
      <div className="flex justify-around h-auto items-center mt-6">
        <button className="hover:text-gray-600">Edit</button>
        <button className="bg-red-500 text-white rounded-full p-2 ">
          Delete
        </button>
      </div>
    </div>
  ));

  return (
    <>
      <h2 className="text-[32px] mt-32 text-center font-extrabold uppercase text-orange-600">
        Posts
      </h2>
      <div className="flex flex-wrap mt-10 max-sm:justify-center h-auto">
        {renderedPosts}
      </div>
    </>
  );
};

export default PostsList;
