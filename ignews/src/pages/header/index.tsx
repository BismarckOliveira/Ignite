import style from './styles.module.scss';


export default function Header(){
  return (
    <header className={style.headerContainer}>
      <div className={style.headerContent}>
        <img src="/images/logo.svg" alt="ig.news"/>
        <nav>
          <a>Home</a>
          <a>Post</a>
        </nav>
      </div>
    </header>
  )
}