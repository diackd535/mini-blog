import { useParams } from "react-router";
import { useState } from "react";

import ListeCommentaires from "../components/ListeCommentaires";
import CommentaireForm from "../components/CommentaireForm";

import {
  articlesDeTest,
  commentairesDeTest,
} from "../donnees-test";

export default function Article() {
  const { id } = useParams();

  const article = articlesDeTest.find(
    (p) => p.id === Number(id)
  );

  const [commentaires, setCommentaires] = useState(
    commentairesDeTest.filter(
      (c) => c.articleId === Number(id)
    )
  );

  if (!article) {
    return <h2>Article introuvable</h2>;
  }

  function ajouterCommentaire(nouveauCommentaire) {
    setCommentaires([
      ...commentaires,
      nouveauCommentaire,
    ]);
  }

  return (
    <div className="contenu">
      <h1>{article.title}</h1>

      <p>{article.body}</p>

      <h2>Commentaires</h2>

      <ListeCommentaires
        commentaires={commentaires}
      />

      <h2>Ajouter un commentaire</h2>

      <CommentaireForm
        onAjouter={ajouterCommentaire}
      />
    </div>
  );
}