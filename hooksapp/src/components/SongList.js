import React, { useState, useEffect } from "react";
import uuid from "uuid/v1";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "Snuff", id: 1 },
    { title: "Moon over Bourbon street", id: 2 },
    { title: "I write sins not tragedies", id: 3 }
  ]);

  const [age, setAge] = useState(20);

  const addSong = title => {
    setSongs([...songs, { title, id: uuid() }]);
  };

  useEffect(() => {
    console.log("useEffect", songs);
  }, [songs]);

  useEffect(() => {
    console.log("useEffect", age);
  }, [age]);
  return (
    <div className="song-list">
      <ul>
        {songs.map(s => (
          <li key={s.id}>{s.title}</li>
        ))}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>
        Age: {age} - Click to add 1
      </button>
    </div>
  );
};

export default SongList;
