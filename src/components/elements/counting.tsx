import { useState } from 'react';
import { Button } from '../ui/button';
import { useStore } from '@nanostores/react';
import { demo } from '@/stores';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const $demo = useStore(demo); // get value

  const increment = () => {
    setCount(count + 1);
    demo.set(!$demo); // set value
  };
  const decrement = () => setCount(count - 1);

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-xl font-semibold">Counter: {count}</h2>
      <div className="flex gap-4">
        <Button onClick={decrement} variant="outline">
          -
        </Button>
        <Button onClick={increment} variant="outline">
          +
        </Button>
      </div>
    </div>
  );
};
