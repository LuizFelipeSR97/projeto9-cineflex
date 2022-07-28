import RenderizarDiasFilme from "./renderizarDiasFilme"
import axios from "axios";
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

export default function Horarios () {

    const { idFilme } = useParams();
    const [items, setItems] = useState(null);

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        request.then(resp => {
            setItems(resp.data);
        });
    },[idFilme]);

    if (items===null){
        return <div className="loading"><img src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif" alt=""/></div>;
    }

    return (
        <div className="pagHorarios">
            <div class="content">
                <div className="titulo">
                    Selecione o horário
                </div>
                <div className="listaHorariosFilme">
                    <RenderizarDiasFilme infoFilme={items.days}/>
                </div>
            </div>
            <div className="footer">
                <div className="center">
                    <div className="poster">
                        <div className="fundoFilme">
                            <div className="imagemFilme">
                                <img src={items.posterURL} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="titulo">
                        <h1>{items.title}</h1>
                    </div>
                </div>
            </div>
        </div>
        )
}