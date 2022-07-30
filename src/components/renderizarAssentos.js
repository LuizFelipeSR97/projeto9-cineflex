import RenderizarAssentoIndividual from "./renderizarAssentoIndividual"

export default function RenderizarAssentos({assentosFilme}){

    return (assentosFilme.map(assento =>
        <RenderizarAssentoIndividual assento={assento} />
    ))
}