const Container = ({ children, myValue }) => {
  return (
    <div>
      <h2>Este é o título do container</h2>
      {children}
      <p>O valor é {myValue}</p>
    </div>
  );
};

export default Container;

/*

The 'children' prop allows this component to act kinda as an html tag, that is you can embrace JSX with its opening and closing tags. For instance:
In the App.js, we can use this component as:

<Container>
  <!-- Some JSX here -->
</Container>

*/