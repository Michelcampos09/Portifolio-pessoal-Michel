// Ícones simples em SVG (traços finos, como no original)
const propsIcone = { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6 }

const IconeWhatsapp = () => (
  <svg {...propsIcone}>
    <path d="M3 21l1.6-4.8A8.5 8.5 0 1 1 8 19.6L3 21z" />
    <path d="M9 9c0 3 3 6 6 6l1.2-1.4-2-1-1 .6c-1-.5-1.8-1.3-2.3-2.3l.6-1-1-2L9 9z" />
  </svg>
)
const IconeInstagram = () => (
  <svg {...propsIcone}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
  </svg>
)
const IconeLinkedin = () => (
  <svg {...propsIcone}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M8 11v6M8 7.5v.5M12 17v-6M12 13c0-1.5 1-2 2-2s2 .8 2 2.2V17" />
  </svg>
)

// ATENÇÃO: o link do LinkedIn não aparece nas referências. Troque pelo seu perfil.
const contatos = [
  { rotulo: 'WhatsApp', valor: '+55 21 97313-7911', link: 'https://wa.me/5521973137911', Icone: IconeWhatsapp },
  { rotulo: 'Instagram', valor: '@michel_campos0', link: 'https://www.instagram.com/michel_campos0', Icone: IconeInstagram },
  { rotulo: 'LinkedIn', valor: 'Michel Serejo Campos', link: 'https://www.linkedin.com/', Icone: IconeLinkedin },
]

function Contato() {
  return (
    <section className="contato" id="contato">
      <div className="contato-texto">
        <p className="rotulo"><span className="linha"></span>Vamos trabalhar juntos?</p>
        <h2 className="titulo-contato">Tem um projeto em mente?</h2>
        <p className="descricao-contato">
          Estou disponível para oportunidades, colaborações e novos desafios.
        </p>
      </div>

      <ul className="lista-contatos">
        {contatos.map(({ rotulo, valor, link, Icone }) => (
          <li key={rotulo}>
            {/* rel="noopener noreferrer" protege a página ao abrir link externo */}
            <a href={link} target="_blank" rel="noopener noreferrer" className="item-contato">
              <span className="icone-contato"><Icone /></span>
              <span className="contato-info">
                <small>{rotulo}</small>
                <span>{valor}</span>
              </span>
              <span className="seta-contato" aria-hidden="true">→</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Contato
