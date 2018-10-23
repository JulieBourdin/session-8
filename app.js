var app = new Vue({
  el: '#app',
  data: {
    firstName: "Julie",
    lastName: "Bourdin",
    description: "Je suis étudiante en journalisme et en relations internationales à Sciences Po.",
    photo: "/Users/juliebourdin/Desktop/Julie_Bourdin.jpg",
    twitter: "julie__bourdin",
    github: "julesbonnard",
    mail: "julie.bourdin@sciencespo.fr",
    experiences: [{
      dateBegin: "Juin 2018",
      dateEnd: false,
      name: "Cape Talk Radio",
      title: "Stagiaire",
      description: "Assistante du producteur sur l'émission de l'après-midi avec le présentateur John Maytham"
    }, {
      dateBegin: "Juillet 2018",
      dateEnd: false,
      name: "Le Monde.fr",
      title: "Stagiaire",
      description: "rédaction d'articles"
    }, {
      dateBegin: "Août 2018",
      dateEnd: false,
      name: "Géopolis",
      title: "Stagiaire et correspondant de presse",
      description: "rédaction d'articles"
    }],
    formations: [{
      dateBegin: "2017",
      dateEnd: "En cours",
      name: "Master Journalisme et Relations Internationales",
      university: "Sciences Po Paris"
    }, {
      dateBegin: "20chais plus quoi",
      dateEnd: "2017",
      name: "Bachelor Sciences Politiques",
      university: "Sciences Po Paris"
    }],
    languages: ["Anglais"],
    skills: ["Vidéo", "Radio", "eating", "questioning life", "hugs"]
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName
    }
  }
})