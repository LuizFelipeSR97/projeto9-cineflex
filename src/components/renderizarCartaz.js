import { Link } from "react-router-dom"

export default function RenderizarCartaz({listaFilmes}){
    return (listaFilmes.map (filme => 
        <div className="cartazFilme">
            <Link to="/sessoes/idFilme">
                <div className="fundoFilme">
                    <div className="imagemFilme">
                        <img src={filme.posterURL} alt="" />
                    </div>
                </div>
            </Link>
        </div>
    ))
}