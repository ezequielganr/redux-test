import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { edit } from "./app/reducers/home";

function App() {
    const [input, setInput] = useState(null);

    const dispatch = useDispatch();
    const text = useSelector(state => state.home.text);

    return (
        <>
            <h1>Redux</h1>
            <p>{input}</p>
            <h4>{text}</h4>

            <input onChange={(event) => setInput(event.target.value)}></input>
            <button onClick={() => dispatch(edit(input))}>Editar</button>
        </>
    );
}

export default App;
