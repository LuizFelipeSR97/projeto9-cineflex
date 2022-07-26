import CartazFilme from "./cartazFilme"

export default function Home () {
    return (
    <div className="home">
        <div class="header">
            CINEFLEX
        </div>
        <div class="content">
            <div className="titulo">
                Selecione o filme
            </div>
            <div className="listaFilmes">
                <CartazFilme />
                <CartazFilme />
                <CartazFilme />
                <CartazFilme />
                <CartazFilme />
                <CartazFilme />
                <CartazFilme />
                <CartazFilme />
                <CartazFilme />
                <CartazFilme />
                <CartazFilme />
                <CartazFilme />
            </div>
        </div>
    </div>
    )
}