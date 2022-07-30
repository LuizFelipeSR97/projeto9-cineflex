import { Link} from "react-router-dom"
import RenderizarSucessoAssentos from "./renderizarSucessoAssentos"

export default function RenderizarSucesso({nome, cpf, tituloFilme, sessao, assentos}){
    return (
        <div className="pagSucesso">
            <div class="content">
                <div className="titulo">
                    <div className="tituloCentro">
                        <h3>Pedido feito com sucesso!</h3>
                    </div>
                </div>
                <div className="infoSessao">
                    <h1>Filme e sessão</h1>
                    <h2>{tituloFilme}</h2>
                    <h2>{sessao}</h2>
                </div>
                <div className="infoAssentos">
                    <h1>Ingressos</h1>
                    <RenderizarSucessoAssentos assentos={assentos}/>
                </div>
                <div className="infoComprador">
                    <h1>Comprador</h1>
                    <h2>Nome: {nome}</h2>
                    <h2>CPF: {cpf}</h2>
                </div>
                <Link to="/"><div className="botao">
                    Voltar para home
                </div></Link>
            </div>
        </div>
        )
}