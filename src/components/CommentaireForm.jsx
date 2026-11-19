import { useState } from "react";

export default function CommentaireForm({ onAjouter }) {
  const [nom, setNom] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (nom.trim() === "" || message.trim() === "") {
      alert("Veuillez remplir tous les champs");
      return;
    }

    onAjouter({
      id: Date.now(),
      name: nom,
      body: message,
    });

    setNom("");
    setMessage("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Votre nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />

      <textarea
        placeholder="Votre commentaire"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button type="submit">Envoyer</button>
    </form>
  );
}