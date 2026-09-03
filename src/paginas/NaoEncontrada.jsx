import { Link } from 'react-router-dom'

function NaoEncontrada() {
  return (
    <article className="secao secao--404">
      <span className="rotulo rotulo--404">Erro 404</span>
      <h1>Página não encontrada</h1>
      <p className="chamada">
        O endereço acessado não existe neste site. Confira o link ou volte para uma das páginas do
        menu.
      </p>
      <Link to="/" className="botao-voltar">
        Voltar para o Início
      </Link>
    </article>
  )
}

export default NaoEncontrada