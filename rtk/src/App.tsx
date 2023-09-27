import { useAppDispatch, useAppSelector } from '../src/app/hooks';
import {
  incremented,
  deceremented,
  reset,
} from './features/counter/counterSlice';

const App: React.FC = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(incremented());
  };

  const handleDecrement = () => {
    dispatch(deceremented());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <>
      <h1 className="text-white bg-blue-400">Lets learn redux-toolkit</h1>

      <h3>First state from redux store</h3>

      <div className="flex justify-between gap-3 mx-20 mt-20">
        <p>counter state: {count}</p>
        <div className="flex gap-3">
          <button className="border p-2" onClick={handleIncrement}>
            increment
          </button>
          <button className="border p-2" onClick={handleDecrement}>
            decerement
          </button>
          <button className="border p-2" onClick={handleReset}>
            reset
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
