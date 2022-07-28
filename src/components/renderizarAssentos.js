export default function RenderizarAssentos({assentosFilme}){


    return (assentosFilme.map(assento =>
        <div className="assento" onClick={()=>clicar(assento.isAvailable)}>
            <div className={assento.isAvailable ? "lugar disponivel" : "lugar indisponivel"}>
                {assento.name}
            </div>
        </div>
    ))
}

function clicar(disp){
    if (!disp) {
        alert("Esse assento não está disponível")
    }
    else if (disp){
        alert("Pode ser clicado. Agora falta mudar o className para 'lugar selecionado' e guardar o id clicado em um array")
    }
}