const root = ReactDOM.createRoot(document.getElementById("root"));


// render Level Oun
// function Welcome(props) {
//   return <h1>Привіт, {(props.name)}</h1>;
// }

// const element = <Welcome name="Ivan Slivenko" />;
// root.render(element);



// render Level Two
function Welcome(props) {
  return (
    <h1>
      Hello, {props.name} {props.LastName} {props.age}
    </h1>
  );
}


function App() {
  return (
    <div>
      <Welcome name="Ivan" LastName="Slivenko" age="41" />
      <Welcome name="Nataliya" LastName="Slivenko" age="38" />
      <Welcome name="Volodumur" LastName="Slivenko" age="16" />
      <Welcome name="Mariya" LastName="Slivenko" age="11" />
      <Welcome name="Anna" LastName="Slivenko" age="6" />
      
    </div>
  );
}

root.render(<App />);
