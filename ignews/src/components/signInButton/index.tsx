import styles from './styles.module.scss'
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn , useSession, signOut} from 'next-auth/client';

export function SignInButton() {
  const [session]  = useSession();

  console.log(session);

  return session ? (
    <button onClick={() => signOut()}  type="button" className={styles.signInButton}>
      <FaGithub color='#04D361'/>
      {session.user.name}
      <FiX className={styles.closeIcon}/> 
    </button>
  ) : (
    <button onClick={() => signIn('github')} type="button" className={styles.signInButton}>
      <FaGithub color='#EBA417' />
      Sign in with GitHub
    </button>
  )
}