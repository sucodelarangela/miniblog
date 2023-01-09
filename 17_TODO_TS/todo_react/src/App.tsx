// components
import Footer from './components/Footer';
import Header from './components/Header';

// styles
import styles from './App.module.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section>
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText="Criar tarefa" />
        </section>
        <section>
          <h2>Suas tarefas:</h2>
          <TaskList />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
