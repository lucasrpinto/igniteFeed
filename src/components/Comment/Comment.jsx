import styles from './Comment.module.css'
import perfilUser from '../../assets/perfilUser.png'
import comment2 from '../../assets/comment2.png'
import comment3 from '../../assets/comment3.png'
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar'

export function Comment() {
   return (
      <div className={styles.comment}> 
         <Avatar hasBorder={false} src={perfilUser}  />

         <div className={styles.commentBox}>
            <div className={styles.commentContent}>
               <header>
                  <div className={styles.authorAndTime}>
                     <strong>Ícaro Montenegro<span className={styles.currentUserTag}>(Você)</span></strong>
                     <time title="28 de Junho às 07:36h" dateTime="2024-06-28 07:36:34">Publicado há 2h</time>
                  </div>

                  <button title="Deletar comentário">
                     <Trash size={24}/>
                  </button>
               </header>

               <p>Muito bom Devon, parabéns!! 👏👏</p>
            </div>

            <footer>
               <button>
                  <ThumbsUp />
                  Aplaudir <span>3</span>
               </button>
            </footer>
         </div>
      </div>
   )
}

export function Comment2() {
   return (
      <div className={styles.comment}> 
         <img src={comment2}  />

         <div className={styles.commentBox}>
            <div className={styles.commentContent}>
               <header>
                  <div className={styles.authorAndTime}>
                     <strong>Jenny Wilson</strong>
                     <time title="28 de Junho às 09:04h" dateTime="2024-06-28 09:04:58">Publicado há 1h</time>
                  </div>

                  <button title="Deletar comentário">
                     <Trash size={24}/>
                  </button>
               </header>

               <p>Adorei seu novo portifa Devon!</p>
            </div>

            <footer>
               <button>
                  <ThumbsUp />
                  Aplaudir <span>5</span>
               </button>
            </footer>
         </div>
      </div>
   )
}

export function Comment3() {
   return (
      <div className={styles.comment}> 
         <img src={comment3}  />

         <div className={styles.commentBox}>
            <div className={styles.commentContent}>
               <header>
                  <div className={styles.authorAndTime}>
                     <strong>Bessie Cooper</strong>
                     <time title="28 de Junho às 10:06h" dateTime="2024-06-28 10:06:14">Publicado há 30 min.</time>
                  </div>

                  <button title="Deletar comentário">
                     <Trash size={24}/>
                  </button>
               </header>

               <p>💜💜</p>
            </div>

            <footer>
               <button>
                  <ThumbsUp />
                  Aplaudir <span>2</span>
               </button>
            </footer>
         </div>
      </div>
   )
}