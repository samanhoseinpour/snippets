import { useSelector, useDispatch } from 'react-redux';

import { increase, decrease, reset } from './counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleClickIncrease = () => {
    dispatch(increase());
  };
  const handleClickDecrease = () => {
    dispatch(decrease());
  };
  const handleClickReset = () => {
    dispatch(reset());
  };

  return (
    <div className="p-10">
      <h3>Initial State: {count}</h3>
      <div className="flex flex-col gap-2 mt-5">
        <button className="border p-2" onClick={handleClickIncrease}>
          increase
        </button>
        <button className="border p-2" onClick={handleClickDecrease}>
          decrease
        </button>
        <button className="border p-2" onClick={handleClickReset}>
          reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
