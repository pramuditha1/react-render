import React, {useState} from 'react'

export const UseState = (props) => {
    const [count, setCount] = useState(0);
    console.log('usestate render');
    /**
     * 
    the setter function in useState hook will cause the component to re-render.
    Set same state value after the initial render?
        this will not re-render the component
    Set same state value after re-renders?
        React will render component for one more time and bails out from subsequent renders.
     */
  return(
    <div>
        now count value is equal to : {count}
        <button onClick={() => setCount((c) => c + 1)}>count - {count}</button>
        <button onClick={() => setCount(0)}>count to 0</button>
        <button onClick={() => setCount(5)}>count to 5</button>
    </div>
   )
 }