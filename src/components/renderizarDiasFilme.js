import RenderizarHorariosFilme from "./renderizarHorariosFilme"

export default function RenderizarDiasFilme({infoFilme}){

    
    return (infoFilme.map(filme => 
        <div className="datas">
                <h1>{filme.weekday} - {filme.date}</h1>
                <div className="teste">
                    <div className="horario">
                        <RenderizarHorariosFilme horariosFilme={filme.showtimes}/>
                    </div>
                </div>
            </div>
    ))
}