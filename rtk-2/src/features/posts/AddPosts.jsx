import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addPost } from './postsSlice';
import { AllUsers } from '../users/usersSlice';

const AddPosts = () => {
  const users = useSelector(AllUsers);
  const dipatch = useDispatch();
  const inputRef = useRef(null);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleAddPost = (e) => {
    if (title && content) {
      e.preventDefault();
      dipatch(addPost(title, content, userId));
      setTitle('');
      setContent('');
    }
  };

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <div className="mx-8">
      <form>
        <div className="flex flex-row justify-around gap-2 mt-10">
          <input
            ref={inputRef}
            value={title}
            placeholder="Post Title"
            type="text"
            id="post-title"
            className="block w-72 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-orange-500 focus:border-orange-500 outline-none"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <select
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="block w-72 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-orange-500 focus:border-orange-500 outline-none"
          >
            <option value=""></option>
            {usersOptions}
          </select>
          <input
            value={content}
            placeholder="Content Title"
            type="text"
            id="post-content"
            className="block w-72 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-orange-500 focus:border-orange-500 outline-none"
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <button
            className="bg-orange-500 text-white rounded-full px-4 py-2 outline-none"
            onClick={handleAddPost}
          >
            + ADD POST
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPosts;
