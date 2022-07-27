import ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/home";
import Horarios from "./components/horarios";
import "./css/style.css"

function App () {
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sessoes/idFilme" element={<Horarios />} />
        </Routes>
    </BrowserRouter>
}

ReactDOM.render(<App />, document.querySelector(".root"));

//return <Home />   ->   Falta puxar da API
