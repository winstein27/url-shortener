import React, { useState } from "react";

import styles from "./ShortenForm.module.scss";

const ShortenForm = () => {
  const [url, setUrl] = useState("");

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form action="POST" onSubmit={formSubmitHandler} className={styles.form}>
      <input
        type="text"
        placeholder="Shorten a link here..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button type="submit">Shorten it!</button>
    </form>
  );
};

export default ShortenForm;
