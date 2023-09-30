import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { addPost } from './postsSlice';

const AddPosts = () => {
  const dipatch = useDispatch();
  const inputRef = useRef(null);

  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleAddPost = (e) => {
    if (postTitle && postContent) {
      e.preventDefault();
      dipatch(
        addPost({
          id: nanoid(),
          title: postTitle,
          content: postContent,
        })
      );
      setPostTitle('');
      setPostContent('');
    }
  };

  return (
    <div className="mx-8">
      <form>
        <div className="flex flex-row justify-around gap-2 mt-10">
          <input
            ref={inputRef}
            value={postTitle}
            placeholder="Post Title"
            type="text"
            id="post-title"
            className="block w-72 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-orange-500 focus:border-orange-500 outline-none"
            onChange={(e) => setPostTitle(e.target.value)}
            required
          />
          <input
            value={postContent}
            placeholder="Content Title"
            type="text"
            id="post-content"
            className="block w-72 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-orange-500 focus:border-orange-500 outline-none"
            onChange={(e) => setPostContent(e.target.value)}
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
