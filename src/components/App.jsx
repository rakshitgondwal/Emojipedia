import React from "react";
import Card from "./Card.jsx";
import emojipedia from "../emojipedia"

function createEmoji(emojiTerm){
  return <Card 
  key = {emojiTerm.id}
  img = {emojiTerm.emoji}
  title = {emojiTerm.name}
  content = {emojiTerm.meaning}
  />
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createEmoji)}
      </dl>
    </div>
  );
}

export default App;
