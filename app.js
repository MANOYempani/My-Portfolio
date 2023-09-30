(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();



const phrases = [
    "Développeur Web et application mobile.",
    "Je suis également maintenancier et ux Designer. J'aime bien la technologie informatique.",
    
  ]; // Les phrases à animer
  const vitesseEcriture = 50; // Vitesse d'écriture en millisecondes
  const vitesseEffacement = 25; // Vitesse d'effacement en millisecondes
  const tempsAffichage = 2000; // Temps d'affichage de chaque phrase en millisecondes
  
  const texteElement1 = document.getElementById("texte1");
  const texteElement2 = document.getElementById("texte2");
  let index = 0;
  let currentPhraseIndex = 0;
  
  function afficherPhraseSuivante() {
    texteElement2.innerHTML = ""; // Effacer la phrase précédente
  
    if (currentPhraseIndex >= phrases.length) {
      currentPhraseIndex = 0; // Revenir à la première phrase si toutes les phrases ont été affichées
    }
  
    const phraseCourante = phrases[currentPhraseIndex];
    currentPhraseIndex++;
  
    index = 0;
    ecrire(phraseCourante);
  }
  
  function ecrire(phrase) {
    texteElement1.innerHTML = phrase.substring(0, index);
    index++;
  
    if (index <= phrase.length) {
      setTimeout(() => {
        ecrire(phrase);
      }, vitesseEcriture);
    } else {
      setTimeout(() => {
        effacer(phrase);
      }, tempsAffichage);
    }
  }
  
  function effacer(phrase) {
    const texteActuel = texteElement1.innerHTML;
  
    if (texteActuel.length > 0) {
      texteElement1.innerHTML = texteActuel.substring(0, texteActuel.length - 1);
      setTimeout(() => {
        effacer(phrase);
      }, vitesseEffacement);
    } else {
      setTimeout(() => {
        afficherPhraseSuivante();
      }, vitesseEffacement);
    }
  }
  
  afficherPhraseSuivante();