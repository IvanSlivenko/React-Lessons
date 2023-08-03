





class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <button  class ="buttonOun" onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON : Працює" : "OFF : Не працює"}
      </button>
    );
  }
}

function App() {
  return (
    <div>
      <h1> Обробники подій </h1>
      <div class="buttonBox">
        <h2> Спробуйте клікнути на кнопку </h2>
      
        <Toggle />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
