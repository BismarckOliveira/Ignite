interface RepositoryItensProps {
  Repository: {
    name: string;
    description: string;
    html_url: string;
  }
}



const RepositoryItens = (props: RepositoryItensProps) => {

  return (
    <li>
      <strong>{props.Repository.name}</strong>
      <p>{props.Repository.description}</p>

      <a href={props.Repository.html_url}>Acessar Repositorio</a>    
    </li>
  )
}

export default RepositoryItens;
