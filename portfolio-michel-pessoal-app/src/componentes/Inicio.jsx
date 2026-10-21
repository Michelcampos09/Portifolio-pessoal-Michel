import fotoPerfil from '../assets/michel-perfil.jpg'

const tecnologias = ['Desenvolvedor de Software', 'JavaScript', 'HTML', 'CSS', 'React', 'PostgreSQL']

function Inicio() {
  return (
    <section className="inicio" id="inicio">
      <span className="circulo-decorativo"></span>

      <div className="inicio-foto">
        <div className="moldura">
          <div className="foto">
            <img
              src={fotoPerfil}
              alt="Foto de Michel Serejo Campos"
              className="foto-perfil-img"
            />
          </div>
        </div>
        <span className="faixa-marrom"></span>
        <p className="legenda-foto">Rio de Janeiro, BR — 2026</p>
      </div>

      <div className="inicio-texto">
        <p className="rotulo"><span className="linha"></span>Web Developer &amp; Estudante de Software</p>
        <h1 className="titulo-inicio">
          Olá, sou<br />Michel Serejo<br />Campos<span className="ponto-marrom">.</span>
        </h1>
        <p className="descricao-inicio">
          Transformo ideias em experiências web que funcionam de verdade. Código limpo, design
          cuidadoso e foco total em entregar o que o seu negócio precisa para crescer.
        </p>
        <p className="tecnologias">
          {tecnologias.map((tec) => (
            <span key={tec}>{tec}</span>
          ))}
        </p>
        {/* Troque o href pelo caminho do seu currículo (ex.: /curriculo.pdf na pasta public) */}
        <a href="#contato" className="link-curriculo">
          Ler currículo <span aria-hidden="true">→</span>
        </a>
      </div>

      <a href="#projetos" className="role-explorar">Role para explorar <span aria-hidden="true">↓</span></a>
    </section>
  )
}

export default Inicio
