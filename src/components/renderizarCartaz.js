import { Link } from "react-router-dom"
import axios from "axios";
import {useState, useEffect} from "react";

export default function RenderizarCartaz(){

    const [items, setItems] = useState(null);

    useEffect(() => {
        const request = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        request.then(resp => {
            setItems(resp.data);
        });
    },[]);

    if (items===null){
        return <div className="loading"><img src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif" alt=""/></div>;
    }

    return (items.map (filme => 
        <div className="cartazFilme">
            <Link to={`/sessoes/${filme.id}`}>
                <div className="fundoFilme">
                    <div className="imagemFilme">
                        <img src={filme.posterURL} alt="" />
                    </div>
                </div>
            </Link>
        </div>
    ))
}