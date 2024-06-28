import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react'
import perfilUser from '../../assets/perfilUser.png'
import { Avatar } from '../Avatar/Avatar';

export function Sidebar() {
   return (
      <aside className={styles.sidebar}>
         <img 
            className={styles.cover} 
            src="https://images.unsplash.com/photo-1623281185000-6940e5347d2e?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
         />

         <div className={styles.profile}>
            <Avatar 
               src={perfilUser}
            />

            <strong>Ícaro Montenegro</strong>
            <span>Web Developer</span>
         </div>

         <footer>
            <a href="$">
               <PencilLine size={20}/>
               Editar seu perfil
            </a>
         </footer>
      </aside>
   )
}