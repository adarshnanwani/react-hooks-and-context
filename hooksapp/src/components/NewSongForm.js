import React, { useState } from "react";

const NewSongForm = props => {
  const [title, setTitle] = useState("");
  const setSongHandler = event => {
    const value = event.target.value;
    setTitle(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addSong(title);
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Song name:</label>
      <input type="text" value={title} onChange={setSongHandler} required />
      <input type="submit" value="Add Song" />
    </form>
  );
};

export default NewSongForm;
