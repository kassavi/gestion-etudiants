const etudiants = [];

function afficherEtudiants() {
  const tbody = document.querySelector('#tableau tbody');
  tbody.innerHTML = '';
  etudiants.forEach(e => {
    tbody.innerHTML += `<tr><td>${e.nom}</td><td>${e.prenom}</td><td>${e.note}</td></tr>`;
  });
}