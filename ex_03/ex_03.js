function addCarToAgent(agent, brand, model, color, power) {
  if (!brand || !model || !color || !power) {
    console.error('Missing or incorrect car information');
    return null;
  }
  agent.car = {
    brand,
    model,
    color,
    power
  };
  return agent;
}

/*
  - Vérifie si toutes les informations de la voiture sont fournies.
  - Affiche une erreur si des informations sont manquantes.
  - Retourne null si des informations sont incorrectes ou manquantes.
  - Ajoute les informations de la voiture à l'objet agent.
  - Marque de la voiture (brand), modèle (model), couleur (color), et puissance (power).
  - Retourne l'objet agent mis à jour avec les informations de la voiture.
*/

