window.addEventListener('load', () => {
  function displayAgentInfo(agent) {
    const { firstName, lastName, code, age } = agent;
    const infoText = `My name is ${lastName}, ${firstName} ${lastName}! I'm the agent ${code} and I'm ${age} years old.`;
    document.querySelector('#container p').textContent = infoText;
  }

  const agent = {
    firstName: "James",
    lastName: "Bond",
    code: "007",
    age: 57
  };

  displayAgentInfo(agent);
});

// Ce code affiche les informations d'un agent sur la page.
