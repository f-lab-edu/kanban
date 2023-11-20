'use client'

import { atom, useAtom } from "jotai";

const counter = atom(0);

export default function ClientComponent() {
  const [count, setCounter] = useAtom(counter);
  const onClick = () => setCounter(prev => prev + 1);
  return (
    <div>
      <h1>Client Component</h1>
      <p>{count}</p>
      <button onClick={onClick}>Click</button>
    </div>
  )
}
