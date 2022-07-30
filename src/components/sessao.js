import { Link, useParams, useNavigate } from "react-router-dom"
import axios from "axios";
import {useState, useEffect} from "react";
import RenderizarAssentos from "./renderizarAssentos";

const assentos = [{id: 101, numero: 1},{id: 103, numero: 3},{id: 105, numero: 5}]

export default function Sessao() {

    const { idSessao } = useParams();
    const [items, setItems] = useState(null);
    const navigate = useNavigate();

    function submitForm(event){

        event.preventDefault();
        console.log(`Nome do comprador: ${event.target.nome.value}, CPF do comprador: ${event.target.cpf.value}, Assentos comprados: passar o id e o name deles`)
        navigate("/sucesso",{state:{nome: event.target.nome.value, cpf: event.target.cpf.value, idAssentos:[100,101,102], numeroAssentos:[1,2,3], tituloFilme: items.movie.title, sessao: `${items.day.date} ${items.name}`, assentos: assentos}})
    }

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
                    <form onSubmit={submitForm}>
                        <div className="dadosComprador">
                            <h1>Nome do comprador</h1>
                            <input placeholder={"Digite seu nome..."} name="nome" required/>
                            <h1>CPF do comprador</h1>
                            <input placeholder={"Digite seu CPF..."} maxLength='11' name="cpf" required/>
                        </div>
                        <div className="botaoReservar">
                            <button type="submit">
                                Reservar assento(s)
                            </button>
                        </div>
                    </form>
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