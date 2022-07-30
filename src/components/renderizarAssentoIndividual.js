import { useState } from "react"

export default function RenderizarAssentoIndividual({assento,assentosEscolhidos}){

    const [selecionado, setSelecionado] = useState(false)

    function clicar(disponivel,selecionado,setSelecionado,assentosEscolhidos){

        if(!disponivel){
            alert("Esse assento não está disponível")
        } else {
            setSelecionado(!selecionado)
        }  
        
        if (!selecionado){
            assentosEscolhidos.push({id: assento.id, numero: assento.name})
        } else {
            assentosEscolhidos = (assentosEscolhidos.filter(escolha => (escolha.id===assento.id) ? false : true))
        }
        console.log(assentosEscolhidos)
        console.log("So nao atualiza a array. Quando refaz, volta ao que tinha antes")
    }

    return (
        <div className="assento" onClick={()=>clicar(assento.isAvailable,selecionado,setSelecionado,assentosEscolhidos)}>
            <div className={!assento.isAvailable ? "lugar indisponivel" : (selecionado ? "lugar selecionado" : "lugar disponivel")}>
                {assento.name}
            </div>
        </div>
    )
}





