import style from './styles.module.scss';
import {SignInButton} from '../signInButton'


export default function Header(){
  return (
    <header className={style.headerContainer}>
      <div className={style.headerContent}>
        <img src="/images/logo.svg" alt="ig.news"/>
        <nav>
          <a className={style.active}>Home</a>
          <a>Post</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}