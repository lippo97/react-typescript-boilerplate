import * as React from 'react';

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Hello = (_props: HelloProps) => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button type="button" onClick={() => setCount(count + 1)}>
        {count}
      </button>
    </div>
  );
};
