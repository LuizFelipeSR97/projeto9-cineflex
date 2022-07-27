import { Link } from "react-router-dom"

export default function Sucesso(){
    return (
        <div className="pagSessao">
            <div class="content">
                <div className="titulo">
                    <div className="tituloCentro">
                        Pedido feito com sucesso!
                    </div>
                </div>
                <div className="infoSessao">
                    
                </div>
                <div className="infoAssentos">

                </div>
                <div className="infoComprador">
                    <h1>Comprador</h1>
                    <h2>Nome: Joao da Silva Santos</h2>
                    <h2>CPF: 123.456.789-10</h2>
                </div>
                <Link to="/"><div className="botaoReservar">
                    Voltar para home
                </div></Link>
            </div>
        </div>
        )
}