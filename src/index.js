import ReactDOM from "react-dom";
import Home from "./components/home";
import "./css/style.css"

export default function App () {
    return <Home />
}

ReactDOM.render(<App />, document.querySelector(".root"));