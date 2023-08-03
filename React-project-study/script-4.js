const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((numbers) => <li>{numbers}</li>);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ul>{listItems}</ul>);
