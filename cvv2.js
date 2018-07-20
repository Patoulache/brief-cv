OBJECT = {
    cv : {
      formation : 
      "<h1>Lycée Jean-Baptiste Dumas, Alès</h1>\
      <p><strong>2015:</strong> Baccalauréat professionnel PCEPC (Mention très bien)</p>\
      <p><strong>2007:</strong> Baccalauréat Scientifique option Anglais Européen</p>\
      <h1>Université Paul Valéry, Montpellier</h1>\
      <p><strong>2009:</strong> Niveau 1 Licence LEA (Langues Étrangèeres Appliquées) Anglais-Chinois</p>",
      compétences : "<h1>Langues Étrangères</h1>\
      <ul><li>Anglais courant</li>\
      <li>5 années d'étude d'espagnol</li>\
      <li>Notions en mandarin</li></ul>\
      <h1>Langages de programmation</h1>\
      <ul><li>HTML en cours d'apprentissage</li>\
      <li>CSS en cours d'apprentissage</li>\
      <li>JavaScript en cours d'apprentissage</li></ul>",
      expériences : 
      "<h3>01/09/2014 - 19/11/2017</h3> <span>3 ans de dur labeur</span>\
      <p>Opérateur de fabrication dans une industrie pharmaceutique, PCAS Aramon, Aramon, Gard</p>\
      <h3>01/09/2012 - 31/08/2013</h3> <span>Les enfants c'est formateur</span>\
      <p>Assistant d'éducation au Collège Marceau Lapierre, Saint-Jean du Gard</p>\
      <h3>13/06/2011 - 20/07/2011</h3> <span>Improved my accent a lot</span>\
      <p>Stage assistant professeur de français à Bexley Grammar School, Londres</p>",
      hobbies : "<p>Sport (le beau jeu avant tout), humour potache, jeux vidéo, voyages, mangas</p>",
      portfolio : "<p>À venir...</p>",
    },
  
    init: function () {
      var bouton = document.querySelectorAll("#bouton");
    
      for (var i=0; i<bouton.length; i++) {
        bouton[i].addEventListener("click", OBJECT.ajouttexte);
        console.log(bouton[i]);
      }
  
    },
  
    ajouttexte: function(foo) {
      var para = foo.target.className;
      console.log("text");
      var descr = OBJECT.cv[para];
      document.getElementById("contenu").innerHTML = descr;
    }
  }
  
  window.onload = OBJECT.init;
  