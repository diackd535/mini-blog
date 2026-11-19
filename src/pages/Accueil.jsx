import { articlesDeTest } from "../donnees-test";
import { useState } from "react";
import ListeArticles from "../components/ListeArticles";
import BarreRecherche from "../components/BarreRecherche";

export default function Accueil() {
  const [favoris, setFavoris] = useState([]);
  const [recherche, setRecherche] = useState("");
  const [afficherFavoris, setAfficherFavoris] = useState(false);

  function basculerFavori(id) {
    if (favoris.includes(id)) {
      setFavoris(favoris.filter((x) => x !== id));
    } else {
      setFavoris([...favoris, id]);
    }
  }

  const visibles = articlesDeTest.filter((p) => {
  const correspondRecherche = p.title
    .toLowerCase()
    .includes(recherche.toLowerCase());

  const correspondFavoris =
    !afficherFavoris || favoris.includes(p.id);

  return correspondRecherche && correspondFavoris;
});


  return (
    <div>
      <BarreRecherche
        valeur={recherche}
        onChangement={setRecherche}
      />
      <button onClick={() => setAfficherFavoris(false)}>
  Tous les articles
</button>

<button onClick={() => setAfficherFavoris(true)}>
  Mes favoris
</button>

      <p>Favoris : {favoris.length}</p>

      <ListeArticles
        articles={visibles}
        favoris={favoris}
        onBasculerFavori={basculerFavori}
      />
    </div>
  );
}