import imagemGerenciador from '../assets/gerenciador-tarefas.png'
import imagemRestaurante from '../assets/restaurante-saint-michel.jpg'

// Apenas dois projetos, cada um em um quadrado pequeno
// "imagem" e "externo" são opcionais: sem imagem aparece o número grande
const projetos = [
  {
    numero: '01',
    categoria: 'Aplicação React',
    titulo: 'Gerenciador de Tarefas',
    link: 'https://lista-de-tarefas-six.vercel.app/',
    imagem: imagemGerenciador,
    externo: true,
  },
  {
    numero: '02',
    categoria: 'Desenvolvimento HTML',
    titulo: 'Restaurante Saint-Michel',
    link: '#projetos', // troque pelo link do site quando estiver publicado
    imagem: imagemRestaurante,
  },
]

function Projetos() {
  return (
    <section className="projetos" id="projetos">
      <div className="projetos-topo">
        <div>
          <p className="rotulo"><span className="linha"></span>Trabalhos selecionados</p>
          <h2 className="titulo-projetos">Projetos</h2>
        </div>
        <p className="descricao-projetos">
          Uma seleção de interfaces e aplicações desenvolvidas com estratégia, atenção aos
          detalhes e código de qualidade.
        </p>
      </div>

      <div className="lista-projetos">
        {projetos.map((projeto) => (
          <article key={projeto.numero} className="cartao-projeto">
            <div className="cartao-topo">
              <span>{projeto.numero}</span>
              <span>{projeto.categoria}</span>
            </div>

            {projeto.imagem ? (
              <img
                className="cartao-imagem"
                src={projeto.imagem}
                alt={'Imagem do projeto ' + projeto.titulo}
              />
            ) : (
              <span className="cartao-numero">{projeto.numero}</span>
            )}

            <div className="cartao-base">
              <h3>{projeto.titulo}</h3>
              {/* Links externos abrem em nova aba, com rel para proteger a página */}
              <a
                href={projeto.link}
                className="botao-seta"
                aria-label={'Abrir projeto ' + projeto.titulo}
                target={projeto.externo ? '_blank' : undefined}
                rel={projeto.externo ? 'noopener noreferrer' : undefined}
              >
                ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projetos
