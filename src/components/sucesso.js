import { Link } from "react-router-dom"

export default function Sucesso(){
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
                    <h2>Enola Holmes</h2>
                    <h2>24/06/2021 15:00</h2>
                </div>
                <div className="infoAssentos">
                    <h1>Ingressos</h1>
                    <h2>Assento 15</h2>
                    <h2>Assento 16</h2>
                </div>
                <div className="infoComprador">
                    <h1>Comprador</h1>
                    <h2>Nome: Joao da Silva Santos</h2>
                    <h2>CPF: 123.456.789-10</h2>
                </div>
                <Link to="/"><div className="botao">
                    Voltar para home
                </div></Link>
            </div>
        </div>
        )
}