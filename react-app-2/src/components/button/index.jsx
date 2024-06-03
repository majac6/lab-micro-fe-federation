import {useState} from "react";

export function Button() {

  const [state, setState] = useState(0)

  return <button onClick={() => {
    setState(state + 1)
  }}>this is react2 button {state}</button>
}