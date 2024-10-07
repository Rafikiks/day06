
function updateLicensePlates(agent, plates) {
  if (!agent.car) {
    console.error('The agent does not have a car property');
    return null;
  }
  agent.car.licensePlates = plates;
  return agent;
}

function showLicensePlates(agent) {
  if (!agent.car || !agent.car.licensePlates) {
    console.error('The agent does not have any license plates');
    return;
  }
  const ul = document.createElement('ul');
  agent.car.licensePlates.forEach(plate => {
    const li = document.createElement('li');
    li.textContent = plate;
    ul.appendChild(li);
  });
  document.body.appendChild(ul);
}

/*
  - `updateLicensePlates(agent, plates)` :
    - Vérifie si l'agent possède une propriété `car`.
    - Affiche une erreur si l'agent n'a pas de propriété `car`.
    - Ajoute les plaques d'immatriculation (`plates`) à la propriété `licensePlates` de la voiture.
    - Retourne l'objet agent mis à jour.
  
  - `showLicensePlates(agent)` :
    - Vérifie si l'agent possède une voiture avec des plaques d'immatriculation.
    - Affiche une erreur si les plaques d'immatriculation sont absentes.
    - Crée un élément `ul` pour lister les plaques d'immatriculation.
    - Parcourt la liste des plaques et crée un élément `li` pour chaque plaque.
    - Ajoute chaque `li` à l'élément `ul`.
    - Ajoute l'élément `ul` au `document.body` pour l'afficher sur la page.
*/
