import { Link } from "react-router-dom"
import axios from "axios";
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import RenderizarAssentos from "./renderizarAssentos";

export default function Sessao() {

    const { idSessao } = useParams();
    const [items, setItems] = useState(null);

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);
        request.then(resp => {
            setItems(resp.data);
        });
    },[idSessao]);

    if (items===null){
        return <div className="loading"><img src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif" alt=""/></div>;
    }

    return (
        <div className="pagSessao">
            <div class="content">
                <div className="titulo">
                    Selecione o(s) assento(s)
                </div>
                <div className="mainContent">                    
                    <div className="assentos">
                        <RenderizarAssentos assentosFilme={items.seats}/>
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
                    <Link to="/sucesso"><div className="botao">
                        Reservar assento(s)
                    </div></Link>
                    <div className="footer">
                    <div className="center">
                        <div className="poster">
                            <div className="fundoFilme">
                                <div className="imagemFilme">
                                    <img src={items.movie.posterURL} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="titulo">
                            <h1>{items.movie.title}</h1>
                            <h1>{items.day.weekday} - {items.name}</h1>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        )
}