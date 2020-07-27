import React, { useState, useEffect } from 'react';


export default function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
      });

    return (
        <div>
          <label>Count:
        <br/>
        <h1>{count}</h1>
      </label>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}
