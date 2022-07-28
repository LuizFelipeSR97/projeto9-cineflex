import RenderizarCartaz from "./renderizarCartaz";

export default function Home () {
    return (
    <div className="pagHome">
        <div class="content">
            <div className="titulo">
                Selecione o filme
            </div>
            <div className="listaFilmes">
                <RenderizarCartaz />
            </div>
        </div>
    </div>
    )
}