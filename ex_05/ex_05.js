const car = {
  brand: 'Aston Martin',
  model: 'DB5',
  color: 'grey',
  power: '300hp',
  logInfo() {
    console.log(`Car information: ${this.color}, ${this.model}, ${this.brand}`);
  }
};

const agent = {
  firstName: "James",
  lastName: "Bond",
  code: "007",
  age: 57,
  car,
  logInfo() {
    console.log(`Agent information: ${this.firstName} ${this.lastName}, ${this.code}, ${this.age}`);
    this.car.logInfo();
  }
};

/*
  - Objet `car` :
    - Contient les informations sur la voiture (marque, modèle, couleur, puissance).
    - Méthode `logInfo()` pour afficher les informations de la voiture dans la console.

  - Objet `agent` :
    - Contient les informations sur l'agent (prénom, nom, code, âge).
    - Propriété `car` qui est un lien vers l'objet `car`.
    - Méthode `logInfo()` pour afficher les informations de l'agent dans la console.
    - Appelle également la méthode `logInfo()` de la voiture pour afficher les informations de la voiture associée à l'agent.
*/

