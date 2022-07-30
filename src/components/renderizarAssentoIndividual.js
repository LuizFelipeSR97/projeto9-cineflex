import { useState } from "react"

export default function RenderizarAssentoIndividual({assento,assentosEscolhidos,setAssentosEscolhidos}){

    const [selecionado, setSelecionado] = useState(false)

    function clicar(disponivel,selecionado,setSelecionado,assentosEscolhidos,setAssentosEscolhidos){

        if(!disponivel){
            alert("Esse assento não está disponível")
        } else {
            setSelecionado(!selecionado)
            if (!selecionado){
                setAssentosEscolhidos([...assentosEscolhidos,{id: assento.id, numero: assento.name}])
            } else {
                setAssentosEscolhidos(assentosEscolhidos.filter(escolha => ((escolha.id===assento.id) ? false : true)))
            }
        }  
    }

    return (
        <div className="assento" onClick={()=>clicar(assento.isAvailable,selecionado,setSelecionado,assentosEscolhidos,setAssentosEscolhidos)}>
            <div className={!assento.isAvailable ? "lugar indisponivel" : (selecionado ? "lugar selecionado" : "lugar disponivel")}>
                {assento.name}
            </div>
        </div>
    )
}





