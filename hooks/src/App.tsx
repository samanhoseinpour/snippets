import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <section>
      <button
        onClick={() => {
          incrementCount();
        }}
      >
        {count}
      </button>
    </section>
  );
}
