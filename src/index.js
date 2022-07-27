import ReactDOM from "react-dom";
import Home from "./components/home";
import Horarios from "./components/horarios";
import "./css/style.css"

export default function App () {
    return <Horarios />
}

ReactDOM.render(<App />, document.querySelector(".root"));

//return <Home />   ->   Falta puxar da API