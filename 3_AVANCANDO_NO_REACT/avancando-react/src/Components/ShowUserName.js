const ShowUserName = (props) => {
  return (
    <div>
      <h2>O nome do usuário: {props.name}</h2>
    </div>
  );
};

export default ShowUserName;

/*

Props are properties passed from the parent element to its child element. In this example, we are passing the prop "name" from App.js to this component. Inside App.js component, we can pass props values directly as an html OR we can add the value as a const/let OR we can use states.

*/