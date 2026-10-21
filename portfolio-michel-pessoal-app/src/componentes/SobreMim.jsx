// Itens da lista "Como eu trabalho"
const jeitoDeTrabalhar = [
  { titulo: 'Código limpo', texto: 'Organização e legibilidade antes de tudo.' },
  { titulo: 'Foco no usuário', texto: 'Interfaces rápidas, intuitivas e responsivas.' },
  { titulo: 'Aprendizado contínuo', texto: 'Estudo diário e evolução a cada projeto.' },
]

function SobreMim() {
  return (
    <section className="sobre" id="sobre">
      <div className="sobre-esquerda">
        <p className="rotulo"><span className="linha"></span>Perfil profissional</p>
        <h2 className="titulo-sobre">
          Sobre mim<span className="ponto-marrom">.</span>
        </h2>
        <span className="paginacao">03 / 04</span>
      </div>

      <div className="sobre-direita">
        <p className="frase-sobre">
          Sou estudante de Informática no IFRJ, com foco em desenvolvimento web Front-End e na
          criação de interfaces modernas.
        </p>

        <div className="sobre-colunas">
          <div className="sobre-coluna">
            <p>
              Minha relação com tecnologia começou pela curiosidade: antes de escrever código, eu
              já montava e consertava computadores. Hoje essa base me dá uma visão completa, do
              hardware à interface que o usuário vê na tela.
            </p>
            <p>
              Tenho experiência técnica inicial na área de infraestrutura, como voluntário na
              manutenção de computadores e redes do meu instituto. Ali aprendi a investigar a
              causa dos problemas, e não só corrigir o sintoma, e levo esse raciocínio para o
              código.
            </p>
            <p>
              Atualmente, desenvolvo projetos reais de forma independente, praticando
              componentização, responsividade e boas práticas com React. Meu objetivo é
              transformar designs em código limpo, eficiente e responsivo.
            </p>
          </div>

          <div className="sobre-coluna">
            <h3 className="rotulo-stack">Stack tecnológica atual</h3>
            <p className="stack">HTML &amp; CSS • JavaScript • React • PostgreSQL • Git &amp; GitHub</p>
            <p>
              Tenho inglês avançado (C1), com Medalha de Prata na Olimpíada Brasileira de Língua
              Inglesa (OBLI), o que me permite estudar direto da documentação e me comunicar com
              equipes internacionais. Busco minha primeira oportunidade de estágio em TI para
              2026, para contribuir com soluções eficientes enquanto aprimoro minhas habilidades
              em equipe.
            </p>
          </div>
        </div>

        <div className="como-trabalho">
          <h3 className="rotulo-stack">Como eu trabalho</h3>
          <ul>
            {jeitoDeTrabalhar.map((item) => (
              <li key={item.titulo}>
                <strong>{item.titulo}</strong>
                <span>{item.texto}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default SobreMim
