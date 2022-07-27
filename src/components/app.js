import { Link } from "react-router-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./home";
import Horarios from "./horarios";
import Sessao from "./sessao";
import Sucesso from "./sucesso";

export default function App () {
    return (
    <div className="pagina">
        <div class="header">
            CINEFLEX
        </div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sessoes/idFilme" element={<Horarios />} />
                <Route path="/assentos/idSessao" element={<Sessao />} />
                <Route path="/sucesso" element={<Sucesso />} />
            </Routes>
        </BrowserRouter>
    </div>    
    )
}
