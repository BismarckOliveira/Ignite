import RepositoryItens from "./respositoryItens";
import '../styles/repositories.scss';
import { useState , useEffect } from 'react';

interface Repository{
  name: string;
  html_url: string;
  description: string;
}



export const RepositoryList = () => {
  const [repositories,setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  },[])
   

   console.log(repositories);
  return (
   
    <section className='repository-list'>
      <h1>Lista de Repositorios</h1>
    
      <ul>
        {repositories.map( repository => {
          return (<RepositoryItens key={repository.name} Repository={repository} />)
        })}      
      </ul>

    </section>

    
  )
}