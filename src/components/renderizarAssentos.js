import RenderizarAssentoIndividual from "./renderizarAssentoIndividual"

export default function RenderizarAssentos({assentosFilme,assentosEscolhidos,setAssentosEscolhidos, ids, setIds}){

    return (assentosFilme.map(assento =>
        <RenderizarAssentoIndividual assento={assento} assentosEscolhidos={assentosEscolhidos} setAssentosEscolhidos={setAssentosEscolhidos} ids={ids} setIds={setIds}/>
    ))
}