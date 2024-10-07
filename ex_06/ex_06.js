// Exercice 6
function searchCars(agents, key, value) {
  return agents.filter(agent => agent.isMatching(key, value)).map(agent => agent.car);
}

agent.isMatching = function(key, value) {
  return this.car && this.car[key] === value;
};

// Exemple d'utilisation
document.addEventListener('load', () => {
  agent.logInfo();
});

/*
  - Fonction `searchCars(agents, key, value)` :
    - Parcourt une liste d'agents (`agents`).
    - Utilise la méthode `filter()` pour sélectionner les agents dont les informations de la voiture correspondent à la clé et à la valeur spécifiées (`key`, `value`).
    - Retourne une liste des objets `car` correspondant à la recherche.

  - Méthode `agent.isMatching(key, value)` :
    - Vérifie si l'agent possède une voiture.
    - Vérifie si la valeur de la propriété de la voiture spécifiée par `key` est égale à `value`.
    - Retourne `true` si la voiture correspond, sinon `false`.

  - Exemple d'utilisation :
    - Ajoute un gestionnaire d'événement qui appelle la méthode `agent.logInfo()` lorsque le document est chargé.
    - Permet d'afficher les informations de l'agent dans la console lors du chargement de la page.
*/

