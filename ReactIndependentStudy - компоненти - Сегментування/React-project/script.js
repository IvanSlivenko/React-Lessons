
const root = ReactDOM.createRoot(document.getElementById("root"));

function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
      <div className="Comment-date">{props.weight}</div>
      <div className="Comment-date">{props.longer}</div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kitty",
    avatarUrl: "http://placekitten.com/g/64/64",
  },
  weight: "weight 0.1 kg",
  longer: "longer 0.2 m"
};


root.render(
  <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author}
    weight={comment.weight}
    longer={comment.longer}
  />
);
