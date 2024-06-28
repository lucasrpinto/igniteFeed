 // Importação de Componente
import { Header } from './components/Header/Header'
import { Post, Post2 } from './components/Post/Post'
import { Comment } from './components/Comment/Comment'
import { Sidebar } from './components/Sidebar/Siderbar'

 // Importação de estilos
import  './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post />
          <Post2 />

          
      </main>
      </div>
      
    </div>
  )
}


