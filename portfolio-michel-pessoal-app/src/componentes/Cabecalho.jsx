import { useState } from 'react'

const links = [
  { texto: 'Projetos', destino: '#projetos' },
  { texto: 'Contato', destino: '#contato' },
  { texto: 'Sobre mim', destino: '#sobre' },
]

function Cabecalho() {
  // Controla se o menu está aberto no celular
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header className="cabecalho">
      <a href="#inicio" className="logo">MSC</a>

      <nav className={menuAberto ? 'menu menu-aberto' : 'menu'} aria-label="Principal">
        {links.map((link) => (
          <a key={link.destino} href={link.destino} onClick={() => setMenuAberto(false)}>
            {link.texto}
          </a>
        ))}
      </nav>

      <span className="selo-disponivel">
        <span className="selo-ponto"></span>
        Disponível para trabalho
      </span>

      <button
        className="botao-menu"
        aria-label="Abrir menu"
        aria-expanded={menuAberto}
        onClick={() => setMenuAberto(!menuAberto)}
      >
        <span></span>
        <span></span>
      </button>
    </header>
  )
}

export default Cabecalho
