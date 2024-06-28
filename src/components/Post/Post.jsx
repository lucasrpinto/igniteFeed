import styles from './Post.module.css'
import perfil1 from '../../assets/perfil1.png'
import perfil2 from '../../assets/perfil2.png'
import { Comment, Comment2, Comment3 } from '../Comment/Comment'

export function Post() {
   return (
      <article className={styles.post}>
         <header>
            <div className={styles.author}>
               <img  src={perfil1} />
               <div className={styles.authorInfo}>
                  <strong>Jane Cooper</strong>
                  <span>Dev Front-End</span>
               </div>
            </div>

            <time title="2024-06-27 19:40:30" dateTime="2024-06-27 19:40:30">Publicado há 1h</time>
         </header>

         <div className={styles.content}>
            <p>Fala galeraa 👋</p>

            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

            <p>👉<a href="#">{'  '}jane.design/doctorcare</a></p>

            <p>
               <a href="#">#novoprojeto</a>{' '}
               <a href="#">#nlw</a>{' '}  
               <a href="#">#rocketseat</a>{' '}
            </p>
         </div>

         <form className={styles.commentForm}>
            <strong>Deixe seu comentário</strong>

            <textarea 
               placeholder='Deixe um comentário'
            />

            <footer>
               <button type='submit'>Publicar</button>
            </footer>
         </form>
      </article>
      
   )
}

export function Post2() {
   return (
      <article className={styles.post}>
         <header>
            <div className={styles.author}>
               <img  src={perfil2} />
               <div className={styles.authorInfo}>
                  <strong>Devon Lane</strong>
                  <span>Dev Front-End</span>
               </div>
            </div>

            <time title="2024-06-27 23:01:23" dateTime="22024-06-27 23:01:23">Publicado há 1h</time>
         </header>

         <div className={styles.content}>
            <p>Fala pessoal 👋</p>

            <p>Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 </p>

            <p>Acesse e deixe seu feedback 👉 <a href="#">devonlane.design</a></p>

            <p> 
               < a href="#">#uiux</a> 
               <a href="#">#userexperience</a> 
            </p>

         </div>

         <form className={styles.commentForm}>
            <strong>Deixe seu comentário</strong>

            <textarea 
               placeholder='Deixe um comentário'
            />

            <footer>
               <button type='submit'>Publicar</button>
            </footer>
         </form>

         <div className={styles.commentList}>
            <Comment />
            <Comment2 />
            <Comment3 />
         </div>
      </article>
      
   )
}
