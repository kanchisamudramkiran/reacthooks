import React from 'react'
const INITIAL_STATE =0
const FunctionalComponent = () => {
    const [items, setItems] = useState([]);
    const [state, setState] = useState(INITIAL_STATE);

    const stateArray = useState(INITIAL_STATE);

const state = stateArray[0];
const setState = stateArray[1];

    return (
        <div>
            <p>
        Current count is: {count}
      </p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}

export default FunctionalComponent
