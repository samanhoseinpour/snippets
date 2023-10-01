import { useSelector } from 'react-redux';
import { AllUsers } from '../users/usersSlice';

const PostAuthor = ({ userId }) => {
  const users = useSelector(AllUsers);

  const author = users.find((user) => user.id === userId);

  return <span>{author ? author.name : 'Uknown Author'}</span>;
};

export default PostAuthor;
