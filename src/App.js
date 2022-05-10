import { useDispatch } from "react-redux";
import { all } from "./actions";

function App() {
    const dispatch = useDispatch();

    return (
        <>
            <button onClick={() => dispatch(all("test"))}>Test</button>
        </>
    );
}

export default App;
