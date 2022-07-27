import RenderizarCartaz from "./renderizarCartaz"

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
                <RenderizarCartaz listaFilmes={listaFilmes}/>
            </div>
        </div>
    </div>
    )
}

const listaFilmes=[
	{
        id: 1,
        title: "Minions 2: A Origem de Gru",
        posterURL: "https://br.web.img2.acsta.net/c_310_420/pictures/20/02/03/15/22/4954456.jpg",
        overview: "Minions 2: A Origem de Gru é a continuação das aventuras dos Minions, sempre em busca de um líder tirânico. Desta vez, eles ajudam um Gru ainda criança, descobrindo como ser vilão.",
        releaseDate: "2022-06-30T00:00:00.000Z",
    },
    {
        id: 2,
        title: "Thor: Amor e Trovão",
        posterURL: "https://br.web.img2.acsta.net/c_310_420/pictures/22/05/24/16/24/4837466.jpg",
        overview: "Quarta aventura solo de Thor (Chris Hemsworth), personagem da Marvel.",
        releaseDate: "2022-07-07T00:00:00.000Z",
    },
    {
        id: 3,
        title: "Elvis",
        posterURL: "https://br.web.img3.acsta.net/c_310_420/pictures/22/05/18/09/51/0772429.jpg",
        overview: "O filme acompanhará décadas da vida de Elvis Presley (Austin Butler) e sua ascensão à fama, a partir do relacionamento do cantor com seu controlador empresário 'Colonel' Tom Parker (Tom Hanks).",
        releaseDate: "2022-07-14T00:00:00.000Z",
    },
     {
        id: 4,
        title: "Lightyear",
        posterURL: "https://br.web.img3.acsta.net/c_310_420/pictures/22/02/08/20/22/3222857.jpg",
        overview: "A origem do patrulheiro espacial de Toy Story, Buzz Lightyear. Buzz faz um teste de voo e acaba ficando abandonado em um planeta a milhões de anos-luz da terra. Agora ele precisa achar um jeito para voltar para casa enquanto luta contra a ameaça de Zurg.",
        releaseDate: "2022-06-16T00:00:00.000Z",
    },
    {
        id: 5,
        title: "O Telefone Preto",
        posterURL: "https://br.web.img3.acsta.net/c_310_420/pictures/22/06/23/21/10/1998178.jpg",
        overview: "Finney Shaw foi sequestrado por um sádico serial killer e está preso em um porão a prova de som, mas após um tempo ele começa a escutar as vozes das vítimas anteriores do assassino que o ajudam a sair do porão.",
        releaseDate: "2022-07-21T00:00:00.000Z",
    },
    {
        id: 6,
        title: "Pluft, o Fantasminha",
        posterURL: "https://br.web.img3.acsta.net/c_310_420/pictures/22/05/18/16/16/1006653.jpg",
        overview: "Maribel é sequestrada por um pirata que acha que ela sabe o paradeiro do tesouro perdido. Mas para isso, ela contará com três piratas atrapalhados para ir resgatá-la.",
        releaseDate: "2022-07-21T00:00:00.000Z",
    },
    {
        id: 7,
        title: "Jurassic World: Domínio",
        posterURL: "https://br.web.img2.acsta.net/c_310_420/pictures/22/04/15/22/05/1348210.jpg",
        overview: "Capítulo final da trilogia Jurassic World - O Mundo dos Dinossauros. Owen e Claire tentam manter a convivência entre dinossauros e humanos em harmonia.",
        releaseDate: "2022-06-02T00:00:00.000Z",
    },
    {
        id: 8,
        title: "Tudo em Todo Lugar ao Mesmo Tempo",
        posterURL: "https://br.web.img3.acsta.net/c_310_420/pictures/22/05/16/17/59/5165498.jpg",
        overview: "Uma mulher se envolve em uma aventura onde somente ela pode salvar o mundo.",
        releaseDate: "2022-06-23T00:00:00.000Z",
    }
]
