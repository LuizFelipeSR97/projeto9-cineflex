import { useState } from "react"

export default function RenderizarAssentoIndividual({assento}){

    const [selecionado, setSelecionado] = useState(false)


    return (
        <div className="assento" onClick={()=>clicar(assento.isAvailable,selecionado,setSelecionado)}>
            <div className={!assento.isAvailable ? "lugar indisponivel" : (selecionado ? "lugar selecionado" : "lugar disponivel")}>
                {assento.name}
            </div>
        </div>
    )
}

function clicar(disponivel,selecionado,setSelecionado){
    if(!disponivel){
        alert("Esse assento não está disponível")
    } else {
        alert("Falta guardar o id clicado em um array")
        setSelecionado(!selecionado)
    }  
}