import { useState } from 'react';

// components
import Footer from './components/Footer';
import Header from './components/Header';

// styles
import styles from './App.module.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

// interfaces
import { ITask } from './interfaces/Task';

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section>
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText="Criar tarefa" taskList={taskList} setTaskList={setTaskList} />
        </section>
        <section>
          <h2>Suas tarefas:</h2>
          <TaskList taskList={taskList} />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
