function addCar(agentString, car) {
  const agent = JSON.parse(agentString);
  agent.car = car;
  return agent;
}

/*
  - Convertit la chaîne JSON `agentString` en un objet JavaScript.
  - Ajoute l'objet `car` en tant que propriété `car` de l'agent.
  - Retourne l'objet agent mis à jour avec les informations de la voiture.
*/

