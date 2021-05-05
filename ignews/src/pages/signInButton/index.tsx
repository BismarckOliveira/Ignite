import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

export function SignInButton() {
  const logged = true;



  return logged ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub color='#04D361'/>
      tiagoluchtenberg
      <FiX className={styles.closeIcon}/> 
    </button>
  ) : (
    <button type="button" className={styles.signInButton}>
      <FaGithub color='#EBA417' />
      Sign in with GitHub
    </button>
  )
}