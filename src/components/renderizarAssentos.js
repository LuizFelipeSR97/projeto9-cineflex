import RenderizarAssentoIndividual from "./renderizarAssentoIndividual"

export default function RenderizarAssentos({assentosFilme,assentosEscolhidos}){

    return (assentosFilme.map(assento =>
        <RenderizarAssentoIndividual assento={assento} assentosEscolhidos={assentosEscolhidos}/>
    ))
}