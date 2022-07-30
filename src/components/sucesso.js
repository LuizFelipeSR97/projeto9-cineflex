import {useLocation} from "react-router-dom"
import RenderizarSucesso from "./renderizarSucesso"

export default function Sucesso(){
    const location=useLocation()

    return <RenderizarSucesso nome={location.state.nome} cpf={location.state.cpf} tituloFilme={location.state.tituloFilme} sessao={location.state.sessao} assentos={location.state.assentos} assentosEscolhidos={location.state.assentosEscolhidos}/>
}