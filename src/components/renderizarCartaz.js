export default function RenderizarCartaz({listaFilmes}){
    return (listaFilmes.map (filme => 
        <div className="cartazFilme">
            <div className="fundoFilme">
                <div className="imagemFilme">
                    <img src={filme.posterURL} alt=""/>
                </div>
            </div>
        </div>
    ))
}

// export default function RenderizarCartaz([listaFilmes]){
//     listaFilmes.map(filme =>
//         <div className="cartazFilme">
//             <div className="fundoFilme">
//                 <div className="imagemFilme">
//                     <img src={filme} alt=""/>
//                 </div>
//             </div>
//         </div>
//     )
// }