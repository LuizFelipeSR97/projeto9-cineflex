import { Link } from "react-router-dom"
import Lugar from "./lugar"

export default function Sessao() {
    return (
        <div className="pagSessao">
            <div class="content">
                <div className="titulo">
                    Selecione o(s) assento(s)
                </div>
                <div className="mainContent">
                    
                    <div className="assentos">
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                        <Lugar />
                    </div>
                    <div className="legendaAssentos">
                        <div className="assento">
                            <div className="lugar selecionado"></div>
                            <h1>Selecionado</h1>
                        </div>
                        <div className="assento">
                            <div className="lugar disponivel"></div>
                            <h1>Disponível</h1>
                        </div>
                        <div className="assento">
                            <div className="lugar indisponivel"></div>
                            <h1>Indisponível</h1>
                        </div>
                    </div>
                    <div className="dadosComprador">
                        <h1>Nome do comprador</h1>
                        <input placeholder={"Digite seu nome..."}/>
                        <h1>CPF do comprador</h1>
                        <input placeholder={"Digite seu CPF..."}/>
                    </div>
                    <Link to="/sucesso"><div className="botaoReservar">
                        Reservar assento(s)
                    </div></Link>
                    <div className="footer">
                    <div className="center">
                        <div className="poster">
                            <div className="fundoFilme">
                                <div className="imagemFilme">
                                    <img src="https://br.web.img2.acsta.net/c_310_420/pictures/20/02/03/15/22/4954456.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="titulo">
                            <h1>TITULO</h1>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        )
}