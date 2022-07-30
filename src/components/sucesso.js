import {useLocation} from "react-router-dom"
import RenderizarSucesso from "./renderizarSucesso"

export default function Sucesso(){
    const location=useLocation()

    console.log(location.state.nome)
    return <RenderizarSucesso nome={location.state.nome} cpf={location.state.cpf} tituloFilme={location.state.tituloFilme} sessao={location.state.sessao} assentos={location.state.assentos}/>
}