import { useState } from 'react';

function Header ({ title }) {
  return (
    <div>
      <h1>Develop. Preview. Ship that shit. 🚀</h1>
      <h2>{ title ? title : 'Default Title' }</h2>
    </div>
    )
}


export default function HomePage() {

  const names = ['Brandon', 'Atlas', 'Vanessa', 'Julie', 'Maddox', 'Piper'];

  const [likes, setLikes] = useState(0);

  function alertHello () {
    setLikes(likes + 1);
  }


  return (
    <div>
      <Header title="Hello World 💙" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button onClick={alertHello}>Likes ({likes})</button>
    </div>
  )
}
