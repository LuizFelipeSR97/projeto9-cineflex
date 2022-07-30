export default function RenderizarSucessoAssentos({assentos}){
    return (assentos.map(assento =>
        <h2>Assento {assento.numero}</h2>  
    ))
}