interface Props {
  btnText: string;
}

const TaskForm = ({btnText}: Props) => {
  return (
    <form>
      <fieldset>
        <label htmlFor="title">Título</label>
        <input type="text" name="title" placeholder="Título da tarefa" />
      </fieldset>
      <fieldset>
        <label htmlFor="difficulty">Dificuldade:</label>
        <input
          type="text"
          name="difficulty"
          placeholder="Dificuldade da tarefa"
        />
      </fieldset>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
