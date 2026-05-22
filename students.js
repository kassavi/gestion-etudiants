const etudiants = [];

function afficherEtudiants() {
  const tbody = document.querySelector('#tableau tbody');
  tbody.innerHTML = '';
  etudiants.forEach(e => {
    tbody.innerHTML += `<tr><td>${e.nom}</td><td>${e.prenom}</td><td>${e.note}</td></tr>`;
  });
}
document.getElementById('form-etudiant').addEventListener('submit', function(e) {
  e.preventDefault();
  etudiants.push({
    nom: document.getElementById('nom').value,
    prenom: document.getElementById('prenom').value,
    note: document.getElementById('note').value
  });
  afficherEtudiants();
  this.reset();
});