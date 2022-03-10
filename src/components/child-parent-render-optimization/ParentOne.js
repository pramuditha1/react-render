import React, {useState} from 'react'
import {ChildOne} from './ChildOne'

export const ParentOne = ({children}) => {
    const [count, setCount] = useState(0);
    console.log('parent one render');
  return(
    <div>
        count : {count}
        <button onClick={() => setCount((c) => c + 1)}>count - {count}</button>
        <button onClick={() => setCount(0)}>count to 0</button>
        <button onClick={() => setCount(5)}>count to 5</button>
        {children}
    </div>
   )
 }