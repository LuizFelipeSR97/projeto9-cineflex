export default function RenderizarSucessoAssentos({assentosEscolhidos}){
    return (assentosEscolhidos.map(assento =>
        <h2>Assento {assento.numero}</h2>  
    ))
}