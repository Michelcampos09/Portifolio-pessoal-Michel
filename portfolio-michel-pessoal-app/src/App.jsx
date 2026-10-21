import Cabecalho from './componentes/Cabecalho.jsx'
import Inicio from './componentes/Inicio.jsx'
import Projetos from './componentes/Projetos.jsx'
import SobreMim from './componentes/SobreMim.jsx'
import Contato from './componentes/Contato.jsx'
import Rodape from './componentes/Rodape.jsx'

function App() {
  return (
    <>
      <Cabecalho />
      <main>
        <Inicio />
        <Projetos />
        <SobreMim />
        <Contato />
      </main>
      <Rodape />
    </>
  )
}

export default App
